import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, FileText, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';

export default function ConfirmationPage() {
  const refId = "CC-" + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full text-center"
      >
        <div className="mb-10 relative inline-block">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12, delay: 0.2 }}
            className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white mx-auto shadow-2xl shadow-accent/20 relative z-10"
          >
            <CheckCircle2 size={48} />
          </motion.div>
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl animate-pulse" />
        </div>

        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">Issue Submitted Successfully!</h1>
        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
          Thank you for your contribution. Your report has been logged and assigned to the relevant department for review.
        </p>

        <div className="bg-white p-8 rounded-[32px] card-shadow border border-slate-100 mb-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Reference ID</p>
          <p className="text-2xl font-mono font-bold text-primary">{refId}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/issues" className="btn-primary py-4 px-8 flex items-center justify-center gap-2 group">
            <FileText size={20} /> Track Status <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/dashboard" className="btn-secondary py-4 px-8 flex items-center justify-center gap-2">
            <LayoutDashboard size={20} /> Back to Dashboard
          </Link>
        </div>

        <div className="mt-12 text-slate-400 text-sm">
          You will receive real-time notifications as the status of your issue changes.
        </div>
      </motion.div>
    </div>
  );
}
