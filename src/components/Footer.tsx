import { Link } from "react-router-dom";
import { Sun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#062e0f] text-white">
      
      {/* Background Effects */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_10%_20%,rgba(72,255,120,0.18),transparent_25%),
             radial-gradient(circle_at_90%_10%,rgba(72,255,120,0.15),transparent_30%),
             radial-gradient(circle_at_50%_100%,rgba(72,255,120,0.1),transparent_40%)]" 
      />

      {/* Top Section (Contact Style Row) */}
      <div className="relative container mx-auto px-6 pt-12 pb-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="bg-green-400/20 p-4 rounded-xl">
              <Sun className="h-6 w-6 text-green-300" />
            </div>
            <div>
              <p className="font-semibold">Support & Email</p>
              <p className="text-sm text-white/70">info@domainname.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center">
            <div className="bg-green-400/20 p-4 rounded-xl">
              <Sun className="h-6 w-6 text-green-300" />
            </div>
            <div>
              <p className="font-semibold">Customer Support</p>
              <p className="text-sm text-white/70">+01 547 547 5478</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-end">
            <div className="bg-green-400/20 p-4 rounded-xl">
              <Sun className="h-6 w-6 text-green-300" />
            </div>
            <div>
              <p className="font-semibold">Our Location</p>
              <p className="text-sm text-white/70">
                Madhya Pradesh, India
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container mx-auto px-6 py-14 border-t border-white/10">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-7 w-7 text-green-400" />
              <span className="font-bold text-xl">DivineGrace Energy</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Powering government infrastructure with bulk solar energy supply. 
              A compelling investment opportunity in India's rapidly expanding solar infrastructure market.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <Link to="/about" className="hover:text-green-400">About Us</Link>
              <Link to="/projects" className="hover:text-green-400">Projects</Link>
              <Link to="/technology" className="hover:text-green-400">Technology</Link>
              <Link to="/investment" className="hover:text-green-400">Investment</Link>
            </div>
          </div>

          {/* Services (same links reused for design balance) */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <Link to="/about" className="hover:text-green-400">About Us</Link>
              <Link to="/projects" className="hover:text-green-400">Projects</Link>
              <Link to="/technology" className="hover:text-green-400">Technology</Link>
              <Link to="/investment" className="hover:text-green-400">Investment</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <Link to="/contact" className="hover:text-green-400">
                Get in Touch
              </Link>
              <span>Madhya Pradesh, India</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Rounded Bar */}
      <div className="relative container mx-auto px-6 pb-10">
        <div className="bg-green-400 text-black text-center py-5 rounded-full text-sm font-medium shadow-lg">
          © {new Date().getFullYear()} DivineGrace Energy. All rights reserved.
        </div>
      </div>

    </footer>
  );
}