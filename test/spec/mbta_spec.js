'use strict';

describe('Trip Constructor', function() {

  var trip1 = new Trip('red', 'South Station', 'green', 'Copley'),
  trip2 = new Trip('green', 'Haymarket', 'orange', 'Tufts'),
  trip3 = new Trip('green', 'Haymarket', 'orange', 'North Station'),
  trip4 = new Trip('green', 'Copley', 'orange', 'North Station'),
  trip5 = new Trip('green', 'Copley', 'orange', 'Tufts'),
  trip6 = new Trip('green', 'Haymarket', 'green', 'Boylston'),
  trip7 = new Trip('green', 'Boylston', 'green', 'Haymarket');

  it('is a function', function() {
    expect(Trip).toEqual(jasmine.any(Function));
    expect(Trip).toBeDefined();
  });
  it('creates a new object with the parameters passed', function() {
    expect(trip1).toBeDefined();
    expect(trip1.startLine).toEqual('red');
    expect(trip1.startStation).toEqual('South Station');
    expect(trip1.endLine).toEqual('green');
    expect(trip1.endStation).toEqual('Copley');
  });

  describe('an instance of a trip object', function() {

    it('is an Object', function() {
      expect(trip1).toEqual(jasmine.any(Object));
    });
    it("has a 'startLine' property with a string value", function() {
      expect(trip1.startLine).toEqual(jasmine.any(String));
      expect(trip1.startLine).toEqual('red');
    });
  });
});
