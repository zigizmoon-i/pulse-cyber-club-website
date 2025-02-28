document.addEventListener('DOMContentLoaded', function() {
    // Словари для разных языков
    const languages = {
        ru: {
            'brand': 'PULSE',
            'logo': 'PULSE',
            'tagline': 'Лучший игровой компьютерный клуб в городе',
            'about': 'О нас',
            'computers': 'Компьютеры',
            'games': 'Игры',
            'prices': 'Цены',
            'contact': 'Контакты',
            'about-title': 'О нашем клубе',
            'about-p1': 'PULSE - это современный игровой компьютерный клуб, оснащенный высокопроизводительными компьютерами и консолями последнего поколения.',
            'about-p2': 'У нас вы найдете комфортную атмосферу, высокоскоростное подключение к интернету и широкий выбор популярных игр. Мы предлагаем различные конфигурации компьютеров, от стандартных до VIP, а также зону PlayStation 5.',
            'about-p3': 'Наш клуб идеально подходит как для одиночной игры, так и для командных соревнований. Регулярно проводим турниры с призами для наших гостей.',
            'computers-title': 'Наши компьютеры',
            'standard-pc': 'Стандартные ПК',
            'vip-pc': 'VIP ПК',
            'ps5': 'PlayStation 5',
            'processor': 'Процессор:',
            'gpu': 'Видеокарта:',
            'ram': 'ОЗУ:',
            'monitor': 'Монитор:',
            'console': 'Консоль:',
            'controllers': 'Геймпады:',
            'tv': 'ТВ:',
            'audio': 'Аудио:',
            'games-title': 'Популярные игры',
            'prices-title': 'Прайс-лист',
            'time': 'Время',
            'standard-pc-prices': 'Стандартный ПК',
            'vip-pc-prices': 'VIP ПК',
            'ps5-prices': 'PlayStation 5',
            '1hour': '1 час',
            '3hours': '3 часа',
            '5hours': '5 часов',
            '12hours': '12 часов',
            'night': 'Целая ночь',
            'contact-title': 'Контакты',
            'address': 'Адрес',
            'address-text': '5/65 AB, Wiset Rd, Rawai, Mueang Phuket District, Phuket 83100',
            'phone': 'Телефон',
            'opening-hours': 'Режим работы',
            'opening-hours-text': 'Ежедневно, круглосуточно',
            'copyright': '© 2025 PULSE - Игровой компьютерный клуб. Все права защищены.'
        },
        en: {
            'brand': 'PULSE',
            'logo': 'PULSE',
            'tagline': 'The best gaming club in town',
            'about': 'About Us',
            'computers': 'Computers',
            'games': 'Games',
            'prices': 'Prices',
            'contact': 'Contact',
            'about-title': 'About Our Club',
            'about-p1': 'PULSE is a modern gaming club equipped with high-performance computers and latest generation consoles.',
            'about-p2': 'Here you\'ll find a comfortable atmosphere, high-speed internet connection, and a wide selection of popular games. We offer various computer configurations, from standard to VIP, as well as a PlayStation 5 zone.',
            'about-p3': 'Our club is perfect for both solo gaming and team competitions. We regularly hold tournaments with prizes for our guests.',
            'computers-title': 'Our Computers',
            'standard-pc': 'Standard PC',
            'vip-pc': 'VIP PC',
            'ps5': 'PlayStation 5',
            'processor': 'Processor:',
            'gpu': 'GPU:',
            'ram': 'RAM:',
            'monitor': 'Monitor:',
            'console': 'Console:',
            'controllers': 'Controllers:',
            'tv': 'TV:',
            'audio': 'Audio:',
            'games-title': 'Popular Games',
            'prices-title': 'Price List',
            'time': 'Time',
            'standard-pc-prices': 'Standard PC',
            'vip-pc-prices': 'VIP PC',
            'ps5-prices': 'PlayStation 5',
            '1hour': '1 hour',
            '3hours': '3 hours',
            '5hours': '5 hours',
            '12hours': '12 hours',
            'night': 'All night',
            'contact-title': 'Contact Us',
            'address': 'Address',
            'address-text': '5/65 AB, Wiset Rd, Rawai, Mueang Phuket District, Phuket 83100',
            'phone': 'Phone',
            'opening-hours': 'Opening Hours',
            'opening-hours-text': 'Daily, 24/7',
            'copyright': '© 2025 PULSE - Gaming Club. All rights reserved.'
        }
    };

    // Получаем кнопки переключения языка
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Функция для установки языка
    function setLanguage(lang) {
        // Проходим по всем элементам с атрибутом data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (languages[lang][key]) {
                // Для ссылок меняем только текст, не затрагивая другие элементы
                if (element.tagName === 'A') {
                    element.textContent = languages[lang][key];
                } else {
                    element.textContent = languages[lang][key];
                }
            }
        });

        // Обновляем активную кнопку
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Сохраняем выбранный язык в localStorage
        localStorage.setItem('selectedLanguage', lang);
    }

    // Обработчик нажатия на кнопки языка
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Проверяем, есть ли сохраненный язык в localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && languages[savedLanguage]) {
        setLanguage(savedLanguage);
    } else {
        // По умолчанию используем русский
        setLanguage('ru');
    }
});
