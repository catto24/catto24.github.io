createButton = function(text) {
  var button = document.createElement("button");
  button.innerHtml = text;
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  return button;
}

window.onload = function() {
  var login = createButton("Login")
  var anon = createButton("Continue as guest")
};
