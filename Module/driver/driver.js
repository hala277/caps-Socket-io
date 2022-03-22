'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';//herohu-link
// const event = require('../lib/events.js');
console.log('nnnnnnnnnnnnnnnnnnnnn')
const driverConnection = io.connect(`${host}/csps`);
console.log('nnnnnnnnnnnnnnnnnnnnn1')

driverConnection.on('pickupDriver',pickupDriver);

function pickupDriver (payload){
   
    driverConnection.emit("pickup2",payload);
    setTimeout(()=>{
    console.log(`DRIVER: picked up ${payload.orderID}`)
    driverConnection.emit('in-transit',payload);
    },1500);
    setTimeout(()=>{
    console.log(`DRIVER: delievered ${payload.orderID}`)
    driverConnection.emit('delivered',payload);
    },2000);
}
// event.on('pickup', (order) => {
  
//     event.emit("pickup2",order);
//     console.log(`DRIVER: picked up ${order.orderID}`)
//     event.emit('in-transit',order);
   
//     console.log(`DRIVER: delievered ${order.orderID}`)
//     event.emit('delivered',order);

// });



