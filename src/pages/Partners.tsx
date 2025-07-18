import { useState } from "react";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import simopLogo from "../../simop.png";
import prologicLogo from "../../prologic.png";
import switzerlandLogo from "../../unnamed.jpg";
import actdevLogo from "../../act-fr-tunisie.webp";

const partnersData = [
  {
    name: "Smart Tunisie",
    logo: "https://www.smart.com.tn/images/logo.png",
    review: "Smart Tunisie is a leading distributor of IT equipment, software, and mobile telephony in Tunisia, providing value-added solutions and a wide range of products to businesses and individuals since 1997.",
    reviewer: "Official Company Description",
  },
  {
    name: "Simop Tunisie",
    logo: simopLogo,
    review: "SIMOP Training is the first Huawei-certified training center in Tunisia, offering professional IT training with state-of-the-art facilities and certified instructors, dedicated to advancing careers through exclusive certifications and tailored sessions.",
    reviewer: "Official Company Description",
  },
  {
    name: "Prologic Tunisie",
    logo: prologicLogo,
    review: "Prologic Tunisie specializes in computer and network security, providing IT consulting and solutions to help businesses secure and optimize their digital infrastructure.",
    reviewer: "Official Company Description",
  },
  {
    name: "Switzerland Innovation",
    logo: switzerlandLogo,
    review: "Switzerland Innovation is the Swiss innovation park network that helps companies transform research findings into marketable products and services. We facilitate collaborations between companies and leading research institutions, fostering innovation across Switzerland.",
    reviewer: "Official Company Description",
  },
  {
    name: "ActDev",
    logo: actdevLogo,
    review: "ActDev est un cabinet de formation et de conseil en IT spécialisé dans l'accompagnement des entreprises dans leur transformation digitale. Nous proposons des formations personnalisées et des solutions innovantes pour optimiser les processus métier.",
    reviewer: "Official Company Description",
  }
];

export const Partners = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-muted/50 py-16">
      <section className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-10">Our Partners & Clients</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {partnersData.map((partner, idx) => (
            <motion.div
              key={partner.name}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(idx)}
            >
              <Card className={`transition-all duration-300 cursor-pointer border-2 ${selected === idx ? 'border-accent shadow-2xl' : 'border-primary/20 shadow-md'}`}>
                <CardHeader className="flex flex-col items-center">
                  <div className="w-32 h-32 flex items-center justify-center p-4 bg-white rounded-lg">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-1 mt-4 text-center">{partner.name}</h2>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <p className="italic text-muted-foreground text-center mb-3">"{partner.review}"</p>
                  <span className="text-sm text-accent font-medium">{partner.reviewer}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

