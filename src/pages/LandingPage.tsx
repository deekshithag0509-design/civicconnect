import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  MapPin,
  Star,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function LandingPage() {
  const stats = [
    { label: 'Issues Reported', value: '12,450+', icon: FileText },
    { label: 'Issues Resolved', value: '8,920+', icon: CheckCircle2 },
    { label: 'Active Reps', value: '450+', icon: Users },
    { label: 'Engagement Rate', value: '94%', icon: TrendingUp },
  ];

  const steps = [
    { 
      title: 'Report Issue', 
      desc: 'Spot a problem in your community? Report it with photos and location in seconds.',
      icon: MapPin,
      color: 'bg-blue-500'
    },
    { 
      title: 'Gov Responds', 
      desc: 'Verified officials review and assign your report to the relevant department.',
      icon: Shield,
      color: 'bg-green-500'
    },
    { 
      title: 'Track Progress', 
      desc: 'Get real-time updates as your issue moves from pending to resolved.',
      icon: TrendingUp,
      color: 'bg-purple-500'
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">C</div>
            <span className="text-2xl font-display font-bold text-primary">CivicConnect</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-slate-600 hover:text-primary font-medium">How it Works</a>
            <a href="#impact" className="text-slate-600 hover:text-primary font-medium">Our Impact</a>
            <a href="#testimonials" className="text-slate-600 hover:text-primary font-medium">Testimonials</a>
            <div className="flex items-center gap-4 ml-4">
              <Link to="/login" className="text-primary font-semibold hover:opacity-80">Login</Link>
              <Link to="/signup" className="btn-primary">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Empowering Communities
            </span>
            <h1 className="text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
              Connecting Citizens. <br />
              <span className="text-primary">Strengthening</span> Democracy.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              The modern bridge between you and your representatives. Report issues, track progress, and build a better community together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-2 group">
                Get Started Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/login" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center">
                Explore Platform
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-3xl -z-10" />
            <img 
              src="https://picsum.photos/seed/civic/800/600" 
              alt="Citizens interacting" 
              className="rounded-[32px] shadow-2xl border-8 border-white"
              referrerPolicy="no-referrer"
            />
            {/* Floating UI elements */}
            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl card-shadow max-w-[240px] animate-bounce-slow">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 size={16} />
                </div>
                <span className="font-bold text-slate-900">Issue Resolved!</span>
              </div>
              <p className="text-xs text-slate-500">Streetlight on 5th Ave fixed within 24 hours.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 shadow-sm">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">Three simple steps to make your voice heard and see real change in your neighborhood.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg", step.color)}>
                  <step.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden lg:block absolute top-8 -right-6 text-slate-200">
                    <ArrowRight size={40} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4">What Our Community Says</h2>
            <p className="text-primary-foreground/80 text-lg">Real stories from citizens and leaders making an impact.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[24px] border border-white/10">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg mb-8 italic">"CivicConnect has completely changed how we interact with our local council. Issues that used to take months are now resolved in days."</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/person${i}/100/100`} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white/20" />
                  <div>
                    <p className="font-bold">James Wilson</p>
                    <p className="text-sm text-white/60">Community Leader</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">C</div>
              <span className="text-2xl font-display font-bold text-white">CivicConnect</span>
            </div>
            <p className="max-w-sm mb-8">
              Building the future of digital democracy by empowering citizens and enabling transparent governance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Impact Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transparency Report</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; 2024 CivicConnect. All rights reserved. Built for a better tomorrow.</p>
        </div>
      </footer>
    </div>
  );
}
