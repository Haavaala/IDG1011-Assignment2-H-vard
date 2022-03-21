



const btns = document.querySelectorAll('[data-target]');
const close_btns = document.querySelectorAll(".close-popup");
const overlay = document.querySelector("#overlay")


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
    document.querySelector(btn.dataset.target).classList.add('active');
    overlay.classList.add('active')
});
});


close_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const popup = btn.closest(".popup");
      popup.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

window.onclick = (e) => {
    if (e.target == overlay) {
        const popups = document.querySelectorAll('.popup');
        popups.forEach((popup) => popup.classList.remove('active'));
        overlay.classList.remove('active');
    }
};


function Living(name, rooms, booked, bathroom, tv){
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.bathroom = bathroom;
  this.tv = tv;
  this.rooma = function(){
    return this.rooms -this.booked;

  };
  
}
  let cabin = new Living('Hytta', 10, 3, 1, true)
  let hotel = new Living('Hotellet', 50, 25, 1, true)
  let motel = new Living('Motel', 20, 15, 1, false)

  document.getElementById('motelname').innerHTML = motel.name;
  document.getElementById('motelrooms').innerHTML = motel.rooms;
  document.getElementById('motelbooked').innerHTML = motel.booked;
  document.getElementById('motelbath').innerHTML = motel.bathroom;
  document.getElementById('moteltv').innerHTML = motel.tv;
  
  document.getElementById('hotelname').innerHTML = hotel.name;
  document.getElementById('hotelrooms').innerHTML = hotel.rooms;
  document.getElementById('hotelbooked').innerHTML = hotel.booked;
  document.getElementById('hotelbath').innerHTML = hotel.bathroom;
  document.getElementById('hoteltv').innerHTML = hotel.tv;

  document.getElementById('cabinname').innerHTML = cabin.name;
  document.getElementById('cabinrooms').innerHTML = cabin.rooms;
  document.getElementById('cabinbooked').innerHTML = cabin.booked;
  document.getElementById('cabinbath').innerHTML = cabin.bathroom;
  document.getElementById('cabintv').innerHTML = cabin.tv;




const siteCreation= new Date();
document.getElementById('fullyear').innerHTML = siteCreation.getFullYear();
