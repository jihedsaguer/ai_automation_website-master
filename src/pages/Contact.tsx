import { useState } from "react";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "@/components";
import { motion } from "framer-motion";

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Ici, vous pouvez ajouter l'envoi à une API ou un service
  };

  return (
    <div className="min-h-screen bg-muted/50 py-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-lg mx-auto"
      >
        <Card className="shadow-xl border-primary/20">
          <CardHeader className="text-center mb-2">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-muted-foreground">We'd love to hear from you! Fill out the form below and our team will get back to you soon.</p>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-accent text-lg font-semibold mb-2">Thank you for your message!</p>
                <p>We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
                <Button type="submit" className="w-full mt-2">Send Message</Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

