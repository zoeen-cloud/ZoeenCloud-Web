import React from 'react';
import { motion } from 'framer-motion';
import { Book, Clock, Mail, GraduationCap } from 'lucide-react';

interface Internship {
  id: number;
  title: string;
  description: string;
  duration: string;
  requirements: string[];
}

export default function Internships() {
  const internships: Internship[] = [
    {
      id: 1,
      title: "DevOps Engineering Internship",
      description: "Learn modern DevOps practices including CI/CD, containerization, and cloud infrastructure management.",
      duration: "3 months",
      requirements: [
        "Basic understanding of Linux systems",
        "Knowledge of at least one programming language",
        "Familiarity with cloud concepts",
        "Strong problem-solving skills"
      ]
    },
    {
      id: 2,
      title: "Full Stack Development Internship",
      description: "Master both frontend and backend development with modern technologies and best practices.",
      duration: "4 months",
      requirements: [
        "HTML, CSS, and JavaScript fundamentals",
        "Basic understanding of databases",
        "Knowledge of version control (Git)",
        "Eagerness to learn new technologies"
      ]
    }
  ];

  const handleApply = (internshipTitle: string) => {
    const subject = encodeURIComponent(`Application for ${internshipTitle}`);
    const body = encodeURIComponent(`Dear Mohammed,\n\nI am interested in applying for the ${internshipTitle} position.\n\nPlease find my details below:\n\nName:\nPhone:\nEducation:\nRelevant Experience:\n\nBest regards,`);
    window.location.href = `mailto:mohammed@zoeencloud.in?subject=${subject}&body=${body}`;
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
            <GraduationCap className="w-16 h-16 text-gray-400 mb-6" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 mb-6">
              Internship Programs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Launch your career in tech with our comprehensive internship programs.
              Learn from industry experts and gain hands-on experience.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Internships Grid */}
      <section className="py-20 bg-[#0D0D14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((internship) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-200">{internship.title}</h2>
                  <p className="text-gray-300 mb-6">{internship.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-gray-400" />
                      <span>Duration: {internship.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Book className="w-5 h-5 mr-3 text-gray-400" />
                      <span>Certificate Upon Completion</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-3 text-gray-200">Requirements:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {internship.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleApply(internship.title)}
                    className="w-full flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-gray-200 py-3 px-6 rounded-md transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}