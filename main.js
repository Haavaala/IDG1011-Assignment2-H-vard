let hotel = {}; // creates an empty
object
// adds properties to the object
hotel.name = 'Plank';
hotel.rooms = 30;
hotel.booked = 10;
// adds a method to the object
hotel.checkAvailability = function() {
return this.rooms -this.booked;
};

let cabin = {}; // creates an empty
object
// adds properties to the object
cabin.name = 'Hytta';
cabin.choices = 10;
cabin.booked = 3;
// adds a method to the object
cabin.checkAvailability = function() {
return this.choices -this.booked;
};