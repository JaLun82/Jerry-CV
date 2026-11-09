/* 一頁式選單、照片備援與預約連結。預約網址直接放在 HTML，無 JS 也能使用。 */
(() => {
  'use strict';
  const config = window.JERRY_SITE_CONFIG || {};
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.getElementById(link.getAttribute('href').slice(1));
    const heading = target && target.querySelector('h1, h2');
    if (heading) heading.focus({ preventScroll: true });
  });
  const frame = document.querySelector('[data-portrait-frame]');
  const placeholder = document.querySelector('[data-portrait-placeholder]');
  if (frame && placeholder && typeof config.portrait === 'string' && config.portrait.trim()) {
    const image = document.createElement('img');
    image.hidden = true; image.width = 640; image.height = 800;
    image.alt = config.portraitAlt || 'Jerry 的個人照片';
    image.decoding = 'async'; image.setAttribute('fetchpriority', 'high');
    image.addEventListener('load', () => { image.hidden = false; placeholder.hidden = true; });
    image.addEventListener('error', () => { image.hidden = true; placeholder.hidden = false; });
    frame.append(image); image.src = config.portrait.trim();
  }
  const formLink = document.querySelector('[data-consultation-link]');
  const copyButton = document.querySelector('[data-copy-consultation]');
  const note = document.querySelector('#booking-form-note');
  if (formLink && note) {
    let formUrl;
    try {
      formUrl = new URL(formLink.getAttribute('href'));
      const shortLink = formUrl.hostname === 'forms.gle';
      const publicForm = formUrl.hostname === 'docs.google.com' && formUrl.pathname.startsWith('/forms/') && /\/viewform\/?$/.test(formUrl.pathname);
      if (formUrl.protocol !== 'https:' || (!shortLink && !publicForm)) throw new Error('Invalid form URL');
    } catch {
      formUrl = null;
      formLink.removeAttribute('href');
      formLink.setAttribute('aria-disabled', 'true');
      formLink.textContent = '預約連結暫時無法使用';
      note.textContent = '請重新整理頁面後再試。';
    }
    if (formUrl && copyButton && window.navigator?.clipboard?.writeText) {
      copyButton.hidden = false;
      copyButton.addEventListener('click', async () => {
        copyButton.disabled = true;
        try {
          await window.navigator.clipboard.writeText(formUrl.href);
          note.textContent = '已複製預約連結，可貼到瀏覽器開啟。';
        } catch {
          note.textContent = '無法複製，請長按或按右鍵複製「前往 Google 表單」的連結。';
        } finally { copyButton.disabled = false; }
      });
    }
  }
  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = String(new Date().getFullYear()); });
})();
