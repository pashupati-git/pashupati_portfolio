// 3D Tilt and Specular Highlight for Cards

export function initGlassTilt() {
  const cards = document.querySelectorAll<HTMLElement>('.card, .project-card');

  cards.forEach((card) => {
    let bounds: DOMRect;

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      card.style.transition = 'transform 100ms ease-out, box-shadow 250ms ease';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const normX = (mouseX / bounds.width) * 2 - 1;
      const normY = (mouseY / bounds.height) * 2 - 1;

      // Subtle 3D rotation tilt
      const rotX = -normY * 6;
      const rotY = normX * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    };

    const onMouseLeave = () => {
      card.style.transition = 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  });
}

document.addEventListener('astro:page-load', initGlassTilt);
if (document.readyState !== 'loading') {
  initGlassTilt();
} else {
  document.addEventListener('DOMContentLoaded', initGlassTilt);
}
