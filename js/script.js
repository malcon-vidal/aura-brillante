document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const progressFill = document.getElementById('progress-fill');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const communityForm = document.getElementById('community-form');
  const floatingWhatsapp = document.querySelector('.floating-whatsapp');
  const navToggle = document.querySelector('.nav-toggle');
  const navigation = document.getElementById('site-navigation');

  if (navToggle && navigation) {
    const closeNavigation = () => {
      navigation.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menú');
      navToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
    };

    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navigation.classList.toggle('is-open', !isOpen);
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
      navToggle.querySelector('.material-symbols-outlined').textContent = isOpen ? 'menu' : 'close';
    });

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        closeNavigation();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeNavigation();
      }
    });
  }

  if (communityForm) {
    communityForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = document.getElementById('newsletter-email');

        if (emailInput && emailInput.value) {
            alert(`Gracias por suscribirte con el correo: ${emailInput.value}`);
            emailInput.value = '';
        }
    });
  }



  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        window.open('https://instagram.com', '_blank');
    });
  });

  let isPlaying = false;

  if (playBtn && playIcon) {
    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      
      if (isPlaying) {
        playIcon.textContent = 'pause';
        progressFill.style.width = '65%'; // Simulación de reproducción
      } else {
        playIcon.textContent = 'play_arrow';
        progressFill.style.width = '40%';
      }
    });
  }
  if (floatingWhatsapp) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        floatingWhatsapp.style.opacity = '1';
        floatingWhatsapp.style.pointerEvents = 'auto';
      } else {
        floatingWhatsapp.style.opacity = '0.9';
      }
    });
  }
});