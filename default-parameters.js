'use strict';

function greet(name = "hello", timeOfDay = "hello") {
  console.log(`Good ${timeOfDay}, ${name}!`);
}

greet(undefined, 'good');
