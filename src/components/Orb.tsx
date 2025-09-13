import React, { useRef, useEffect, useState } from 'react';
import * as OGL from 'ogl';

interface OrbProps {
  hoverIntensity?: number;
  rotateOnHover?: boolean;
  hue?: number;
  forceHoverState?: boolean;
}

const Orb: React.FC<OrbProps> = ({
  hoverIntensity = 0.5,
  rotateOnHover = true,
  hue = 0,
  forceHoverState = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<OGL.Renderer | null>(null);
  const sceneRef = useRef<OGL.Transform | null>(null);
  const cameraRef = useRef<OGL.Camera | null>(null);
  const programRef = useRef<OGL.Program | null>(null);
  const geometryRef = useRef<OGL.Sphere | null>(null);
  const meshRef = useRef<OGL.Mesh | null>(null);
  const animationRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    
    // Ensure canvas has dimensions
    if (canvas.clientWidth === 0 || canvas.clientHeight === 0) {
      const timeoutId = setTimeout(() => {
        if (canvas.clientWidth > 0 && canvas.clientHeight > 0) {
          initializeWebGL();
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
    
    initializeWebGL();
    
    function initializeWebGL() {
      const gl = new OGL.Renderer({ canvas, alpha: true });
      glRef.current = gl;

      const scene = new OGL.Transform();
      sceneRef.current = scene;

      const camera = new OGL.Camera(gl, { fov: 45 });
      camera.position.set(0, 0, 3);
      cameraRef.current = camera;

      const vertex = /* glsl */ `
        attribute vec3 position;
        attribute vec3 normal;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform mat3 normalMatrix;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      const fragment = /* glsl */ `
        precision highp float;
        
        uniform float time;
        uniform float hoverIntensity;
        uniform float hue;
        uniform bool isHovered;
        
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        vec3 hsv2rgb(vec3 c) {
          vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
          vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
          return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }
        
        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(-vPosition);
          
          float fresnel = 1.0 - dot(normal, viewDir);
          fresnel = pow(fresnel, 2.0);
          
          float wave = sin(vPosition.x * 3.0 + time) * 0.1 + 
                      sin(vPosition.y * 3.0 + time * 0.7) * 0.1 + 
                      sin(vPosition.z * 3.0 + time * 0.5) * 0.1;
          
          float intensity = fresnel + wave * 0.3;
          if (isHovered) {
            intensity += hoverIntensity;
          }
          
          vec3 color = hsv2rgb(vec3(hue / 360.0, 0.8, intensity));
          
          gl_FragColor = vec4(color, 0.8);
        }
      `;

      const program = new OGL.Program(gl.gl, {
        vertex,
        fragment,
        uniforms: {
          time: { value: 0 },
          hoverIntensity: { value: hoverIntensity },
          hue: { value: hue },
          isHovered: { value: false }
        }
      });
      programRef.current = program;

      const geometry = new OGL.Sphere(gl.gl, {
        radius: 1,
        widthSegments: 64,
        heightSegments: 64
      });
      geometryRef.current = geometry;

      const mesh = new OGL.Mesh(gl.gl, { geometry, program });
      mesh.setParent(scene);
      meshRef.current = mesh;

      const resize = () => {
        if (!canvas || !gl || !camera) return;
        gl.setSize(canvas.clientWidth, canvas.clientHeight);
        camera.perspective({ aspect: canvas.clientWidth / canvas.clientHeight });
      };

      const animate = () => {
        if (!program || !mesh) return;
        
        program.uniforms.time.value = performance.now() * 0.001;
        program.uniforms.hoverIntensity.value = hoverIntensity;
        program.uniforms.hue.value = hue;
        program.uniforms.isHovered.value = isHovered || forceHoverState;
        
        if (rotateOnHover && (isHovered || forceHoverState)) {
          mesh.rotation.y += 0.01;
          mesh.rotation.x += 0.005;
        } else {
          mesh.rotation.y += 0.005;
          mesh.rotation.x += 0.002;
        }
        
        gl.render({ scene, camera });
        animationRef.current = requestAnimationFrame(animate);
      };

      const handleResize = () => {
        resize();
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!mesh) return;
        
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        mesh.rotation.y = (x - 0.5) * 0.5;
        mesh.rotation.x = (y - 0.5) * 0.5;
      };

      const handleMouseEnter = () => {
        setIsHovered(true);
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      window.addEventListener('resize', handleResize);
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mouseleave', handleMouseLeave);

      resize();
      animate();
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.removeEventListener('mousemove', () => {});
        canvas.removeEventListener('mouseenter', () => {});
        canvas.removeEventListener('mouseleave', () => {});
      }
      
      window.removeEventListener('resize', () => {});
      
      const gl = glRef.current;
      const program = programRef.current;
      const geometry = geometryRef.current;
      
      if (gl && program && geometry) {
        gl.gl.deleteProgram(program.program);
        gl.gl.deleteBuffer(geometry.buffer);
      }
    };
  }, [hoverIntensity, rotateOnHover, hue, forceHoverState, isHovered]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block'
      }}
    />
  );
};

export default Orb;