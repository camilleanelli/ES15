'use strict';

let items = ['item1', 'item2', 'item3', 'item4', 'item5'];

let [a, b, c, ...d] = items;

console.log(d);
