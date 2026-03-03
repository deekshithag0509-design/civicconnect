import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Upload, 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  ChevronRight,
  Loader2,
  Camera
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ReportIssuePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [urgency, setUrgency] = useState<'low' | 'medium' | 'high'>('medium');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    navigate('/confirmation');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-display font-bold text-slate-900">Report New Issue</h1>
        <p className="text-slate-500">Provide details about the issue to help officials resolve it quickly.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[32px] card-shadow border border-slate-100 space-y-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Issue Title</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., Large pothole on Main Street"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none appearance-none">
                    <option>Roads & Transport</option>
                    <option>Water Supply</option>
                    <option>Electricity</option>
                    <option>Sanitation</option>
                    <option>Public Safety</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Urgency Level</label>
                  <div className="flex gap-2">
                    {(['low', 'medium', 'high'] as const).map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setUrgency(level)}
                        className={cn(
                          "flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border-2",
                          urgency === level 
                            ? level === 'high' ? "bg-red-50 border-red-500 text-red-600" :
                              level === 'medium' ? "bg-orange-50 border-orange-500 text-orange-600" :
                              "bg-blue-50 border-blue-500 text-blue-600"
                            : "bg-slate-50 border-transparent text-slate-400 hover:bg-slate-100"
                        )}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Describe the issue in detail..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary" size={20} />
                  <input 
                    type="text" 
                    required
                    placeholder="Enter location or drop a pin"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="mt-4 aspect-video bg-slate-100 rounded-2xl overflow-hidden relative">
                  <img src="https://picsum.photos/seed/location/800/400" className="w-full h-full object-cover opacity-60" alt="Map" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                      <MapPin size={20} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Evidence (Photos/Videos)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button type="button" className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400 hover:bg-slate-50 hover:border-primary/30 transition-all">
                    <Camera size={24} />
                    <span className="text-[10px] font-bold uppercase">Add Photo</span>
                  </button>
                  <div className="aspect-square rounded-2xl bg-slate-100 overflow-hidden relative group">
                    <img src="https://picsum.photos/seed/issue1/200/200" className="w-full h-full object-cover" alt="" />
                    <button className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <AlertCircle size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <Info size={16} />
                <span>Your report will be public.</span>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary px-10 py-4 text-lg flex items-center gap-2"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : 'Submit Report'}
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-8">
          {/* Smart Suggestions */}
          <div className="bg-white p-8 rounded-[32px] card-shadow border border-slate-100">
            <div className="flex items-center gap-2 text-primary mb-6">
              <CheckCircle2 size={20} />
              <h3 className="text-lg font-bold text-slate-900">Similar Issues</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Duplicate Detected?</p>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Pothole near 5th Ave</h4>
                <p className="text-xs text-slate-500 line-clamp-2 mb-3">There is already a report for a pothole in this area. You can upvote it instead of creating a new one.</p>
                <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
                  View Existing Issue <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-[32px] card-shadow text-white">
            <h3 className="text-lg font-bold mb-4">Why report?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-white">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-sm text-slate-300">Directly notify relevant government departments.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-white">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-sm text-slate-300">Track resolution progress in real-time.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-white">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-sm text-slate-300">Help prioritize community needs through collective action.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
