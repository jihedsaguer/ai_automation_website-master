import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-primary">AI-Powered</span> Solutions
              <br />
              for Modern Business
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Transform your business with our cutting-edge AI automation and no-code solutions.
              Build, deploy, and scale faster than ever before.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
              >
                Get Started
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-4">
                  <div className="h-4 bg-primary/10 rounded w-3/4"></div>
                  <div className="h-4 bg-primary/10 rounded w-1/2"></div>
                  <div className="h-4 bg-primary/10 rounded w-2/3"></div>
                  <div className="h-4 bg-primary/10 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default Hero;