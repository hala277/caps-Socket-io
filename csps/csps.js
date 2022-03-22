'use strict';




const port = process.env.PORT || 3000;
const io = require('socket.io')(port);
const caps = io.of('/csps');

caps.on('connection', (socket) => {
   
    // pickup
    socket.on('pickup', pickup2);
// console.log(pickup);
    function pickup2(payload) {
        console.log(
            'EVENT', {
            event: 'pickup',
            time: new Date(),
            payload: payload,
        });
        caps.emit('pickupDriver', payload);
    }

    // in-transit
    // console.log(inTransit);
    socket.on('in-transit', inTransit);

  function inTransit(payload) {
    console.log(
      'EVENT', {
        event: 'in-transit',
        time: new Date(),
        payload: payload,
      });
  }

  socket.on('delivered', delivered);
// console.log(delivered);
  function delivered(payload) {
    console.log(
      'EVENT', {
        event: 'delivered',
        time: new Date(),
        payload: payload,
      },
    );
    caps.emit('deleverdVender',payload);
  }


})








