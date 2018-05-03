var i = 0;
var txt = 'A ​passionate ​CS ​graduate ​from ​one ​of ​the ​top ​CS ​schools ​of ​the Country ​with ​excellent ​communication, ​analytical ​and ​problem ​solving skills.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

$(document).ready(function() {
  typeWriter()
  // setTimeout(showPage, 3000);
});

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("missionStatement").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// function showPage() {
//   // document.getElementById("loader").style.display = "none";
//   // document.getElementById("myDiv").style.display = "block";
//   $( ".loader" ).css( "display", "none" );
//   $( ".mainContentsWrapper" ).css( "display", "block" );
//
// }
