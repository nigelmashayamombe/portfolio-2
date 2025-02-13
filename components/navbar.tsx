'use client';

import { motion } from 'framer-motion';
import { useCursorStore } from '@/lib/store';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const setVariant = useCursorStore((state) => state.setVariant);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        top: document.getElementById(item.href.substring(1))?.offsetTop || 0
      }));

      const currentSection = sections.reduce((acc, section) => {
        if (window.scrollY >= section.top - 200) return section.id;
        return acc;
      }, sections[0].id);

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 dark:bg-black/40 bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'py-6 dark:bg-black/20 bg-white/60 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <button
            className="md:hidden text-current p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex justify-center items-center space-x-8 flex-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-teal-400 transition-colors relative ${
                  activeSection === item.href.substring(1) ? 'text-blue-600 dark:text-teal-400' : ''
                }`}
                onMouseEnter={() => setVariant('hover')}
                onMouseLeave={() => setVariant('default')}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600 dark:bg-teal-400"
                    layoutId="activeSection"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full dark:bg-white/10 dark:hover:bg-white/20 bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-900" />
              )}
            </button>
          )}
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/90 dark:bg-black/90 backdrop-blur-lg py-4 shadow-lg"
          >
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-teal-400 transition-colors ${
                    activeSection === item.href.substring(1) ? 'text-blue-600 dark:text-teal-400' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}