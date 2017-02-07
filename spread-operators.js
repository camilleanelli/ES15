'use strict';

const originalFlavors = ['vanilla', 'chocolate'];

const newFlavors = ['strwberry', 'hello'];

const inventory = ['rocky road', ...originalFlavors, ...newFlavors];

console.log(inventory);
