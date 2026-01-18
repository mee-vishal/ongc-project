import { useState } from "react";
import { Menu, X, Home, BarChart3, Info, Users, GraduationCap, LogIn } from "lucide-react";
import ongc from '../assets/ongc.png';

function Header({ onLoginClick, isAuthenticated, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: Home, href: "#hero" },
    { name: "Prediction", icon: BarChart3, href: "#prediction" },
    { name: "Analytics", icon: BarChart3, href: "#analytics" },
    { name: "Interns", icon: Users, href: "#interns" },
    { name: "Mentor", icon: GraduationCap, href: "#mentor" },
    { name: isAuthenticated ? "Logout" : "Login/Signup", icon: LogIn, href: "#login" },
    { name: "About", icon: Info, href: "#about" },
  ];

  const handleClick = (item) => {
    if (item.name === "Login/Signup") {
      onLoginClick();
    } else if (item.name === "Logout") {
      if (onLogout) {
        onLogout();
      }
    } else {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 md:gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img 
                src={ongc} 
                alt="ONGC Logo" 
                className="relative h-10 w-10 md:h-12 md:w-12 rounded-full object-contain shadow-lg transform group-hover:scale-110 transition-transform duration-300 bg-white p-1"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight">ONGC</h1>
              <p className="text-xs md:text-sm text-gray-800 font-medium -mt-1">ROP Prediction</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleClick(item)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-900 font-medium transition-all duration-300 hover:bg-white/30 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/20 hover:bg-white/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <nav className="py-4 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleClick(item)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/20 hover:bg-white/40 transition-all duration-300 transform hover:translate-x-2 w-full text-left"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? "slideIn 0.3s ease-out forwards" : "none",
                  }}
                >
                  <Icon className="h-5 w-5 text-gray-900" />
                  <span className="text-gray-900 font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </header>
  );
}

export default Header;