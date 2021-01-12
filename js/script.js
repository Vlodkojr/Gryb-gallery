var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function(i) {
  var k;

    for (k = 0; k < acc.length; k++) {
        if(k !== Array.from(acc).indexOf(this)){

        if(acc[k].classList.contains("active")){
          var photo = acc[k].nextElementSibling;
          if (photo.style.maxHeight) {
            photo.style.maxHeight = null;
          }
          acc[k].classList.toggle("active");
        }} else {
          
        this.classList.toggle("active");
        var photo = this.nextElementSibling;
        if (photo.style.maxHeight) {
          photo.style.maxHeight = null;
        } else {
          photo.style.maxHeight = photo.scrollHeight + "px";
        } }
    }
  })
}