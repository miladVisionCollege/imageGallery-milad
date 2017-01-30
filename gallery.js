function Gallery() {
  this.photos = [];
  this.nowShowingIndex = 0;
}

Gallery.prototype.add = function(photo) {
  this.photos.push(photo);
};

Gallery.prototype.play = function() {
  var currentPhoto = this.photos[this.nowShowingIndex];
  currentPhoto.show();


};

Gallery.prototype.stop = function(){
  var currentPhoto = this.photos[this.nowShowingIndex];
  currentPhoto.stop();
};
Gallery.prototype.next = function() {
  this.stop();
  this.nowShowingIndex++;
  if(this.nowShowingIndex === this.photos.length) {
    this.nowShowingIndex = 0;
  }
  this.play();
};


Gallery.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  for(var i = 0; i < this.photos.length; i++) {
    list.innerHTML += this.photos[i].toHTML();
  }
};












