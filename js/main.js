
'use strict';

// JavaScriptが有効な場合に付与するクラス
document.documentElement.classList.add('js');

// Mobile Navigation
const menuToggle = document.querySelector('.menu-toggle');
const globalNav = document.querySelector('.global-nav');
const navLinks = document.querySelectorAll('.global-nav a');

if (menuToggle && globalNav) {
    const closeMenu = () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'メニューを開く');
        globalNav.classList.remove('is-open');
    };

    const openMenu = () => {
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'メニューを閉じる');
        globalNav.classList.add('is-open');
    };

    menuToggle.addEventListener('click', () => {
        const isExpanded =
            menuToggle.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        const isInsideMenu =
            globalNav.contains(event.target) ||
            menuToggle.contains(event.target);

        if (!isInsideMenu) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (
            event.key === 'Escape' &&
            menuToggle.getAttribute('aria-expanded') === 'true'
        ) {
            closeMenu();
            menuToggle.focus();
        }
    });

    // PC表示へ切り替わった場合はメニューを閉じる
    window.matchMedia('(min-width: 768px)').addEventListener('change', closeMenu);
}
