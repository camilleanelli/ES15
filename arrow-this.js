'use strict';

var Teacher = function(data) {
  this.name = data.name;
  this.greet = function(studentCnt) {
    let promise = new Promise(function(resolve, reject) {
      if(studentCnt === 0){
        reject('Zero students in class');

      }else {
        resolve(`Hello to ${studentCnt}`);
      }
    });
    return promise;
  }
}
