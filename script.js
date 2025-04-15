// Основной скрипт для сайта ЭКОВКУС

// Дожидаемся полной загрузки документа
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для меню-гамбургера
    const hamburgerMenu = document.querySelector('.hamburger-icon');
    const mobileMenu = document.querySelector('.menu');
    
    // Проверяем, существует ли элемент гамбургер-меню
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            // Переключаем класс для отображения/скрытия меню
            if (mobileMenu) {
                mobileMenu.classList.toggle('show');
                
                // Изменяем иконку гамбургера на крестик и обратно
                const icon = hamburgerMenu.querySelector('i');
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // Обработчик для кнопки "Выбрать тариф"
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Плавная прокрутка к секции тарифов
            const tariffsSection = document.querySelector('.tariffs');
            if (tariffsSection) {
                tariffsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Добавляем класс active к активному пункту меню при скролле
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');
    
    // Функция для определения активного раздела
    function updateActiveSection() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200 && 
                window.pageYOffset < sectionTop + sectionHeight - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Обновляем активный пункт меню
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Вызываем функцию при скролле
    window.addEventListener('scroll', updateActiveSection);
    
    // Обработка клика по карточке тарифа
    const tariffCards = document.querySelectorAll('.tariff-card');
    tariffCards.forEach(card => {
        card.addEventListener('click', function() {
            // Здесь будет логика выбора тарифа
            console.log('Выбран тариф:', card.querySelector('h3').textContent);
            
            // Можно добавить класс selected для выбранного тарифа
            tariffCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });
});