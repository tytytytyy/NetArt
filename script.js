// Example pieces array for demo purposes
const pieces = [
  { title: '(￣▽￣)ノ', url: '' },
  { title: '(◕‿◕)', url: '' },
  { title: '(｡♥‿♥｡)', url: '' },
  { title: '(✿◠‿◠)', url: '' },
  { title: '(≧ω≦)', url: '' },
  { title: '(ღ˘⌣˘ღ)', url: '' },
  { title: '(≧◡≦)', url: '' },
];

const link = document.getElementById('link');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.documentElement.style.setProperty('--scroll', scrollY + 'px');
  document.documentElement.style.setProperty('--visible', ((scrollY - 17000) / -100).toFixed(1));

  // Show/hide and update the link based on scroll position
  let active = null;
  if (scrollY > 1500) {
    for (let i = 0; i < pieces.length; i++) {
      const z = 1200 + (i * 1000);
      if (z - scrollY > -1680 && !active) {
        active = pieces[i];
        link.textContent = active.title + '';
        link.style.display = 'block';
      }
    }
  }
  if (!active) {
    link.style.display = 'none';
    link.textContent = '';
    link.href = '#';
  }
});
