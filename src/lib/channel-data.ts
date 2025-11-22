export type Video = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  publishedAt: string;
  views: string;
  tags: string[];
};

export type Playlist = {
  id: string;
  title: string;
  description: string;
  cover: string;
  videos: number;
};

export type Collaboration = {
  id: string;
  title: string;
  creator: string;
  thumbnail: string;
  link: string;
};

export const channelProfile = {
  name: 'Creator Central',
  handle: '@creatorcentral',
  subscribers: '2.3M subscribers',
  description:
    'Weekly deep dives into storytelling, cinematography, and the creative process. Tune in for tutorials, vlogs, and behind-the-scenes breakdowns.',
  heroVideo: {
    id: 'intro-storytelling',
    title: 'The Art of Storytelling in 2024',
    thumbnail: 'https://i.ytimg.com/vi/y6120QOlsfU/maxresdefault.jpg',
    duration: '12:21'
  },
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Patreon', href: 'https://patreon.com' }
  ]
};

export const channelHighlights = [
  { label: 'Videos Published', value: '342' },
  { label: 'Community Posts', value: '126' },
  { label: 'Members', value: '18K' }
];

export const videos: Video[] = [
  {
    id: 'cinematic-lighting',
    title: 'Cinematic Lighting on a Budget',
    description: 'Five lighting setups using gear you already own.',
    thumbnail: 'https://i.ytimg.com/vi/FeZ1txs1Ztc/maxresdefault.jpg',
    duration: '18:04',
    publishedAt: '2 days ago',
    views: '245K views',
    tags: ['Lighting', 'Cinematography', 'DIY']
  },
  {
    id: 'notion-workflow',
    title: 'My Notion Workflow for Video Production',
    description: 'Organize pre-production, shot lists, and edits with this template.',
    thumbnail: 'https://i.ytimg.com/vi/JeYwJZStT4g/maxresdefault.jpg',
    duration: '14:37',
    publishedAt: '1 week ago',
    views: '312K views',
    tags: ['Productivity', 'Workflow']
  },
  {
    id: 'color-grading',
    title: 'Color Grading Like a Pro in DaVinci Resolve',
    description: 'From log footage to cinematic colors in less than 10 minutes.',
    thumbnail: 'https://i.ytimg.com/vi/xH3ZrGN7lx4/maxresdefault.jpg',
    duration: '10:12',
    publishedAt: '2 weeks ago',
    views: '511K views',
    tags: ['Color', 'DaVinci Resolve']
  },
  {
    id: 'behind-scenes',
    title: 'Behind the Scenes: Shooting in Iceland',
    description: 'Breaking down the visual approach and on-location challenges.',
    thumbnail: 'https://i.ytimg.com/vi/Scxs7L0vhZ4/maxresdefault.jpg',
    duration: '22:09',
    publishedAt: '3 weeks ago',
    views: '608K views',
    tags: ['Travel', 'BTS', 'Storytelling']
  },
  {
    id: 'gear-2024',
    title: 'Everyday Camera Gear for 2024',
    description: 'An in-depth look at the tools I rely on daily.',
    thumbnail: 'https://i.ytimg.com/vi/IlN1dQo4FJ4/maxresdefault.jpg',
    duration: '16:45',
    publishedAt: '1 month ago',
    views: '1.1M views',
    tags: ['Gear', 'Reviews']
  },
  {
    id: 'story-structure',
    title: 'Story Structure for Creators (Save The Cat Breakdown)',
    description: 'Transform your idea into an engaging narrative arc.',
    thumbnail: 'https://i.ytimg.com/vi/eX2qFMC8cFo/maxresdefault.jpg',
    duration: '9:58',
    publishedAt: '1 month ago',
    views: '879K views',
    tags: ['Storytelling', 'Writing']
  }
];

export const playlists: Playlist[] = [
  {
    id: 'filmmaking-foundations',
    title: 'Filmmaking Foundations',
    description: 'Camera fundamentals, composition, and visual language.',
    cover: 'https://i.ytimg.com/vi/TSJ0xJ9EYME/maxresdefault.jpg',
    videos: 24
  },
  {
    id: 'creator-business',
    title: 'Creator Business Lab',
    description: 'Monetization, pitching, and building partnerships.',
    cover: 'https://i.ytimg.com/vi/kc4qlGCrzEU/maxresdefault.jpg',
    videos: 18
  },
  {
    id: 'editing-masterclass',
    title: 'Editing Masterclass',
    description: 'Workflow tips and style breakdowns for modern editing.',
    cover: 'https://i.ytimg.com/vi/_ZE0-9fQz_s/maxresdefault.jpg',
    videos: 15
  }
];

export const collaborations: Collaboration[] = [
  {
    id: 'fpv-collab',
    title: 'We Strapped a Cinema Camera to an FPV Drone',
    creator: 'Skyline FPV',
    thumbnail: 'https://i.ytimg.com/vi/VTqkILpODaE/maxresdefault.jpg',
    link: 'https://youtube.com'
  },
  {
    id: 'sound-design',
    title: 'Sound Design Secrets with Minimal Audio',
    creator: 'Minimal Audio',
    thumbnail: 'https://i.ytimg.com/vi/bKdHxzV0Qrg/maxresdefault.jpg',
    link: 'https://youtube.com'
  }
];
