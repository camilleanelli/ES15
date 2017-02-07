'use strict';


let classRoom = new Set();

let stevenJ = { name: "steven", age:22},
    sarah = { name: "sarah", age: 34 },
    stevenS = { name: "steven", age: 22},
    sarahN = { name: "sarah", age: 34 };

classRoom.add(stevenJ);
classRoom.add(sarah);
classRoom.add(stevenS);

if(classRoom.has(stevenJ)) console.log('stevenJ is here');
if(classRoom.has(sarah)) console.log('sarah is here');
if(classRoom.has(stevenS)) console.log('stevenS is here');

console.log(classRoom.size);
classRoom.delete(stevenS);

// create an array from an existing set
let arrayOfStudent = Array.from(classRoom);
console.log(arrayOfStudent);

// create a set from an existing array
let set = new Set(arrayOfStudent);
console.log(set);
