import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    // Stagger animation delays for grid cards
    document.querySelectorAll('.features-grid .feature-card').forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });

    document.querySelectorAll('.use-cases-grid .use-case-card').forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });

    document.querySelectorAll('.tech-stack-grid .tech-stack-item').forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
    });

    document.querySelectorAll('.benefits-grid .benefit-card').forEach((card, index) => {
      card.style.animationDelay = `${index * 0.15}s`;
    });

    document.querySelectorAll('.pillars-grid .pillar-card').forEach((card, index) => {
      card.style.animationDelay = `${index * 0.15}s`;
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
}
