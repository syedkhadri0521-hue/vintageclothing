// ================================
// LUCIDE ICONS
// ================================

lucide.createIcons();


// ================================
// MOBILE MENU TOGGLE
// ================================

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (hamburger && mobileMenu) {

  hamburger.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    // CHANGE ICON

    const menuIcon = hamburger.querySelector("i");

    if (mobileMenu.classList.contains("active")) {

      menuIcon.setAttribute("data-lucide", "x");

    } else {

      menuIcon.setAttribute("data-lucide", "menu");

    }

    lucide.createIcons();

  });

}


// ================================
// MOBILE DROPDOWN
// ================================

const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");

mobileDropdowns.forEach((dropdown) => {

  const dropdownHead = dropdown.querySelector(".mobile-dropdown-head");
  const dropdownMenu = dropdown.querySelector(".mobile-dropdown-menu");
  const dropdownIcon = dropdown.querySelector(".mobile-dropdown-head i");

  dropdownHead.addEventListener("click", () => {

    dropdownMenu.classList.toggle("active");

    // ROTATE ICON

    dropdownIcon.classList.toggle("rotate");

  });

});


// ================================
// DARK MODE
// ================================

const darkModeBtn = document.querySelector(".dark-mode-btn");

if (darkModeBtn) {

  darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // CHANGE ICON

    const darkIcon = darkModeBtn.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

      darkIcon.setAttribute("data-lucide", "sun");

    } else {

      darkIcon.setAttribute("data-lucide", "moon");

    }

    lucide.createIcons();

  });

}


// ================================
// RTL MODE
// ================================

const rtlBtn = document.querySelector(".rtl-btn");

if (rtlBtn) {

  rtlBtn.addEventListener("click", () => {

    const html = document.documentElement;

    if (html.getAttribute("dir") === "rtl") {

      html.setAttribute("dir", "ltr");

    } else {

      html.setAttribute("dir", "rtl");

    }

  });

}


// ================================
// STICKY HEADER SHADOW
// ================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {

    header.classList.add("sticky-active");

  } else {

    header.classList.remove("sticky-active");

  }

});


// ================================
// CLOSE MOBILE MENU ON RESIZE
// ================================

window.addEventListener("resize", () => {

  if (window.innerWidth > 992) {

    mobileMenu.classList.remove("active");

    const menuIcon = hamburger.querySelector("i");

    menuIcon.setAttribute("data-lucide", "menu");

    lucide.createIcons();

  }

});


// ================================
// OPTIONAL ACTIVE NAV LINK
// ================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});