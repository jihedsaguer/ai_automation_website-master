import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '../components';

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        title: 'Automation System for Chatbot',
        description: 'Developed a robust automation system for customer support chatbots, enabling 24/7 instant responses and seamless integration with business workflows.',
        image: 'https://t4.ftcdn.net/jpg/08/93/78/67/360_F_893786714_eOwvP3cwPCBXC81TpRxEHoPNBlVal4r3.jpg',
        tags: ['Automation', 'Chatbot', 'Customer Support'],
        githubUrl: 'https://github.com/your-org/chatbot-automation',
        liveUrl: 'https://yourcompany.com/projects/chatbot-automation'
    },
    {
        title: 'Odoo Custom Module Development',
        description: 'Designed and implemented custom Odoo modules for ERP, CRM, and inventory, tailored to unique business needs and scalable for growth.',
        image: 'https://appscomp.com/wp-content/uploads/2024/09/Odoo-Dedicated-Developer-1.png',
        tags: ['Odoo', 'ERP', 'CRM', 'Development'],
        githubUrl: 'https://github.com/your-org/odoo-modules',
        liveUrl: 'https://yourcompany.com/projects/odoo-modules'
    },
    {
        title: 'AI Models for Predictive Analytics',
        description: 'Built and deployed advanced AI models for predictive analytics, helping clients forecast demand, optimize resources, and drive data-driven decisions.',
        image: 'https://cdn.prod.website-files.com/60d07e2eecb304cb4350b53f/642d946942d00f31555fe73a_0412_predictive-analytics-in-business.jpg.webp',
        tags: ['AI', 'Predictive Analytics', 'Machine Learning'],
        githubUrl: 'https://github.com/your-org/ai-models',
        liveUrl: 'https://yourcompany.com/projects/ai-models'
    },
    {
        title: 'Security Infrastructure & Compliance',
        description: 'Implemented enterprise-grade security infrastructure, including network hardening, monitoring, and compliance automation for regulated industries.',
        image: 'https://info.janusassociates.com/hs-fs/hubfs/Cybersecurity%20Framework%20and%20Compliance.jpeg?width=6003&height=4000&name=Cybersecurity%20Framework%20and%20Compliance.jpeg',
        tags: ['Security', 'Infrastructure', 'Compliance'],
        githubUrl: 'https://github.com/your-org/security-infra',
        liveUrl: 'https://yourcompany.com/projects/security-infra'
    }
];

export function Portfolio() {
    return (
        <div className="min-h-screen py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        Our <span className="text-primary">Portfolio</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore our successful AI implementations and innovative solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            View Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <Link to="/contact">
                        <Button size="lg">
                            Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Portfolio;

