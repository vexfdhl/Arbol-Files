import React, { useState, useEffect } from 'react';
import { Menu, MessageSquare } from 'lucide-react';
import Home from './views/Home';
import Resources from './views/Resources';
import NavigationOverlay from './components/NavigationOverlay';
import Concierge from './components/Concierge';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen w-full bg-brand-black selection:bg-brand-green selection:text-brand-cream">
      
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-40 px-8 py-6 md:px-12 md:py-8 flex justify-between items-start mix-blend-difference text-brand-cream pointer-events-none">
        <div 
          onClick={() => setCurrentView('HOME')}
          className="font-serif text-3xl md:text-4xl font-bold tracking-tighter cursor-pointer pointer-events-auto hover:opacity-70 transition-opacity"
        >
          67
        </div>
        
        <div className="flex items-center gap-4 pointer-events-auto">
          <button 
            onClick={() => setIsConciergeOpen(true)}
            className="flex items-center gap-2 group px-4 py-2 rounded-full border border-brand-cream/20 hover:bg-brand-cream hover:text-brand-black transition-all duration-300"
          >
            <span className="hidden md:block font-sans text-xs tracking-widest uppercase">Concierge</span>
            <MessageSquare size={16} />
          </button>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 group"
          >
            <span className="hidden md:block font-sans text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">Menu</span>
            <div className="w-12 h-12 rounded-full border border-brand-cream/40 flex items-center justify-center hover:bg-brand-cream hover:text-brand-black transition-all duration-300">
              <Menu size={20} />
            </div>
          </button>
        </div>
      </header>

      {/* Navigation Overlay */}
      <NavigationOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={setCurrentView} 
      />

      {/* AI Concierge */}
      <Concierge 
        isOpen={isConciergeOpen} 
        onClose={() => setIsConciergeOpen(false)} 
      />

      {/* Main Content Area */}
      <main className="w-full">
        {currentView === 'HOME' && <Home />}
        {currentView === 'RESOURCES' && <Resources />}
      </main>

    </div>
  );
};

export default App;