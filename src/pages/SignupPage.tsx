import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Shield, Lock, ChevronDown, Upload, Loader2, UserCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { UserRole } from '../types';

export default function SignupPage() {
  const [role, setRole] = useState<UserRole>('citizen');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">C</div>
            <span className="text-2xl font-display font-bold text-primary">CivicConnect</span>
          </Link>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Create Your Account</h1>
          <p className="text-slate-500">Join thousands of citizens making a difference</p>
        </div>

        <div className="bg-white p-10 rounded-[32px] card-shadow border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Role Selector */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button"
                onClick={() => setRole('citizen')}
                className={cn(
                  "p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2",
                  role === 'citizen' ? "border-primary bg-primary/5 text-primary" : "border-slate-100 hover:border-slate-200 text-slate-500"
                )}
              >
                <UserCircle size={24} />
                <span className="font-bold">Citizen</span>
              </button>
              <button 
                type="button"
                onClick={() => setRole('politician')}
                className={cn(
                  "p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2",
                  role === 'politician' ? "border-primary bg-primary/5 text-primary" : "border-slate-100 hover:border-slate-200 text-slate-500"
                )}
              >
                <Shield size={24} />
                <span className="font-bold">Politician</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <div className="relative group">
                  <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary" size={20} />
                  <input type="text" required placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary" size={20} />
                  <input type="email" required placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary" size={20} />
                  <input type="tel" required placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Address / Area</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary" size={20} />
                  <input type="text" required placeholder="123 Main St, City" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none" />
                </div>
              </div>
            </div>

            {role === 'politician' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="grid md:grid-cols-2 gap-6 pt-2"
              >
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Constituency</label>
                  <input type="text" required placeholder="Enter your district" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Gov ID (Verification)</label>
                  <div className="relative">
                    <input type="file" className="hidden" id="gov-id" />
                    <label htmlFor="gov-id" className="w-full bg-slate-50 border border-dashed border-slate-300 rounded-2xl py-3 px-4 flex items-center justify-center gap-2 text-slate-500 cursor-pointer hover:bg-slate-100 transition-colors">
                      <Upload size={18} /> Upload Document
                    </label>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary" size={20} />
                  <input type="password" required placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Confirm Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary" size={20} />
                  <input type="password" required placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none" />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" required className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" />
              <p className="text-sm text-slate-500 leading-relaxed">
                I agree to the <a href="#" className="text-primary font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-bold hover:underline">Privacy Policy</a>.
              </p>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500">
              Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
