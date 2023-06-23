createButton = function(div, text, centerx, centery, width, height) {
  var button = document.createElement("button");
  button.textContent = text;
  
  if(centerx === true) {
    button.style.display = "block";
    button.style.margin = "auto";
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
  
  var login = createButton(div, "Login", true, false, "50%", "50%");
  //var anon = createButton(div, "Continue as guest")
};
