import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'about', label: 'About', number: '01' },
    { id: 'projects', label: 'Projects', number: '02' },
    { id: 'cv', label: 'CV', number: '03' },
    { id: 'contact', label: 'Contact', number: '04' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:fixed lg:top-8 lg:left-8 lg:flex lg:flex-col lg:gap-8 lg:z-50">
        <div className="text-white text-sm tracking-wider">PORTFOLIO</div>
        <div className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex items-center gap-4 text-left transition-all duration-300 ${
                currentSection === item.id 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <span className="text-xs tracking-wider">({item.number})</span>
              <span className="text-sm tracking-wide">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 text-white"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
          <div className="flex justify-between items-center p-6">
            <div className="text-white text-sm tracking-wider">MENU</div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-4 text-left transition-all duration-300 ${
                  currentSection === item.id 
                    ? 'text-white' 
                    : 'text-gray-400'
                }`}
              >
                <span className="text-sm tracking-wider">({item.number})</span>
                <span className="text-xl tracking-wide">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}