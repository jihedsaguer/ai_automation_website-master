import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Bot, Shield, Server, Search, Brain } from 'lucide-react';
import { Button } from '../components';

const serviceDetails = {
    'ai-automation': {
        icon: <Bot className="w-12 h-12" />,
        title: "AI Automation",
        description: "Transform your business processes with cutting-edge AI automation solutions.",
        longDescription: "Our AI automation services leverage state-of-the-art artificial intelligence and machine learning technologies to streamline your business operations. We create intelligent systems that learn and adapt to your specific needs.",
        benefits: [
            "Reduced operational costs by up to 40%",
            "Increased productivity and efficiency",
            "24/7 automated operations",
            "Scalable AI solutions"
        ],
        features: [
            "Custom AI model development",
            "Process automation workflows",
            "Intelligent document processing",
            "Natural Language Processing",
            "Machine Learning integration",
            "Automated decision making"
        ],
        technologies: ["TensorFlow", "PyTorch", "OpenAI", "AWS AI Services", "Google Cloud AI"]
    },
    'security': {
        icon: <Shield className="w-12 h-12" />,
        title: "Security",
        description: "Enterprise-grade security solutions for your digital infrastructure.",
        longDescription: "Protect your business with our comprehensive security services. We provide end-to-end protection against cyber threats while ensuring compliance with industry standards.",
        benefits: [
            "Enhanced data protection",
            "Reduced security risks",
            "Regulatory compliance",
            "24/7 monitoring"
        ],
        features: [
            "Penetration testing",
            "Security audits",
            "Threat detection",
            "Incident response",
            "Access management",
            "Security training"
        ],
        technologies: ["Fortinet", "Cisco Security", "Crowdstrike", "Okta", "Palo Alto Networks"]
    },
    'infrastructure': {
        icon: <Server className="w-12 h-12" />,
        title: "Infrastructure",
        description: "Scalable and reliable infrastructure solutions for modern businesses.",
        longDescription: "Build and maintain robust infrastructure that grows with your business. Our solutions are designed for high availability, scalability, and performance.",
        benefits: [
            "99.99% uptime guarantee",
            "Scalable architecture",
            "Cost optimization",
            "High performance"
        ],
        features: [
            "Cloud architecture",
            "Hybrid solutions",
            "Infrastructure as Code",
            "Container orchestration",
            "Network optimization",
            "Disaster recovery"
        ],
        technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"]
    },
    'audit': {
        icon: <Search className="w-12 h-12" />,
        title: "Audit",
        description: "Comprehensive system audits to optimize your operations.",
        longDescription: "Our audit services provide deep insights into your systems and processes, identifying opportunities for improvement and ensuring compliance.",
        benefits: [
            "Risk identification",
            "Performance optimization",
            "Compliance assurance",
            "Cost savings"
        ],
        features: [
            "System performance audit",
            "Security assessment",
            "Compliance checking",
            "Process evaluation",
            "Risk assessment",
            "Recommendations report"
        ],
        technologies: ["ISO 27001", "SOC 2", "GDPR", "HIPAA", "PCI DSS"]
    },
    'consulting': {
        icon: <Brain className="w-12 h-12" />,
        title: "Consulting",
        description: "Strategic guidance for your digital transformation journey.",
        longDescription: "Expert consulting services to help you navigate the complex landscape of technology and digital transformation.",
        benefits: [
            "Informed decision making",
            "Strategic planning",
            "Innovation roadmap",
            "Expert guidance"
        ],
        features: [
            "Digital strategy",
            "Technology roadmap",
            "Process optimization",
            "Change management",
            "Training programs",
            "Innovation workshops"
        ],
        technologies: ["Agile", "ITIL", "Six Sigma", "DevOps", "Digital Transformation frameworks"]
    }
};

const ServiceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = serviceDetails[id as keyof typeof serviceDetails];

    if (!service) {
        return <div>Service not found</div>;
    }

    return (
        <div className="min-h-screen py-12">
            <div className="container mx-auto px-4">
                <Button
                    onClick={() => navigate('/services')}
                    className="mb-8 flex items-center gap-2"
                    variant="ghost"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Services
                </Button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-primary/10 rounded-xl text-primary">
                            {service.icon}
                        </div>
                        <h1 className="text-4xl font-bold hover:text-[#ea580c] transition-colors">
                            {service.title}
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="prose prose-lg dark:prose-invert">
                                <p className="text-xl text-muted-foreground">
                                    {service.longDescription}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4 hover:text-[#ea580c] transition-colors">
                                    Key Features
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-2 p-4 bg-card rounded-lg border border-border"
                                        >
                                            <CheckCircle className="w-5 h-5 text-primary mt-1" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4 hover:text-[#ea580c] transition-colors">
                                    Technologies
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <h2 className="text-2xl font-semibold mb-4 hover:text-[#ea580c] transition-colors">
                                    Benefits
                                </h2>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6">
                                <Button className="w-full" size="lg">
                                    Request Consultation
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceDetails;
