(() => {
  const header = document.querySelector('header.site-header');
  const btn = document.querySelector('[data-nav-toggle]');
  if (!header || !btn) return;

  const close = () => header.setAttribute('data-open', 'false');
  const toggle = () => header.setAttribute('data-open', header.getAttribute('data-open') === 'true' ? 'false' : 'true');

  btn.addEventListener('click', toggle);

  // Close when clicking a nav link (mobile)
  header.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', () => close());
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (header.getAttribute('data-open') !== 'true') return;
    if (!header.contains(e.target)) close();
  });
})();
