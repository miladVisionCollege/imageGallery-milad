function Photo(title, photographer, path) {
  this.title = title;
  this.photographer = photographer;
  this.isShowing = false;
  this.img = new Image(600,300);
  this.path=path;
}

Photo.prototype.show = function() {
  
  this.isShowing = true;
  this.img.src = this.path;
  var gallery = document.getElementById("gallery");
  gallery.appendChild(this.img);
};
Photo.prototype.stop = function() {
  this.isShowing = false;
  this.img.src = this.path;
  var gallery = document.getElementById("gallery");
  gallery.removeChild(this.img);
};


Photo.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isShowing) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - '
  htmlString += this.photographer;
  //htmlString +="<span><img src='"+this.path+"'></span>"

  htmlString +='</li>';
  return htmlString;
};
















