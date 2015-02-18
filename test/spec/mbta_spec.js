'use strict';

describe('MBTA_line',function(line){
  it('first of all, it is a function',function(){
    expect(MBTA_line).toEqual(jasmine.any(Function));
    expect(MBTA_line).toBeDefined();
  });
  it('second, it creates a new object with the parameters passed',function(){
    var red = new MBTA_line('red');
    expect(red).toBeDefined();
    expect(red.line).toEqual('red');
  });
  describe('Prototypical inheritance with constructor functions',function(){

    var red = new MBTA_line["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"];
    var green = new MBTA_line["haymarket", "government center", "park st", "bolyston", "arlington", "copley"];
    var orange = new MBTA_line["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"];

    it('inherits from the MBTA_line.prototype',function(){
      expect(red.__proto__).toBeDefined();
      expect(red.__proto__).toEqual(jasmine.any(Object));
      expect(red.describe).toEqual(jasmine.any(Function));
      expect(red.describe()).toEqual('red line has 8 stops, with Park Street as a connection stop');
      expect(green.describe()).toEqual('green line has 6 stops, with Park Street as a connection stop');
      expect(orange.describe()).toEqual('orange line has 8 stops, with Park Street as a connection stop');
    });
  });
});
