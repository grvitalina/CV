document.querySelectorAll('nav .links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // прибирає стандартний "різкий" стрибок
    const targetId = this.getAttribute('href').substring(1); // наприклад "about"
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});