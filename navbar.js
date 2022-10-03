// These are getting the links and the logo thats being clicked
const logo_2 = document.getElementsByClassName("logo_2")[0];
const navigation_links = document.getElementsByClassName("navigation_links")[0];
// this waits for the click so that it can perform being active and hid/reveal the list
logo_2.addEventListener("click", () => {
  navigation_links.classList.toggle("active");
});


