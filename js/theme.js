var css = document.getElementById("css")
var mode = document.getElementById("mode")

mode.addEventListener("click", function() {
  localStorage.setItem("dark", this.checked);
  if (this.checked) {
   css.href="css/dark.css"
  } else {
    css.href="css/index.css"
  }
});

function whatmode () { 
var ismode = localStorage.getItem("dark")
if (ismode == "true") {
  mode.checked = true;
  css.href="css/dark.css"
}
else if (ismode == "false") {
  css.href="css/index.css"
}
}
whatmode()