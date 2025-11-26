// меню
const solutionsBtn = document.getElementById('solutionsBtn');
const solutionsMenu = document.getElementById('solutionsMenu');

if (solutionsBtn && solutionsMenu) {
    solutionsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        solutionsMenu.classList.toggle('show');
        solutionsBtn.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!solutionsMenu.contains(e.target) && e.target !== solutionsBtn) {
            solutionsMenu.classList.remove('show');
            solutionsBtn.classList.remove('open');
        }
    });
}

// поиск
const searchBtn = document.querySelector('.header-icon-search');
const searchForm = document.querySelector('.header-search--form');
const searchInput = document.querySelector('.search-input');

if (searchBtn && searchForm && searchInput) {
    searchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        searchForm.classList.toggle('active');
        if (searchForm.classList.contains('active')) {
            searchInput.focus();
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchForm.contains(e.target) && e.target !== searchBtn) {
            searchForm.classList.remove('active');
        }
    });
}

// моб меню
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = mobileMenu?.querySelector('.mobile-menu__close');

if (burger && mobileMenu && closeBtn) {
    const openMenu = () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        burger.classList.add('active');
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        burger.classList.remove('active');
    };

    burger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) closeMenu();
    });

    // Подменю SOLUTIONS в мобильной версии
    const mobileSolutionsBtn = mobileMenu.querySelector('.mobile-menu__button');
    const mobileSolutionsMenu = mobileMenu.querySelector('.mobile-solutions');
    if (mobileSolutionsBtn && mobileSolutionsMenu) {
        mobileSolutionsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobileSolutionsMenu.classList.toggle('show');
        });
    }
}

// Слайдер

const swiper = new Swiper('.swiper', {
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,

    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        1101: {
            pauseOnMouseEnter: true,
        }
    }
});

// Поиск на странице

// Поиск на странице

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const tags = document.querySelectorAll('.tags .tag');

    tags.forEach(tag => {
        tag.addEventListener('click', function () {
            const text = this.textContent.trim();
            searchInput.value = text;
            searchInput.focus(); // опционально: фокус на поле
        });
    });
});