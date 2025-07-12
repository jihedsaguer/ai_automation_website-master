import { motion } from "framer-motion";
import { Sparkles, Brain, Shield, ScrollText, Lock, Server, Building2, Globe2 } from "lucide-react";

export const About = () => {
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
              <Building2 className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Welcome to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NLS Consulting</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              About NLS Consulting
Founded in 2025 in Bizerte, NLS Consulting represents a new generation of digital consulting.
Born at the intersection of strategic vision, cutting-edge technology, and legal expertise, we are more than a startup — we are a fast-growing ecosystem driven by innovation in cybersecurity, AI automation, and legal advisory.

At NLS, we think like a multinational, move like a startup, and carry a bold ambition: to reinvent consulting for the digital era.
Our team is made up of forward-thinking Tunisian talents — creative, versatile, and disruptive minds — blending local insight with global standards to craft intelligent, secure, and tailor-made solutions.

Our strength? A global vision, local roots, and a relentless drive for the future.
We support companies, institutions, and startups across North Africa and Europe, with one clear goal: to accelerate their transition into a smarter, more connected, and more secure world.
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
              To drive digital transformation of Tunisian and international businesses through innovative solutions in
              cybersecurity, AI automation, and legal compliance, while contributing to the growth of Tunisia's
              technology sector.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-primary/20 rounded-xl p-8 text-center shadow-md"
          >
            <Globe2 className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-muted-foreground">
              To become a major player in technological innovation in North Africa, establishing new standards
              of excellence in digital security, intelligent automation, and specialized legal consulting.
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
            <ul className="text-muted-foreground text-left space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>Excellence & Innovation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>Integrity & Transparency</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>Local Expertise & Global Standards</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>Client Commitment & Quality</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>Responsible Innovation</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
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
            An integrated approach combining cutting-edge technology and legal expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 items-center relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/20 bg-background/50 hover:border-primary/40 shadow-lg"
          >
            <Lock className="h-8 w-8 text-primary mb-3" />
            <span className="font-semibold mb-2">Cybersecurity</span>
            <span className="text-sm text-muted-foreground">Advanced system protection and comprehensive security auditing</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/20 bg-background/50 hover:border-primary/40 shadow-lg"
          >
            <Server className="h-8 w-8 text-primary mb-3" />
            <span className="font-semibold mb-2">IT Infrastructure</span>
            <span className="text-sm text-muted-foreground">Design and optimization of cloud and on-premise infrastructure</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/20 bg-background/50 hover:border-primary/40 shadow-lg"
          >
            <Brain className="h-8 w-8 text-primary mb-3" />
            <span className="font-semibold mb-2">AI Automation</span>
            <span className="text-sm text-muted-foreground">Intelligent automation solutions with n8n and advanced AI</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/20 bg-background/50 hover:border-primary/40 shadow-lg"
          >
            <ScrollText className="h-8 w-8 text-primary mb-3" />
            <span className="font-semibold mb-2">Legal Advisory</span>
            <span className="text-sm text-muted-foreground">Legal audit and technology regulatory compliance</span>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container py-16 sm:py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tunisian expertise driving global innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-primary/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Local Excellence
            </h3>
            <p className="text-muted-foreground">
              Based in Bizerte, we combine local expertise with international standards, delivering solutions tailored
              to both Tunisian and international market needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-primary/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Integrated Innovation
            </h3>
            <p className="text-muted-foreground">
              Our unique approach integrates cybersecurity, AI, and legal expertise to provide comprehensive
              and innovative solutions to our clients.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

