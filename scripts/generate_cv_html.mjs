export function getCvHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Pashupati Chaudhary - Curriculum Vitae</title>
<style>
  @page {
    size: A4 portrait;
    margin: 7.5mm 9.5mm 7.5mm 9.5mm;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1e293b;
    background: #ffffff;
    font-size: 8.5pt;
    line-height: 1.33;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  a {
    color: #0284c7;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .cv-page {
    width: 100%;
    max-width: 191mm;
    margin: 0 auto;
    page-break-after: always;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .cv-page:last-child {
    page-break-after: auto;
  }

  /* Header */
  .cv-header {
    border-bottom: 2.2px solid #0284c7;
    padding-bottom: 5px;
    margin-bottom: 6px;
  }

  .cv-header-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 3px;
  }

  .cv-name {
    font-size: 19.5pt;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.025em;
    text-transform: uppercase;
  }

  .cv-title {
    font-size: 10.2pt;
    font-weight: 700;
    color: #0284c7;
    margin-top: 1px;
  }

  .cv-contacts {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
    font-size: 7.8pt;
    color: #475569;
  }

  .cv-contacts span {
    display: inline-flex;
    align-items: center;
    gap: 3px;
  }

  .cv-contacts .sep {
    color: #cbd5e1;
  }

  /* Sections */
  .section {
    margin-bottom: 6px;
  }

  .section-title {
    font-size: 9.3pt;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 1.5px;
    margin-bottom: 4.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .section-title::after {
    content: "";
    display: block;
    height: 2px;
    width: 26px;
    background: #0284c7;
    margin-left: auto;
  }

  /* Summary */
  .summary-text {
    font-size: 8.3pt;
    line-height: 1.36;
    color: #334155;
    text-align: justify;
  }

  .summary-text strong {
    color: #0f172a;
  }

  /* Skills Grid */
  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.5px 10px;
    font-size: 8pt;
  }

  .skill-item {
    display: flex;
    line-height: 1.28;
  }

  .skill-cat {
    font-weight: 700;
    color: #0f172a;
    width: 142px;
    flex-shrink: 0;
  }

  .skill-cat::after {
    content: ":";
    margin-right: 4px;
  }

  .skill-vals {
    color: #334155;
    flex: 1;
  }

  /* Experience & Projects */
  .job-block, .project-block {
    margin-bottom: 5.5px;
    page-break-inside: avoid;
  }

  .job-header, .proj-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1.5px;
  }

  .job-role {
    font-size: 9.1pt;
    font-weight: 700;
    color: #0f172a;
  }

  .job-company {
    color: #0284c7;
    font-weight: 600;
  }

  .job-period, .proj-period {
    font-size: 7.9pt;
    font-weight: 600;
    color: #64748b;
    font-feature-settings: "tnum";
  }

  .job-meta {
    font-size: 7.8pt;
    color: #64748b;
    margin-bottom: 2px;
    display: flex;
    gap: 5px;
    align-items: center;
    flex-wrap: wrap;
  }

  .badge {
    display: inline-block;
    padding: 0px 4px;
    border-radius: 3px;
    font-size: 7.1pt;
    font-weight: 700;
    background: #e0f2fe;
    color: #0369a1;
    border: 1px solid #bae6fd;
    text-transform: uppercase;
  }

  .badge-success {
    background: #ecfdf5;
    color: #047857;
    border-color: #a7f3d0;
  }

  .bullets {
    list-style: none;
    padding-left: 0;
  }

  .bullets li {
    position: relative;
    padding-left: 10px;
    font-size: 8.1pt;
    line-height: 1.32;
    color: #334155;
    margin-bottom: 1.5px;
  }

  .bullets li::before {
    content: "▪";
    position: absolute;
    left: 0;
    color: #0284c7;
    font-size: 7.8pt;
    top: -0.5px;
  }

  .bullets li strong {
    color: #0f172a;
  }

  /* Projects Section */
  .proj-title {
    font-size: 8.8pt;
    font-weight: 700;
    color: #0f172a;
  }

  .proj-stack {
    font-size: 7.4pt;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    color: #0369a1;
    margin-bottom: 1.5px;
  }

  /* Education & Certifications */
  .edu-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px 10px;
  }

  .edu-item {
    font-size: 8.1pt;
    line-height: 1.28;
  }

  .edu-degree {
    font-weight: 700;
    color: #0f172a;
  }

  .edu-school {
    color: #0284c7;
    font-weight: 600;
    font-size: 7.9pt;
  }

  .edu-period {
    color: #64748b;
    font-size: 7.6pt;
  }

  .edu-desc {
    color: #475569;
    font-size: 7.6pt;
    margin-top: 1px;
  }

  /* Footer Note */
  .cv-footer {
    border-top: 1px solid #e2e8f0;
    padding-top: 2.5px;
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    font-size: 7.1pt;
    color: #94a3b8;
  }
</style>
</head>
<body>

<!-- ================= PAGE 1 ================= -->
<div class="cv-page">
  <!-- Header -->
  <header class="cv-header">
    <div class="cv-header-top">
      <div>
        <h1 class="cv-name">Pashupati Chaudhary</h1>
        <div class="cv-title">Flutter Developer · Mobile Application Engineer (Android & iOS)</div>
      </div>
    </div>
    <div class="cv-contacts">
      <span>📍 Kathmandu, Nepal</span>
      <span class="sep">|</span>
      <span>📞 <a href="tel:+9779813704884">+977 9813704884</a></span>
      <span class="sep">|</span>
      <span>✉️ <a href="mailto:pashupatic121@gmail.com">pashupatic121@gmail.com</a></span>
      <span class="sep">|</span>
      <span>💻 <a href="https://github.com/pashupati-git">github.com/pashupati-git</a></span>
      <span class="sep">|</span>
      <span>🔗 <a href="https://linkedin.com/in/pashupati-chaudhary-555bb4370/">linkedin.com/in/pashupati-chaudhary</a></span>
    </div>
  </header>

  <!-- Summary -->
  <section class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">
      <strong>Computer Engineering graduate</strong> and <strong>Mobile Application Developer</strong> with comprehensive expertise in production <strong>Flutter (Dart)</strong> and native <strong>Android (Kotlin)</strong> engineering. Currently working at <strong>Classic Tech</strong> (8+ months), architecting, optimizing, and maintaining mission-critical applications across an active ecosystem of <strong>110,000+ Google Play installs</strong> (including Caro TV Nepal, Classic Tech Customer App, Classic Engine, and Dealer Partner). Proven track record in <strong>Clean Architecture</strong>, <strong>BLoC & Riverpod</strong> state management, native <strong>Kotlin platform channels</strong> (ExoPlayer video decoding, optical network diagnostics), national <strong>payment gateway integrations (eSewa, Khalti, ConnectIPS, Fonepay)</strong>, automated <strong>CI/CD pipelines (Codemagic & GitHub Actions)</strong>, comprehensive testing, and end-to-end store publishing to <strong>Google Play Store</strong> and <strong>Apple App Store</strong>.
    </p>
  </section>

  <!-- Skills -->
  <section class="section">
    <div class="section-title">Technical Skills & Core Competencies</div>
    <div class="skills-grid">
      <div class="skill-item">
        <span class="skill-cat">Mobile Engineering</span>
        <span class="skill-vals"><strong>Flutter & Dart</strong>, Android (Java/Kotlin), iOS (Flutter), Android TV D-Pad navigation</span>
      </div>
      <div class="skill-item">
        <span class="skill-cat">Architecture & Patterns</span>
        <span class="skill-vals"><strong>Clean Architecture</strong>, MVVM, Repository Pattern, SOLID Principles, Modular Code</span>
      </div>
      <div class="skill-item">
        <span class="skill-cat">State Management</span>
        <span class="skill-vals"><strong>BLoC / Cubit</strong>, <strong>Riverpod</strong>, GetX, Provider, Reactive Programming</span>
      </div>
      <div class="skill-item">
        <span class="skill-cat">Native Platform Channels</span>
        <span class="skill-vals"><strong>Kotlin bridging</strong>, ExoPlayer video playback, Wi-Fi / optical diagnostics, biometrics</span>
      </div>
      <div class="skill-item">
        <span class="skill-cat">Payment Gateways</span>
        <span class="skill-vals"><strong>eSewa</strong>, <strong>Khalti</strong>, <strong>ConnectIPS</strong>, <strong>Fonepay</strong>, IME Pay, Webhooks & Tokenization</span>
      </div>
      <div class="skill-item">
        <span class="skill-cat">CI/CD & DevOps</span>
        <span class="skill-vals"><strong>Codemagic</strong>, <strong>GitHub Actions</strong>, Keystore signing, Build flavors, Release tracks</span>
      </div>
      <div class="skill-item">
        <span class="skill-cat">Testing & Quality</span>
        <span class="skill-vals">Flutter <strong>Unit Testing</strong>, <strong>Widget Testing</strong>, Integration Testing, Mock APIs, Profiling</span>
      </div>
      <div class="skill-item">
        <span class="skill-cat">Store Publishing</span>
        <span class="skill-vals"><strong>Google Play Console</strong> (AAB, policy compliance, phased rollouts), <strong>App Store Connect</strong></span>
      </div>
      <div class="skill-item">
        <span class="skill-cat">Backend & Cloud</span>
        <span class="skill-vals">REST APIs (Dio + Interceptors), Firebase (Auth, Firestore, FCM, Storage), WebSockets</span>
      </div>
      <div class="skill-item">
        <span class="skill-cat">Local DB & Storage</span>
        <span class="skill-vals"><strong>Hive</strong>, SQLite / Drift, SharedPreferences, Offline-first cache synchronization</span>
      </div>
    </div>
  </section>

  <!-- Work Experience -->
  <section class="section">
    <div class="section-title">Professional Experience</div>

    <!-- Classic Tech -->
    <div class="job-block">
      <div class="job-header">
        <div>
          <span class="job-role">Mobile Application Developer</span> · <span class="job-company">Classic Tech</span>
        </div>
        <span class="job-period">Mar 2026 – Present (8+ Months)</span>
      </div>
      <div class="job-meta">
        <span class="badge">Full-time</span>
        <span>New Baneshwor, Kathmandu, Nepal</span>
        <span>·</span>
        <span>Nepal’s Premier Broadband ISP & Network Provider</span>
      </div>
      <ul class="bullets">
        <li><strong>Ecosystem Leadership:</strong> Architect, maintain, and enhance mission-critical Flutter and Kotlin production apps serving over <strong>110,000+ active subscribers</strong> across Nepal (Caro TV Nepal, Classic Tech Customer App, Classic Engine, Dealer Partner).</li>
        <li><strong>Digital Payment Gateways:</strong> Engineered and maintained end-to-end payment gateway integrations with <strong>eSewa, Khalti, and ConnectIPS</strong> for subscription renewals, online recharge, and tax-compliant invoice generation, handling high transaction volumes with zero reconciliation discrepancies.</li>
        <li><strong>Native Kotlin Video Player Bridging:</strong> Developed native Android platform channels bridging <strong>Google ExoPlayer</strong> for hardware-accelerated HLS live IPTV streaming in <strong>Caro TV Nepal</strong>, achieving sub-second channel switching and flawless Android TV D-pad remote navigation.</li>
        <li><strong>Low-Level Hardware Diagnostics:</strong> Built custom Kotlin platform channels for querying optical router interfaces, testing Wi-Fi signal parameters, and running optical power level diagnostics (dBm) directly on customer devices.</li>
        <li><strong>Automated CI/CD Pipelines:</strong> Implemented end-to-end mobile CI/CD workflows using <strong>Codemagic and GitHub Actions</strong> for automated linting, unit testing, keystore code signing, build flavors (dev/prod), and direct deployment to Google Play Store tracks, cutting release turnaround by <strong>65%</strong>.</li>
        <li><strong>Field Operations & Offline Synchronization:</strong> Engineered offline task caching, auto-sync queues, and GPS-based work order routing in <strong>Classic Engine</strong>, ensuring uninterrupted operations for over 10,000 field technicians in areas with poor cellular coverage.</li>
        <li><strong>Sole Mobile Ownership (NNET):</strong> Architected, built from scratch, and independently published the <strong>NNET Customer Self-Care</strong> app to Google Play Store, managing architecture, UI, REST APIs, and full store compliance.</li>
      </ul>
    </div>

    <!-- MindRisers -->
    <div class="job-block">
      <div class="job-header">
        <div>
          <span class="job-role">Flutter Developer Intern</span> · <span class="job-company">MindRisers Institute of Technology</span>
        </div>
        <span class="job-period">Sep 2025 – Feb 2026 (6 Months)</span>
      </div>
      <div class="job-meta">
        <span class="badge">Internship</span>
        <span>Putalisadak, Kathmandu, Nepal</span>
        <span>·</span>
        <span>Professional Tech Development & Training Hub</span>
      </div>
      <ul class="bullets">
        <li><strong>Architecture & Design:</strong> Built cross-platform mobile applications from Figma prototypes adhering strictly to <strong>Clean Architecture</strong> (Presentation, Domain, Data) and <strong>MVVM</strong> design patterns.</li>
        <li><strong>Reactive State Management:</strong> Architected state management using <strong>Riverpod</strong>, creating modular, testable, and maintainable widget trees with decoupled business logic.</li>
        <li><strong>Bilingual Localization & API Integration:</strong> Implemented comprehensive internationalization (English & Nepali) and integrated REST APIs via <strong>Dio</strong> with token refresh interceptors, global exception handlers, and response models.</li>
        <li><strong>Cloud & Offline Persistence:</strong> Configured Firebase Authentication (Phone OTP, Google), Cloud Firestore, Cloud Storage, and implemented <strong>Hive local database</strong> for offline data persistence and instant cache retrieval.</li>
        <li><strong>Agile Team Collaboration:</strong> Actively participated in agile sprint planning, daily standups, Git PR reviews, code refactoring, and UI performance profiling to sustain smooth 60fps animations.</li>
      </ul>
    </div>
  </section>

  <div class="cv-footer">
    <span>Pashupati Chaudhary · Curriculum Vitae</span>
    <span>Page 1 of 2</span>
  </div>
</div>

<!-- ================= PAGE 2 ================= -->
<div class="cv-page">
  <!-- Production Applications & Projects -->
  <section class="section">
    <div class="section-title">Production Mobile Applications & Key Projects</div>

    <!-- Caro TV Nepal -->
    <div class="project-block">
      <div class="proj-header">
        <div>
          <span class="proj-title">Caro TV Nepal — Live TV & IPTV Streaming Platform</span>
          <span class="badge badge-success">1,000+ Installs · Google Play</span>
        </div>
        <span class="proj-period">2025 – 2026</span>
      </div>
      <div class="proj-stack">Flutter · BLoC · Native Kotlin · ExoPlayer · HLS Streaming · eSewa / Khalti · Codemagic CI/CD · Android TV</div>
      <ul class="bullets">
        <li>Developed high-performance IPTV live streaming client handling nationwide television channels with adaptive bitrate streaming.</li>
        <li>Bridged native Android Kotlin platform channels to <strong>ExoPlayer</strong> for hardware decoding, buffer optimization, and remote D-pad navigation.</li>
        <li>Integrated in-app subscription renewals and digital wallet recharges via <strong>eSewa and Khalti</strong> with instant payment verification.</li>
        <li>Configured automated Codemagic and GitHub Actions CI/CD for continuous testing, keystore signing, and Google Play Store delivery.</li>
      </ul>
    </div>

    <!-- Classic Tech Customer App -->
    <div class="project-block">
      <div class="proj-header">
        <div>
          <span class="proj-title">Classic Tech App — Flagship Broadband Customer Self-Care</span>
          <span class="badge badge-success">100,000+ Installs · Google Play</span>
        </div>
        <span class="proj-period">2025 – 2026</span>
      </div>
      <div class="proj-stack">Flutter · Kotlin · MVVM · eSewa · Khalti · ConnectIPS · Router Diagnostics · REST APIs · Codemagic</div>
      <ul class="bullets">
        <li>Engineered key customer self-service modules serving over <strong>100,000 active internet subscribers</strong> across Nepal.</li>
        <li>Implemented multi-gateway payment processing (<strong>eSewa, Khalti, ConnectIPS</strong>) for automated bill renewals and statement history.</li>
        <li>Built native Kotlin platform bridges for optical router diagnostics, Wi-Fi signal inspection, and real-time support ticket tracking.</li>
      </ul>
    </div>

    <!-- Classic Engine & Dealer Partner -->
    <div class="project-block">
      <div class="proj-header">
        <div>
          <span class="proj-title">Classic Engine & Dealer Partner — Enterprise Operations</span>
          <span class="badge badge-success">11,000+ Combined Installs · Google Play</span>
        </div>
        <span class="proj-period">2025 – 2026</span>
      </div>
      <div class="proj-stack">Flutter · BLoC · Clean Architecture · Google Maps API · Offline Caching · dBm Diagnostics · Biometrics · REST APIs</div>
      <ul class="bullets">
        <li>Streamlined field operations for technicians managing FTTH installations, live optical power level testing (dBm), and GPS customer routing.</li>
        <li>Architected offline task caching and auto-sync queues in Classic Engine, alongside dealer commission ledger tracking in Dealer Partner.</li>
      </ul>
    </div>

    <!-- NNET -->
    <div class="project-block">
      <div class="proj-header">
        <div>
          <span class="proj-title">NNET — ISP Customer Self-Care & Diagnostic Portal</span>
          <span class="badge badge-success">Sole Mobile Engineer · Google Play</span>
        </div>
        <span class="proj-period">2026</span>
      </div>
      <div class="proj-stack">Flutter · BLoC · Payment Gateways · Biometrics · WebSockets · Push Notifications · Clean Architecture</div>
      <ul class="bullets">
        <li>Solely architected, developed from scratch, and deployed the production app to Google Play Store meeting all 2026 Google Play requirements.</li>
        <li>Built full customer billing lifecycle with digital payment gateways, optical router signal tests, and real-time outage notifications.</li>
      </ul>
    </div>

    <!-- SheGuidesMe & Totto -->
    <div class="project-block">
      <div class="proj-header">
        <div>
          <span class="proj-title">SheGuidesMe & Totto — Community & Travel Marketplaces</span>
          <span class="badge badge-success">Production Apps · Google Play</span>
        </div>
        <span class="proj-period">2025 – 2026</span>
      </div>
      <div class="proj-stack">Flutter · Riverpod · Firebase · Real-time Chat · Google Maps API · Django REST · Responsive Mobile UI</div>
      <ul class="bullets">
        <li>Contributed to <strong>SheGuidesMe</strong> mobile marketplace connecting global travelers with verified local guides via real-time chat and Riverpod.</li>
        <li>Developed <strong>Totto</strong> buy-and-sell community marketplace app with real-time buyer-seller negotiation chat and OTP authentication.</li>
      </ul>
    </div>

    <!-- LeafCare -->
    <div class="project-block">
      <div class="proj-header">
        <div>
          <span class="proj-title">LeafCare — Plant Disease Detection via CNN & Agricultural Marketplace</span>
          <span class="badge">Final Year Capstone Project</span>
        </div>
        <span class="proj-period">2024 – 2025</span>
      </div>
      <div class="proj-stack">Flutter · TensorFlow Lite (TFLite) · CNN · Python / Keras · Cloud Firestore · Edge AI Inference</div>
      <ul class="bullets">
        <li>Trained a Convolutional Neural Network (CNN) on plant pathology datasets and quantized it to <strong>TensorFlow Lite (TFLite)</strong> for on-device, low-latency offline edge inference on mobile devices; built Flutter UI for instant diagnosis and agri-eCommerce.</li>
      </ul>
    </div>

    <!-- HomeLink -->
    <div class="project-block">
      <div class="proj-header">
        <div>
          <span class="proj-title">HomeLink — Real Estate & Property Discovery Web Platform</span>
          <span class="badge">Fullstack MERN App</span>
        </div>
        <span class="proj-period">2024</span>
      </div>
      <div class="proj-stack">MongoDB · Express.js · React · Node.js · JWT Authentication · RESTful API · Geospatial Queries</div>
      <ul class="bullets">
        <li>Architected fullstack property marketplace featuring multi-parameter search (price, location, amenities), JWT auth, and geospatial queries.</li>
      </ul>
    </div>
  </section>

  <!-- Education -->
  <section class="section">
    <div class="section-title">Education & Academic Journey</div>
    <div class="edu-grid">
      <div class="edu-item">
        <div class="edu-degree">Bachelor in Computer Engineering</div>
        <div class="edu-school">Nepal Engineering College (Affiliated with Pokhara University)</div>
        <div class="edu-period">July 2021 – Aug 2025 · Changunarayan, Bhaktapur, Nepal</div>
        <div class="edu-desc">Core: Software Engineering, Data Structures & Algorithms, OS, DBMS, Networks, Machine Learning. Started Flutter development in 4th year; built <strong>LeafCare</strong> capstone, completing 1 year of intensive self-learning and project engineering.</div>
      </div>
      <div class="edu-item">
        <div class="edu-degree">National Examination Board (NEB) · +2 Science</div>
        <div class="edu-school">White House Secondary School</div>
        <div class="edu-period">Apr 2018 – Apr 2020 · Khumaltar, Lalitpur, Nepal</div>
        <div class="edu-desc">Major in Physical Science (Physics, Chemistry, Mathematics, Computer Science). Built solid analytical, algorithmic, and mathematical foundation.</div>
      </div>
    </div>
  </section>

  <!-- Training & Certifications -->
  <section class="section">
    <div class="section-title">Professional Training & Certifications</div>
    <div class="job-block" style="margin-bottom: 2px;">
      <div class="job-header">
        <div>
          <span class="job-role">Professional Flutter & Dart Apprenticeship Certification</span>
        </div>
        <span class="job-period">2025</span>
      </div>
      <div class="job-meta">
        <span class="badge">Credential ID: MR-81031-FL</span>
        <span>Mind Risers Consortium · Kathmandu, Nepal</span>
        <span>·</span>
        <span><a href="https://www.mindrisers.com.np/certificate/validate/MR-81031-FL" target="_blank">Verify Credential Online (MR-81031-FL) ↗</a></span>
      </div>
      <ul class="bullets">
        <li>Completed <strong>4 months of intensive physical, classroom-based engineering classes</strong> and real-world project development covering Dart internals, Flutter widget rendering pipeline, Clean Architecture, Riverpod state management, Hive local storage, Firebase integrations, and mobile publishing.</li>
      </ul>
    </div>
  </section>

  <!-- Languages & Additional Info -->
  <section class="section" style="margin-bottom: 0;">
    <div class="section-title">Languages & Work Authorization</div>
    <div class="skills-grid">
      <div class="skill-item">
        <span class="skill-cat">Spoken Languages</span>
        <span class="skill-vals"><strong>English</strong> (Fluent / Professional Working Proficiency), <strong>Nepali</strong> (Native), <strong>Hindi</strong> (Proficient)</span>
      </div>
      <div class="skill-item">
        <span class="skill-cat">Work Availability</span>
        <span class="skill-vals">Full-time, Hybrid, Remote or On-site in Kathmandu · Authorized to work in Nepal & open to international relocation</span>
      </div>
    </div>
  </section>

  <div class="cv-footer">
    <span>Pashupati Chaudhary · Curriculum Vitae</span>
    <span>Page 2 of 2</span>
  </div>
</div>

</body>
</html>`;
}
