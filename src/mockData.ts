import { User, Issue, Comment } from './types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'citizen',
  avatar: 'https://picsum.photos/seed/user1/100/100',
};

export const MOCK_POLITICIAN: User = {
  id: 'p1',
  name: 'Hon. Sarah Jenkins',
  email: 'sarah.j@gov.in',
  role: 'politician',
  constituency: 'Central District',
  avatar: 'https://picsum.photos/seed/politician1/100/100',
};

export const MOCK_ISSUES: Issue[] = [
  {
    id: 'i1',
    title: 'Pothole on Main Street',
    category: 'Road',
    description: 'Large pothole causing traffic delays and potential vehicle damage.',
    status: 'open',
    urgency: 'high',
    location: 'Main St & 5th Ave',
    authorId: 'u1',
    createdAt: '2024-03-20T10:00:00Z',
    upvotes: 45,
    commentsCount: 12,
  },
  {
    id: 'i2',
    title: 'Broken Streetlight',
    category: 'Electricity',
    description: 'Streetlight has been out for a week, making the area unsafe at night.',
    status: 'in-progress',
    urgency: 'medium',
    location: 'Oak Lane',
    authorId: 'u2',
    createdAt: '2024-03-18T14:30:00Z',
    upvotes: 28,
    commentsCount: 5,
  },
  {
    id: 'i3',
    title: 'Water Leakage',
    category: 'Water',
    description: 'Significant water leak from a main pipe under the sidewalk.',
    status: 'resolved',
    urgency: 'high',
    location: 'Pine Street',
    authorId: 'u3',
    createdAt: '2024-03-15T09:15:00Z',
    upvotes: 82,
    commentsCount: 24,
  },
];

export const MOCK_COMMENTS: Comment[] = [
  {
    id: 'c1',
    issueId: 'i1',
    authorId: 'u4',
    authorName: 'Alice Smith',
    authorRole: 'citizen',
    content: 'I almost hit this pothole yesterday! It really needs fixing.',
    createdAt: '2024-03-20T11:00:00Z',
    replies: [
      {
        id: 'c2',
        issueId: 'i1',
        authorId: 'p1',
        authorName: 'Hon. Sarah Jenkins',
        authorRole: 'politician',
        content: 'Thank you for reporting. I have notified the public works department.',
        createdAt: '2024-03-20T12:30:00Z',
      }
    ]
  }
];
