function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

  var img = document.getElementById("moon");
  if (img.src.match("./assets/moon.svg")) {
    img.src = "./assets/sun.svg";
  } else {
    img.src = "./assets/moon.svg";
  }
}
