/* =====================================================
   JS MOBILE - YASMIN LABANCA [VERSÃO FINAL - BARRA FORÇADA]
   ✅ Barra de progresso com FORÇA BRUTAL
   ✅ Botão mais alto do WhatsApp
===================================================== */

(function() {
  'use strict';
  
  console.log('🚀 Mobile JS Iniciando...');
  
  // =====================================================
  // DETECTAR MOBILE
  // =====================================================
  
  function isMobileDevice() {
    return window.innerWidth <= 768;
  }
  
  const isMobile = isMobileDevice();
  console.log(isMobile ? '📱 MOBILE DETECTADO' : '💻 DESKTOP DETECTADO');
  console.log('Largura:', window.innerWidth);
  
  // =====================================================
  // CRIAR BARRA DE PROGRESSO - FORÇA BRUTAL
  // =====================================================
  
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  
  // FORÇA MÁXIMA ABSOLUTA
  progressBar.style.cssText = `
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 0% !important;
    height: 4px !important;
    margin: 0 !important;
    padding: 0 !important;
    background: linear-gradient(90deg, #d4a5c8, #f0d9ea, #d4a5c8) !important;
    z-index: 10003 !important;
    box-shadow: 0 0 20px rgba(212, 165, 200, 0.9), 0 2px 10px rgba(212, 165, 200, 0.6) !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: none !important;
    transform: translateZ(0) !important;
    -webkit-transform: translateZ(0) !important;
    will-change: width !important;
    contain: layout !important;
  `.replace(/\s+/g, ' ').trim();
  
  // Adicionar ANTES de tudo
  if (document.body.firstChild) {
    document.body.insertBefore(progressBar, document.body.firstChild);
  } else {
    document.body.appendChild(progressBar);
  }
  
  console.log('✅ Barra de progresso FORÇADA no topo do body');
  
  // Verificar imediatamente
  setTimeout(() => {
    const barraCheck = document.querySelector('.scroll-progress');
    if (barraCheck) {
      const styles = window.getComputedStyle(barraCheck);
      console.log('📊 Barra encontrada!');
      console.log('  - display:', styles.display);
      console.log('  - visibility:', styles.visibility);
      console.log('  - opacity:', styles.opacity);
      console.log('  - width:', styles.width);
      console.log('  - height:', styles.height);
      console.log('  - top:', styles.top);
      console.log('  - z-index:', styles.zIndex);
      console.log('  - background:', styles.background);
    } else {
      console.error('❌ BARRA NÃO ENCONTRADA!');
    }
  }, 100);
  
  // =====================================================
  // CRIAR BOTÃO VOLTAR AO TOPO
  // =====================================================
  
  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = '↑';
  backToTop.setAttribute('aria-label', 'Voltar ao topo');
  
  if (isMobile) {
    // MOBILE: bottom: 106px (mais espaço)
    backToTop.style.cssText = 'position: fixed !important; right: 22px !important; bottom: 106px !important; width: 60px !important; height: 60px !important; background: linear-gradient(135deg, #d4a5c8 0%, #c291b8 100%) !important; color: #fff !important; border: none !important; border-radius: 50% !important; font-size: 1.8rem !important; cursor: pointer !important; display: flex !important; align-items: center !important; justify-content: center !important; z-index: 9998 !important; box-shadow: 0 10px 30px rgba(212, 165, 200, 0.5), 0 0 25px rgba(212, 165, 200, 0.4) !important; transition: all 0.3s ease !important; opacity: 0 !important; visibility: hidden !important; transform: translateY(20px) !important;';
  } else {
    // DESKTOP: bottom: 100px
    backToTop.style.cssText = 'position: fixed !important; right: 24px !important; bottom: 100px !important; width: 60px !important; height: 60px !important; background: linear-gradient(135deg, #d4a5c8 0%, #c291b8 100%) !important; color: #fff !important; border: none !important; border-radius: 50% !important; font-size: 1.8rem !important; cursor: pointer !important; display: flex !important; align-items: center !important; justify-content: center !important; z-index: 9998 !important; box-shadow: 0 10px 30px rgba(212, 165, 200, 0.5), 0 0 25px rgba(212, 165, 200, 0.4) !important; transition: all 0.3s ease !important; opacity: 0 !important; visibility: hidden !important; transform: translateY(20px) !important;';
  }
  
  document.body.appendChild(backToTop);
  console.log('✅ Botão topo criado');
  
  // =====================================================
  // MENU HAMBURGER (APENAS MOBILE)
  // =====================================================
  
  if (isMobile) {
    console.log('🍔 Criando menu hamburger...');
    
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Menu');
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    menuToggle.style.cssText = 'display: flex !important; flex-direction: column !important; justify-content: space-between !important; width: 30px !important; height: 22px !important; background: transparent !important; border: none !important; cursor: pointer !important; padding: 0 !important; z-index: 10001 !important; position: relative !important;';
    
    const spans = menuToggle.querySelectorAll('span');
    spans.forEach(span => {
      span.style.cssText = 'display: block !important; width: 100% !important; height: 3px !important; background: #fff !important; border-radius: 3px !important; transition: all 0.3s ease !important;';
    });
    
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
      navContainer.appendChild(menuToggle);
      console.log('✅ Hamburger adicionado');
    } else {
      console.error('❌ .nav-container NÃO ENCONTRADO!');
    }
    
    document.body.appendChild(overlay);
    console.log('✅ Overlay adicionado');
    
    const navMenu = document.querySelector('.nav-menu');
    
    if (navMenu) {
      function abrirMenu() {
        navMenu.classList.add('active');
        menuToggle.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
      
      function fecharMenu() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
      
      menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('🍔 Click!');
        if (navMenu.classList.contains('active')) {
          fecharMenu();
        } else {
          abrirMenu();
        }
      });
      
      overlay.addEventListener('click', fecharMenu);
      
      document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          fecharMenu();
          
          if (targetSection) {
            setTimeout(() => {
              const navbar = document.querySelector('.navbar');
              const offset = navbar ? navbar.offsetHeight : 70;
              const targetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
              
              window.scrollTo({
                top: targetTop - offset,
                behavior: 'smooth'
              });
            }, 400);
          }
        });
      });
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
          fecharMenu();
        }
      });
      
      let lastScroll = 0;
      const navbar = document.querySelector('.navbar');
      
      window.addEventListener('scroll', () => {
        if (navMenu.classList.contains('active')) return;
        
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
          navbar.style.transform = 'translateY(-100%)';
        } else {
          navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
      }, { passive: true });
      
      console.log('✅ Menu configurado');
    }
    
    [menuToggle, backToTop, ...document.querySelectorAll('.nav-menu a')].forEach(el => {
      el.addEventListener('touchstart', () => {
        if ('vibrate' in navigator) navigator.vibrate(10);
      }, { passive: true });
    });
    
    function setVH() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
  }
  
  // =====================================================
  // BARRA DE PROGRESSO - ATUALIZAÇÃO
  // =====================================================
  
  function updateProgressBar() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
    
    if (scrolled > 0 && scrolled < 5) {
      console.log('📊 Barra atualizando:', scrolled.toFixed(1) + '%');
    }
  }
  
  window.addEventListener('scroll', updateProgressBar, { passive: true });
  updateProgressBar();
  
  // Forçar atualização a cada 100ms por 2 segundos (teste)
  let forceUpdateCount = 0;
  const forceUpdate = setInterval(() => {
    updateProgressBar();
    forceUpdateCount++;
    if (forceUpdateCount > 20) {
      clearInterval(forceUpdate);
      console.log('✅ Força bruta de atualização concluída');
    }
  }, 100);
  
  // =====================================================
  // BOTÃO TOPO - VISIBILIDADE
  // =====================================================
  
  function toggleBackToTop() {
    if (window.pageYOffset > 300) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
      backToTop.style.transform = 'translateY(0)';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
      backToTop.style.transform = 'translateY(20px)';
    }
  }
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  });
  
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();
  
  // =====================================================
  // TRANSIÇÃO
  // =====================================================
  
  setTimeout(() => {
    progressBar.style.transition = 'width 0.15s ease';
  }, 100);
  
  // =====================================================
  // LOG FINAL
  // =====================================================
  
  console.log('┌─────────────────────────────────┐');
  console.log('│       ✅ SETUP COMPLETO!         │');
  console.log('└─────────────────────────────────┘');
  
})();

/* =====================================================
   FIM
===================================================== */