// VARAIBLES
// aside-menu-arrow
const PROFILE_MENU = document.querySelector("#profile-menu");
const PROFILE_ICON = document.querySelector("#profile-picture");
const PROFILE_ARROW = document.querySelector("#profile-menu-arrow");

function toggleProfileMenu() {
  if (PROFILE_MENU.classList.contains("hidden")) {
    // PROFILE_ARROW get black and point up
  } else {
    // PROFILE_ARROW get green and upoint down
  }
  PROFILE_MENU.classList.toggle("hidden");
  PROFILE_MENU.classList.toggle("opacity-0");
}

// EVENT LISTENER
PROFILE_ARROW.addEventListener("click", toggleProfileMenu);

PROFILE_ICON.addEventListener("click", toggleProfileMenu);

// $(window).click(function() {
//     //Hide the menus if visible
//   });

//   $('#menucontainer').click(function(event){
//     event.stopPropagation();
//   });
