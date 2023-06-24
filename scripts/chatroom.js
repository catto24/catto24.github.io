var div = document.getElementById("chatroom");
var scene = "choice";
createButton = function(div, text, centerx, centery, offsetx, offsety, width = null, height = null) {
  var button = document.createElement("button");
  button.textContent = text;
  
  button.style.position = "absolute";
  button.style.transform = ""
  if(centerx === true) {
    button.style.left = String(50+offsetx)+"%";
    button.style.transform += "translateX(-50%)";
  };
  if(centery === true) {
    if(centerx === true) {
      button.style.transform += " ";
    }
    button.style.top = String(50+offsety)+"%";
    button.style.transform += "translateY(-50%)";
  };
  if(width) {
    button.style.width = width;
    button.style.height = height;
  }
  
  div.appendChild(button);
  return button;
}

draw = function() {
  if(scene === "choice") {
    var login = createButton(div, "Login", true, true, 0, -2.75);
    var anon = createButton(div, "Continue as guest", true, true, 0, 2.75);
    
    login.onclick = function() {
      scene = "login";
    }
    scene = "choice1";
  } else if(scene === "login") {
    var text = document.createElement("h2");
    text.textContent = "Expect this later :)";
    text.style.textAlign = "center";
    scene = "login1";
  }
  window.requestAnimationFrame();
};

window.onload = function() {
  div.style.width = "50%";
  div.style.height = "50%";
  div.style.position = "relative";
  div.style.border = "2px solid white";
  draw();
}
