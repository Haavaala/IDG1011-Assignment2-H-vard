



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


function hotel(){

  let hotelArray =[
{name: 'Plank'},
{rooms:  30},
{booked: 10},
{bathroom: 1},
{tv: 1},
  ]
}

document.getElementById(hotelfacts).innerHTML = html
hotel.checkAvailability = function() {
return this.rooms -this.booked;
};

console.log(hotel)

function cabin(){

  let cabinArray =[
{name: 'Hytta'},
{rooms:  10},
{booked: 3},
{bathroom: 1},
{tv: 1},
  ]
}

cabin.checkAvailability = function() {
return this.choices -this.booked;
};

function motel(){

  let motelArray =[
{name: 'Motel'},
{rooms:  20},
{booked: 15},
{bathroom: 1},
{tv: 1},
  ]
}

motel.checkAvailability = function() {
return this.places -this.booked;
};




const siteCreation= new Date();
document.getElementById('fullyear').innerHTML=siteCreation.getFullYear();
