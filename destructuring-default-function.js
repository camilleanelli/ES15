'use strict';

function getData({url, method = 'post'} = {}, callback) {
  callback(url, method);
}


getData(url: 'hello.com') {
  console.log(url, method)
}
