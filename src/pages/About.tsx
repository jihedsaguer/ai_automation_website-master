import { motion } from "framer-motion";
import { Sparkles, Brain, Shield, Zap, Workflow } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-16 sm:py-24 relative overflow-hidden mx-auto">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-4">
              <Sparkles className="w-4 h-4" />
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              We are <span className="text-accent">NLS Consulting</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Specialists in intelligent automation and digital innovation, we support companies in their transformation with AI, tailor-made solutions, and cutting-edge technical expertise.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-neural-pattern opacity-30"></div>
        <div className="absolute inset-0 -z-20 bg-circuit-pattern opacity-20"></div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="container py-12 sm:py-20 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-primary/20 rounded-xl p-8 text-center shadow-md"
          >
            <Brain className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-muted-foreground">
              To provide our clients with innovative and efficient solutions to automate their tasks, improve productivity, and accelerate their digital transformation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-primary/20 rounded-xl p-8 text-center shadow-md"
          >
            <Sparkles className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-muted-foreground">
              To be a recognized leader in intelligent automation, guiding our clients to success through technology.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-primary/20 rounded-xl p-8 text-center shadow-md"
          >
            <Shield className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
            <ul className="list-disc list-inside text-muted-foreground text-left inline-block mx-auto">
              <li>Innovation</li>
              <li>Excellence</li>
              <li>Transparency</li>
              <li>Commitment</li>
              <li>Collaboration</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container py-16 sm:py-24 bg-muted/50 relative overflow-hidden mx-auto">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-12 px-4 relative z-10"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Our Expertise
          </h2>
          <p className="text-lg leading-relaxed max-w-xl mx-auto text-muted-foreground">
            We combine artificial intelligence, automation, and innovation to deliver solutions tailored to each business.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-8 items-center relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/20 bg-background/50 hover:border-primary/40 shadow"
          >
            <Zap className="h-8 w-8 text-primary mb-3" />
            <span className="font-semibold mb-1">Intelligent Automation</span>
            <span className="text-muted-foreground text-sm">Business process optimization</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/20 bg-background/50 hover:border-primary/40 shadow"
          >
            <Workflow className="h-8 w-8 text-accent mb-3" />
            <span className="font-semibold mb-1">Tailor-made Solutions</span>
            <span className="text-muted-foreground text-sm">Custom development</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/20 bg-background/50 hover:border-primary/40 shadow"
          >
            <Brain className="h-8 w-8 text-primary mb-3" />
            <span className="font-semibold mb-1">AI Expertise</span>
            <span className="text-muted-foreground text-sm">Advanced algorithms</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/20 bg-background/50 hover:border-primary/40 shadow"
          >
            <Shield className="h-8 w-8 text-accent mb-3" />
            <span className="font-semibold mb-1">Security & Trust</span>
            <span className="text-muted-foreground text-sm">Data protection</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

