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
    id: "accounting-services",
    icon: <Calculator className="w-8 h-8" />,
    title: "Accounting Services",
    description: "Digital solutions for accounting and financial management with automated workflows and compliance.",
    category: "Finance",
    features: ["Automated bookkeeping", "Tax compliance", "Financial reporting", "Invoice management"],
    pricing: {
      starting: "800",
      currency: "USD"
    },
    deliveryTime: "3-4 weeks",
    technologies: ["React", "Express", "MongoDB", "Stripe API"]
  },
  {
    id: "medical-services",
    icon: <Heart className="w-8 h-8" />,
    title: "Medical Services",
    description: "Comprehensive software solutions for healthcare providers and medical practices with HIPAA compliance.",
    category: "Healthcare",
    features: ["Patient management", "HIPAA compliance", "Appointment scheduling", "Medical records"],
    pricing: {
      starting: "1200",
      currency: "USD"
    },
    deliveryTime: "4-6 weeks",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
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
    id: "inventory-management",
    icon: <Package className="w-8 h-8" />,
    title: "Inventory Management",
    description: "Streamline your inventory processes with intelligent tracking, automated reordering, and analytics.",
    category: "Operations",
    features: ["Real-time tracking", "Automated alerts", "Analytics dashboard", "Barcode scanning"],
    pricing: {
      starting: "700",
      currency: "USD"
    },
    deliveryTime: "3-5 weeks",
    technologies: ["React", "Node.js", "MongoDB", "IoT Integration"]
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
