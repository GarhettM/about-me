// This is the first part of a guessing game for which I'd like to like the user to
// keep choosing the answers until they get the right one and are prompted to scroll
// down and go to the next section.

function startAboutMe() {
    AboutMeArea.start();
  }
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
  }