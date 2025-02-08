import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0F] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <Cloud className="h-8 w-8 text-gray-400" />
              <span className="text-xl font-bold text-white">
                ZoeenCloud
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Empowering businesses with cutting-edge cloud solutions and expert IT services.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Github className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Mail className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/internships">Internships</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              {/* <FooterLink href="/login">Login</FooterLink> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services/cloud-infrastructure">Cloud Infrastructure</FooterLink>
              <FooterLink href="/services/devops">DevOps Solutions</FooterLink>
              <FooterLink href="/services/finops">FinOps Services</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-gray-300"
              />
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ZoeenCloud. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-400 hover:text-white transition-colors text-sm"
      >
        {children}
      </a>
    </li>
  );
}