document.addEventListener("click", function (e) {
  const menu = document.querySelector("#mobMenu, .mob-menu");
  if (!menu) return;

  const openBtn = e.target.closest("#hambBtn, .hamburger");
  const closeBtn = e.target.closest("#mobClose, .mob-close");
  const menuLink = e.target.closest(".mob-menu a, #mobMenu a");

  if (openBtn) {
    e.preventDefault();
    menu.classList.add("open");
    document.body.classList.add("menu-open");
    return;
  }

  if (closeBtn || menuLink || e.target === menu) {
    e.preventDefault();
    menu.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".mob-menu.open, #mobMenu.open").forEach(menu => {
      menu.classList.remove("open");
    });
    document.body.classList.remove("menu-open");
  }
});