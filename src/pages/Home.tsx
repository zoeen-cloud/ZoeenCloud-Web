import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Code, Shield } from 'lucide-react';

export default function Home() {
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
            <Cloud className="w-16 h-16 text-gray-400 mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 mb-6">
              Transform Your Business with Cloud Solutions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Expert IT solutions with cloud infrastructure, DevOps, and FinOps services.
              Scale effortlessly, secure your data, and optimize performance.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#0D0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Cloud className="w-12 h-12 text-gray-400" />}
              title="Cloud Infrastructure"
              description="Scalable and secure cloud solutions for your business needs"
              link="/services/cloud-infrastructure"
            />
            <ServiceCard 
              icon={<Server className="w-12 h-12 text-gray-400" />}
              title="DevOps"
              description="Streamline your development and operations workflow"
              link="/services/devops"
            />
            <ServiceCard 
              icon={<Code className="w-12 h-12 text-gray-400" />}
              title="FinOps"
              description="Optimize your cloud costs and financial operations"
              link="/services/finops"
            />
            <ServiceCard 
              icon={<Shield className="w-12 h-12 text-gray-400" />}
              title="Security"
              description="Enterprise-grade security solutions and best practices"
              link="/services/security"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Expert Team"
              description="Dedicated professionals with years of industry experience"
            />
            <FeatureCard
              title="24/7 Support"
              description="Round-the-clock assistance for your business needs"
            />
            <FeatureCard
              title="Custom Solutions"
              description="Tailored approaches to meet your specific requirements"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, link }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  link: string 
}) {
  return (
    <motion.a 
      href={link}
      className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50 backdrop-blur-sm hover:border-gray-700/50 transition-all"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 rounded-lg bg-gradient-to-br from-gray-800 to-black mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.a>
  );
}

function FeatureCard({ title, description }: { title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50 backdrop-blur-sm"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}