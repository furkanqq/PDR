import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Ana Sayfa" },
    { path: "/about", label: "Hakkımda" },
    { path: "/services", label: "Hizmetler" },
    { path: "/blog", label: "Blog" },
    { path: "/testimonials", label: "Yorumlar" },
    { path: "/contact", label: "İletişim" },
  ];

  return (
    <header className="nav-header border border-red-500">
      <div className="flex items-center">
        <Link
          to="/"
          className="font-semibold text-lg relative w-48 h-16"
          style={{ color: "var(--text-primary)" }}
        >
          <img
            src="/logo.png"
            alt="Selim İlhan - Psikolojik Danışman"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ color: "var(--text-primary)" }}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-lg border md:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
