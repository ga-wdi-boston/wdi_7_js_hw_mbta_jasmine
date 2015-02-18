'use strict';

describe( 'MBTA app', function(){
  it('should have lines and stops', function(){
    expect(lines).toBeDefined();
  });

  it('should calculate the distance between two stops', function(){
    expect(numberOfStops('red', 'alewife', 'green', 'copley')).toEqual(9);
    expect(numberOfStops('red', 'alewife', 'red', 'south station')).toEqual(7);
  });
});
