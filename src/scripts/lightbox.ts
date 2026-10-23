// lightbox.ts - High-performance mobile app screenshot modal controller

interface LightboxItem {
  src: string;
  title: string;
  desc: string;
}

let items: LightboxItem[] = [];
let currentIndex = 0;
let isOpen = false;

export function initLightbox() {
  const lightbox = document.getElementById('app-lightbox');
  const overlay = document.getElementById('lightbox-overlay');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const imgEl = document.getElementById('lightbox-img') as HTMLImageElement | null;
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const counterEl = document.getElementById('lightbox-counter');

  if (!lightbox || !imgEl) return;

  // Collect all preview containers on the current page
  const triggers = document.querySelectorAll<HTMLElement>('[data-lightbox-src]');
  items = Array.from(triggers).map((el) => ({
    src: el.dataset.lightboxSrc || '',
    title: el.dataset.lightboxTitle || 'Application',
    desc: el.dataset.lightboxDesc || '',
  })).filter((item) => item.src.length > 0);

  if (items.length === 0) return;

  function updateView() {
    if (!imgEl || items.length === 0) return;
    const item = items[currentIndex];

    // Smooth image transition
    imgEl.style.opacity = '0';
    imgEl.src = item.src;
    imgEl.alt = `${item.title} full UI screenshot`;

    imgEl.onload = () => {
      imgEl.style.transition = 'opacity 0.2s ease';
      imgEl.style.opacity = '1';
    };

    if (titleEl) titleEl.textContent = item.title;
    if (descEl) descEl.textContent = item.desc;
    if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${items.length}`;
  }

  function open(index: number) {
    currentIndex = (index + items.length) % items.length;
    updateView();
    lightbox?.classList.add('is-open');
    lightbox?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    isOpen = true;
  }

  function close() {
    lightbox?.classList.remove('is-open');
    lightbox?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    isOpen = false;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateView();
  }

  function next() {
    currentIndex = (currentIndex + 1) % items.length;
    updateView();
  }

  // Attach click listener to each preview container
  triggers.forEach((trigger, idx) => {
    trigger.style.cursor = 'pointer';

    const handleTrigger = (e: Event) => {
      e.preventDefault();
      open(idx);
    };

    trigger.addEventListener('click', handleTrigger);
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(idx);
      }
    });
  });

  // Controls listeners
  closeBtn?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    prev();
  });
  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    next();
  });

  // Keyboard navigation
  const onKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') {
      close();
    } else if (e.key === 'ArrowLeft') {
      prev();
    } else if (e.key === 'ArrowRight') {
      next();
    }
  };

  window.removeEventListener('keydown', onKeyDown);
  window.addEventListener('keydown', onKeyDown);

  // Touch swipe support on phone frame
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  lightbox.addEventListener(
    'touchend',
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) prev();
        else next();
      }
    },
    { passive: true }
  );
}

// Lifecycle registration for Astro page transitions
document.addEventListener('astro:page-load', initLightbox);
if (document.readyState !== 'loading') {
  initLightbox();
} else {
  document.addEventListener('DOMContentLoaded', initLightbox);
}
