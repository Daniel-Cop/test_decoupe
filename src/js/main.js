// VARAIBLES
// aside-menu-arrow
const PROFILE_MENU = document.querySelector("#profile-menu");
const PROFILE_ICON = document.querySelector("#profile-picture");
const PROFILE_ARROW = document.querySelector("#profile-menu-arrow");
const SIDE_MENU_ELEMENTS = document.querySelectorAll("#side-menu>li");
const MOBILE_MENU_ELEMENTS = document.querySelectorAll("#mobile-side-menu>li");
const BURGER_ICON = document.querySelector('#burger-icon');
const MOBILE_MENU = document.querySelector("#mobile-menu");

// FUNCTION 

function toggleProfileMenu() {
  PROFILE_ARROW.classList.toggle("active-arrow");
  PROFILE_ARROW.classList.toggle("rotate-180");
  PROFILE_MENU.classList.toggle("hidden");
}

// EVENT LISTENER

BURGER_ICON.addEventListener("click", () => {
  MOBILE_MENU.classList.toggle("closed")
})
PROFILE_ARROW.addEventListener("click", toggleProfileMenu);
PROFILE_ICON.addEventListener("click", toggleProfileMenu);

for (let li of SIDE_MENU_ELEMENTS) {
  li.addEventListener("click", () => {
    for (let ki of SIDE_MENU_ELEMENTS) {
      ki.classList.remove("active-submenu")
    }
    li.classList.add("active-submenu")
  })
}

for (let li of MOBILE_MENU_ELEMENTS) {
  li.addEventListener("click", () => {
    for (let ki of MOBILE_MENU_ELEMENTS) {
      ki.classList.remove("active-submenu")
    }
    li.classList.add("active-submenu")
    MOBILE_MENU.classList.toggle("closed")
  })
}

