// Sample pieces array matching your 7 images
const pieces = [
  { title: "Image 1", url: "https://via.placeholder.com/800x600?text=Image+1" },
  { title: "Image 2", url: "https://via.placeholder.com/800x600?text=Image+2" },
  { title: "Image 3", url: "https://via.placeholder.com/800x600?text=Image+3" },
  { title: "Image 4", url: "https://via.placeholder.com/800x600?text=Image+4" },
  { title: "Image 5", url: "https://via.placeholder.com/800x600?text=Image+5" },
  { title: "Image 6", url: "https://via.placeholder.com/800x600?text=Image+6" },
  { title: "Image 7", url: "https://via.placeholder.com/800x600?text=Image+7" }
];

function handleScroll() {
  if (window.innerWidth > 800) {
    const root = document.querySelector(':root');
    root.style.setProperty('--scroll', Math.floor(window.scrollY) + 'px');
    root.style.setProperty('--visible', ((Math.floor(window.scrollY - 17000) / -100).toFixed(1)));

    let active = null;
    const link = document.querySelector('#link');

    if (window.scrollY > 1500) {
      pieces.forEach((d, i) => {
        const z = 1200 + (i * 1000);
        if (z - window.scrollY > -1680 && !active) {
          active = d;
          link.innerHTML = d.title + '&nbsp;&#8674;';
          link.setAttribute('href', d.url);
          link.style.display = 'block';
        }
      });
    }

    if (!active) {
      link.style.display = 'none';
      link.innerHTML = null;
    }
  }
}

window.onload = () => {
  const root = document.querySelector(':root');
  root.style.setProperty('--vh', Math.min(640, Math.floor(window.innerHeight * 0.85)) + 'px');

  handleScroll();
};

window.onscroll = () => handleScroll();
