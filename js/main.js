/* 一頁式導覽、照片預留與 Google 表單入口。 */
(() => {
  'use strict';
  const config = window.JERRY_SITE_CONFIG || {};
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    const setMenu = open => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '關閉選單' : '開啟選單';
      nav.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false); toggle.focus();
      }
    });
    document.documentElement.classList.add('js');
  }
  const portraitFrame = document.querySelector('[data-portrait-frame]');
  const placeholder = document.querySelector('[data-portrait-placeholder]');
  if (portraitFrame && placeholder && typeof config.portrait === 'string' && config.portrait.trim()) {
    const portrait = document.createElement('img');
    portrait.setAttribute('data-portrait', '');
    portrait.hidden = true; portrait.width = 640; portrait.height = 800;
    portrait.decoding = 'async'; portrait.setAttribute('fetchpriority', 'high');
    portraitFrame.append(portrait);
    portrait.alt = config.portraitAlt || 'Jerry 的個人照片';
    portrait.addEventListener('load', () => { portrait.hidden = false; placeholder.hidden = true; });
    portrait.addEventListener('error', () => { portrait.hidden = true; placeholder.hidden = false; });
    portrait.src = config.portrait.trim();
  }
  const formLink = document.querySelector('[data-consultation-link]');
  const pending = document.querySelector('[data-consultation-pending]');
  const note = document.querySelector('#booking-form-note');
  if (formLink && pending && note && typeof config.consultationFormUrl === 'string' && config.consultationFormUrl.trim()) {
    try {
      const url = new URL(config.consultationFormUrl.trim());
      const isShortLink = url.hostname === 'forms.gle';
      const isPublicForm = url.hostname === 'docs.google.com' && url.pathname.startsWith('/forms/') && /\/viewform\/?$/.test(url.pathname);
      if (url.protocol !== 'https:' || (!isShortLink && !isPublicForm)) throw new Error('需要公開 Google 表單填寫網址');
      formLink.href = url.href; formLink.hidden = false; pending.hidden = true;
      note.textContent = '將開啟 Google 表單，填寫完成後請在表單頁面送出。';
    } catch {
      note.textContent = '預約連結尚未就緒，目前無法送出預約。';
    }
  }
  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = String(new Date().getFullYear()); });
})();
