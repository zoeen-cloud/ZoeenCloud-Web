import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, PieChart, BarChart, LineChart, Activity, Mail } from 'lucide-react';

export default function FinOps() {
  const handleContact = () => {
    const subject = encodeURIComponent('Inquiry about FinOps Services');
    const body = encodeURIComponent('Dear Mohammed,\n\nI am interested in learning more about your FinOps services.\n\nBest regards,');
    window.location.href = `mailto:mohammed@zoeencloud.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center text-center">
            <DollarSign className="w-16 h-16 text-emerald-400 mb-6" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600 mb-6">
              FinOps Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Optimize your cloud spending and maximize ROI with our comprehensive
              FinOps solutions. Turn cloud costs into strategic investments.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#0D0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-emerald-400" />}
              title="Cost Optimization"
              description="Identify and eliminate waste in cloud spending"
            />
            <FeatureCard
              icon={<PieChart className="w-8 h-8 text-emerald-400" />}
              title="Budget Management"
              description="Set and track budgets across cloud resources"
            />
            <FeatureCard
              icon={<BarChart className="w-8 h-8 text-emerald-400" />}
              title="Usage Analytics"
              description="Detailed insights into resource utilization"
            />
            <FeatureCard
              icon={<LineChart className="w-8 h-8 text-emerald-400" />}
              title="Forecasting"
              description="Predictive analytics for future cloud costs"
            />
            <FeatureCard
              icon={<Activity className="w-8 h-8 text-emerald-400" />}
              title="Real-time Monitoring"
              description="Continuous tracking of cloud expenses"
            />
            <FeatureCard
              icon={<DollarSign className="w-8 h-8 text-emerald-400" />}
              title="Cost Allocation"
              description="Accurate billing and chargeback systems"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">
            Benefits of FinOps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitCard
              title="Cost Reduction"
              percentage="30%"
              description="Average reduction in cloud costs through optimization"
            />
            <BenefitCard
              title="Resource Efficiency"
              percentage="40%"
              description="Improvement in resource utilization"
            />
            <BenefitCard
              title="Budget Accuracy"
              percentage="95%"
              description="Accuracy in cloud cost forecasting"
            />
            <BenefitCard
              title="Time Saved"
              percentage="60%"
              description="Reduction in time spent on cost management"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900/20 to-teal-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Cloud Costs?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with us to discuss how we can help you implement effective FinOps practices and reduce your cloud spending.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContact}
            className="flex items-center justify-center mx-auto px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg font-semibold transition-all"
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

function BenefitCard({ title, percentage, description }: { title: string; percentage: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50 backdrop-blur-sm"
    >
      <h3 className="text-2xl font-semibold mb-2 text-gray-100">{title}</h3>
      <div className="text-4xl font-bold text-emerald-400 mb-4">{percentage}</div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}