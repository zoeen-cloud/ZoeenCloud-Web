import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Shield, Zap, Database, Network, Mail } from 'lucide-react';

export default function CloudInfra() {
  const handleContact = () => {
    const subject = encodeURIComponent('Inquiry about Cloud Infrastructure Services');
    const body = encodeURIComponent('Dear Mohammed,\n\nI am interested in learning more about your Cloud Infrastructure services.\n\nBest regards,');
    window.location.href = `mailto:mohammed@zoeencloud.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center text-center">
            <Cloud className="w-16 h-16 text-cyan-400 mb-6" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Transform your business with our cutting-edge cloud infrastructure solutions.
              Scale effortlessly, secure your data, and optimize performance.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#0D0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Server className="w-8 h-8 text-cyan-400" />}
              title="Scalable Architecture"
              description="Build flexible infrastructure that grows with your business needs"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-cyan-400" />}
              title="Enhanced Security"
              description="Enterprise-grade security measures to protect your data"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-cyan-400" />}
              title="High Performance"
              description="Optimized systems for maximum speed and reliability"
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-cyan-400" />}
              title="Data Management"
              description="Efficient data storage and retrieval solutions"
            />
            <FeatureCard
              icon={<Network className="w-8 h-8 text-cyan-400" />}
              title="Network Optimization"
              description="Advanced networking for seamless connectivity"
            />
            <FeatureCard
              icon={<Cloud className="w-8 h-8 text-cyan-400" />}
              title="Cloud Native"
              description="Modern cloud-native architecture and practices"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with us to discuss your specific requirements and how we can help you achieve your cloud infrastructure goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContact}
            className="flex items-center justify-center mx-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </motion.button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50 backdrop-blur-sm"
    >
      <div className="flex flex-col items-start">
        <div className="p-3 rounded-lg bg-gray-800/50 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}