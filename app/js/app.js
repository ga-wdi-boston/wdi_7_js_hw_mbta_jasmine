'use strict';

var Line = function(name, stops) {
  this.name = name;
  this.stops = stops;
}

Line.prototype = {
  distanceToPark: function(stop) {
    return Math.abs(this.stops.indexOf(stop) - this.stops.indexOf("Park St"));
  }
};
//   distanceSameLine: function(starting, ending) {
//     return Math.abs(this.stops.indexOf(starting) - this.stops.indexOf(ending));
//   }
// };

// var trace = function(){
//   for(var i = 0; i < arguments.length; i++){
//     console.log(arguments[i]);
//   }
// };

// var App = App || {};

// App.square = function(x){
//   return x * x
// };

// App.cube = function(x){
//   return x * x * x
// };

// App.greet = function(string){
//   return string = typeof string !== 'undefined' ? 'Hello ' + string : "Hello World";
// };

// $(document).ready(function(){
//   trace('hello world');
// });
