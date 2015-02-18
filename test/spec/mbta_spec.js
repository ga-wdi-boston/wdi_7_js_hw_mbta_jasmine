describe('mbta',function(){
  it('gets the starting stop and line from the user in addition to the ending line and stop',function(){
    expect(startingLine).toBeDefined();
    expect(startingStation).toBeDefined();
    expect(endingLine).toBeDefined();
    expect(endingStation).toBeDefined();
  });
  describe('numberOfStops',function(){
    it('returns the number of stops',function(){
      expect(numberOfStops('green','haymarket','green','coply')).toBe(5);
      expect(numberOfStops('red','south station','green','coply')).toBe(4);
      expect(numberOfStops('orange','haymarket','red','kendall')).toBe(2);
    });
  });
});
