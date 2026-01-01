import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageSquare, Facebook, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';


export default function Contact() {
    // Formspree form ID - Make sure this is set up at https://formspree.io
    // Replace "mdkqyeol" with your own Formspree form ID if needed
    const [state, handleSubmit] = useForm("https://formspree.io/f/mlgdgdla", {
      data: {
        _subject: "New Contact Form Submission from Portfolio"
      }
    });


if (state.succeeded) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center mt-12"
    >
      <div className="relative w-full max-w-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-20" />
        <div className="relative bg-white backdrop-blur-sm border border-gray-200 rounded-2xl p-8 text-center">
          <p className="text-2xl font-bold text-purple-700">
            ✅ Success! Message Sent!
          </p>
          <p className="text-gray-700 mt-2">Your message has been sent successfully.</p>
          <p className="text-gray-600 text-sm mt-4">
            I'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </motion.div>
  );
}







  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "lovehiku2@gmail.com",
      link: "lovehiku2@gmail.com",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com/in/hikma-oumer-954107298",
      color: "from-blue-600 to-blue-400"
    },
    { 
      icon: Github,
      label: "GitHub",
      value: "View GitHub Profile",
      link: "https://github.com/Lovehiku/Lovehiku",
      color: "from-gray-700 to-gray-500"
    },
    {
      icon: Send,
      label: "Telegram",
      value: "Chat on Telegram",
      link: "https://t.me/Hikmetulahh",
      color: "from-blue-500 to-cyan-400"
    },
    
    
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circular accents */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4 text-purple-800">
            Let's Talk!
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <div className="relative bg-purple-700 rounded-lg p-5 hover:bg-purple-800 transition-all cursor-pointer shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-white/10 rounded-lg flex-shrink-0">
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-white mb-0.5">
                          {social.label}
                        </h3>
                        <p className="text-white text-sm truncate">
                          {social.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >



<div className="relative inline-block w-full">
      <div className="relative bg-white rounded-2xl p-8 border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Type your message here..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Error Message */}
          {state.errors && state.errors.length > 0 && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">
                Please check the form and try again.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 px-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            {state.submitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>





          </motion.div>
        </div>
      </div>
    </section>
  );
}