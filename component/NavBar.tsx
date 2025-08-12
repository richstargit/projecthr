'use client'; // ถ้าใช้ Next.js App Router
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "#" },
    { name: "Problem", path: "#problem" },
    { name: "Product", path: "#product" },
    { name: "Contact", path: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState('');
  const targetRef = useRef('');
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const sections = navLinks.map(link => {
        if (link.path === "#") {
          return;
        };
        const el = document.querySelector(link.path);
        if (!el) return null;

        const top = el.getBoundingClientRect().top + window.scrollY;
        return { id: link.path, top };
      }).filter(Boolean);
      let current = sections.findLast(section => scrollY >= section!.top - 250);
      if(!current){
        current = {id:"#",top:1}
      }

      if (targetRef.current && current.id !== targetRef.current) {
        return;
      }
      targetRef.current = '';
      setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar shadow-lg bg-white w-[98%] top-5 m-auto mb-4 rounded-lg sticky top-1 z-50 relative">
      <div className="flex-1">
        <a href="#" className="font-semibold text-xl rounded-md ml-5">
          HIRENZ
        </a>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-5 text-lg font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`mr-5 ${
                activeSection === link.path ? 'bg-slate-900 text-white rounded-md' : ''
              }`}
            >
              <a href={link.path} onClick={() => {
                  targetRef.current = link.path;
                  setActiveSection(link.path)}}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden btn btn-ghost mr-2"
        onClick={() => setOpen((p) => !p)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {/* ไอคอนง่าย ๆ ด้วย SVG (จะใช้ไลบรารีไอคอนก็ได้) */}
        {!open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" strokeLinecap="round" />
        </svg>
        )}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="bg-white md:hidden absolute left-0 right-0 top-full mt-2 rounded-lg shadow p-2">
          <ul className="menu menu-vertical text-base font-medium">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`${
                  activeSection === link.path ? 'bg-slate-900 text-white rounded-md' : ''
                }`}
              >
                <a href={link.path} onClick={() => {
                  targetRef.current = link.path;
                  setActiveSection(link.path)}}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
