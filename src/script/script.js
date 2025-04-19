import {
  showModalContact,
  showModalInformation,
  showModalLogin,
} from './info.js';

/*function enableFullScreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
}
*/
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const menuTablet = document.getElementById('menu-tablet');
  const menu = document.getElementById('menu');
  const closeMenuBtn = document.querySelector('.close-menu-btn');
  const menuLinks = document.querySelectorAll('.menu-link');

  // Função para abrir o menu
  function openMenu() {
    menu.classList.add('show');
    document.body.style.overflow = 'hidden'; // Impede scroll do body
  }

  // Função para fechar o menu suavemente
  function closeMenu() {
    menu.classList.remove('show');
    document.body.style.overflow = ''; // Restaura scroll do body
  }

  // Abrir menu ao clicar no hamburger
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu();
  });

  menuTablet.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu();
  });

  // Fechar menu ao clicar no botão de fechar
  closeMenuBtn.addEventListener('click', closeMenu);

  // Fechar menu ao clicar em qualquer link
  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Fechar menu ao clicar fora
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
      closeMenu();
    }
  });

  // Fechar menu ao pressionar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('show')) {
      closeMenu();
    }
  });

  /* Ativar tela cheia em dispositivos móveis
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    enableFullScreen();

    document.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        enableFullScreen();
      }
    });
  }
  */
  // Elementos DOM

  const progressBar = document.querySelector('.scroll-progress');
  const markers = document.querySelectorAll('.section-marker');
  const main = document.querySelector('main');
  const sections = document.querySelectorAll('.section');
  const scrollPrompt = document.querySelector('.scroll-prompt');

  // Posicionar marcadores de seção
  function positionMarkers() {
    markers.forEach((marker, index) => {
      if (index < sections.length) {
        const section = sections[index];
        const position = (section.offsetTop / main.scrollHeight) * 100;
        marker.style.top = `${position}%`;
      }
    });
  }

  // Atualizar progresso e marcadores ativos
  function updateScrollProgress() {
    const scrollTop = main.scrollTop;
    const scrollHeight = main.scrollHeight - main.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.height = `${progress}%`;

    // Atualizar marcadores ativos
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const marker = document.querySelector(
        `.section-marker[data-section="${index}"]`
      );

      if (
        rect.top <= main.clientHeight / 3 &&
        rect.bottom >= main.clientHeight / 3
      ) {
        marker.classList.add('active');
      } else {
        marker.classList.remove('active');
      }
    });

    // Esconder scroll prompt após começar a rolar
    if (scrollTop > 50) {
      scrollPrompt.style.opacity = '0';
      scrollPrompt.style.pointerEvents = 'none';
    } else {
      scrollPrompt.style.opacity = '1';
      scrollPrompt.style.pointerEvents = 'auto';
    }
  }

  // Observer para animações de entrada
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelector('.section-content')
            .classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Inicializar
  function init() {
    positionMarkers();

    // Observar seções para animações
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Scroll suave ao clicar no prompt
    scrollPrompt.addEventListener('click', () => {
      main.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: 'smooth',
      });
    });

    // Redimensionamento da janela
    window.addEventListener('resize', positionMarkers);
  }

  // Configurar evento de scroll com throttling
  let isScrolling;
  main.addEventListener(
    'scroll',
    () => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        updateScrollProgress();
      }, 66); // ~15fps
    },
    false
  );

  // Inicializar tudo
  init();
  updateScrollProgress();

  document.getElementById('about-us').addEventListener('click', async () => {
    await showModalInformation();
  });

  document.getElementById('contact').addEventListener('click', async () => {
    await showModalContact();
  });

  document.getElementById('login').addEventListener('click', async () => {
    await showModalLogin();
  });
});
