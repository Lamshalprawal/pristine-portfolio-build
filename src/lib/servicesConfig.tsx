import { 
  FileText, 
  Calculator, 
  Heart, 
  Code, 
  Package, 
  Smartphone, 
  Network, 
  Lightbulb,
  Palette
} from "lucide-react";

// Service interface for type safety
export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    starting: string;
    currency: string;
  };
  deliveryTime: string;
  technologies: string[];
}

// Mock API response for services
export const mockServicesResponse: Service[] = [
  {
    id: "report-generation",
    icon: <FileText className="w-8 h-8" />,
    title: "Report Generation",
    description: "Custom tailored report generation solutions for businesses of all sizes with real-time analytics and insights.",
    category: "Analytics",
    features: ["Real-time data processing", "Custom templates", "Automated scheduling", "Multi-format export"],
    pricing: {
      starting: "500",
      currency: "USD"
    },
    deliveryTime: "2-3 weeks",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"]
  },
  {
    id: "accounting-portfolio",
    icon: <Calculator className="w-8 h-8" />,
    title: "Accounting Portfolio Services",
    description: "Comprehensive portfolio management solutions for accounting firms with client portfolio tracking, performance analytics, and automated reporting.",
    category: "Portfolio Management",
    features: ["Client portfolio tracking", "Performance analytics", "Automated reporting", "Risk assessment", "Compliance monitoring"],
    pricing: {
      starting: "1200",
      currency: "USD"
    },
    deliveryTime: "4-6 weeks",
    technologies: ["React", "Express", "PostgreSQL", "Chart.js", "Risk APIs"]
  },
  {
    id: "medical-portfolio",
    icon: <Heart className="w-8 h-8" />,
    title: "HIPAA Consulting Services",
    description: "MedTech HIPAA Consulting Services",
    category: "Healthcare Portfolio",
    features: ["HIPAA compliance", "Security and Privacy", "Compliance Audit", "Risk Assessment", "Training and Awareness"],
    pricing: {
      starting: "1500",
      currency: "USD"
    },
    deliveryTime: "5-7 weeks",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Medical APIs"]
  },
  {
    id: "custom-software",
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software & Websites",
    description: "Bespoke software development and web applications tailored to meet your specific business needs.",
    category: "Development",
    features: ["Custom functionality", "Scalable architecture", "API integration", "Maintenance support"],
    pricing: {
      starting: "1500",
      currency: "USD"
    },
    deliveryTime: "6-8 weeks",
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL"]
  },
  {
    id: "store-digitization",
    icon: <Package className="w-8 h-8" />,
    title: "Store Digitization",
    description: "Transform your physical store into a digital-first experience with smart inventory systems, digital payments, and customer analytics.",
    category: "Digital Transformation",
    features: ["Digital inventory systems", "Smart checkout solutions", "Customer analytics", "Mobile app integration", "Real-time reporting"],
    pricing: {
      starting: "1000",
      currency: "USD"
    },
    deliveryTime: "4-6 weeks",
    technologies: ["React", "Node.js", "MongoDB", "IoT Integration", "Payment APIs"]
  },
  {
    id: "flutter-development",
    icon: <Smartphone className="w-8 h-8" />,
    title: "Flutter Development",
    description: "Cross-platform mobile applications using Flutter framework for iOS and Android platforms.",
    category: "Mobile",
    features: ["Cross-platform", "Native performance", "Custom UI", "App store deployment"],
    pricing: {
      starting: "1000",
      currency: "USD"
    },
    deliveryTime: "4-6 weeks",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs"]
  },
  {
    id: "software-ecosystems",
    icon: <Network className="w-8 h-8" />,
    title: "Software Ecosystems",
    description: "Integrated software ecosystems for seamless business operations and digital transformation.",
    category: "Integration",
    features: ["System integration", "Data synchronization", "Workflow automation", "Scalable architecture"],
    pricing: {
      starting: "2000",
      currency: "USD"
    },
    deliveryTime: "8-12 weeks",
    technologies: ["Microservices", "Docker", "Kubernetes", "AWS"]
  },
  {
    id: "software-consulting",
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Software Consulting",
    description: "Expert advice on software strategies, architecture decisions, and implementation best practices.",
    category: "Consulting",
    features: ["Technical assessment", "Architecture design", "Code review", "Best practices"],
    pricing: {
      starting: "150",
      currency: "USD"
    },
    deliveryTime: "1-2 weeks",
    technologies: ["Various", "Architecture", "DevOps", "Security"]
  },
  {
    id: "ui-ux-design",
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Expert design services using Figma and modern tools to create intuitive user experiences.",
    category: "Design",
    features: ["User research", "Wireframing", "Prototyping", "Design systems"],
    pricing: {
      starting: "600",
      currency: "USD"
    },
    deliveryTime: "2-4 weeks",
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle"]
  }
];

// Mock API function to simulate data fetching
export const fetchServices = async (): Promise<Service[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockServicesResponse;
};

// Mock API function to fetch service by ID
export const fetchServiceById = async (id: string): Promise<Service | null> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockServicesResponse.find(service => service.id === id) || null;
};

// Mock API function to fetch services by category
export const fetchServicesByCategory = async (category: string): Promise<Service[]> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  return mockServicesResponse.filter(service => 
    service.category.toLowerCase() === category.toLowerCase()
  );
};
