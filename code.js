const form = document.querySelector(".contactForm");
const emailBtn = document.querySelector(".emailBtn");
const labelDown = document.getElementById("btnScrollDown");
const pageSections = document.querySelectorAll(".section");
const linksMenu = document.querySelectorAll(".Nav-Link");
const menuOpen = document.querySelector("#menuOpen");
const Menu = document.querySelector(".Nav-ul")
const menuClose = document.querySelector("#menuClose");
const NavMenu = document.querySelector(".header-Nav");
var lastScroll = 0;


// Form Contact
form.addEventListener("submit", (e) => {
  DataForm = new FormData(form);

  emailBtn.setAttribute(
    "href",
    `mailto:franciscocortezdev@gmail.com?subject=${DataForm.get(
      "Name"
    )} - ${DataForm.get("Email")}&body=Subject: ${DataForm.get(
      "Subject"
    )} Message: ${DataForm.get("Message")}`
  );

  emailBtn.click();
});

//Label ScrollDown
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    labelDown.style.display = "none";

    //Animation of Nav Menu
    let currentScroll = window.scrollY;
    if (currentScroll > lastScroll && !Menu.classList.contains("menuShow")) {
      NavMenu.classList.remove("headerNavShow");
      NavMenu.classList.add("headerNavHide");
    } else {
      NavMenu.classList.remove("headerNavHide");
      NavMenu.classList.add("headerNavShow");
    }
    lastScroll = currentScroll;
  }
  if (window.scrollY < 100) {
    labelDown.style.display = "flex";
  }
  

});

// Menu status

let options = {
  rootMargin: "0px",
  threshold: 0.4,
};
const handleMenu = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      linksMenu.forEach((link) => {
        link.classList.remove("navLinkCurrent");

        if (link.classList.contains(`${entry.target.id}Link`)) {
          link.classList.add("navLinkCurrent");
        }
      });
    }
  });
};

let observer = new IntersectionObserver(handleMenu, options);
let link = document.querySelector(".aboutLink");
pageSections.forEach((el) => {
  observer.observe(el);
});

// Menu nav open

menuOpen.addEventListener("click", () => {
  Menu.classList.add("menuShow");
})

menuClose.addEventListener("click", () => {
  Menu.classList.remove("menuShow");
})