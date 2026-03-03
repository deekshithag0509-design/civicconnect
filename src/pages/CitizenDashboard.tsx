import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus, 
  MapPin, 
  TrendingUp, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MOCK_ISSUES } from '../mockData';

export default function CitizenDashboard() {
  const stats = [
    { label: 'My Issues', value: '12', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Resolved', value: '8', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'In Progress', value: '3', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Impact Score', value: '850', icon: TrendingUp, color: 'text-primary', bg: 'bg-primary/5' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Citizen Dashboard</h1>
          <p className="text-slate-500">Track your contributions and stay updated on local governance.</p>
        </div>
        <Link to="/report-issue" className="btn-primary flex items-center gap-2 shadow-lg shadow-primary/20">
          <Plus size={20} /> Report New Issue
        </Link>
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
        {/* Recent Issues */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">My Submitted Issues</h3>
            <Link to="/issues" className="text-primary font-bold text-sm hover:underline">View All</Link>
          </div>
          
          <div className="space-y-4">
            {MOCK_ISSUES.map((issue, i) => (
              <motion.div 
                key={issue.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[24px] card-shadow border border-slate-100 hover:border-primary/20 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      issue.status === 'resolved' ? "bg-green-50 text-green-600" : 
                      issue.status === 'in-progress' ? "bg-orange-50 text-orange-600" : "bg-blue-50 text-blue-600"
                    )}>
                      {issue.status === 'resolved' ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{issue.title}</h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin size={12} /> {issue.location} • {issue.category}
                      </p>
                    </div>
                  </div>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    issue.urgency === 'high' ? "bg-red-50 text-red-600" : 
                    issue.urgency === 'medium' ? "bg-orange-50 text-orange-600" : "bg-blue-50 text-blue-600"
                  )}>
                    {issue.urgency} Priority
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                    <span className="flex items-center gap-1"><TrendingUp size={14} /> {issue.upvotes}</span>
                    <span className="flex items-center gap-1"><MessageSquare size={14} /> {issue.commentsCount}</span>
                  </div>
                  <Link to={`/issues/${issue.id}`} className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Track Status <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-8">
          {/* Map Preview */}
          <div className="bg-white p-6 rounded-[32px] card-shadow border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Nearby Issues</h3>
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="https://picsum.photos/seed/map/400/400" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" alt="Map" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <MapPin size={16} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass p-3 rounded-xl text-xs font-bold text-slate-900">
                5 Active issues in your area
              </div>
            </div>
          </div>

          {/* Government Updates */}
          <div className="bg-white p-6 rounded-[32px] card-shadow border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Latest Updates</h3>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex-shrink-0 flex items-center justify-center text-primary">
                    <AlertCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">New Policy Update</p>
                    <p className="text-xs text-slate-500 leading-relaxed">Road maintenance scheduled for Central District starting Monday.</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">2 hours ago</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-primary font-bold text-sm border border-primary/10 rounded-xl hover:bg-primary/5 transition-colors">
              View All Updates
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
