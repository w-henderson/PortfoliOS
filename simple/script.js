var pageName = window.location.hash.substring(1);
var pageNames = {
  "programming": "🖥️ Software Development",
  "music": "🎵 Music",
  "video_editing": "📼 Video Editing"
}
fullPageName = pageNames[pageName];
document.title = fullPageName + " | William Henderson";

var pageData = slideshows[pageName].content;
pageData = pageData.slice(0,pageData.length-1)
  .join("")
  .replace(/div/g,"h2")
  .replace(/<h2 class="projectsButton"/g,"<br><a href='#"+pageName+"' ")
  .replace(/\<\/h2>(.*?)<h2/g,"</a><h2")
  .replace(/src="music/g,"src=\"../music")
  .replace(/href="#"/g,"href=\"#"+pageName+"\"")
  .replace(/<iframe style="(.*?)"/g,"<iframe style=\"width:100%;height:calc(calc(calc(100vw - 76px)*9)/16);margin-bottom:1em;max-width:400px;max-height:225px\"");

window.onload = function() {
  document.getElementById("main").innerHTML = "<h1>"+fullPageName+"</h1>"+slideshows[pageName].simpleContent+pageData;
  var thingsToRemove = document.getElementsByClassName("projectsButton nxt");
  while (thingsToRemove[0]) { thingsToRemove[0].parentNode.removeChild(thingsToRemove[0]); }
}