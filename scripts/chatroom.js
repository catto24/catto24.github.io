createButton = function(div, text, centerx, centery, width, height) {
  var button = document.createElement("button");
  button.textContent = text;
  
  button.style.position = "absolute";
  button.style.display = "block";
  button.style.transform = ""
  if(centerx === true) {
    button.style.left = "50%";
    button.style.transform += "translateX(-50%)";
  };
  if(centery === true) {
    if(centerx === true) {
      button.style.transform += " ";
    }
    button.style.top = "50%";
    button.style.transform += "translateY(-50%)";
  };
  button.style.width = width;
  button.style.height = height;
  
  div.appendChild(button);
  return button;
}

window.onload = function() {
  var div = document.getElementById("chatroom");
  div.style.width = "50%";
  div.style.height = "50%";
  div.style.position = "relative";
  
  var login = createButton(div, "Login", true, true, "12.5%", "10%");
  var anon = createButton(div, "Continue as guest", true, true, "50%", "10%");
};
