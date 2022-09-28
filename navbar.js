// These are getting the links and the logo thats being clicked
const logo2 = document.getElementsByClassName("logo_2")[0];
const navbarlinks = document.getElementsByClassName("navigation_links")[0];
// this waits for the click so that it can perform being active and hid/reveal the list
logo2.addEventListener("click", () => {
  navbarlinks.classList.toggle("active");
})



  