const icon = document.getElementById("side-menu");

function closeSideMenu() {
  icon.style.width = "0";
}

function closeOpenSideMenu() {
  if (icon.style.width === "0px") {
    icon.style.width = "250px";
  } else {
    icon.style.width = "0";
  }
}
