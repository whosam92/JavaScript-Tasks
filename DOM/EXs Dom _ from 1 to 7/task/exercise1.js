document.getElementById("mydiv").onmouseover = function () {
  ChangeTextOnHover();
};
document.getElementById("mydiv").onmouseout = function () {
  orginalText();
};

function ChangeTextOnHover() {
  document.getElementById("mydiv").textContent = "can i help you?";
}

function orginalText() {
  document.getElementById("mydiv").textContent = "Hello Wrold";
  
}
