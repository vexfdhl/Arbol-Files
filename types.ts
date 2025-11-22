export interface ResourceItem {
  id: string;
  name: string;
  category: 'Religious' | 'Shelters' | 'Food Pantries';
  location: 'Dallas' | 'Austin' | 'Houston';
  address: string;
  phone: string;
}

export type ViewState = 'HOME' | 'RESOURCES';

export interface NavigationProps {
  currentView: ViewState;
  setCurrentView: (view: ViewState) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}
