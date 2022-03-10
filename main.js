const btns = document.querySelectorAll('[data-target]');
const close_btns = document.querySelectorAll(".popup-btn");
const overlay = document.querySelector("#overlay")


btns.forEach((btn) => {
    btn.addEventListener('click', () => {
    document.querySelector(btn.dataset.target).classList.add('active');
    overlay.classList.add('active')
});
});

close_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.remove('active');
    overlay.classList.remove('active')
});
});

window.onclick = (e) => {
    if (e.target == overlay) {
        const popups = document.querySelectorAll('.popup');
        popups.forEach((popup) => popup.classList.remove('active'));
        overlay.classList.remove('active');
    }
};


let hotel = {}; 
object

hotel.name = 'Plank';
hotel.rooms = 30;
hotel.booked = 10;
hotel.bathroom = 1;
hotel.tv = 1;

hotel.checkAvailability = function() {
return this.rooms -this.booked;
};

let cabin = {}; 
object

cabin.name = 'Hytta';
cabin.choices = 10;
cabin.booked = 3;
cabin.bathroom = 1;
cabin.tv = 1;

cabin.checkAvailability = function() {
return this.choices -this.booked;
};

let motel = {}; 
object

motel.name = 'Motel';
motel.places = 20;
motel.booked = 15;
motel.bathroom = 1;
motel.tv = 1;

motel.checkAvailability = function() {
return this.places -this.booked;
};
