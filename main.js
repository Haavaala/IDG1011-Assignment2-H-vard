let hotel = {}; 
object

hotel.name = 'Plank';
hotel.rooms = 30;
hotel.booked = 10;

hotel.checkAvailability = function() {
return this.rooms -this.booked;
};

let cabin = {}; 
object

cabin.name = 'Hytta';
cabin.choices = 10;
cabin.booked = 3;

cabin.checkAvailability = function() {
return this.choices -this.booked;
};

let motel = {}; 
object

cabin.name = 'Motel';
cabin.places = 20;
cabin.booked = 15;

motel.checkAvailability = function() {
return this.places -this.booked;
};
