import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    // Formspree form ID - Make sure this is set up at https://formspree.io
    const [state, handleSubmit] = useForm("mlgdgdla", {
      data: {
        _subject: "New Contact Form Submission from Portfolio"
      }
    });

if (state.succeeded) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-2xl mx-auto px-4"
      >
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-2xl border border-gray-200">
          <div className="mb-6">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-gray-700 text-lg mb-2">Thank you for reaching out.</p>
          <p className="text-gray-600 text-base">
            I'll get back to you within 24 hours. Looking forward to connecting with you!
          </p>
        </div>
      </motion.div>
    </section>
  );
}

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "lovehiku2@gmail.com",
      link: "mailto:lovehiku2@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://linkedin.com/in/hikma-oumer-954107298",
    },
    { 
      icon: Github,
      label: "GitHub",
      value: "View GitHub Profile",
      link: "https://github.com/Lovehiku/Lovehiku",
    },
    {
      icon: Send,
      label: "Telegram",
      value: "Chat on Telegram",
      link: "https://t.me/Hikmetulahh",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden border-t border-gray-200 z-60">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
            Let's Talk!
          </h2>
          <p className="text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h3>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target={social.link.startsWith('http') ? "_blank" : undefined}
                  rel={social.link.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="block group"
                >
                  <div className="relative bg-white rounded-xl p-5 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-100 rounded-lg flex-shrink-0 group-hover:bg-gray-200 transition-colors">
                        <social.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 mb-1">
                          {social.label}
                        </h3>
                        <p className="text-gray-600 text-sm truncate">
                          {social.value}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Send className="w-5 h-5 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name <span className="text-gray-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-gray-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="john.doe@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-gray-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      placeholder="Tell me about your project or idea..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  {/* Error Message */}
                  {state.errors && state.errors.length > 0 && (
                    <div className="p-4 bg-gray-100 border-l-4 border-gray-400 rounded-lg">
                      <p className="text-gray-700 text-sm font-medium">
                        Please check the form and try again.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3 px-6 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                  >
                    {state.submitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
