var gallery = new Gallery();

var newyork1 = new Photo("New York City", "Milad Mirkarimi", "newyork.jpg");
var newyork2 = new Photo("New York City2", "Milad Mirkarimi", "newyork2.jpg");
var venice1 = new Photo("venice Italy", "KJ", "venice.jpg");
var venice2 = new Photo("Venice city", "Jee Eun", "venice2.jpg");

gallery.add(newyork1);
gallery.add(newyork2);
gallery.add(venice1);
gallery.add(venice2);

console.log(gallery.photos);
var playlistElement = document.getElementById("image-gallery");

gallery.renderInElement(playlistElement);

var playButton = document.getElementById("show");
playButton.onclick = function() {
  gallery.play();
  gallery.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  gallery.next();
  gallery.renderInElement(playlistElement);
}












