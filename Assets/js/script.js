
var today = document.getElementById('dateToday');

// today.innerHTML=moment().format('LLLL');


var apiKeyPicture = "vbBdCkMZKqwb4qJwGH4og1wD1L5EJKlW5gF4m9m4"

var photoURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${apiKeyPicture}`

// Retrieve photo url from link

var marsImgSrc = document.getElementById('mars-photo')

// Shows most recent photo



var roverModal = document.getElementById("exampleModalCenter")
var solInfo = document.getElementById('sol')
var earthDate = document.getElementById('earthdate')
var camera = document.getElementById('camera')
var roverStatus = document.getElementById("status")


let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")

modalBtn.onclick = function(){
  modal.style.display = "block"
  
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}





$( function() {
  $( "#date-picker" ).datepicker({dateFormat:'yy-mm-dd'});
} );

var x = document.getElementById("data-picker").value
function getDate() {
  var x = document.getElementById("date-picker").value;
  console.log(x)
}

// function getDate(){
  // var a = $( "#date-picker" ).datepicker("getDate");
  // console.log(a)
// }

  fetch(photoURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var latestPhoto = data.latest_photos[0]
    marsImgSrc.src = latestPhoto.img_src

    solInfo.innerText = "Rover: " + latestPhoto.rover.name
    earthDate.innerText = "Earth Date: " + latestPhoto.earth_date
    camera.innerText = "Camera: " + latestPhoto.camera.full_name
    roverStatus.innerText = "Rover Status: " + latestPhoto.rover.status


  })

//Earth date, upper right
var today = document.getElementById('dateToday');
today.innerHTML = moment().format('LLLL');

//DONKI
//https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=DEMO_KEY

var todaysDate = 'startDate' + moment().format('L');
var apiKey = '&api_key=jNaTZmpOkTNGqbyCyZipimLVQEiNfeKjWvkcEMe3';
var dataUrl = "https://api.nasa.gov/DONKI/notifications?" + todaysDate + apiKey;
var msgBody = document.getElementById('donki');

fetch(dataUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data[0].messageBody);
    var jargon = data[0].messageBody.replace(/\##/g, "<br><br>");
    msgBody.innerHTML = jargon;
  })
