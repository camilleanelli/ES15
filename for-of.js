'use strict';

let teachers = [
  {name: "camille", comment: "good", rating: 5},
  {name: "jim", comment: "good", rating: 10},
  {name: "camille", comment: "good", rating: 5},
  {name: "camille", comment: "good", rating: 5},
  {name: "camille", comment: "good", rating: 5},
  {name: "camille", comment: "good", rating: 5},


];

for(let teacher of teachers) {
  console.log(teacher.name);
  if(teacher.name === 'jim'){
    console.log(teacher.rating);
    break;  
  }
}
