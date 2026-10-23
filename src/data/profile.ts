// Single source of truth for Pashupati Chaudhary's portfolio data.
// Derived directly from CV and project contributions.

export const site = {
  name: 'Pashupati Chaudhary',
  title: 'Pashupati Chaudhary · Flutter Developer & Mobile Application Engineer',
  tagline: 'Flutter & Kotlin Mobile Developer crafting high-performance Android & iOS applications.',
  description:
    'Pashupati Chaudhary is a Computer Engineering graduate and Mobile Application Developer at Classic Tech specializing in Flutter, Kotlin native Android, end-to-end testing, and publishing on Google Play & App Store.',
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
  'Computer Engineering graduate from Nepal Engineering College and Mobile Application Developer with primary expertise in production Flutter engineering and strong flexibility in native Android development with Kotlin.',
  'Currently working at Classic Tech, architecting, scaling, and maintaining mission-critical mobile applications across an ecosystem of 110,000+ installs (including Caro TV Nepal, Classic Tech Customer App, Classic Engine, and Dealer Partner).',
  'Owns the complete mobile lifecycle from architecture, Clean Architecture / MVVM state management, and pixel-perfect UI execution, through automated testing and payment gateway integration, to CI/CD and release publishing on Google Play Store and Apple App Store.',
];

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  type?: string;
  place: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: 'Mobile Application Developer',
    company: 'Classic Tech',
    companyUrl: 'https://classic.com.np',
    type: 'Full-time',
    place: 'New Baneshwor, Kathmandu, Nepal',
    period: 'Mar 2026 to Present',
    bullets: [
      'Serving as Mobile Application Developer architecting, scaling, and maintaining mission-critical Flutter & Kotlin applications for Nepal’s premier broadband ISP.',
      'Leading development across core production applications: Caro TV Nepal (Live IPTV & streaming), Classic Tech Customer App (100k+ downloads), Classic Engine field operations, and Dealer Partner.',
      'Engineered digital payment gateway integrations (eSewa, Khalti, ConnectIPS) for automated plan renewals, billing subscriptions, and invoice downloads.',
      'Built native Android bridging with Kotlin for hardware-accelerated ExoPlayer video playback and optical router signal diagnostics.',
      'Automated mobile CI/CD pipelines with Codemagic and GitHub Actions for continuous integration, code signing, build flavor testing, and Google Play Store publishing.',
      'Implemented robust offline task caching, GPS-based work order routing for field technicians, and biometric authentication for dealer payouts.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'MindRisers Institute of Technology',
    companyUrl: 'https://mindrisers.com.np',
    type: 'Internship',
    place: 'Kathmandu, Bagmati, Nepal',
    period: 'Sep 2025 to Feb 2026',
    bullets: [
      'Developed cross-platform mobile applications from Figma UI prototypes adhering to Clean Architecture and MVVM design patterns.',
      'Engineered reactive state management solutions using Riverpod, isolating UI widgets from domain and data layers.',
      'Implemented bilingual localization (English & Nepali) and converted complex design systems into responsive mobile interfaces.',
      'Integrated Firebase services (Auth, Firestore, Cloud Storage), REST APIs with Dio interceptors, and Hive local storage for offline persistence.',
      'Practiced disciplined Git workflows, agile sprint rituals, peer code reviews, and clean code standards.',
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
    slug: 'caro-tv',
    name: 'Caro TV Nepal',
    headline: 'Live TV & IPTV streaming app with ExoPlayer, Kotlin, digital payment integration, and Codemagic CI/CD',
    context: 'Media & IPTV Platform · 1,000+ Installs · Google Play',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Bloc', 'ExoPlayer', 'HLS Streaming', 'Payment Integration', 'Codemagic CI/CD', 'GitHub Actions', 'Android TV'],
    period: '2025 to 2026',
    featured: true,
    installs: '1,000+',
    icon: '/icons/caro-tv.png',
    previewScreen: '/screens/caro-tv.png',
    color: '#E11D48',
    link: { label: 'Caro TV on Google Play', url: 'https://play.google.com/store/apps/details?id=com.classic.np.app.carotv' },
    bullets: [
      'Built and maintained high-performance live streaming video player handling adaptive HLS video feeds for nationwide broadcast channels.',
      'Developed native Android Kotlin platform channels bridging Google ExoPlayer for hardware acceleration, low-latency stream buffer tuning, and D-pad remote navigation.',
      'Integrated digital payment gateways (eSewa & Khalti) and wallet recharge flows for seamless channel subscription renewals and customer invoice generation.',
      'Configured automated CI/CD deployment pipelines using Codemagic and GitHub Actions for continuous integration, code signing, automated linting, and Google Play Store distribution.',
      'Implemented Electronic Program Guide (EPG), stream quality selector, parental control PIN protection, and low-latency channel switching.',
    ],
  },
  {
    slug: 'classic-tech',
    name: 'Classic Tech App',
    headline: 'Flagship broadband customer self-care & management portal',
    context: 'ISP Customer Mobile App · 100,000+ Installs · Google Play',
    category: 'Flutter / Mobile',
    stack: ['Kotlin', 'Android', 'MVVM', 'Payment Gateways', 'Codemagic CI/CD', 'GitHub Actions', 'REST APIs'],
    period: '2025 to 2026',
    featured: true,
    installs: '100,000+',
    icon: '/icons/classic-tech.png',
    previewScreen: '/screens/classic-tech.png',
    color: '#13753D',
    link: { label: 'Classic Tech on Google Play', url: 'https://play.google.com/store/apps/details?id=com.classic.np.app' },
    bullets: [
      'Contributed to core modules of the flagship customer support mobile app serving over 100,000 active broadband subscribers across Nepal.',
      'Integrated end-to-end digital payment gateways (eSewa, Khalti, ConnectIPS) for automated subscription renewals, online recharge, and invoice downloads.',
      'Built custom Kotlin platform channels for low-level network interface queries, Wi-Fi router signal diagnostics, and optical bandwidth speed tests.',
      'Configured automated build flavors and CI/CD pipelines with Codemagic and GitHub Actions for streamlined QA testing and Play Store releases.',
    ],
  },
  {
    slug: 'classic-engine',
    name: 'Classic Engine',
    headline: 'Field technician operations and optical network diagnostics app',
    context: 'Enterprise Field Operations · 10,000+ Installs · Google Play',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Bloc', 'Clean Architecture', 'Google Maps API', 'REST APIs'],
    period: '2025 to 2026',
    featured: true,
    installs: '10,000+',
    icon: '/icons/classic-engine.png',
    previewScreen: '/screens/classic-engine.png',
    color: '#0A5C36',
    link: { label: 'Classic Engine on Google Play', url: 'https://play.google.com/store/apps/details?id=com.classic.np.engine' },
    bullets: [
      'Engineered field operations workflow for technicians managing fiber-to-the-home (FTTH) installations, work orders, and on-site troubleshooting.',
      'Integrated real-time optical power level testing (dBm diagnostics), router configuration validation, and GPS-tagged customer visits.',
      'Implemented offline task caching and auto-sync queue for technicians operating in areas with poor or intermittent cellular coverage.',
    ],
  },
  {
    slug: 'nnet',
    name: 'NNET',
    headline: 'Solely built and deployed customer self-care & broadband diagnostics app',
    context: 'ISP Customer Support Mobile Application · Google Play',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Bloc', 'Payment Gateways', 'REST APIs', 'Biometric Authentication', 'Websockets', 'Push Notifications', 'Firebase', 'Clean Architecture'],
    period: '2026',
    featured: true,
    color: '#7B2CBF',
    icon: '/icons/nnet.png',
    previewScreen: '/screens/nnet.png',
    installs: 'Google Play',
    link: { label: 'NNET on Google Play', url: 'https://play.google.com/store/apps/details?id=com.nnet.np.app' },
    bullets: [
      'Sole mobile engineer: architected, developed from scratch, and deployed the production app to Google Play Store.',
      'Implemented full self-service customer experience including bill payment gateways (eSewa, Khalti), plan renewal, and statement history.',
      'Built optical router diagnostics, real-time ticket complaint filing, live chat feature, and push notifications for outage alerts.',
      'Constructed modular Bloc state management and robust REST API client with error recovery and session caching.',
    ],
  },
  {
    slug: 'dealer-partner',
    name: 'Dealer Partner',
    headline: 'Agent referral, partner onboarding, and commission payout platform',
    context: 'Enterprise Partner Network · 1,000+ Installs · Google Play',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'GetX', 'Google Maps API', 'REST APIs', 'Biometrics'],
    period: '2025',
    featured: true,
    installs: '1,000+',
    icon: '/icons/dealer-partner.png',
    previewScreen: '/screens/dealer-partner.png',
    color: '#D97706',
    link: { label: 'Dealer Partner on Google Play', url: 'https://play.google.com/store/apps/details?id=com.classic.partner.np.app' },
    bullets: [
      'Architected partner onboarding workflow, KYC document verification, and multi-tier commission ledger for authorized dealers.',
      'Integrated interactive map interface with Google Maps API for customer lead tagging, coverage lookup, and local territory assignment.',
      'Developed real-time commission balance tracking, referral status timeline, and secure biometric authentication for payout authorizations.',
    ],
  },
  {
    slug: 'totto',
    name: 'Totto',
    headline: 'Buy and sell locally with ease · Chat, negotiate, and connect!',
    context: 'Community Marketplace Mobile App · Google Play',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Riverpod', 'Firebase', 'REST APIs', 'Websockets'],
    period: '2025',
    featured: true,
    color: '#E63946',
    icon: '/icons/totto.png',
    previewScreen: '/screens/totto.png',
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
    slug: 'leafcare',
    name: 'LeafCare',
    headline: 'Plant disease detection using CNN (TFLite) & agricultural marketplace app',
    context: 'ML & Mobile Application · Edge TFLite Inference',
    category: 'ML & AI',
    stack: ['Flutter', 'TFLite', 'CNN', 'Python', 'Firebase', 'Jupyter'],
    period: '2024 to 2025',
    featured: false,
    installs: 'ML + Flutter',
    previewScreen: '/screens/leafcare.jpg',
    color: '#10B981',
    link: { label: 'GitHub', url: 'https://github.com/pashupati-git' },
    status: 'Open Source',
    bullets: [
      'Trained a Convolutional Neural Network (CNN) with TensorFlow/Keras on plant leaf disease datasets, converting to TensorFlow Lite (TFLite) for low-latency offline edge inference.',
      'Developed responsive cross-platform Flutter application allowing farmers to capture or upload leaf photos for immediate pathology detection and remedies.',
      'Constructed agricultural eCommerce module for purchasing recommended organic fertilizers, remedies, and farming equipment.',
      'Integrated Cloud Firestore for dynamic catalog management, user order tracking, and diagnosis history.',
    ],
  },
  {
    slug: 'homelink',
    name: 'HomeLink',
    headline: 'Property rental, sales, and real estate discovery web application',
    context: 'Fullstack Web Platform · MERN Stack',
    category: 'Fullstack / Web',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'JWT Auth'],
    period: '2024',
    featured: false,
    installs: 'MERN Stack',
    previewScreen: '/screens/homelink.jpg',
    color: '#2563EB',
    link: { label: 'GitHub', url: 'https://github.com/pashupati-git' },
    status: 'Fullstack App',
    bullets: [
      'Architected end-to-end property marketplace allowing property owners, agents, and tenants to list and discover residential/commercial properties.',
      'Implemented advanced search with multi-parameter filtering by price range, geolocation, bedroom count, and amenities.',
      'Built secure user authentication with JWT, protected route guards, image upload handling, and responsive modern React UI.',
      'Engineered RESTful API server using Express.js and structured MongoDB schemas with Mongoose for fast geospatial and property queries.',
    ],
  },
  {
    slug: 'ecommerce-app',
    name: 'Ecommerce App',
    headline: 'Modern mobile shopping application with real-time cart, favorites, and Firebase backend',
    context: 'Mobile Commerce App · Flutter & Firebase',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Firebase Auth', 'Cloud Firestore', 'Riverpod', 'Cloud Storage'],
    period: '2024',
    featured: false,
    installs: 'Flutter App',
    previewScreen: '/screens/ecommerce.jpg',
    color: '#D97706',
    link: { label: 'GitHub', url: 'https://github.com/pashupati-git' },
    status: 'Mobile Application',
    bullets: [
      'Built a modern mobile eCommerce application featuring instant product browsing, category filtering, and item search.',
      'Implemented real-time shopping cart, favorites / wishlist, and stock management backed by Cloud Firestore.',
      'Integrated Firebase Authentication with email/password and Google Sign-In with protected checkout workflows.',
      'Architected clean state management and responsive UI components following modern design systems.',
    ],
  },
  {
    slug: 'recipe-app',
    name: 'Recipe App',
    headline: 'Culinary recipe discovery app with ingredient search and step-by-step cooking guides',
    context: 'Food & Recipe Mobile App · Flutter & Firebase',
    category: 'Flutter / Mobile',
    stack: ['Flutter', 'Firebase', 'REST APIs', 'Cloud Firestore', 'Offline Caching'],
    period: '2024',
    featured: false,
    installs: 'Flutter App',
    previewScreen: '/screens/recipe.jpg',
    color: '#EA580C',
    link: { label: 'GitHub', url: 'https://github.com/pashupati-git' },
    status: 'Mobile Application',
    bullets: [
      'Engineered mobile culinary guide allowing users to search thousands of recipes by available pantry ingredients, cuisine type, and dietary preferences.',
      'Built interactive cooking mode displaying detailed ingredient checklists, step-by-step instructions, and preparation timers.',
      'Integrated Firebase Firestore for user recipe bookmarking, cloud favorites synchronization, and community recipe submissions.',
      'Implemented local caching for offline kitchen access, ensuring recipes remain viewable without internet connection.',
    ],
  },
];

export const playListings = [
  { name: 'Caro TV Nepal', installs: '1,000+', url: 'https://play.google.com/store/apps/details?id=com.classic.np.app.carotv', note: 'Live TV & IPTV streaming, Flutter, Kotlin, ExoPlayer & Codemagic', icon: '/icons/caro-tv.png' },
  { name: 'Classic Tech', installs: '100,000+', url: 'https://play.google.com/store/apps/details?id=com.classic.np.app', note: 'Broadband customer support app, Flutter & Kotlin with payment gateways', icon: '/icons/classic-tech.png' },
  { name: 'Classic Engine', installs: '10,000+', url: 'https://play.google.com/store/apps/details?id=com.classic.np.engine', note: 'Field technician staff app, Flutter', icon: '/icons/classic-engine.png' },
  { name: 'NNET', installs: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.nnet.np.app', note: 'ISP customer support & optical diagnostics, solely built & deployed', icon: '/icons/nnet.png' },
  { name: 'Dealer Partner', installs: '1,000+', url: 'https://play.google.com/store/apps/details?id=com.classic.partner.np.app', note: 'Referral and commission network app, Flutter', icon: '/icons/dealer-partner.png' },
  { name: 'Totto', installs: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.nepalibazaar.totto', note: 'Buy & sell community marketplace, Flutter & Django', icon: '/icons/totto.png' },
];

export const services = [
  {
    icon: '📱',
    title: 'Cross-Platform Mobile Development',
    body: 'Production-ready Android, iOS, and Android TV applications built from a unified Flutter codebase. Clean MVVM and Riverpod architecture, strict state isolation, and pixel-perfect 60fps UI execution.',
  },
  {
    icon: '🚀',
    title: 'App Store & Play Store Publishing',
    body: 'End-to-end publishing lifecycle for Google Play Store and Apple App Store (TestFlight & App Store Connect). Keystore generation, certificate provisioning, privacy compliance, store listing optimization, and phased rollouts.',
  },
  {
    icon: '🧪',
    title: 'Mobile App Testing & Quality Assurance',
    body: 'Comprehensive mobile testing covering Flutter unit tests, widget tests, and integration testing with mock API simulations. Memory leak profiling, offline resilience testing, and Firebase Crashlytics monitoring for rock-solid stability.',
  },
  {
    icon: '💳',
    title: 'Payment Gateways & Wallet Integration',
    body: 'Seamless integration of national payment processors including eSewa, Khalti, ConnectIPS, and digital wallet checkout systems with webhooks, instant receipt verification, and automated subscription reconciliation.',
  },
  {
    icon: '⚡',
    title: 'Clean Architecture & State Management',
    body: 'Enterprise-grade code separation with Riverpod, Bloc, and Provider. Decoupled presentation, domain, and data layers that make mobile codebases easy to scale, test, and maintain.',
  },
  {
    icon: '🤖',
    title: 'Native Android & Kotlin Platform Channels',
    body: 'Extending Flutter with high-performance native Kotlin modules, Android TV D-pad navigation, custom audio/video player integrations (ExoPlayer), and low-level network diagnostics.',
  },
];

export const skills = [
  {
    category: 'Mobile App Development',
    items: [
      'Flutter & Dart (Android, iOS & Android TV)',
      'Native Android with Kotlin (Platform Channels, ExoPlayer)',
      'Payment Gateway Integration (eSewa, ConnectIPS, Fonepay, Nabil Card, Nepal Pay)',
      'Biometric Authentication (Face ID & Fingerprint)',
      'Clean Architecture & MVVM',
      'Riverpod, Bloc & GetX State Management',
      'Hive Local Storage, Drift & SQLite',
      'Flutter Localization (English & Nepali)',
      'Advanced UI Development (Figma → Flutter)',
      'Custom Animations & 60fps Optimization',
    ],
  },
  {
    category: 'App Publishing & Release Management',
    items: [
      'Google Play Store Publishing (Tracks, Policy Compliance, AAB Bundles)',
      'Apple App Store Publishing (App Store Connect, TestFlight Beta Testing, IPA)',
      'Codemagic CI/CD (Automated Mobile Builds & Deployment)',
      'GitHub Actions (CI/CD Pipelines, Linting & Automated Workflows)',
      'Keystore Generation, Provisioning Profiles & Certificate Signing',
      'Store Listing Optimization, App Iconography & Release Notes',
      'Firebase Console & Crashlytics Real-time Monitoring',
      'Git & GitHub (Branching, PRs, Code Reviews, Release Tags)',
    ],
  },
  {
    category: 'Mobile App Testing & Quality Assurance',
    items: [
      'Flutter Unit Testing & Widget Testing',
      'Integration Testing & Mock API Simulation',
      'Automated App Testing & Regression Verification',
      'Performance Profiling & Memory Leak Optimization',
      'Network Throttling, Latency & Offline Edge-Case Testing',
      'Postman API Testing & Automated Test Suites',
      'Android Studio, Xcode & VS Code Debugging Tools',
    ],
  },
  {
    category: 'Programming Languages & Concepts',
    items: [
      'Dart',
      'Kotlin',
      'Java',
      'C++',
      'JavaScript / TypeScript',
      'Python (Machine Learning basics)',
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'SOLID Design Principles',
    ],
  },
  {
    category: 'Backend & Cloud Integrations',
    items: [
      'RESTful API Integration & Dio Interceptors',
      'Payment Gateway Webhooks & Verification',
      'Firebase Authentication (Phone OTP, Google)',
      'Cloud Firestore & Realtime DB',
      'Firebase Cloud Storage',
      'Node.js & Express Basics',
      'Python (Django REST & FastAPI basics)',
      'WebSockets & Live GPS Streaming',
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
