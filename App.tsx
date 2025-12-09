import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatAssistant } from './components/ChatAssistant';
import { Product } from './types';
import { PRODUCT_IMAGE_URL, QR_CODE_URL, THUMBNAIL_URL, GENERIC_PRODUCT_URL } from './constants';
import { 
  Star, 
  ShoppingCart, 
  ChevronRight, 
  Calendar, 
  Clock, 
  ChevronDown, 
  Eye, 
  Truck, 
  Check, 
  ShieldCheck,
  Smartphone,
  Maximize2,
  Info,
  Moon,
  Sun,
  ArrowRight,
  Package,
  Gift,
  Zap,
  Search,
  Filter,
  Trash2,
  CreditCard,
  MapPin,
  Settings,
  User,
  Heart
} from 'lucide-react';

// Product Data
const currentProduct: Product = {
  id: 'BAU-2025-CL01',
  name: 'Lirios Calla "Pureza Escultural"',
  category: 'Colección Minimalista',
  description: 'La sofisticación hecha flor. Nuestros Lirios Calla blancos (Zantedeschia) se presentan en un jarrón de cerámica moderno de diseño exclusivo. Sus líneas curvas y su blanco inmaculado evocan paz, pureza y elegancia contemporánea. Ideal para espacios modernos o regalos que expresan admiración sincera.',
  price: 1450.00,
  stock: 5,
  image: PRODUCT_IMAGE_URL,
  qrImage: QR_CODE_URL,
  specs: [
    { label: 'Altura Total', value: '55-60 cm' },
    { label: 'Tallos', value: '12 Premium' },
    { label: 'Duración', value: '8-10 Días' },
    { label: 'Origen', value: 'Holanda' },
    { label: 'Base', value: 'Cerámica Mate' },
    { label: 'Cuidados', value: 'Agua fría diaria' },
  ]
};

const RelatedProductCard = ({ title, price, image, badge, onClick }: { title: string, price: number, image: string, badge?: string, onClick?: () => void }) => (
  <div onClick={onClick} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden group hover:shadow-xl hover:shadow-blue-900/5 transition-all cursor-pointer flex flex-col h-full">
    <div className="relative aspect-square overflow-hidden bg-slate-50 dark:bg-slate-800">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
      {badge && (
        <span className="absolute top-3 left-3 bg-brand-yellow text-blue-900 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
          {badge}
        </span>
      )}
      <button className="absolute bottom-3 right-3 bg-white dark:bg-slate-800 text-brand-blue p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg hover:bg-brand-blue hover:text-white">
        <ShoppingCart size={18} />
      </button>
    </div>
    <div className="p-4 flex flex-col flex-1">
      <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1 truncate">{title}</h3>
      <div className="flex items-center gap-1 mb-2">
        <div className="flex text-brand-yellow">
          {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
        </div>
        <span className="text-xs text-slate-400">(24)</span>
      </div>
      <div className="mt-auto pt-2 flex items-center justify-between">
        <p className="font-serif text-lg font-bold text-brand-blue dark:text-blue-400">${price.toLocaleString('es-MX')}</p>
        <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-blue dark:hover:text-white transition-colors">
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  </div>
);

// --- VIEW COMPONENTS ---

const HomeView: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-10 pb-24 space-y-10">
      
      {/* Hero Section */}
      <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-blue dark:bg-blue-900 text-white shadow-2xl shadow-blue-900/20 h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1596568278730-22687de4d94b?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Flowers" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/60 to-transparent dark:from-slate-900/90 dark:via-blue-900/60" />
        </div>
        
        <div className="relative z-10 px-8 lg:px-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-brand-yellow font-bold text-xs uppercase tracking-wider mb-4 border border-white/10">
            <SparkleIcon /> Nueva Colección 2025
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Elegancia natural para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white">momentos únicos</span>
          </h1>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-lg">
            Descubre nuestra selección de Lirios Calla y orquídeas importadas. Diseños minimalistas que transforman espacios.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => onNavigate('catalog')}
              className="bg-brand-yellow text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-500/20 flex items-center gap-2"
            >
              Ver Catálogo <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 rounded-xl font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm">
              Nuestra Historia
            </button>
          </div>
        </div>
      </div>

      {/* Stats / Dashboard Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-brand-blue dark:text-blue-400">
            <Package size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Estado de Pedido</p>
            <p className="text-lg font-bold text-slate-900 dark:text-white">En Camino</p>
            <p className="text-xs text-brand-blue dark:text-blue-400 font-medium cursor-pointer hover:underline">Rastrear #8821</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4">
           <div className="w-12 h-12 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl flex items-center justify-center text-brand-yellow">
            <Gift size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Puntos Bautista</p>
            <p className="text-lg font-bold text-slate-900 dark:text-white">1,250 Pts</p>
            <p className="text-xs text-slate-400 font-medium">Nivel Oro</p>
          </div>
        </div>

        <div className="bg-brand-blue dark:bg-blue-800 p-6 rounded-3xl shadow-lg shadow-blue-900/20 flex items-center justify-between text-white relative overflow-hidden group cursor-pointer" onClick={() => onNavigate('catalog')}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-white/20 transition-colors" />
          <div className="relative z-10">
            <p className="text-sm text-blue-100 font-medium mb-1">Oferta Relámpago</p>
            <p className="text-2xl font-serif font-bold mb-2">-20% Desc.</p>
            <div className="inline-flex items-center gap-1 text-xs font-bold bg-white/20 px-2 py-1 rounded-md">
              <Zap size={12} className="text-brand-yellow" />
              En Tulipanes
            </div>
          </div>
          <ChevronRight size={24} className="relative z-10 text-brand-yellow" />
        </div>
      </div>

      {/* Categories Grid */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Explorar por Categoría</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Rosas Premium', img: 'https://images.unsplash.com/photo-1548502340-9b4491746974?auto=format&fit=crop&q=80&w=400' },
            { name: 'Lirios & Orquídeas', img: PRODUCT_IMAGE_URL },
            { name: 'Ramos Mixtos', img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=400' },
            { name: 'Centros de Mesa', img: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=400' },
          ].map((cat, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer" onClick={() => onNavigate('catalog')}>
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold text-lg">{cat.name}</p>
                <div className="h-0.5 w-0 group-hover:w-full bg-brand-yellow transition-all duration-300 mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Featured Section (Similar to Catalog but abbreviated) */}
       <div>
         <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">Tendencias de la Semana</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <RelatedProductCard 
              title="Lirios Calla 'Pureza'" 
              price={1450.00} 
              image={PRODUCT_IMAGE_URL}
              badge="Top Ventas"
              onClick={() => onNavigate('catalog')}
            />
            <RelatedProductCard 
              title="Orquídea Imperial" 
              price={1250.00} 
              image={GENERIC_PRODUCT_URL}
            />
            <RelatedProductCard 
              title="Ramo Sunburst" 
              price={890.00} 
              image={GENERIC_PRODUCT_URL}
            />
             <RelatedProductCard 
              title="Tulipanes Azules" 
              price={1100.00} 
              image={GENERIC_PRODUCT_URL}
              badge="Nuevo"
            />
         </div>
       </div>

    </div>
  );
};

const CatalogView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(0);

  const today = new Date();
  const dates = [0, 1, 2, 3].map(offset => {
    const d = new Date();
    d.setDate(today.getDate() + offset);
    return {
      day: d.getDate(),
      month: d.toLocaleDateString('es-ES', { month: 'short' }),
      weekday: offset === 0 ? 'Hoy' : offset === 1 ? 'Mañana' : d.toLocaleDateString('es-ES', { weekday: 'long' }),
      fullDate: d
    };
  });

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-10 pb-24">
            
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Gallery & AR */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Visual Area - Split View for Image + QR */}
          <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[500px]">
            
            {/* Main Product Image */}
            <div className="flex-1 relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 group min-h-[400px]">
              <img 
                src={currentProduct.image} 
                alt={currentProduct.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-brand-blue dark:text-blue-400 font-bold px-3 py-1.5 rounded-full text-xs shadow-sm flex items-center gap-1 border border-transparent dark:border-slate-700">
                <Star size={12} fill="currentColor" className="text-brand-yellow" />
                Colección 2025
              </div>
              
              <button className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur text-slate-700 dark:text-slate-200 p-2.5 rounded-full hover:bg-brand-blue hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors shadow-lg">
                <Maximize2 size={20} />
              </button>
            </div>

            {/* Side QR Panel */}
            <div className="w-full md:w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 opacity-50" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 dark:bg-blue-500/20 flex items-center justify-center text-brand-blue dark:text-blue-400 mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Smartphone size={20} />
                  </div>
                  
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-1">Ver en tu Espacio</h4>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mb-4 leading-tight">Escanea para visualizar en Realidad Aumentada</p>
                  
                  <div className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-inner border border-slate-100 dark:border-slate-700 mb-2 transition-colors">
                      <img 
                        src={currentProduct.qrImage} 
                        alt="AR QR Code" 
                        className="w-24 h-24 object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white dark:p-1 dark:rounded-lg opacity-90 group-hover:opacity-100 transition-all" 
                      />
                  </div>
                  
                  <span className="text-[10px] font-bold text-brand-blue dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md transition-colors">Escanear</span>
                </div>
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {[currentProduct.image, THUMBNAIL_URL, THUMBNAIL_URL].map((img, i) => (
                <div key={i} className={`w-24 h-24 shrink-0 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${i === 0 ? 'border-brand-blue dark:border-blue-500 shadow-md scale-105' : 'border-transparent hover:border-slate-300 dark:hover:border-slate-600 opacity-70 hover:opacity-100'}`}>
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
          </div>

          {/* Description & Specs Grid */}
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Info size={20} className="text-brand-yellow" />
              Detalles del Producto
            </h3>
            
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm mb-6 transition-colors duration-300">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-light">
                {currentProduct.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                {currentProduct.specs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col border-l-2 border-brand-yellow/30 pl-3">
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold mb-1">{spec.label}</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Purchase Options */}
        <div className="lg:col-span-5">
          <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] shadow-lg shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-slate-800 sticky top-24 transition-colors duration-300">
            
            {/* Title & Price */}
            <div className="mb-8 text-center md:text-left">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">{currentProduct.name}</h1>
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <div className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-blue-400 tracking-tight">${currentProduct.price.toLocaleString('es-MX')}</div>
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
                <div className="flex items-center gap-2 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1.5 rounded-full">
                  <div className="flex text-brand-yellow">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-xs font-bold text-yellow-700 dark:text-yellow-500">4.9 (128)</span>
                </div>
              </div>
            </div>

            {/* Date Selector */}
            <div className="mb-6 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <label className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-brand-blue dark:text-blue-400" />
                  Fecha de Entrega
                </label>
                <span className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-medium">Diciembre 2025</span>
              </div>
              
              <div className="grid grid-cols-4 gap-2 mb-4">
                {dates.map((d, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedDate(idx)}
                    className={`flex flex-col items-center justify-center py-3 rounded-xl border transition-all relative overflow-hidden ${
                      selectedDate === idx
                        ? 'bg-brand-blue border-brand-blue text-white shadow-md shadow-blue-200 dark:shadow-none'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-brand-blue/50 dark:hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/20'
                    }`}
                  >
                    {selectedDate === idx && <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow"></div>}
                    <span className={`text-[10px] uppercase font-bold mb-0.5 ${selectedDate === idx ? 'text-blue-200' : 'text-slate-400 dark:text-slate-500'}`}>{d.weekday.slice(0,3)}</span>
                    <span className="text-xl font-bold mb-0.5">{d.day}</span>
                  </button>
                ))}
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                  <Clock size={16} />
                </div>
                <select className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 py-3 pl-10 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-sm font-medium cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                  <option>Selecciona horario</option>
                  <option>Mañana (9:00 AM - 1:00 PM)</option>
                  <option>Tarde (2:00 PM - 6:00 PM)</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            {/* Demand Warning */}
            <div className="mb-6 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/30 p-4 rounded-xl flex items-center gap-3 animate-pulse-slow">
              <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full text-orange-600 dark:text-orange-400">
                <Eye size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-orange-800 dark:text-orange-400">¡Pocas unidades disponibles!</p>
                <p className="text-[10px] text-orange-700/70 dark:text-orange-500/70">Este arreglo es exclusivo y quedan solo 5.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-brand-blue dark:bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 hover:-translate-y-0.5">
                  <span>Comprar Ahora</span>
                  <ChevronRight size={18} />
              </button>
              <button className="w-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 hover:border-brand-blue dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-blue-400 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all">
                  <ShoppingCart size={18} />
                  Agregar al carrito
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2 text-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="flex flex-col items-center gap-2">
                  <Truck size={20} className="text-brand-blue dark:text-blue-400" />
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 font-semibold">Envío Premium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                  <ShieldCheck size={20} className="text-brand-blue dark:text-blue-400" />
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 font-semibold">Garantía Total</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                  <Check size={20} className="text-brand-blue dark:text-blue-400" />
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 font-semibold">Flores Frescas</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Related Products Section */}
      <div className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-brand-yellow rounded-full"></span>
              Completa tu Regalo
            </h2>
            <button className="text-brand-blue dark:text-blue-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              Ver todo <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-80">
            <RelatedProductCard 
              title="Orquídea Phalaenopsis" 
              price={850.00} 
              image={GENERIC_PRODUCT_URL}
              badge="Elegante"
            />
            <RelatedProductCard 
              title="Tulipanes Blancos" 
              price={920.00} 
              image={GENERIC_PRODUCT_URL}
            />
            <RelatedProductCard 
              title="Rosas & Lilium" 
              price={1150.00} 
              image={GENERIC_PRODUCT_URL}
              badge="Nuevo"
            />
            <RelatedProductCard 
              title="Caja Premium Mixta" 
              price={1550.00} 
              image={GENERIC_PRODUCT_URL}
            />
          </div>
      </div>

    </div>
  );
};

const SearchView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-10 min-h-screen">
      <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-8">Buscar en el Catálogo</h1>
      
      {/* Search Bar */}
      <div className="relative mb-8">
        <input 
          type="text" 
          placeholder="¿Qué flores estás buscando hoy? (Ej: Rosas Rojas, Tulipanes...)" 
          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-5 pl-14 pr-6 text-lg shadow-lg shadow-blue-900/5 focus:ring-2 focus:ring-brand-blue/20 focus:outline-none dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-brand-blue text-white p-2.5 rounded-xl hover:bg-blue-700 transition-colors">
          <Filter size={20} />
        </button>
      </div>

      {/* Popular Tags */}
      <div className="mb-12">
        <p className="text-sm text-slate-500 dark:text-slate-400 font-bold mb-4 uppercase tracking-wider">Categorías Populares</p>
        <div className="flex flex-wrap gap-3">
          {['Cumpleaños', 'Aniversario', 'Rosas Rojas', 'Orquídeas', 'Boda', 'Tulipanes', 'Económicos'].map((tag, i) => (
            <button key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-brand-yellow hover:text-blue-900 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium transition-colors">
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Mock Results */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          {searchTerm ? `Resultados para "${searchTerm}"` : 'Sugerencias para ti'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <RelatedProductCard 
              key={item}
              title={`Arreglo Floral ${item}`} 
              price={800 + (item * 150)} 
              image={GENERIC_PRODUCT_URL}
              badge={item % 3 === 0 ? "Oferta" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FavoritesView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">Lista de Deseos</h1>
        <span className="text-slate-500 dark:text-slate-400 font-medium">4 artículos</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative">
              <RelatedProductCard 
                title={`Favorito Guardado ${item}`} 
                price={1200.00} 
                image={GENERIC_PRODUCT_URL}
              />
              <button className="absolute top-3 right-3 bg-white text-red-500 p-2 rounded-full shadow-md hover:bg-red-50 transition-colors z-10">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl text-center border border-blue-100 dark:border-blue-900/50">
        <Heart size={48} className="mx-auto text-brand-blue dark:text-blue-400 mb-4" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">¿Buscas más inspiración?</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6">Explora nuestra colección completa y guarda lo que te enamore.</p>
        <button className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
          Ir al Catálogo
        </button>
      </div>
    </div>
  );
};

const CartView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-10">
      <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-8">Tu Carrito de Compras</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Cart Items */}
        <div className="lg:col-span-8 space-y-4">
          {[1, 2].map((item) => (
            <div key={item} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex gap-4 items-center">
              <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                <img src={GENERIC_PRODUCT_URL} alt="Item" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white">Ramo Especial de Temporada</h3>
                  <button className="text-slate-400 hover:text-red-500"><Trash2 size={18} /></button>
                </div>
                <p className="text-sm text-slate-500 mb-3">Tamaño: Grande • Entrega: Mañana</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-1">
                    <button className="text-slate-400 hover:text-brand-blue font-bold">-</button>
                    <span className="font-bold text-slate-800 dark:text-slate-200">1</span>
                    <button className="text-slate-400 hover:text-brand-blue font-bold">+</button>
                  </div>
                  <p className="font-bold text-brand-blue dark:text-blue-400 text-lg">$1,450.00</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex items-center gap-2 text-brand-blue dark:text-blue-400 mt-4 cursor-pointer hover:underline">
            <ArrowRight size={18} />
            <span className="font-bold">Seguir comprando</span>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 sticky top-24">
            <h3 className="font-bold text-lg mb-6 text-slate-900 dark:text-white">Resumen del Pedido</h3>
            
            <div className="space-y-3 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Subtotal</span>
                <span>$2,900.00</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Envío</span>
                <span className="text-green-500 font-bold">GRATIS</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Impuestos</span>
                <span>$464.00</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl text-slate-900 dark:text-white">Total</span>
              <span className="font-bold text-2xl text-brand-blue dark:text-blue-400">$3,364.00</span>
            </div>

            <button className="w-full bg-brand-yellow text-blue-900 font-bold py-4 rounded-xl shadow-lg shadow-yellow-500/20 hover:bg-yellow-300 transition-colors flex justify-center items-center gap-2">
              Proceder al Pago <CreditCard size={20} />
            </button>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 text-xs">
               <ShieldCheck size={14} />
               Pago 100% Seguro
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const AccountView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 lg:p-10">
      <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-8">Mi Cuenta</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Profile Card */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center w-full md:w-1/3">
          <div className="w-24 h-24 bg-brand-blue rounded-full mb-4 flex items-center justify-center text-white text-3xl font-bold">
            JA
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Josmar Aldair</h2>
          <p className="text-slate-500 text-sm mb-6">josmar050110@gmail.com</p>
          <div className="w-full bg-yellow-50 dark:bg-yellow-900/10 p-3 rounded-xl mb-2">
            <p className="text-xs text-yellow-700 dark:text-yellow-500 font-bold uppercase tracking-wide mb-1">Puntos Bautista</p>
            <p className="text-2xl font-bold text-brand-blue dark:text-blue-400">1,250</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
           {[
             { icon: Package, label: 'Mis Pedidos', desc: 'Rastrear, devolver o comprar de nuevo' },
             { icon: MapPin, label: 'Direcciones', desc: 'Gestionar lugares de entrega' },
             { icon: CreditCard, label: 'Pagos', desc: 'Tarjetas guardadas y facturación' },
             { icon: Settings, label: 'Ajustes', desc: 'Notificaciones y contraseña' },
           ].map((action, i) => (
             <button key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-brand-blue dark:hover:border-blue-500 text-left transition-all group">
               <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-brand-blue dark:text-blue-400 mb-3 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                 <action.icon size={20} />
               </div>
               <h3 className="font-bold text-slate-900 dark:text-white mb-1">{action.label}</h3>
               <p className="text-xs text-slate-500 leading-snug">{action.desc}</p>
             </button>
           ))}
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-bold text-lg">Pedidos Recientes</h3>
          <button className="text-brand-blue text-sm font-bold">Ver todos</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase text-xs font-bold">
              <tr>
                <th className="px-6 py-4">Pedido #</th>
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[1, 2, 3].map((order) => (
                <tr key={order} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-bold">#{8820 + order}</td>
                  <td className="px-6 py-4 text-slate-500">Dic {10 - order}, 2025</td>
                  <td className="px-6 py-4 font-bold">$1,450.00</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-md text-xs font-bold ${order === 1 ? 'bg-blue-50 text-brand-blue' : 'bg-green-50 text-green-600'}`}>
                      {order === 1 ? 'En Camino' : 'Entregado'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-brand-blue"><Eye size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const SparkleIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-brand-yellow">
    <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
  </svg>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('catalog');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 lg:px-12 sticky top-0 z-10 transition-colors duration-300">
           <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 overflow-hidden whitespace-nowrap mask-linear">
             <span 
               className={`cursor-pointer transition-colors ${activeTab === 'home' ? 'font-bold text-brand-blue dark:text-blue-400' : 'hover:text-brand-blue dark:hover:text-blue-400'}`}
               onClick={() => setActiveTab('home')}
             >
               Inicio
             </span>
             {activeTab === 'catalog' && (
               <>
                 <ChevronRight size={14} />
                 <span className="font-semibold text-brand-blue dark:text-blue-400 truncate">{currentProduct.name}</span>
               </>
             )}
             {activeTab === 'search' && (
                <>
                  <ChevronRight size={14} />
                  <span className="font-semibold text-brand-blue dark:text-blue-400">Búsqueda</span>
                </>
             )}
              {activeTab === 'favorites' && (
                <>
                  <ChevronRight size={14} />
                  <span className="font-semibold text-brand-blue dark:text-blue-400">Favoritos</span>
                </>
             )}
              {activeTab === 'cart' && (
                <>
                  <ChevronRight size={14} />
                  <span className="font-semibold text-brand-blue dark:text-blue-400">Carrito</span>
                </>
             )}
              {activeTab === 'account' && (
                <>
                  <ChevronRight size={14} />
                  <span className="font-semibold text-brand-blue dark:text-blue-400">Mi Cuenta</span>
                </>
             )}
           </div>

           <div className="flex items-center gap-4 shrink-0">
             <button 
               onClick={toggleTheme}
               className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-all"
             >
               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>

             <div className="relative cursor-pointer group p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors" onClick={() => setActiveTab('cart')}>
               <ShoppingCart className="text-slate-600 dark:text-slate-300 group-hover:text-brand-blue dark:group-hover:text-blue-400 transition-colors" size={22} />
               <span className="absolute top-1 right-1 bg-brand-yellow text-blue-900 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">2</span>
             </div>
           </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {activeTab === 'home' && <HomeView onNavigate={setActiveTab} />}
          {activeTab === 'catalog' && <CatalogView />}
          {activeTab === 'search' && <SearchView />}
          {activeTab === 'favorites' && <FavoritesView />}
          {activeTab === 'cart' && <CartView />}
          {activeTab === 'account' && <AccountView />}
        </div>
      </main>

      <ChatAssistant />
    </div>
  );
};

export default App;