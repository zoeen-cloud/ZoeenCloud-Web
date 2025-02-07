import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:mohammed@zoeencloud.in?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center text-center">
            <Mail className="w-16 h-16 text-gray-400 mb-6" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Have questions about our services? We're here to help. Contact us using
              the form below or through our contact information.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#0D0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50 backdrop-blur-sm p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-200">Contact Information</h2>
                
                <div className="space-y-6">
                  <ContactInfo
                    icon={<Mail className="w-6 h-6 text-gray-400" />}
                    title="Email"
                    content="mohammed@zoeencloud.in"
                  />
                  <ContactInfo
                    icon={<Phone className="w-6 h-6 text-gray-400" />}
                    title="Phone"
                    content="+91 7760594662"
                  />
                  <ContactInfo
                    icon={<MapPin className="w-6 h-6 text-gray-400" />}
                    title="Address"
                    content="ZoeenCloud, Sammy's Dreamland, Bangalore - 562157"
                  />
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h3 className="text-lg font-semibold mb-4 text-gray-200">Direct Contact</h3>
                  <div className="space-y-4">
                    <button
                      onClick={() => window.location.href = 'mailto:mohammed@zoeencloud.in'}
                      className="w-full flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors text-gray-200"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </button>
                    <button
                      onClick={() => window.location.href = 'tel:+917760594662'}
                      className="w-full flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors text-gray-200"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50 backdrop-blur-sm p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-200">Send us a Message</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-gray-600 focus:border-transparent text-gray-200"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-gray-600 focus:border-transparent text-gray-200"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-gray-600 focus:border-transparent text-gray-200"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:ring-2 focus:ring-gray-600 focus:border-transparent text-gray-200"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-md transition-colors text-gray-200"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfo({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-200">{title}</h3>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );
}