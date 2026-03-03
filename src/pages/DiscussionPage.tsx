import React from 'react';
import { 
  MessageSquare, 
  ArrowUp, 
  Share2, 
  Flag, 
  MoreVertical, 
  Send,
  UserCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_ISSUES, MOCK_COMMENTS } from '../mockData';

export default function DiscussionPage() {
  const issue = MOCK_ISSUES[0];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Issue Header */}
      <div className="bg-white p-10 rounded-[40px] card-shadow border border-slate-100 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider">
              {issue.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock size={12} /> 2 days ago
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"><Share2 size={18} /></button>
            <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-slate-50 rounded-xl transition-colors"><Flag size={18} /></button>
            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"><MoreVertical size={18} /></button>
          </div>
        </div>

        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4 leading-tight">{issue.title}</h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">{issue.description}</p>

        <div className="flex items-center justify-between pt-8 border-t border-slate-100">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-primary/5 text-slate-600 hover:text-primary rounded-xl transition-all font-bold group">
              <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
              <span>{issue.upvotes} Upvotes</span>
            </button>
            <div className="flex items-center gap-2 text-slate-400 font-medium">
              <MessageSquare size={20} />
              <span>{issue.commentsCount} Comments</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status:</span>
            <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" /> {issue.status}
            </span>
          </div>
        </div>
      </div>

      {/* Discussion Section */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
          Community Discussion
          <span className="text-sm font-medium text-slate-400">({issue.commentsCount})</span>
        </h3>

        {/* Comment Box */}
        <div className="bg-white p-6 rounded-[32px] card-shadow border border-slate-100">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex-shrink-0 overflow-hidden">
              <img src="https://picsum.photos/seed/me/100/100" alt="" />
            </div>
            <div className="flex-1 space-y-4">
              <textarea 
                rows={3}
                placeholder="Share your thoughts or provide more info..."
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3 px-4 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none"
              />
              <div className="flex justify-end">
                <button className="btn-primary flex items-center gap-2">
                  <Send size={18} /> Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          {MOCK_COMMENTS.map((comment) => (
            <div key={comment.id} className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-[32px] card-shadow border border-slate-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                    <img src={`https://picsum.photos/seed/${comment.authorId}/100/100`} alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{comment.authorName}</span>
                        {comment.authorRole === 'politician' && (
                          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-[10px] font-bold uppercase flex items-center gap-1">
                            <CheckCircle2 size={10} /> Official
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-400">1 hour ago</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{comment.content}</p>
                    <div className="flex items-center gap-6 mt-4">
                      <button className="text-xs font-bold text-slate-400 hover:text-primary flex items-center gap-1 transition-colors">
                        <ArrowUp size={14} /> 12
                      </button>
                      <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">Reply</button>
                    </div>
                  </div>
                </div>

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="ml-12 mt-6 pt-6 border-t border-slate-50 space-y-6">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                          <img src={`https://picsum.photos/seed/${reply.authorId}/100/100`} alt="" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900">{reply.authorName}</span>
                              {reply.authorRole === 'politician' && (
                                <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-[10px] font-bold uppercase flex items-center gap-1">
                                  <CheckCircle2 size={10} /> Official
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-slate-400">45 mins ago</span>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">{reply.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
