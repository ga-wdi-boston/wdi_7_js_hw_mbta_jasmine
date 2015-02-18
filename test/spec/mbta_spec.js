'use strict';
describe('MBTA stuff',function(){

  describe('lines Objects',function(){
    it('have properties and values',function(){
      expect(lines).toEqual(jasmine.any(Object));
      expect(lines.Red[0]).toEqual('Alewife');
    });
  });

  it('Stops is an object',function(){
    expect(Stops).toEqual(jasmine.any(Function));
    expect(Stops).toBeDefined();
  });

  it('creates a new object with different starting line and ending line',function(){
      var myStop = new Stops('Red', 'Alewife', 'Orange', 'Chinatown');
      expect(myStop).toBeDefined();
      expect(myStop.startingLine).toEqual('Red');
      expect(myStop.endingLine).toEqual('Orange');
      expect(myStop.numberOfStops()).toEqual(9);
  });

  it('creates a new object with same starting line and ending line',function(){
      var myStop = new Stops('Red', 'Alewife', 'Red', 'Kendall');
      expect(myStop).toBeDefined();
      expect(myStop.startingLine).toEqual('Red');
      expect(myStop.numberOfStops()).toEqual(5);
  });
});
