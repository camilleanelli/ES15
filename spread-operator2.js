'use strict';

function myFuction(name, iceCreamFlavor) {
  console.log(`${name} likes ${iceCreamFlavor}`);
}

let args = ['camille', 'vanilla'];

myFuction(...args);
