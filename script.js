document.addEventListener('DOMContentLoaded', function() {
  // Обработка переключения сайдбара
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  }

  hamburgerMenu.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', toggleSidebar);

  // Обработка кликов для переключения разделов
  const sidebarLinks = document.querySelectorAll('.sidebar-nav-link[data-target]');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      console.log('Нажата ссылка, data-target:', targetId); // Для отладки
      // Здесь скрываем все секции, затем показываем нужную
      const allSections = document.querySelectorAll('section');
      allSections.forEach(section => section.classList.add('hidden'));
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove('hidden');
      }
      // После клика закрываем сайдбар, если это требуется
      toggleSidebar();
    });
  });
});
