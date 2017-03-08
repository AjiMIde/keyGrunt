var date = new Date();
var y = date.getYear() + 1970;
var m = date.getMonth() + 1;
var d = date.getDate();
var h = date.getHours();
var mi = date.getMinutes();
var s = date.getSeconds();
console.log(y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' +s);