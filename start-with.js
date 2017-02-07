'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/^a-really/.test(strToSearch));

console.log(strToSearch.indexOf('a-really') === 0);

console.log(strToSearch.startsWith('lly', 5));

console.log(strToSearch.endsWith('string', 30));

console.log(strToSearch.includes('long'));
