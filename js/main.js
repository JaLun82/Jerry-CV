/* 網站互動：手機選單與頁尾年份。內容請在 index.html 編輯。 */
(() => {
  'use strict';
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    const setMenu = open => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '關閉選單' : '開啟選單';
      nav.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
    document.documentElement.classList.add('js');
  }
  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = String(new Date().getFullYear()); });
})();
