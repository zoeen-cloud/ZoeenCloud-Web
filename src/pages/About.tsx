import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Rocket } from 'lucide-react';

export default function About() {
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
            <Users className="w-16 h-16 text-gray-400 mb-6" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 mb-6">
              About ZoeenCloud
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              We are a leading IT solutions provider specializing in cloud infrastructure,
              DevOps practices, and FinOps optimization. Our mission is to help businesses
              transform and thrive in the digital age.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#0D0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard icon={<Users className="w-8 h-8 text-gray-400" />} number="500+" text="Clients Served" />
            <StatCard icon={<Award className="w-8 h-8 text-gray-400" />} number="50+" text="Awards Won" />
            <StatCard icon={<Globe className="w-8 h-8 text-gray-400" />} number="20+" text="Countries" />
            <StatCard icon={<Rocket className="w-8 h-8 text-gray-400" />} number="1000+" text="Projects Completed" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              name="John Smith"
              role="CEO & Founder"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              name="Sarah Johnson"
              role="CTO"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
              name="Michael Chen"
              role="Head of DevOps"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/20 to-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
            Our Vision
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To be the global leader in innovative cloud solutions, empowering businesses
            to achieve their digital transformation goals through cutting-edge technology
            and expert guidance.
          </p>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, number, text }: { icon: React.ReactNode, number: string, text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50 backdrop-blur-sm"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2 text-gray-200">{number}</h3>
      <p className="text-gray-400">{text}</p>
    </motion.div>
  );
}

function TeamMember({ image, name, role }: { image: string, name: string, role: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1 text-gray-200">{name}</h3>
        <p className="text-gray-400">{role}</p>
      </div>
    </motion.div>
  );
}