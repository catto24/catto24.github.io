createButton = function(div, text) {
  var button = document.createElement("button");
  button.innerHtml = text;
  
  button.style.display = "block";
  button.style.margin = "auto";
  button.style.width = "50%";
  button.style.height = "10%";
  
  div.appendChild(button);
  return button;
}

window.onload = function() {
  var div = document.getElementById("chatroom");
  div.style.width = "50%";
  div.style.height = "50%";
  
  var login = createButton(div, "Login")
  //var anon = createButton(div, "Continue as guest")
};
