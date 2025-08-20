document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.book .page');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentPage = 0;

  nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length) {
      pages[currentPage].classList.add('flipped');
      pages[currentPage].style.zIndex = pages.length - currentPage;
      currentPage++;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      pages[currentPage].classList.remove('flipped');
      pages[currentPage].style.zIndex = pages.length - currentPage;
    }
  });
});




document.querySelector(".icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
  document.getElementById("move-content").classList.toggle('move-container-all');
  document.getElementById("show-menu").classList.toggle('show-menu-lateral');
}

document.querySelectorAll('.menu nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("move-content").classList.remove('move-container-all');
    document.getElementById("show-menu").classList.remove('show-menu-lateral');
  });
});

