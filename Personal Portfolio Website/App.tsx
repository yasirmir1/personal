import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { CV } from './components/CV';
import { Contact } from './components/Contact';

export default function App() {
  const [currentSection, setCurrentSection] = useState('about');

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '4') {
        const sections = ['about', 'projects', 'cv', 'contact'];
        const index = parseInt(e.key) - 1;
        if (sections[index]) {
          setCurrentSection(sections[index]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'cv':
        return <CV />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      <main className="relative">
        {renderCurrentSection()}
      </main>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2025 Your Name. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <span>Portfolio</span>
            <span>•</span>
            <span>Creative Direction</span>
            <span>•</span>
            <span>Digital Design</span>
          </div>
        </div>
      </footer>
    </div>
  );
}