import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Bot, Server, Search, Brain, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <Bot className="w-10 h-10" />,
        title: "AI Automation",
        description: "Optimize your business processes with our AI-powered automation solutions.",
        id: "ai-automation",
        features: [
            "Business Process Automation",
            "Advanced AI Integration",
            "Workflow Optimization",
            "Custom Solutions"
        ]
    },
    {
        icon: <Shield className="w-10 h-10" />,
        title: "Security",
        description: "Comprehensive protection for your digital infrastructure with cutting-edge security solutions.",
        id: "security",
        features: [
            "Security Audits",
            "Cyber Threat Protection",
            "Access Management",
            "GDPR Compliance"
        ]
    },
    {
        icon: <Server className="w-10 h-10" />,
        title: "Infrastructure",
        description: "Design and maintenance of robust, scalable infrastructure for your enterprise.",
        id: "infrastructure",
        features: [
            "Cloud Architecture",
            "Hybrid Solutions",
            "Scalability",
            "High Availability"
        ]
    },
    {
        icon: <Search className="w-10 h-10" />,
        title: "Audit",
        description: "In-depth system evaluation to identify improvement opportunities.",
        id: "audit",
        features: [
            "Performance Analysis",
            "Risk Assessment",
            "Strategic Recommendations",
            "Detailed Reports"
        ]
    },
    {
        icon: <Brain className="w-10 h-10" />,
        title: "Consulting",
        description: "Strategic guidance to optimize your digital transformation.",
        id: "consulting",
        features: [
            "Digital Strategy",
            "Process Optimization",
            "Training & Support",
            "Technology Watch"
        ]
    }
];

const ServicesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen py-12">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6 relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="inline-block">
                            Our{' '}
                            <motion.span
                                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-[#ea580c]"
                                animate={{
                                    backgroundPosition: ["0%", "100%"],
                                    filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                Intelligent
                            </motion.span>{' '}
                            Services
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Innovative solutions to propel your business into the future
                    </motion.p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                            onClick={() => navigate(`/services/${service.id}`)}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                            />

                            <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg text-primary relative">
                                {service.icon}
                            </div>
                            <motion.h3
                                className="text-2xl font-semibold mb-3 hover:text-[#ea580c] transition-colors relative"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                {service.title}
                            </motion.h3>
                            <motion.p
                                className="text-muted-foreground mb-6 relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.2 + 0.1 }}
                            >
                                {service.description}
                            </motion.p>
                            <motion.div
                                className="flex items-center text-primary gap-2 relative"
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <span>Learn more</span>
                                <ArrowRight className="w-4 h-4" />
                            </motion.div>

                            <motion.div
                                className="absolute inset-0 border-2 border-primary/20 rounded-xl"
                                initial={{ opacity: 0 }}
                                whileHover={{
                                    opacity: 1,
                                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section with AI animation */}
            <section className="container mx-auto px-4 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"
                        animate={{
                            x: ["0%", "100%"],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                    <h2 className="text-3xl font-bold mb-4 relative">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 relative">
                        Contact us to discover how our services can meet your needs
                    </p>
                    <motion.button
                        className="bg-primary text-white px-8 py-3 rounded-lg relative"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
};

export default ServicesPage;
