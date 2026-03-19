import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Mail, MapPin, Search, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/technology", label: "Technology" },
  { to: "/market", label: "Market" },
  { to: "/investment", label: "Investment" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white">
      <div className="hidden lg:flex h-10 items-center bg-slate-950 text-slate-100">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-6 text-xs">
            <span className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              info@divinegrace-energy.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              Madhya Pradesh, India
            </span>
          </div>
         
        </div>
      </div>

      <div className="container mx-auto flex h-[76px] sm:h-[84px] items-center px-0 md:px-4">
        <Link to="/" className="hidden md:flex h-[76px] sm:h-[84px] w-[125px] sm:w-[145px] shrink-0 flex-col items-center justify-center bg-green-600 text-white">
          <Sun className="mb-1 h-8 w-8" />
          <span className="text-[28px] font-heading font-extrabold leading-none">DG</span>
          <span className="mt-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] sm:tracking-[0.2em] ml-6">DIVINEGRACE ENERGY</span>
        </Link>

        <div className="flex flex-1 items-center justify-between border-x border-slate-200 bg-white px-4 sm:px-5 md:h-full md:px-6 lg:px-8">
          <Link to="/" className="md:hidden flex items-center gap-2 font-heading font-bold text-sm sm:text-base text-slate-900">
            <Sun className="h-5 w-5 text-green-600" />
            DivineGrace Energy
          </Link>

          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative py-2 text-[14px] xl:text-[15px] font-semibold transition-colors",
                  pathname === l.to
                    ? "text-slate-900 after:absolute after:left-0 after:right-0 after:-bottom-[29px] after:h-[2px] after:bg-green-600"
                    : "text-slate-700 hover:text-green-700"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden xl:flex h-full shrink-0 items-center">
          <div className="flex h-full items-center border-r border-slate-200 px-5">
            <div className="mr-3 rounded-full bg-green-100 p-2.5 text-green-700">
              <Phone className="h-4 w-4" />
            </div>
            <div className="leading-tight">
              <p className="text-xs text-slate-500">Call support 24/7</p>
              <p className="text-sm font-semibold text-slate-900">+91 98765 43210</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="flex h-full min-w-[140px] items-center justify-center bg-green-600 px-6 font-heading text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-green-700"
          >
            Contact
          </Link>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white pb-4 px-4 max-h-[70vh] overflow-y-auto">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === l.to
                  ? "text-green-700 bg-green-50"
                  : "text-slate-700 hover:text-slate-900"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
