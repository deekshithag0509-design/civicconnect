import React from 'react';
import { 
  Users, 
  FileText, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  ArrowUpRight, 
  MoreVertical,
  Download,
  Filter
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { motion } from 'motion/react';

const barData = [
  { name: 'Jan', issues: 400 },
  { name: 'Feb', issues: 300 },
  { name: 'Mar', issues: 600 },
  { name: 'Apr', issues: 800 },
  { name: 'May', issues: 500 },
  { name: 'Jun', issues: 900 },
];

const pieData = [
  { name: 'Roads', value: 400, color: '#1E3A8A' },
  { name: 'Water', value: 300, color: '#3B82F6' },
  { name: 'Electricity', value: 300, color: '#22C55E' },
  { name: 'Sanitation', value: 200, color: '#F59E0B' },
];

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '24,500', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Total Issues', value: '1,240', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Resolved', value: '890', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Pending Approvals', value: '45', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Admin Overview</h1>
          <p className="text-slate-500">Welcome back, Administrator. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <Filter size={18} /> Filter
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Download size={18} /> Export Data
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[24px] card-shadow border border-slate-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", stat.bg, stat.color)}>
                <stat.icon size={24} />
              </div>
              <span className="flex items-center gap-1 text-green-500 text-sm font-bold">
                <TrendingUp size={14} /> +12%
              </span>
            </div>
            <h3 className="text-slate-500 font-medium text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] card-shadow border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-8">Monthly Issue Trends</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#F8FAFC' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="issues" fill="#1E3A8A" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[32px] card-shadow border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-8">Issue Categories</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-600">{item.name}</span>
                </div>
                <span className="font-bold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-[32px] card-shadow border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">Recent User Activity</h3>
          <button className="text-primary font-bold text-sm hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-xl" alt="" />
                      <div>
                        <p className="font-bold text-slate-900">User Name {i}</p>
                        <p className="text-xs text-slate-500">user{i}@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold capitalize">Citizen</span>
                  </td>
                  <td className="px-8 py-4">
                    <span className="flex items-center gap-1.5 text-green-600 text-xs font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600" /> Active
                    </span>
                  </td>
                  <td className="px-8 py-4 text-sm text-slate-500">Oct 24, 2024</td>
                  <td className="px-8 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary hover:bg-white rounded-lg shadow-sm border border-transparent hover:border-slate-100"><ArrowUpRight size={18} /></button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-white rounded-lg shadow-sm border border-transparent hover:border-slate-100"><MoreVertical size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
