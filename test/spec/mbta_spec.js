'use strict';

describe('There shall be variables',function(){
  var startingLine = 'red';
  var startingStation = 'central';
  var endingLine = 'green';
  var endingStation = 'copley';

  it('Variables should be defined',function(){
    expect(startingLine).toBeDefined();
    expect(startingStation).toBeDefined();
    expect(endingLine).toBeDefined();
    expect(endingStation).toBeDefined();
  });

  it("Variables shalt not be null", function(){
    expect(startingLine).not.toBeNull();
    expect(startingStation).not.toBeNull();
    expect(endingLine).not.toBeNull();
    expect(endingStation).not.toBeNull();
  });

  it("getStops function shall yield 5", function(){
    expect(getStops(startingLine, startingStation, endingLine, endingStation)).toEqual(5);
  });

}); //end describe

