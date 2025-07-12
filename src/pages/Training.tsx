import { motion } from 'framer-motion';
import { ArrowRight, Brain, Shield, GraduationCap, Scale, VideoIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const trainingServices = [
    {
        title: ' Automation Fundamentals',
        icon: Brain,
        duration: '4 weeks',
        description: 'Master the basics of  automation. Learn to create workflows, integrate APIs, and automate business processes.',
        features: [
            'Live online sessions',
            'Hands-on projects',
            'Personal mentoring',
            'Certificate of completion'
        ],
        category: 'training'
    },
    {
        title: 'Advanced  & AI Integration',
        icon: Brain,
        duration: '6 weeks',
        description: 'Advanced course on combining  with AI services. Learn to build complex automation systems with AI capabilities.',
        features: [
            'Advanced workflow design',
            'AI integration techniques',
            'Real-world case studies',
            'Final certification project'
        ],
        category: 'training'
    },
    {
        title: 'Business Process Automation Certificate',
        icon: GraduationCap,
        duration: '8 weeks',
        description: 'Comprehensive certification program covering end-to-end business process automation with .',
        features: [
            'Industry-recognized certification',
            'Portfolio development',
            'One-on-one mentoring',
            'Job placement assistance'
        ],
        category: 'certification'
    },
    {
        title: 'Legal & Tax Advisory Package',
        icon: Scale,
        duration: '1 month',
        description: 'Professional legal and tax consultation for businesses implementing automation solutions.',
        features: [
            'Legal compliance review',
            'Tax optimization strategy',
            'Documentation support',
            'Monthly consultation'
        ],
        category: 'legal'
    },
    {
        title: 'Custom Automation Workshop',
        icon: VideoIcon,
        duration: 'Custom',
        description: 'Tailored workshop for your team to learn automation specific to your business needs.',
        features: [
            'Customized curriculum',
            'Team training sessions',
            'Practice exercises',
            'Implementation support'
        ],
        category: 'training'
    },
    {
        title: 'Startup Legal Package',
        icon: Shield,
        duration: '3 months',
        description: 'Comprehensive legal support package for startups implementing automation solutions.',
        features: [
            'Business structure setup',
            'Compliance guidance',
            'Contract templates',
            'Regular consultations'
        ],
        category: 'legal'
    }
];

export const Training = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredServices = trainingServices.filter(service =>
        selectedCategory === 'All' ? true : service.category.toLowerCase() === selectedCategory.toLowerCase()
    );

    return (
        <div className="min-h-screen py-16 bg-muted/50">
            <div className="container mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold mb-4">Training & Certification Programs</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Enhance your skills with our professional training programs and get expert legal support for your business
                    </p>
                </motion.div>

                {/* Category Filters */}
                <div className="flex justify-center gap-4 mb-12">
                    {['All', 'Training', 'Certification', 'Legal'].map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            className="px-6"
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                </div>

                                <p className="text-muted-foreground mb-6">{service.description}</p>

                                <div className="space-y-4 flex-grow">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">{service.duration}</span>
                                    </div>

                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to="/Contact" className="w-full">
                                    <Button className="w-full mt-6">
                                        Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
                        <h2 className="text-2xl font-bold mb-4">Need a Custom Training Program?</h2>
                        <p className="text-muted-foreground mb-6">
                            Contact us to create a tailored training program for your team or discuss specific legal requirements
                        </p>
                        <Link to="/Contact">
                            <Button size="lg" variant="default">
                                Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Training;

