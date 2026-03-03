import React from 'react';
import { Search, Bell, Moon, Sun, ChevronDown } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Topbar() {
  const { user } = useAuth();
  const [isDark, setIsDark] = React.useState(false);

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 fixed top-0 right-0 left-64 z-40 px-8 flex items-center justify-between">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search issues, politicians, or discussions..." 
            className="w-full bg-slate-100 border-none rounded-2xl py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="relative">
          <button className="p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
              3
            </span>
          </button>
        </div>

        <div className="h-8 w-px bg-slate-200 mx-2" />

        <button className="flex items-center gap-3 p-1.5 hover:bg-slate-100 rounded-2xl transition-colors group">
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-primary/10">
            <img src={user?.avatar} alt={user?.name} className="w-full h-full object-cover" />
          </div>
          <div className="text-left hidden lg:block">
            <p className="text-sm font-semibold text-slate-900 leading-tight">{user?.name}</p>
            <p className="text-xs text-slate-500 capitalize">{user?.role}</p>
          </div>
          <ChevronDown size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
        </button>
      </div>
    </header>
  );
}
