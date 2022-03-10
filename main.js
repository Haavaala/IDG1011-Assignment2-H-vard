const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    })
})

overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('.popup.active')
    popups.forEach(popup => {
        closePopup(popup)

    })
})

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    })
})

function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closePopup(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}

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
