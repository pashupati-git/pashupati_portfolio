import * as THREE from 'three';

export interface AppScreen {
  id: string;
  name: string;
  tagline: string;
  themeColor: string;
  screenImage?: string;
  renderScreen?: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
}

export const APPS: AppScreen[] = [
  {
    id: 'totto',
    name: 'Totto',
    tagline: 'Buy & Sell Community Marketplace',
    themeColor: '#E63946',
    screenImage: '/screens/totto.png',
    renderScreen: (ctx, w, h) => {
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(0, 0, w, h);

      // Status Bar
      ctx.fillStyle = '#94A3B8';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText('9:41', 48, 64);
      ctx.fillText('5G  100%', w - 180, 64);

      // Header
      ctx.fillStyle = '#1E293B';
      ctx.roundRect(32, 100, w - 64, 88, 20);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 38px sans-serif';
      ctx.fillText('totto', 64, 158);

      ctx.fillStyle = '#E63946';
      ctx.beginPath();
      ctx.arc(110, 126, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(134, 126, 6, 0, Math.PI * 2);
      ctx.fill();

      // Search
      ctx.fillStyle = '#334155';
      ctx.roundRect(32, 210, w - 64, 72, 16);
      ctx.fill();
      ctx.fillStyle = '#94A3B8';
      ctx.font = '26px sans-serif';
      ctx.fillText('Search Chat Bazaar, electronics...', 64, 255);

      // Banner
      const grad = ctx.createLinearGradient(32, 310, w - 32, 520);
      grad.addColorStop(0, '#E63946');
      grad.addColorStop(1, '#FF6B6B');
      ctx.fillStyle = grad;
      ctx.roundRect(32, 310, w - 64, 220, 24);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText('Chat, Negotiate, Connect', 64, 380);
      ctx.font = '26px sans-serif';
      ctx.fillText('Direct local deals in Kathmandu', 64, 430);

      // Chat Tiers
      const tiers = [
        { name: 'Essential Tier', role: 'Free Community' },
        { name: 'Standard Tier', role: 'Verified Traders' },
        { name: 'Premium Tier', role: 'Priority Listings' },
      ];

      tiers.forEach((tier, i) => {
        const y = 560 + i * 110;
        ctx.fillStyle = '#1E293B';
        ctx.roundRect(32, y, w - 64, 90, 18);
        ctx.fill();
        ctx.fillStyle = '#F8FAFC';
        ctx.font = 'bold 28px sans-serif';
        ctx.fillText(tier.name, 64, y + 45);
        ctx.fillStyle = '#94A3B8';
        ctx.font = '22px sans-serif';
        ctx.fillText(tier.role, 64, y + 75);
      });
    },
  },
  {
    id: 'nnet',
    name: 'NNET',
    tagline: 'Customer Support & Diagnostics App',
    themeColor: '#7B2CBF',
    screenImage: '/screens/nnet.png',
    renderScreen: (ctx, w, h) => {
      ctx.fillStyle = '#100B1A';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#E9D5FF';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText('9:41', 48, 64);
      ctx.fillText('WiFi 6  100%', w - 210, 64);

      // Header
      const gradHeader = ctx.createLinearGradient(32, 100, w - 32, 190);
      gradHeader.addColorStop(0, '#6D28D9');
      gradHeader.addColorStop(1, '#9333EA');
      ctx.fillStyle = gradHeader;
      ctx.roundRect(32, 100, w - 64, 90, 20);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 38px sans-serif';
      ctx.fillText('NNET', 64, 160);
      ctx.font = '22px sans-serif';
      ctx.fillStyle = '#E9D5FF';
      ctx.fillText('Broadband Customer Support', w - 380, 158);

      // Action Grid
      const items = ['Internet', 'IP TV', 'Router', 'Payment', 'Support', 'Refer'];
      items.forEach((item, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const bx = 32 + col * ((w - 64) / 3);
        const by = 220 + row * 130;
        ctx.fillStyle = '#1D132D';
        ctx.roundRect(bx + 6, by, (w - 64) / 3 - 12, 115, 16);
        ctx.fill();
        ctx.fillStyle = '#C084FC';
        ctx.font = 'bold 24px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item, bx + (w - 64) / 6, by + 70);
        ctx.textAlign = 'start';
      });

      // Banner
      const cardGrad = ctx.createLinearGradient(32, 510, w - 32, 720);
      cardGrad.addColorStop(0, '#3B0764');
      cardGrad.addColorStop(1, '#6B21A8');
      ctx.fillStyle = cardGrad;
      ctx.roundRect(32, 510, w - 64, 210, 24);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 34px sans-serif';
      ctx.fillText('Fiber NNET Always Connected', 64, 590);
      ctx.font = '24px sans-serif';
      ctx.fillStyle = '#E9D5FF';
      ctx.fillText('High-speed fiber & automated diagnostics', 64, 640);
    },
  },
  {
    id: 'classic-tech',
    name: 'Classic Tech',
    tagline: 'Flagship Broadband Customer App',
    themeColor: '#13753D',
    screenImage: '/screens/classic-tech.png',
    renderScreen: (ctx, w, h) => {
      ctx.fillStyle = '#061A0E';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#A3E635';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText('9:41', 48, 64);
      ctx.fillText('WiFi 6  100%', w - 210, 64);

      // Header
      ctx.fillStyle = '#0F5132';
      ctx.roundRect(32, 100, w - 64, 90, 20);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText('Classic Tech ISP', 64, 158);

      // Grid items
      const items = ['Internet', 'TV', 'Router', 'Payment', 'Support', 'Refer'];
      items.forEach((item, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const bx = 32 + col * ((w - 64) / 3);
        const by = 220 + row * 130;
        ctx.fillStyle = '#0C2D1A';
        ctx.roundRect(bx + 6, by, (w - 64) / 3 - 12, 115, 16);
        ctx.fill();
        ctx.fillStyle = '#86EFAC';
        ctx.font = 'bold 24px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(item, bx + (w - 64) / 6, by + 70);
        ctx.textAlign = 'start';
      });

      // Speed Card
      ctx.fillStyle = '#0C2D1A';
      ctx.roundRect(32, 510, w - 64, 260, 24);
      ctx.fill();
      ctx.fillStyle = '#86EFAC';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText('Optical Speed: 1000 Mbps', 64, 580);
      ctx.fillStyle = '#D1FAE5';
      ctx.font = '24px sans-serif';
      ctx.fillText('Subscribers: 100,000+ Active', 64, 630);
    },
  },
  {
    id: 'classic-engine',
    name: 'Classic Engine',
    tagline: 'Field Operations & Staff Dashboard',
    themeColor: '#0A5C36',
    screenImage: '/screens/classic-engine.png',
    renderScreen: (ctx, w, h) => {
      ctx.fillStyle = '#081D2E';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#7DD3FC';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText('10:22', 48, 64);
      ctx.fillText('4G LTE  60%', w - 210, 64);

      // Header
      ctx.fillStyle = '#075985';
      ctx.roundRect(32, 100, w - 64, 90, 20);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 34px sans-serif';
      ctx.fillText('Customer Details & Task', 64, 158);

      // Card
      ctx.fillStyle = '#0C3754';
      ctx.roundRect(32, 220, w - 64, 300, 24);
      ctx.fill();

      ctx.fillStyle = '#38BDF8';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText('Fiber Breakage · Technical', 64, 290);
      ctx.fillStyle = '#E2E8F0';
      ctx.font = '24px sans-serif';
      ctx.fillText('Branch: New Baneshwor', 64, 340);
      ctx.fillText('Package: Classic-Plus 35 Mbps', 64, 390);
      ctx.fillText('Optical Diagnostics: -24.5 dBm', 64, 440);

      // Proceed Button
      ctx.fillStyle = '#0284C7';
      ctx.roundRect(32, 560, w - 64, 76, 20);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Proceed Work Order', w / 2, 608);
      ctx.textAlign = 'start';
    },
  },
  {
    id: 'dealer-partner',
    name: 'Dealer Partner',
    tagline: 'Referral & Commission Payout Platform',
    themeColor: '#D97706',
    screenImage: '/screens/dealer-partner.png',
    renderScreen: (ctx, w, h) => {
      ctx.fillStyle = '#1C1304';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#FCD34D';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText('3:11 PM', 48, 64);
      ctx.fillText('5G  58%', w - 170, 64);

      // Header
      ctx.fillStyle = '#92400E';
      ctx.roundRect(32, 100, w - 64, 90, 20);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText('Dealer Dashboard', 64, 158);

      // Balance Card
      ctx.fillStyle = '#362208';
      ctx.roundRect(32, 220, w - 64, 180, 24);
      ctx.fill();

      ctx.fillStyle = '#FBBF24';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText('Commission Balance', 64, 280);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 44px sans-serif';
      ctx.fillText('NPR 45,800', 64, 345);

      // Leads Actions
      ctx.fillStyle = '#362208';
      ctx.roundRect(32, 430, (w - 80) / 2, 130, 20);
      ctx.fill();
      ctx.roundRect(32 + (w - 80) / 2 + 16, 430, (w - 80) / 2, 130, 20);
      ctx.fill();

      ctx.fillStyle = '#FCD34D';
      ctx.font = 'bold 26px sans-serif';
      ctx.fillText('Leads Details', 64, 505);
      ctx.fillText('Add New Lead', 48 + (w - 80) / 2 + 16, 505);
    },
  },
  {
    id: 'caro-tv',
    name: 'Caro TV',
    tagline: 'Live IPTV & Streaming Player',
    themeColor: '#E11D48',
    screenImage: '/screens/caro-tv.png',
    renderScreen: (ctx, w, h) => {
      ctx.fillStyle = '#05140B';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#86EFAC';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText('2:55 PM', 48, 64);
      ctx.fillText('5G  100%', w - 180, 64);

      // Banner
      const tvGrad = ctx.createLinearGradient(32, 100, w - 32, 340);
      tvGrad.addColorStop(0, '#13753D');
      tvGrad.addColorStop(1, '#052E16');
      ctx.fillStyle = tvGrad;
      ctx.roundRect(32, 100, w - 64, 240, 24);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 38px sans-serif';
      ctx.fillText('FOOTBALL FEVER', 64, 180);
      ctx.font = '24px sans-serif';
      ctx.fillStyle = '#86EFAC';
      ctx.fillText('Live TV & Streaming Channels', 64, 230);

      // Channel List
      const channels = ['Nepal Television HD', 'NTV News HD', 'NTV Plus HD'];
      channels.forEach((ch, idx) => {
        const cy = 370 + idx * 100;
        ctx.fillStyle = '#0F3820';
        ctx.roundRect(32, cy, w - 64, 80, 18);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 26px sans-serif';
        ctx.fillText(ch, 64, cy + 50);
      });
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

  private imageCache: Map<string, HTMLImageElement> = new Map();
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
    this.renderer.toneMappingExposure = 1.1;
    container.appendChild(this.renderer.domElement);

    // 4. Screen Canvas & Texture (720x1440 for high-density smartphone fidelity)
    this.screenCanvas = document.createElement('canvas');
    this.screenCanvas.width = 720;
    this.screenCanvas.height = 1440;
    this.screenCtx = this.screenCanvas.getContext('2d', { alpha: false })!;
    this.screenTexture = new THREE.CanvasTexture(this.screenCanvas);
    this.screenTexture.anisotropy = 16;
    this.screenTexture.colorSpace = THREE.SRGBColorSpace;
    this.screenTexture.generateMipmaps = true;

    // 5. Preload real app UI screenshots
    this.preloadScreens();

    // 6. Lighting
    this.setupLighting();

    // 7. Build procedural high-end phone
    this.phoneGroup = new THREE.Group();
    this.buildPhone();
    this.scene.add(this.phoneGroup);

    // 8. Render initial screen
    this.updateScreen(0);

    // 9. Event listeners
    this.initEvents();

    // 10. Start animation loop
    this.animate();
  }

  private preloadScreens() {
    APPS.forEach((app, idx) => {
      if (app.screenImage) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = `${app.screenImage}?v=3`;
        img.onload = () => {
          this.imageCache.set(app.id, img);
          if (this.currentAppIndex === idx) {
            this.updateScreen(idx);
          }
        };
      }
    });
  }

  private setupLighting() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    this.scene.add(ambientLight);

    // Main key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(4, 5, 5);
    this.scene.add(keyLight);

    // Cool rim light
    const rimLight = new THREE.DirectionalLight(0x00d2b4, 2.0);
    rimLight.position.set(-5, 3, -2);
    this.scene.add(rimLight);

    // Warm accent fill light
    const warmLight = new THREE.DirectionalLight(0x3a86ff, 1.5);
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
      color: 0x141820,
      metalness: 0.9,
      roughness: 0.25,
    });
    const frameMesh = new THREE.Mesh(frameGeo, bodyMat);
    this.phoneGroup.add(frameMesh);

    // Front Screen Glass Face with true OLED depth and vivid screenshot luminescence
    const screenGeo = new THREE.PlaneGeometry(phoneWidth - 0.16, phoneHeight - 0.2);
    const screenMat = new THREE.MeshStandardMaterial({
      map: this.screenTexture,
      emissive: new THREE.Color(0xffffff),
      emissiveMap: this.screenTexture,
      emissiveIntensity: 0.25, // Preserves deep contrast & prevents washing out UI colors
      roughness: 0.12,
      metalness: 0.04,
    });
    this.screenMesh = new THREE.Mesh(screenGeo, screenMat);
    this.screenMesh.position.z = phoneDepth / 2 + 0.045;
    this.phoneGroup.add(this.screenMesh);

    // Camera Punchhole / Dynamic Island
    const islandGeo = new THREE.CapsuleGeometry(0.08, 0.26, 8, 16);
    const islandMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const island = new THREE.Mesh(islandGeo, islandMat);
    island.rotation.z = Math.PI / 2;
    island.position.set(0, phoneHeight / 2 - 0.26, phoneDepth / 2 + 0.05);
    this.phoneGroup.add(island);

    // Back Camera Bump
    const bumpGeo = new THREE.BoxGeometry(1.2, 1.4, 0.12);
    const bumpMat = new THREE.MeshStandardMaterial({
      color: 0x101318,
      metalness: 0.92,
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
    const w = this.screenCanvas.width;
    const h = this.screenCanvas.height;

    const cachedImg = this.imageCache.get(app.id);

    // If real screenshot image is loaded, draw it directly with high-density scaling
    if (cachedImg && cachedImg.complete && cachedImg.naturalWidth > 0) {
      this.screenCtx.fillStyle = app.themeColor;
      this.screenCtx.fillRect(0, 0, w, h);
      this.screenCtx.imageSmoothingEnabled = true;
      this.screenCtx.imageSmoothingQuality = 'high';
      this.screenCtx.drawImage(cachedImg, 0, 0, w, h);
    } else {
      // Procedural fallback while image loads
      if (app.renderScreen) {
        app.renderScreen(this.screenCtx, w, h);
      }
    }

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
