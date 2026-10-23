// Single source of truth for Pashupati Chaudhary's portfolio data.
// Derived directly from CV and project contributions.

export const site = {
  name: 'Pashupati Chaudhary',
  title: 'Pashupati Chaudhary · Flutter Developer & Mobile Application Engineer',
  tagline: 'Flutter Developer crafting high-performance, pixel-perfect Android & iOS experiences.',
  description:
    'Pashupati Chaudhary is a Computer Engineering graduate and Flutter Developer based in Kathmandu, Nepal. Specializing in Clean Architecture, Riverpod, offline-first mobile apps, and scalable mobile engineering.',
  url: 'https://pashupatichaudhary.com.np',
  email: 'pashupatic121@gmail.com',
  phone: '+977 9813704884',
  whatsapp: { number: '+977 9813704884', url: 'https://wa.me/9779813704884' },
  location: 'Indrachowk, Kathmandu, Nepal',
  links: {
    linkedin: 'https://linkedin.com/in/pashupati-chaudhary',
    github: 'https://github.com/pashupati-git',
  },
  photo: '/assets/main.jpeg',
  cvFile: '/assets/pashupati_cv.pdf',
};

export const nav = [
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/cv/', label: 'CV' },
  { href: '/contact/', label: 'Contact' },
];

export const summary = [
  'Computer Engineering graduate from Nepal Engineering College with hands-on expertise in production-ready Flutter and cross-platform mobile development.',
  'Currently working as a Flutter Intern at MindRisers Institute of Technology, architecting scalable mobile applications using Clean Architecture, MVVM, and Riverpod state management.',
  'Passionate about transforming complex Figma UI/UX designs into pixel-perfect Flutter interfaces, integrating robust REST APIs, Firebase ecosystems, and offline-first Hive caching.',
];

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  place: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: 'Flutter Developer Intern',
    company: 'MindRisers Institute of Technology',
    companyUrl: 'https://mindrisers.com.np',
    place: 'Kathmandu, Nepal',
    period: '2025 to Present',
    bullets: [
      'Developing production-ready Flutter applications following Clean Architecture and MVVM design patterns.',
      'Implemented robust state management using Riverpod for scalable, testable, and reactive application logic.',
      'Built multi-language support (English & Nepali) using Flutter internationalization & localization.',
      'Converted complex Figma UI/UX designs into pixel-perfect, responsive Flutter mobile interfaces.',
      'Integrated RESTful APIs, error handling interceptors, and dynamic business logic.',
      'Worked with Firebase Authentication, Cloud Firestore, and Cloud Storage for realtime synchronization.',
      'Implemented Hive local database for offline data persistence, fast key-value caching, and background sync.',
      'Collaborated in Agile sprints using Git/GitHub for branch management, PR code reviews, and clean code standards.',
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  headline: string;
  context: string;
  category: 'Flutter / Mobile' | 'Fullstack / Web' | 'ML & AI';
  stack: string[];
  period: string;
  bullets: string[];
  link?: { label: string; url: string };
  installs?: string;
  status?: string;
  featured?: boolean;
  icon?: string;
  color?: string;
  previewScreen?: string;
};

export const projects: Project[] = [
  {
    slug: 'totto',
    name: 'Totto',
    headline: 'Buy and sell locally with ease · Chat, negotiate, and connect!',
    context: 'Community Marketplace Mobile App',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Riverpod', 'Firebase', 'REST APIs', 'Python Django'],
    period: '2025',
    featured: true,
    color: '#E63946',
    icon: '/icons/totto.png',
    installs: 'Google Play',
    link: { label: 'Google Play Listing', url: 'https://play.google.com/store/apps/details?id=com.nepalibazaar.totto' },
    bullets: [
      'Built a community-focused buy and sell mobile application featuring real-time buyer-seller chat and interactive price negotiation.',
      'Implemented secure multi-factor authentication with Phone OTP verification and seamless Google Sign-In.',
      'Engineered an advanced role-based marketplace UI with instant item listings, category filters, and bilingual localization (English/Nepali).',
      'Integrated Django REST backend with Flutter state handling for instant notifications and listing state persistence.',
    ],
  },
  {
    slug: 'nnet',
    name: 'NNET Customer Support App',
    headline: 'Solely built and deployed customer self-care & broadband diagnostics app',
    context: 'ISP Customer Support Mobile Application · Google Play',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Riverpod', 'REST APIs', 'Firebase', 'Clean Architecture'],
    period: '2025',
    featured: true,
    color: '#7B2CBF',
    icon: '/icons/nnet.png',
    installs: 'Google Play',
    link: { label: 'NNET on Google Play', url: 'https://play.google.com/store/apps/details?id=com.nnet.np.app' },
    bullets: [
      'Sole mobile engineer: architected, developed from scratch, and deployed the production app to Google Play Store.',
      'Implemented full self-service customer experience including bill payment gateways, plan renewal, and statement history.',
      'Built optical router diagnostics, real-time ticket complaint filing, and push notifications for outage alerts.',
      'Constructed modular Riverpod state management and robust REST API client with error recovery and session caching.',
    ],
  },
  {
    slug: 'classic-tech',
    name: 'Classic Tech App',
    headline: 'Flagship customer self-care & broadband management portal',
    context: 'ISP Customer Mobile App · 100,000+ Installs',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Riverpod', 'Bloc', 'REST APIs', 'Payment Gateways'],
    period: '2024 to 2026',
    featured: true,
    installs: '100,000+',
    icon: '/icons/classic-tech.png',
    color: '#13753D',
    link: { label: 'Classic Tech on Google Play', url: 'https://play.google.com/store/apps/details?id=com.classic.np.app' },
    bullets: [
      'Contributed to core modules of the flagship customer support mobile app serving over 100,000 active broadband subscribers across Nepal.',
      'Engineered digital wallet & payment gateway integration for automated subscription renewals, online recharge, and invoice downloads.',
      'Built Wi-Fi router diagnostics, bandwidth speed tests, connected device management, and real-time support ticketing.',
    ],
  },
  {
    slug: 'classic-engine',
    name: 'Classic Engine',
    headline: 'Field technician operations and optical network diagnostics app',
    context: 'Enterprise Field Operations · 10,000+ Installs',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Riverpod', 'Offline Sync', 'Google Maps API', 'REST APIs'],
    period: '2024 to 2026',
    featured: true,
    installs: '10,000+',
    icon: '/icons/classic-engine.png',
    color: '#0284C7',
    link: { label: 'Classic Engine on Google Play', url: 'https://play.google.com/store/apps/details?id=com.classic.np.engine' },
    bullets: [
      'Engineered field operations workflow for technicians managing fiber-to-the-home (FTTH) installations, work orders, and on-site troubleshooting.',
      'Integrated real-time optical power level testing (dBm diagnostics), router configuration validation, and GPS-tagged customer visits.',
      'Implemented offline task caching and auto-sync queue for technicians operating in areas with poor or intermittent cellular coverage.',
    ],
  },
  {
    slug: 'dealer-partner',
    name: 'Dealer Partner',
    headline: 'Agent referral, partner onboarding, and commission payout platform',
    context: 'Enterprise Partner Network · 1,000+ Installs',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Riverpod', 'Google Maps API', 'REST APIs', 'Biometrics'],
    period: '2024 to 2025',
    featured: true,
    installs: '1,000+',
    icon: '/icons/dealer-partner.png',
    color: '#D97706',
    link: { label: 'Dealer Partner on Google Play', url: 'https://play.google.com/store/apps/details?id=com.classic.partner.np.app' },
    bullets: [
      'Architected partner onboarding workflow, KYC document verification, and multi-tier commission ledger for authorized dealers.',
      'Integrated interactive map interface with Google Maps API for customer lead tagging, coverage lookup, and local territory assignment.',
      'Developed real-time commission balance tracking, referral status timeline, and secure biometric authentication for payout authorizations.',
    ],
  },
  {
    slug: 'caro-tv',
    name: 'Caro TV Nepal',
    headline: 'Live TV streaming application for Android mobile and set-top TV box',
    context: 'Media & IPTV Platform · 1,000+ Installs',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Android TV', 'HLS Streaming', 'ExoPlayer', 'REST APIs'],
    period: '2024 to 2025',
    featured: true,
    installs: '1,000+',
    icon: '/icons/caro-tv.png',
    color: '#E11D48',
    link: { label: 'Caro TV on Google Play', url: 'https://play.google.com/store/apps/details?id=com.classic.np.app.carotv' },
    bullets: [
      'Built and maintained live streaming video player handling adaptive HLS video feeds for nationwide broadcast channels.',
      'Designed responsive dual interfaces supporting both touch gestures on mobile and D-pad remote control on Android set-top boxes.',
      'Implemented Electronic Program Guide (EPG), stream quality selector, and low-latency channel switching.',
    ],
  },
];

export const playListings = [
  { name: 'Totto', installs: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.nepalibazaar.totto', note: 'Buy & sell community marketplace, Flutter & Django', icon: '/icons/totto.png' },
  { name: 'NNET', installs: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.nnet.np.app', note: 'ISP customer support & optical diagnostics, solely built & deployed', icon: '/icons/nnet.png' },
  { name: 'Classic Tech', installs: '100,000+', url: 'https://play.google.com/store/apps/details?id=com.classic.np.app', note: 'Customer support app, Flutter & Kotlin', icon: '/icons/classic-tech.png' },
  { name: 'Classic Engine', installs: '10,000+', url: 'https://play.google.com/store/apps/details?id=com.classic.np.engine', note: 'Field technician staff app, Flutter', icon: '/icons/classic-engine.png' },
  { name: 'Dealer Partner', installs: '1,000+', url: 'https://play.google.com/store/apps/details?id=com.classic.partner.np.app', note: 'Referral and commission network app, Flutter', icon: '/icons/dealer-partner.png' },
  { name: 'Caro TV Nepal', installs: '1,000+', url: 'https://play.google.com/store/apps/details?id=com.classic.np.app.carotv', note: 'Live TV streaming on Mobile and Set-top TV box, Flutter', icon: '/icons/caro-tv.png' },
];

export const services = [
  {
    icon: '📱',
    title: 'Cross-Platform Mobile Development',
    body: 'Production-ready Android and iOS mobile applications built from a single Flutter codebase. Clean MVVM and Riverpod architecture, strict state isolation, and pixel-perfect UI execution.',
  },
  {
    icon: '⚡',
    title: 'Clean Architecture & State Management',
    body: 'Enterprise-grade code separation with Riverpod, Bloc, and Provider. Decoupled presentation, domain, and data layers that make mobile codebases easy to scale, test, and maintain.',
  },
  {
    icon: '🎨',
    title: 'Figma to Pixel-Perfect Flutter UI',
    body: 'Direct translation of Figma design systems into responsive, fluid Flutter widgets. Smooth micro-interactions, custom animations, adaptive layouts, and native dark/light themes.',
  },
  {
    icon: '🔌',
    title: 'REST APIs & Realtime Firebase',
    body: 'Robust networking layers with Dio and Retrofit, automated JSON serialization, token refresh interceptors, Firebase Auth, Cloud Firestore, and real-time WebSockets.',
  },
  {
    icon: '💾',
    title: 'Offline-First Storage & Caching',
    body: 'High-speed local key-value persistence with Hive and SQLite. Background synchronization and optimistic UI updates so apps function flawlessly even in poor connectivity.',
  },
  {
    icon: '🌐',
    title: 'Localization & Multi-Language Support',
    body: 'Complete internationalization (i18n) frameworks for multi-language applications (English and Nepali), RTL support, and multi-tenant white-label build flavors.',
  },
];

export const skills = [
  {
    category: 'Mobile App Development',
    items: [
      'Flutter & Dart (Android & iOS)',
      'Clean Architecture & MVVM',
      'Riverpod & Bloc State Management',
      'Hive Local Storage & SQLite',
      'Flutter Localization (English & Nepali)',
      'Advanced UI Development (Figma → Flutter)',
      'Custom Animations & Hero Transitions',
      'Android Studio & VS Code Tooling',
    ],
  },
  {
    category: 'Backend & Cloud Integrations',
    items: [
      'RESTful API Integration & Dio Interceptors',
      'Firebase Authentication (Phone OTP, Google)',
      'Cloud Firestore & Realtime DB',
      'Firebase Cloud Storage',
      'Node.js & Express Basics',
      'Python (Django REST & FastAPI basics)',
      'WebSockets & Live GPS Streaming',
    ],
  },
  {
    category: 'Programming Languages & Concepts',
    items: [
      'Dart',
      'C++',
      'Java',
      'JavaScript / TypeScript',
      'Python (Machine Learning basics)',
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'SOLID Design Principles',
    ],
  },
  {
    category: 'Developer Tools & Platforms',
    items: [
      'Git & GitHub (Branching, PRs, Actions)',
      'Postman API Testing',
      'Jupyter Notebook & Google Colab',
      'TensorFlow Lite / CNN Integration',
      'Figma & UI Prototyping',
      'Firebase Console & Crashlytics',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor in Computer Engineering',
    institution: 'Nepal Engineering College',
    institutionUrl: 'https://nec.edu.np',
    location: 'Changunarayan, Bhaktapur, Nepal',
    period: 'July 2021 to Aug 2025',
    details: 'Affiliated with Pokhara University. Core curriculum in Advanced Computer Architecture, Operating Systems, Computer Networks, Software Engineering, Database Management Systems, and Machine Learning.',
  },
  {
    degree: 'National Examination Board (NEB) · +2 Science',
    institution: 'White House Secondary School',
    location: 'Khumaltar, Lalitpur, Nepal',
    period: 'Apr 2018 to Apr 2020',
    details: 'Major in Physical Science (Physics, Chemistry, Mathematics, Computer Science).',
  },
  {
    degree: 'Secondary Education Examination (SEE)',
    institution: 'Advance International Model School',
    location: 'Lagankhel, Lalitpur, Nepal',
    period: 'Jan 2005 to Jan 2018',
    details: 'Completed with outstanding academic standing.',
  },
];

export const certifications = [
  {
    title: 'Flutter Training & Apprenticeship',
    issuer: 'Mind Risers Consortium',
    period: '2025',
    details: 'Intensive professional training in Dart, Flutter, Firebase, Riverpod state management, Hive local storage, Clean Architecture, and internationalization.',
  },
];

export const languages = [
  { name: 'English', level: 'Fluent (Professional Working Proficiency)' },
  { name: 'Nepali', level: 'Native' },
  { name: 'Hindi', level: 'Proficient' },
];
