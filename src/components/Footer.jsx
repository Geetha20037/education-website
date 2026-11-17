import { GraduationCap, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <GraduationCap className="text-violet-400" size={30} />
              EDVORA
            </Link>
            <p className="text-slate-400 mt-5 leading-7">
              Learn beyond limits. Build your skills, discover new opportunities
              and shape your future with EDVORA.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                ["Instagram", "https://instagram.com"],
                ["LinkedIn", "https://linkedin.com"],
                ["Twitter", "https://twitter.com"]
              ].map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="px-3 py-2 rounded-lg bg-slate-800 text-sm text-slate-300 hover:bg-violet-600 hover:text-white transition"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Explore</h3>
            <div className="flex flex-col gap-3 text-slate-400">
              <Link to="/" className="hover:text-violet-400">Home</Link>
              <Link to="/about" className="hover:text-violet-400">About Us</Link>
              <Link to="/courses" className="hover:text-violet-400">All Courses</Link>
              <Link to="/contact" className="hover:text-violet-400">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Popular Courses</h3>
            <div className="flex flex-col gap-3 text-slate-400">
              <Link to="/courses" className="hover:text-violet-400">Web Development</Link>
              <Link to="/courses" className="hover:text-violet-400">UI/UX Design</Link>
              <Link to="/courses" className="hover:text-violet-400">Python Programming</Link>
              <Link to="/courses" className="hover:text-violet-400">Data Science</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Get in Touch</h3>
            <div className="flex flex-col gap-4 text-slate-400">
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-violet-400 shrink-0" />
                hello@edvora.example
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-violet-400 shrink-0" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-violet-400 shrink-0" />
                Bengaluru, India
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mt-2">
                Contact us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} EDVORA. All rights reserved.</p>
          <p>Designed to help you learn beyond limits.</p>
        </div>
      </div>
    </footer>
  );
}
