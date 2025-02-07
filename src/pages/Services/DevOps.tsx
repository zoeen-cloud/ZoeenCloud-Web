import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Terminal, Workflow, Settings, RefreshCw, Cpu, Mail } from 'lucide-react';

export default function DevOps() {
  const handleContact = () => {
    const subject = encodeURIComponent('Inquiry about DevOps Solutions');
    const body = encodeURIComponent('Dear Mohammed,\n\nI am interested in learning more about your DevOps solutions.\n\nBest regards,');
    window.location.href = `mailto:mohammed@zoeencloud.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center text-center">
            <Terminal className="w-16 h-16 text-purple-400 mb-6" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
              DevOps Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Streamline your development pipeline with our comprehensive DevOps solutions.
              Automate, integrate, and deliver faster than ever before.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0D0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<GitBranch className="w-8 h-8 text-purple-400" />}
              title="CI/CD Pipeline"
              description="Automated build, test, and deployment processes"
            />
            <ServiceCard
              icon={<Terminal className="w-8 h-8 text-purple-400" />}
              title="Infrastructure as Code"
              description="Automated infrastructure provisioning and management"
            />
            <ServiceCard
              icon={<Workflow className="w-8 h-8 text-purple-400" />}
              title="Workflow Automation"
              description="Streamlined development and deployment workflows"
            />
            <ServiceCard
              icon={<Settings className="w-8 h-8 text-purple-400" />}
              title="Configuration Management"
              description="Centralized configuration and environment management"
            />
            <ServiceCard
              icon={<RefreshCw className="w-8 h-8 text-purple-400" />}
              title="Continuous Monitoring"
              description="Real-time monitoring and performance optimization"
            />
            <ServiceCard
              icon={<Cpu className="w-8 h-8 text-purple-400" />}
              title="Container Orchestration"
              description="Kubernetes and container management solutions"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Our DevOps Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Assessment"
              description="Evaluate current infrastructure and processes"
            />
            <ProcessStep
              number="02"
              title="Planning"
              description="Design optimal DevOps strategy and architecture"
            />
            <ProcessStep
              number="03"
              title="Implementation"
              description="Set up tools, pipelines, and automation"
            />
            <ProcessStep
              number="04"
              title="Optimization"
              description="Continuous improvement and refinement"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Development Process?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with us to discuss how we can help streamline your development and operations workflow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContact}
            className="flex items-center justify-center mx-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-lg font-semibold transition-all"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </motion.button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50 backdrop-blur-sm"
    >
      <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}