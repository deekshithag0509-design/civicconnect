import React from 'react';
import { 
  Shield, 
  Flag, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  MessageSquare, 
  UserX,
  ArrowRight,
  Filter,
  Search
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ModeratorDashboard() {
  const stats = [
    { label: 'Flagged Content', value: '24', icon: Flag, color: 'text-red-600', bg: 'bg-red-50' },
    { label: 'Pending Reports', value: '12', icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Resolved Today', value: '45', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Active Users', value: '1.2k', icon: Shield, color: 'text-primary', bg: 'bg-primary/5' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Moderation Hub</h1>
          <p className="text-slate-500">Maintain community standards and resolve conflicts.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Filter size={18} /> Filter
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Shield size={18} /> Mod Settings
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[24px] card-shadow border border-slate-100"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", stat.bg, stat.color)}>
              <stat.icon size={24} />
            </div>
            <h3 className="text-slate-500 font-medium text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Flagged Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Flagged Discussions</h3>
            <button className="text-primary font-bold text-sm hover:underline">View All Reports</button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[24px] card-shadow border border-slate-100 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                      <Flag size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Inappropriate Comment in "Road Repair"</h4>
                      <p className="text-xs text-slate-500">Reported by 3 users • 15 mins ago</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Urgent
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl mb-6 border-l-4 border-red-500">
                  <p className="text-sm text-slate-600 italic">"This is absolutely ridiculous, the government is doing nothing and they are all..."</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-lg hover:bg-green-600 transition-colors flex items-center gap-1">
                      <CheckCircle2 size={14} /> Dismiss
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white text-xs font-bold rounded-lg hover:bg-red-600 transition-colors flex items-center gap-1">
                      <XCircle size={14} /> Remove
                    </button>
                    <button className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1">
                      <UserX size={14} /> Warn User
                    </button>
                  </div>
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mod Tools & Analytics */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-[32px] card-shadow border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Moderation Tools</h3>
            <div className="space-y-3">
              <button className="w-full p-4 bg-slate-50 rounded-2xl flex items-center justify-between group hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-400 group-hover:text-primary">
                    <Search size={16} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">Keyword Filter</span>
                </div>
                <ArrowRight size={16} className="text-slate-300 group-hover:text-primary" />
              </button>
              <button className="w-full p-4 bg-slate-50 rounded-2xl flex items-center justify-between group hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-400 group-hover:text-primary">
                    <UserX size={16} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">Banned IPs</span>
                </div>
                <ArrowRight size={16} className="text-slate-300 group-hover:text-primary" />
              </button>
              <button className="w-full p-4 bg-slate-50 rounded-2xl flex items-center justify-between group hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-400 group-hover:text-primary">
                    <MessageSquare size={16} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">Auto-Mod Logs</span>
                </div>
                <ArrowRight size={16} className="text-slate-300 group-hover:text-primary" />
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-[32px] card-shadow border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Report Analytics</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase">
                  <span>Spam</span>
                  <span>45%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[45%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase">
                  <span>Harassment</span>
                  <span>30%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[30%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase">
                  <span>Misinformation</span>
                  <span>25%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 w-[25%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
