import React from 'react';
import { 
  Users, 
  FileText, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  MessageSquare,
  Send,
  ArrowRight,
  Star,
  Zap,
  Bell
} from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_ISSUES } from '../mockData';

export default function PoliticianDashboard() {
  const stats = [
    { label: 'Assigned Issues', value: '156', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Issues Resolved', value: '124', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Response Time', value: '4.2h', icon: Zap, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Approval Rating', value: '92%', icon: Star, color: 'text-primary', bg: 'bg-primary/5' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Politician Dashboard</h1>
          <p className="text-slate-500">Manage your constituency's issues and engage with your citizens.</p>
        </div>
        <button className="btn-primary flex items-center gap-2 shadow-lg shadow-primary/20">
          <Send size={20} /> Post Public Update
        </button>
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
        {/* Assigned Issues */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Priority Issues</h3>
            <button className="text-primary font-bold text-sm hover:underline">View All Tasks</button>
          </div>
          
          <div className="space-y-4">
            {MOCK_ISSUES.filter(i => i.urgency === 'high').map((issue, i) => (
              <motion.div 
                key={issue.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[24px] card-shadow border border-slate-100 hover:border-primary/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{issue.title}</h4>
                      <p className="text-xs text-slate-500">Reported by Citizen • 2 hours ago</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    High Priority
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-6 line-clamp-2">{issue.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-4">
                    <button className="text-xs font-bold text-primary px-4 py-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                      Respond Now
                    </button>
                    <button className="text-xs font-bold text-slate-500 hover:text-slate-700">
                      Assign Dept
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

        {/* Community Announcements */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-[32px] card-shadow border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Constituency Pulse</h3>
            <div className="space-y-6">
              <div className="p-4 bg-slate-50 rounded-2xl">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Public Sentiment</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[78%]" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">78% Positive</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Recent Feedback</p>
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-3">
                    <img src={`https://picsum.photos/seed/citizen${i}/100/100`} className="w-8 h-8 rounded-full" alt="" />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-slate-900">Citizen {i}</p>
                      <p className="text-xs text-slate-500 mt-0.5 italic">"Great work on the park renovation!"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-primary p-6 rounded-[32px] card-shadow text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Bell size={20} /> Announcements
            </h3>
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              Schedule a town hall meeting or share progress on ongoing projects with your citizens.
            </p>
            <button className="w-full py-3 bg-white text-primary font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors">
              New Announcement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
