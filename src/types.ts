export type UserRole = 'admin' | 'citizen' | 'politician' | 'moderator';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  constituency?: string;
}

export type IssueStatus = 'open' | 'in-progress' | 'resolved';
export type IssueUrgency = 'low' | 'medium' | 'high';

export interface Issue {
  id: string;
  title: string;
  category: string;
  description: string;
  status: IssueStatus;
  urgency: IssueUrgency;
  location: string;
  authorId: string;
  createdAt: string;
  upvotes: number;
  commentsCount: number;
}

export interface Comment {
  id: string;
  issueId: string;
  authorId: string;
  authorName: string;
  authorRole: UserRole;
  content: string;
  createdAt: string;
  replies?: Comment[];
}
