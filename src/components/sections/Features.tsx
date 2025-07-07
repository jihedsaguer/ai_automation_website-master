import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ScrollText, Zap, Shield } from 'lucide-react';
import {Card} from '../ui/card.tsx';

const features = [
  {
    icon: Brain,
    title: 'AI Automation',
    description: 'Leverage cutting-edge AI to automate complex business processes and workflows.'
  },
  {
    icon: ScrollText,
    title: 'Legal & Tax Advisory',
    description: 'Expert guidance on legal compliance, tax optimization, and business structuring in Switzerland and internationally.'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Deploy your solutions in minutes, not months, with our streamlined platform.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security and compliance for your most sensitive data.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features for Modern Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines the latest in AI technology with intuitive no-code tools
            to help you build and scale your business faster than ever.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
