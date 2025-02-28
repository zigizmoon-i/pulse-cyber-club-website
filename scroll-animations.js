document.addEventListener('DOMContentLoaded', function() {
    // Функция для проверки, находится ли элемент в области видимости
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 && 
            rect.bottom >= 0
        );
    }

    // Функция для добавления класса visible при прокрутке
    function handleScrollAnimation() {
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
        
        animatedElements.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Слушаем событие прокрутки
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Запускаем проверку при загрузке страницы
    handleScrollAnimation();
    
    // Добавляем эффект наведения на контактные блоки
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.contact-icon').style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.contact-icon').style.transform = 'scale(1) rotate(0)';
        });
    });
    
    // Удалена анимация для прайс-листа при наведении, оставлена только подсветка через CSS
});