import React from 'react';
import { Home, Grid, Heart, ShoppingBag, LogOut, Flower2, Search, User } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="hidden md:flex flex-col w-20 lg:w-64 h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 sticky top-0 left-0 z-20 transition-all duration-300">
      <div className="h-20 flex items-center justify-center lg:justify-start lg:px-6 border-b border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 bg-brand-blue dark:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 dark:shadow-none shrink-0 cursor-pointer" onClick={() => onTabChange('home')}>
          <Flower2 size={24} />
        </div>
        <div className="hidden lg:block ml-3">
          <h1 className="font-serif text-lg font-bold text-slate-900 dark:text-white leading-tight cursor-pointer" onClick={() => onTabChange('home')}>Florería<br/>Bautista</h1>
        </div>
      </div>

      <nav className="flex-1 px-2 lg:px-4 space-y-2 mt-6">
        <NavItem 
          icon={<Home size={22} />} 
          label="Inicio" 
          active={activeTab === 'home'} 
          onClick={() => onTabChange('home')}
        />
        <NavItem 
          icon={<Grid size={22} />} 
          label="Catálogo" 
          active={activeTab === 'catalog'} 
          onClick={() => onTabChange('catalog')}
        />
        <NavItem 
          icon={<Search size={22} />} 
          label="Buscar" 
          active={activeTab === 'search'} 
          onClick={() => onTabChange('search')}
        />
        <NavItem 
          icon={<Heart size={22} />} 
          label="Favoritos" 
          active={activeTab === 'favorites'} 
          onClick={() => onTabChange('favorites')}
        />
        <NavItem 
          icon={<ShoppingBag size={22} />} 
          label="Carrito" 
          active={activeTab === 'cart'} 
          onClick={() => onTabChange('cart')}
        />
        <NavItem 
          icon={<User size={22} />} 
          label="Mi Cuenta" 
          active={activeTab === 'account'} 
          onClick={() => onTabChange('account')}
        />
      </nav>

      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <button className="flex items-center justify-center lg:justify-start gap-3 text-slate-400 hover:text-red-500 transition-colors w-full px-2 lg:px-4 py-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
          <LogOut size={22} />
          <span className="hidden lg:block font-medium text-sm">Salir</span>
        </button>
      </div>
    </aside>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center lg:justify-start gap-3 w-full px-2 lg:px-4 py-3 rounded-xl transition-all duration-200 group ${
      active
        ? 'bg-brand-blue dark:bg-blue-700 text-white shadow-md shadow-blue-200 dark:shadow-none'
        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brand-blue dark:hover:text-blue-400'
    }`}
  >
    {icon}
    <span className="hidden lg:block font-medium text-sm">{label}</span>
  </button>
);