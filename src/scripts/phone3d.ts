import * as THREE from 'three';

export interface AppScreen {
  id: string;
  name: string;
  tagline: string;
  themeColor: string;
  renderScreen: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
}

export const APPS: AppScreen[] = [
  {
    id: 'totto',
    name: 'Totto',
    tagline: 'Buy & Sell Marketplace',
    themeColor: '#00B4D8',
    renderScreen: (ctx, w, h) => {
      // Clean modern Flutter UI for Totto
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(0, 0, w, h);

      // Status Bar
      ctx.fillStyle = '#94A3B8';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('9:41', 36, 44);
      ctx.fillText('5G  100%', w - 120, 44);

      // Top Bar with Signature Totto Logo (Dark background, white text, signature twin red dots)
      ctx.fillStyle = '#1E293B';
      ctx.roundRect(24, 70, w - 48, 64, 16);
      ctx.fill();

      // Signature Totto Logo
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 28px sans-serif';
      ctx.fillText('totto', 48, 114);

      // Signature twin red dots above the 'tt'
      ctx.fillStyle = '#E63946';
      ctx.beginPath();
      ctx.arc(81, 91, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(98, 91, 4.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#94A3B8';
      ctx.font = '18px sans-serif';
      ctx.fillText('Indrachowk, KTM', w - 195, 112);

      // Search Bar
      ctx.fillStyle = '#334155';
      ctx.roundRect(24, 150, w - 48, 52, 12);
      ctx.fill();
      ctx.fillStyle = '#64748B';
      ctx.font = '20px sans-serif';
      ctx.fillText('Search laptops, phones, bikes...', 48, 184);

      // Banner Card
      const grad = ctx.createLinearGradient(24, 220, w - 24, 360);
      grad.addColorStop(0, '#0284C7');
      grad.addColorStop(1, '#00B4D8');
      ctx.fillStyle = grad;
      ctx.roundRect(24, 220, w - 48, 160, 20);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 28px sans-serif';
      ctx.fillText('Sell & Buy Fast in KTM', 48, 270);
      ctx.font = '20px sans-serif';
      ctx.fillText('Real-time chat & price negotiation', 48, 310);
      ctx.fillStyle = '#0F172A';
      ctx.roundRect(48, 330, 140, 36, 18);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('Post an Ad', 74, 354);

      // Categories
      const cats = ['Electronics', 'Vehicles', 'Property', 'Fashion'];
      cats.forEach((cat, i) => {
        const x = 24 + i * 118;
        ctx.fillStyle = '#1E293B';
        ctx.roundRect(x, 400, 106, 44, 12);
        ctx.fill();
        ctx.fillStyle = '#E2E8F0';
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText(cat, x + 14, 428);
      });

      // Product Feed Grid
      for (let i = 0; i < 2; i++) {
        const y = 470 + i * 220;
        // Item 1
        ctx.fillStyle = '#1E293B';
        ctx.roundRect(24, y, (w - 60) / 2, 200, 16);
        ctx.fill();
        ctx.fillStyle = '#334155';
        ctx.roundRect(32, y + 8, (w - 60) / 2 - 16, 110, 12);
        ctx.fill();
        ctx.fillStyle = '#38BDF8';
        ctx.font = 'bold 22px sans-serif';
        ctx.fillText('Rs. 45,000', 36, y + 148);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '16px sans-serif';
        ctx.fillText('MacBook Air M1', 36, y + 174);

        // Item 2
        const x2 = 24 + (w - 60) / 2 + 12;
        ctx.fillStyle = '#1E293B';
        ctx.roundRect(x2, y, (w - 60) / 2, 200, 16);
        ctx.fill();
        ctx.fillStyle = '#334155';
        ctx.roundRect(x2 + 8, y + 8, (w - 60) / 2 - 16, 110, 12);
        ctx.fill();
        ctx.fillStyle = '#38BDF8';
        ctx.font = 'bold 22px sans-serif';
        ctx.fillText('Rs. 22,500', x2 + 12, y + 148);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '16px sans-serif';
        ctx.fillText('Sony WH-1000XM4', x2 + 12, y + 174);
      }

      // Bottom Navigation Bar
      ctx.fillStyle = '#0B0F19';
      ctx.fillRect(0, h - 80, w, 80);
      ctx.fillStyle = '#00B4D8';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('Explore', 40, h - 35);
      ctx.fillStyle = '#64748B';
      ctx.fillText('Chat (3)', 160, h - 35);
      ctx.fillText('Saved', 290, h - 35);
      ctx.fillText('Profile', 400, h - 35);
    },
  },
  {
    id: 'leafcare',
    name: 'LeafCare',
    tagline: 'AI Plant Health Scanner',
    themeColor: '#2EC4B6',
    renderScreen: (ctx, w, h) => {
      ctx.fillStyle = '#081C15';
      ctx.fillRect(0, 0, w, h);

      // Status Bar
      ctx.fillStyle = '#D8F3DC';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('9:41', 36, 44);
      ctx.fillText('5G  98%', w - 110, 44);

      // Header
      ctx.fillStyle = '#1B4332';
      ctx.roundRect(24, 70, w - 48, 64, 16);
      ctx.fill();
      ctx.fillStyle = '#52B788';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText('🌿 LeafCare AI', 48, 112);

      // Camera Viewfinder Box
      ctx.fillStyle = '#2D6A4F';
      ctx.roundRect(24, 150, w - 48, 360, 20);
      ctx.fill();

      // Scan target box
      ctx.strokeStyle = '#52B788';
      ctx.lineWidth = 4;
      ctx.strokeRect(80, 200, w - 160, 240);

      // Live scan beam
      const scanGrad = ctx.createLinearGradient(0, 290, 0, 350);
      scanGrad.addColorStop(0, 'rgba(82, 183, 136, 0.4)');
      scanGrad.addColorStop(1, 'rgba(82, 183, 136, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(82, 290, w - 164, 60);

      ctx.fillStyle = '#D8F3DC';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('Scanning Tomato Leaf...', 140, 410);

      // Diagnosis Card
      ctx.fillStyle = '#1B4332';
      ctx.roundRect(24, 530, w - 48, 220, 20);
      ctx.fill();

      ctx.fillStyle = '#74C69D';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('Result: Early Blight', 48, 575);
      ctx.fillStyle = '#D8F3DC';
      ctx.font = '18px sans-serif';
      ctx.fillText('Confidence: 96.4% (TFLite CNN)', 48, 610);
      ctx.fillText('Treatment: Organic Copper Fungicide', 48, 645);

      // Buy Treatment Action
      ctx.fillStyle = '#52B788';
      ctx.roundRect(48, 675, w - 96, 50, 25);
      ctx.fill();
      ctx.fillStyle = '#081C15';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('Shop Recommended Cure', 125, 707);

      // Bottom Bar
      ctx.fillStyle = '#081C15';
      ctx.fillRect(0, h - 80, w, 80);
      ctx.fillStyle = '#52B788';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('Diagnosis', 40, h - 35);
      ctx.fillStyle = '#74C69D';
      ctx.fillText('History', 170, h - 35);
      ctx.fillText('Farm Shop', 280, h - 35);
      ctx.fillText('Alerts', 410, h - 35);
    },
  },
  {
    id: 'nnet',
    name: 'NNET',
    tagline: 'ISP Customer Support App',
    themeColor: '#7B2CBF',
    renderScreen: (ctx, w, h) => {
      ctx.fillStyle = '#100B1A';
      ctx.fillRect(0, 0, w, h);

      // Status Bar
      ctx.fillStyle = '#E9D5FF';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('9:41', 36, 44);
      ctx.fillText('WiFi 6  100%', w - 140, 44);

      // Top Bar with Signature NNET Purple Theme
      const gradHeader = ctx.createLinearGradient(24, 70, w - 24, 134);
      gradHeader.addColorStop(0, '#6D28D9');
      gradHeader.addColorStop(1, '#9333EA');
      ctx.fillStyle = gradHeader;
      ctx.roundRect(24, 70, w - 48, 64, 16);
      ctx.fill();

      // NNET Logo text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 28px sans-serif';
      ctx.fillText('NNET', 48, 114);
      ctx.font = '16px sans-serif';
      ctx.fillStyle = '#E9D5FF';
      ctx.fillText('Customer Support', w - 195, 112);

      // Account Status Card
      ctx.fillStyle = '#1D132D';
      ctx.roundRect(24, 150, w - 48, 230, 20);
      ctx.fill();

      ctx.fillStyle = '#A855F7';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('Fiber Pro 250 Mbps', 48, 195);

      ctx.fillStyle = '#D8B4FE';
      ctx.font = '18px sans-serif';
      ctx.fillText('ONU Router Status: ONLINE', 48, 230);
      ctx.fillText('Plan Expiry: 28 Days Remaining', 48, 265);

      // Quick action buttons inside card
      ctx.fillStyle = '#7B2CBF';
      ctx.roundRect(48, 300, 140, 44, 22);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('Pay Bill', 85, 328);

      ctx.fillStyle = '#2E1065';
      ctx.roundRect(205, 300, 160, 44, 22);
      ctx.fill();
      ctx.fillStyle = '#D8B4FE';
      ctx.fillText('Router Restart', 230, 328);

      // Diagnostics & Speed Card
      ctx.fillStyle = '#1D132D';
      ctx.roundRect(24, 400, w - 48, 310, 20);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('Optical Network Diagnostics', 48, 445);

      // Gauge dial
      ctx.beginPath();
      ctx.arc(w / 2, 535, 70, Math.PI * 0.8, Math.PI * 2.2);
      ctx.strokeStyle = '#2E1065';
      ctx.lineWidth = 14;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(w / 2, 535, 70, Math.PI * 0.8, Math.PI * 1.85);
      ctx.strokeStyle = '#A855F7';
      ctx.lineWidth = 14;
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('248', w / 2, 542);
      ctx.font = '16px sans-serif';
      ctx.fillStyle = '#C084FC';
      ctx.fillText('Mbps Optical Speed', w / 2, 570);
      ctx.textAlign = 'start';

      // Live Ticket Support Button
      ctx.fillStyle = '#7B2CBF';
      ctx.roundRect(48, 640, w - 96, 44, 22);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Open Instant Support Ticket', w / 2, 668);
      ctx.textAlign = 'start';

      // Bottom Navigation Bar
      ctx.fillStyle = '#0D0715';
      ctx.fillRect(0, h - 80, w, 80);
      ctx.fillStyle = '#A855F7';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('Home', 45, h - 35);
      ctx.fillStyle = '#C084FC';
      ctx.fillText('Tickets', 160, h - 35);
      ctx.fillText('Bills', 285, h - 35);
      ctx.fillText('Profile', 400, h - 35);
    },
  },
  {
    id: 'classic-tech',
    name: 'Classic Tech',
    tagline: 'ISP Support App (100k+ Users)',
    themeColor: '#13753D',
    renderScreen: (ctx, w, h) => {
      ctx.fillStyle = '#0A1E14';
      ctx.fillRect(0, 0, w, h);

      // Status Bar
      ctx.fillStyle = '#A3E635';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('9:41', 36, 44);
      ctx.fillText('WiFi 6  100%', w - 140, 44);

      // Header
      ctx.fillStyle = '#13753D';
      ctx.roundRect(24, 70, w - 48, 64, 16);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText('Classic Tech ISP', 48, 112);

      // Account Status
      ctx.fillStyle = '#143825';
      ctx.roundRect(24, 150, w - 48, 220, 20);
      ctx.fill();

      ctx.fillStyle = '#86EFAC';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('Fiber Ultra 300 Mbps', 48, 195);
      ctx.fillStyle = '#D1FAE5';
      ctx.font = '18px sans-serif';
      ctx.fillText('Active · Expires in 24 Days', 48, 230);
      ctx.fillText('Online Devices: 8 connected', 48, 265);

      ctx.fillStyle = '#22C55E';
      ctx.roundRect(48, 290, 150, 44, 22);
      ctx.fill();
      ctx.fillStyle = '#052E16';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('Renew Plan', 75, 318);

      // Speedtest Gauge Card
      ctx.fillStyle = '#143825';
      ctx.roundRect(24, 390, w - 48, 320, 20);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('Optical Gateway Diagnostics', 48, 435);

      ctx.beginPath();
      ctx.arc(w / 2, 530, 75, Math.PI * 0.8, Math.PI * 2.2);
      ctx.strokeStyle = '#1F5B39';
      ctx.lineWidth = 14;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(w / 2, 530, 75, Math.PI * 0.8, Math.PI * 1.8);
      ctx.strokeStyle = '#22C55E';
      ctx.lineWidth = 14;
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('294', w / 2, 535);
      ctx.font = '16px sans-serif';
      ctx.fillStyle = '#86EFAC';
      ctx.fillText('Mbps Download', w / 2, 565);
      ctx.textAlign = 'start';

      ctx.fillStyle = '#22C55E';
      ctx.roundRect(48, 640, w - 96, 44, 22);
      ctx.fill();
      ctx.fillStyle = '#052E16';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Reboot ONU Router', w / 2, 668);
      ctx.textAlign = 'start';

      // Bottom Bar
      ctx.fillStyle = '#0A1E14';
      ctx.fillRect(0, h - 80, w, 80);
      ctx.fillStyle = '#22C55E';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('Dashboard', 40, h - 35);
      ctx.fillStyle = '#86EFAC';
      ctx.fillText('Caro TV', 170, h - 35);
      ctx.fillText('Support', 290, h - 35);
      ctx.fillText('Bill Pay', 400, h - 35);
    },
  },
];

export class Phone3DShowcase {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private phoneGroup: THREE.Group;
  private screenMesh: THREE.Mesh | null = null;
  private screenCanvas: HTMLCanvasElement;
  private screenCtx: CanvasRenderingContext2D;
  private screenTexture: THREE.CanvasTexture;

  private isDragging = false;
  private previousMousePosition = { x: 0, y: 0 };
  private targetRotation = { x: 0.1, y: -0.35 };
  private currentRotation = { x: 0.1, y: -0.35 };
  private animationFrameId: number | null = null;
  private currentAppIndex = 0;
  private startTime = performance.now();

  constructor(container: HTMLElement) {
    this.container = container;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    // 1. Scene setup
    this.scene = new THREE.Scene();

    // 2. Camera setup
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 8.5);

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    container.appendChild(this.renderer.domElement);

    // 4. Screen Canvas & Texture
    this.screenCanvas = document.createElement('canvas');
    this.screenCanvas.width = 512;
    this.screenCanvas.height = 1024;
    this.screenCtx = this.screenCanvas.getContext('2d')!;
    this.screenTexture = new THREE.CanvasTexture(this.screenCanvas);
    this.screenTexture.anisotropy = 8;
    this.screenTexture.generateMipmaps = true;

    // 5. Lighting
    this.setupLighting();

    // 6. Build procedural high-end phone
    this.phoneGroup = new THREE.Group();
    this.buildPhone();
    this.scene.add(this.phoneGroup);

    // 7. Render initial screen
    this.updateScreen(0);

    // 8. Event listeners
    this.initEvents();

    // 9. Start animation loop
    this.animate();
  }

  private setupLighting() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(ambientLight);

    // Main key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(4, 5, 5);
    this.scene.add(keyLight);

    // Cool cyan rim light
    const rimLight = new THREE.DirectionalLight(0x00d2b4, 2.2);
    rimLight.position.set(-5, 3, -2);
    this.scene.add(rimLight);

    // Warm accent fill light
    const warmLight = new THREE.DirectionalLight(0x3a86ff, 1.8);
    warmLight.position.set(2, -4, 3);
    this.scene.add(warmLight);
  }

  private buildPhone() {
    const phoneWidth = 3.2;
    const phoneHeight = 6.4;
    const phoneDepth = 0.28;
    const cornerRadius = 0.42;

    // Frame Shape with Rounded Corners
    const shape = new THREE.Shape();
    const x = -phoneWidth / 2;
    const y = -phoneHeight / 2;
    const w = phoneWidth;
    const h = phoneHeight;
    const r = cornerRadius;

    shape.moveTo(x + r, y);
    shape.lineTo(x + w - r, y);
    shape.quadraticCurveTo(x + w, y, x + w, y + r);
    shape.lineTo(x + w, y + h - r);
    shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    shape.lineTo(x + r, y + h);
    shape.quadraticCurveTo(x, y + h, x, y + h - r);
    shape.lineTo(x, y + r);
    shape.quadraticCurveTo(x, y, x + r, y);

    const extrudeSettings = {
      depth: phoneDepth,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 2,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    };

    const frameGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    frameGeo.center();

    // Titanium / Matte Dark Metal Body Material
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x181c24,
      metalness: 0.88,
      roughness: 0.28,
    });
    const frameMesh = new THREE.Mesh(frameGeo, bodyMat);
    this.phoneGroup.add(frameMesh);

    // Front Screen Glass Face (OLED Luminescence)
    const screenGeo = new THREE.PlaneGeometry(phoneWidth - 0.16, phoneHeight - 0.2);
    const screenMat = new THREE.MeshStandardMaterial({
      map: this.screenTexture,
      emissive: new THREE.Color(0xffffff),
      emissiveMap: this.screenTexture,
      emissiveIntensity: 0.85,
      roughness: 0.15,
      metalness: 0.05,
    });
    this.screenMesh = new THREE.Mesh(screenGeo, screenMat);
    this.screenMesh.position.z = phoneDepth / 2 + 0.045;
    this.phoneGroup.add(this.screenMesh);

    // Camera Punchhole / Dynamic Island
    const islandGeo = new THREE.CapsuleGeometry(0.09, 0.28, 8, 16);
    const islandMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const island = new THREE.Mesh(islandGeo, islandMat);
    island.rotation.z = Math.PI / 2;
    island.position.set(0, phoneHeight / 2 - 0.28, phoneDepth / 2 + 0.05);
    this.phoneGroup.add(island);

    // Back Camera Bump
    const bumpGeo = new THREE.BoxGeometry(1.2, 1.4, 0.12);
    const bumpMat = new THREE.MeshStandardMaterial({
      color: 0x12151b,
      metalness: 0.9,
      roughness: 0.2,
    });
    const bump = new THREE.Mesh(bumpGeo, bumpMat);
    bump.position.set(phoneWidth / 2 - 0.85, phoneHeight / 2 - 0.95, -phoneDepth / 2 - 0.07);
    this.phoneGroup.add(bump);

    // 3 Camera Lenses
    for (let i = 0; i < 3; i++) {
      const lensGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.08, 24);
      lensGeo.rotateX(Math.PI / 2);
      const lensMat = new THREE.MeshStandardMaterial({
        color: 0x05070a,
        metalness: 0.95,
        roughness: 0.05,
      });
      const lens = new THREE.Mesh(lensGeo, lensMat);
      const lx = i === 2 ? phoneWidth / 2 - 0.65 : phoneWidth / 2 - 1.05;
      const ly = i === 0 ? phoneHeight / 2 - 0.65 : i === 1 ? phoneHeight / 2 - 1.15 : phoneHeight / 2 - 0.9;
      lens.position.set(lx, ly, -phoneDepth / 2 - 0.14);
      this.phoneGroup.add(lens);
    }
  }

  public updateScreen(index: number) {
    if (index < 0 || index >= APPS.length) return;
    this.currentAppIndex = index;
    const app = APPS[index];
    app.renderScreen(this.screenCtx, this.screenCanvas.width, this.screenCanvas.height);
    this.screenTexture.needsUpdate = true;
  }

  public getCurrentAppIndex(): number {
    return this.currentAppIndex;
  }

  private initEvents() {
    const dom = this.container;

    // Mouse / Touch Interaction
    const onDown = (clientX: number, clientY: number) => {
      this.isDragging = true;
      this.previousMousePosition = { x: clientX, y: clientY };
    };

    const onMove = (clientX: number, clientY: number) => {
      if (!this.isDragging) {
        // Subtle tilt when hovering
        const rect = dom.getBoundingClientRect();
        const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);
        this.targetRotation.y = normX * 0.45;
        this.targetRotation.x = -normY * 0.25;
        return;
      }

      const deltaX = clientX - this.previousMousePosition.x;
      const deltaY = clientY - this.previousMousePosition.y;

      this.targetRotation.y += deltaX * 0.008;
      this.targetRotation.x += deltaY * 0.008;

      // Clamp X rotation to prevent flipping
      this.targetRotation.x = Math.max(-0.6, Math.min(0.6, this.targetRotation.x));

      this.previousMousePosition = { x: clientX, y: clientY };
    };

    const onUp = () => {
      this.isDragging = false;
    };

    dom.addEventListener('mousedown', (e) => onDown(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onUp);

    dom.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) onDown(e.touches[0].clientX, e.touches[0].clientY);
    });
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) onMove(e.touches[0].clientX, e.touches[0].clientY);
    });
    window.addEventListener('touchend', onUp);

    // Handle Resize
    window.addEventListener('resize', () => {
      const width = dom.clientWidth;
      const height = dom.clientHeight;
      if (width === 0 || height === 0) return;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });
  }

  private animate = () => {
    this.animationFrameId = requestAnimationFrame(this.animate);

    const elapsedTime = (performance.now() - this.startTime) * 0.001;

    // Smooth spring interpolation toward target rotation
    this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.08;
    this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.08;

    // Organic hover breathing motion
    const floatY = Math.sin(elapsedTime * 1.5) * 0.12;

    this.phoneGroup.position.y = floatY;
    this.phoneGroup.rotation.x = this.currentRotation.x;
    this.phoneGroup.rotation.y = this.currentRotation.y;

    this.renderer.render(this.scene, this.camera);
  };

  public destroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.renderer.dispose();
  }
}
