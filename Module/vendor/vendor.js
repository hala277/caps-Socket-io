'use strict';

const { faker } = require('@faker-js/faker');
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const vendorConnection = io.connect(`${host}/csps`);
// const event = require('../lib/events');




setInterval(() => {
    let order = {
        store: faker.company.companyName(),
        orderID: faker.datatype.uuid(),
        customer:`${faker.name.firstName()}, ${faker.name.lastName()}`,
        address: `${faker.address.city()} , ${faker.address.stateAbbr()}`
    
    };
    vendorConnection.emit("pickup",order);

},5000);

vendorConnection.on('deleverdVender', (payload) => {
    console.log(`VENDOR: Thank you,${payload.orderID}`);
   
});




