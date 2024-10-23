function showTypeForm(){
  var script = document.createElement('script');
  script.src = "https://embed.typeform.com/next/embed.js"
  var div = document.createElement('div');
  div.setAttribute("id", "typeForm");
  div.setAttribute("data-tf-popup", "FUFyZdpT");
  div.setAttribute("data-tf-width", 600);
  div.setAttribute("data-tf-height", 600);
  div.setAttribute("data-tf-button-color", "#002F7A")
  div.setAttribute("data-tf-button-text", "Download")
  div.setAttribute("style", "all:unset;")
  script.append(div);
  document.getElementsByTagName('head')[0].appendChild(script);
}
