import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Send, Github, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, title: "Email", value: "lovehiku2@gmail.com", href: "mailto:lovehiku2@gmail.com" },
  { icon: MapPin, title: "Location", value: "Addis Ababa, Ethiopia" },
  { icon: MessageCircle, title: "WhatsApp", value: "Available for chat", href: "https://wa.me/251912345678" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Lovehiku", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/hikma-oumer", label: "LinkedIn" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/mdkqyeol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to send message.');
      }
    } catch (err) {
      toast.error('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium tracking-widest uppercase text-sm">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Let's Collaborate</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have a project idea or want to learn together? Reach out—I’m open to collaborations and discussions!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">{item.title}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">{item.title}</p>
                        <p className="text-white font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-slate-400 mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 transition-all"
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-blue-500"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-blue-500"
                />
              </div>

              <Input
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-blue-500"
              />

              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:border-blue-500 resize-none"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white h-12 rounded-xl text-lg font-medium shadow-lg shadow-blue-500/25"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
