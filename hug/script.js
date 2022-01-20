/* image paths have been defined into a javascript list */
var images = [
    "img/1.png",
    "img/2.png",
    "img/3.png",
    "img/4.png",
    "img/5.png",
    "img/aqua.GIF"];

/* RandomImage function defined to call images. Everything is same until calling randomQuote function inside of it.  */
function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('image').src = images[x];
    /* Random quote function is called when a random image is loaded*/
    randQuote();
}
