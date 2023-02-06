'use strict';

const bookings = [];

const createBooking = function(flightNum,numPass=1,price=100*numPass){
    const booking ={
        flightNum,
        numPass,
        price,
    };
    console.log(booking);
    bookings.push(booking);
}
createBooking('Lh111');
createBooking('Lh123',2,800);
createBooking('Lh134',2);
createBooking('Lh134',6);

createBooking('LH234',undefined,1000);