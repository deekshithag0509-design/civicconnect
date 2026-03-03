import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut, 
  ShieldCheck,
  UserCircle,
  BarChart3,
  MapPin,
  Bell
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { cn } from '../lib/utils';

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: user?.role === 'citizen' ? 'My Issues' : 'Issues', path: '/issues' },
    { icon: MessageSquare, label: 'Discussions', path: '/discussions' },
    { icon: MapPin, label: 'Nearby', path: '/map' },
  ];

  if (user?.role === 'admin') {
    menuItems.push({ icon: Users, label: 'User Management', path: '/users' });
    menuItems.push({ icon: ShieldCheck, label: 'Moderation', path: '/moderation' });
  }

  if (user?.role === 'politician') {
    menuItems.push({ icon: BarChart3, label: 'Performance', path: '/performance' });
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 flex flex-col z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
          C
        </div>
        <span className="text-xl font-display font-bold text-primary">CivicConnect</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              isActive 
                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                : "text-slate-500 hover:bg-slate-50 hover:text-primary"
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon size={20} className={cn("transition-colors", isActive ? "text-white" : "group-hover:text-primary")} />
                <span className="font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100 space-y-1">
        <NavLink
          to="/settings"
          className={({ isActive }) => cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
            isActive ? "bg-slate-100 text-primary" : "text-slate-500 hover:bg-slate-50"
          )}
        >
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </NavLink>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
