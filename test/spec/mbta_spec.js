'use strict';

describe('MBTA_line',function(){
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

describe('Namespacing in Javascript',function(){
  describe('MBTA_lineApp namespace',function(){
    it('creates a new object for namespacing',function(){
      expect(MBTA_lineApp).toEqual(jasmine.any(Object));
    });
    it('has a property called "red" that has an object for a value',function(){
      expect(MBTA_lineApp.red).toEqual({line: 'red'});
    });
    it('has a createMBTA_line property that is a namespaced factory',function(){
      expect(MBTA_lineApp.createMBTA_line).toEqual(jasmine.any(Function));
    });
    it('returns a new object literal from the createMBTA_line factory',function(){
      expect(MBTA_lineApp.createMBTA_line('red')).toEqual({line: 'red'})
    });
    it('has a constructor function called MBTA_line',function(){
      expect(MBTA_lineApp.MBTA_line).toEqual(jasmine.any(Function));
    });
    it('returns the newly constructed objects',function(){
      expect(green).toEqual(jasmine.any(MBTA_lineApp.MBTA_line));
      expect(red).toEqual(jasmine.any(MBTA_lineApp.MBTA_line));
      expect(orange.line).toEqual('orange');
        expect(green.line).toEqual('green');
    });
  });
});

describe('Two Ways to create a new Object',function(){
  it('Using an Object constructor',function(){
    expect(newObjectFromContructor).toEqual({});
    expect(newObjectFromContructor).toBeDefined();
  });

  it('Using an Object literal (Preferred)',function(){
    expect(newObjectFromLiteral).toEqual({});
    expect(newObjectFromLiteral).toBeDefined();
  });
});

describe('The Object.create() method', function(){
  var alewife = Object.create(Station);
  var park_street = Object.create(Station, {line: 'orange', 'green', 'red'});

  it('allows inheritance from the Station Object Literal', function(){
    expect(alewife).toBeDefined();
    expect(alewife).toEqual(jasmine.any(Object));
  });
  it('allows inheritance from the Station Object Literal', function(){
    expect(red).toBeDefined();
    expect(red).toEqual(jasmine.any(Object));
  });
  it('can override the type property',function(){
    station.type = "Stations";
    expect(station.type).toMatch(/Stations/);
    expect(station.displayType()).toMatch(/Stations/);
  });
});
