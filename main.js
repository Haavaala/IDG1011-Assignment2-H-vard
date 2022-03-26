


//creating variables for the popup and the buttons functions//
const btns = document.querySelectorAll('[data-target]');
const close_btns = document.querySelectorAll(".close-popup");
const overlay = document.querySelector("#overlay")

//when buttons get clicked, the popup will appear//
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
    document.querySelector(btn.dataset.target).classList.add('active');
    overlay.classList.add('active')
});
});

//the close popup button, when this is clicked, the popup modul will disappear//
//task III b//
close_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const popup = btn.closest(".popup");
      popup.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
//when clicking outside the popup, it will disapear since it removes 'active'. task II a//
//task III a//
window.onclick = (e) => {
    if (e.target == overlay) {
        const popups = document.querySelectorAll('.popup');
        popups.forEach((popup) => popup.classList.remove('active'));
        overlay.classList.remove('active');
    }
};

//my objects task I a, b, c, d, e//
function Living(name, rooms, booked, bathroom, tv, bed){
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.bathroom = bathroom;
  this.tv = tv;
  this.bed = bed;
  this.rooma = function(){
    return this.rooms -this.booked;

  };
  //removing a property//
  delete this.bed;
}
//set values for the properties//
  let hotel = new Living('Hotellet', 50, 25, 1.4, true)
  let cabin = new Living('Hytta', 10, 3, 1, true)
  let motel = new Living(['Motel', ' Moss'], 20, 15, 1, false)

  //change the name of the hotel to uppercase//
 //task II c//
  const newHotelName = hotel.name.toUpperCase();
  hotel.name = newHotelName;

  //rounding the number down for the hotel.bathroom with a math object//
  //task II d//
  const newHotelBath = Math.round(hotel.bathroom);
  hotel.bathroom = newHotelBath;
  
  //getting the javascript values to display in the HTML and the webpage by using 'document' and 'getElementById'//
  //task II b.//
  document.getElementById('hotelname').innerHTML = hotel.name;
  document.getElementById('hotelrooms').innerHTML = hotel.rooms;
  document.getElementById('hotelbooked').innerHTML = hotel.booked;
  document.getElementById('hotela').innerHTML = hotel.rooma();
  document.getElementById('hotelbath').innerHTML = hotel.bathroom;
  document.getElementById('hoteltv').innerHTML = hotel.tv;

  document.getElementById('cabinname').innerHTML = cabin.name;
  document.getElementById('cabinrooms').innerHTML = cabin.rooms;
  document.getElementById('cabinbooked').innerHTML = cabin.booked;
  document.getElementById('cabina').innerHTML = cabin.rooma();
  document.getElementById('cabinbath').innerHTML = cabin.bathroom;
  document.getElementById('cabintv').innerHTML = cabin.tv;

  document.getElementById('motelname').innerHTML = motel.name;
  document.getElementById('motelrooms').innerHTML = motel.rooms;
  document.getElementById('motelbooked').innerHTML = motel.booked;
  document.getElementById('motela').innerHTML = motel.rooma();
  document.getElementById('motelbath').innerHTML = motel.bathroom;
  document.getElementById('moteltv').innerHTML = motel.tv;

//to show which year it is at the bottom of the page I used 'getFullYear' and 'getElementById' to show it in the HTML//
//task II e//
const siteCreation= new Date();
document.getElementById('fullyear').innerHTML = siteCreation.getFullYear();
