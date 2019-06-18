if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("./serviceWorker.js").then(function() {
        console.log("Service Worker Registered");
      })
      .catch(function() {
            console.log('error');
            
      })
}


function showLocation(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var latlongvalue = position.coords.latitude + ","
      + position.coords.longitude;
      var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
      +latlongvalue+"&amp;zoom=14&amp;size=400x400&amp;key=AIzaSyAa8HeLH2lQMbPeOiMlM9D1VxZ7pbGQq8o";
      document.getElementById("mapDiv").innerHTML =
      "<img src='"+img_url+"'>";

      }
   function errorHandler(err) {
      if(err.code == 1) {
         console.log(err);
         alert("Error: Access is denied!1111");
      } else if( err.code == 2) {
         alert("Error: Position is unavailable!");
      }
   }
   function getLocation(){
      if(navigator.geolocation){
         // timeout at 60000 milliseconds (60 seconds)
         var options = {timeout:60000};
         navigator.geolocation.getCurrentPosition
         (showLocation, errorHandler, options);
      } else{
         alert("Sorry, browser does not support geolocation!");
      }
   }
  
  
