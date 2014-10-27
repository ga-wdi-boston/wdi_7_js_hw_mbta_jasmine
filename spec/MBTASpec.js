// What does our MBTA class need to do?
// It needs to know:
// - each line's stops (red, orange, green)
// - an origin (starting line and stop)
// - a destination (ending line and stop)
// It also needs to:
// - calculate the distance between two stops on the same line
// - calculate the distance between any stop
//   and its matching park st stop
// - calculate the distance between any two stops


describe("MBTA", function() {

  var MBTA = new MBTA;

  describe("calculates the distance between", function() {

    var origin, destination;

    it("two stops on the same line", function() {
      MBTA.origin = {
        line: 'orange',
        stop: 'north station'
      }

      MBTA.destination = {
        line: 'orange',
        stop: 'chinatown'
      }

      expect(MBTA.calculate_distance()).toEqual(5);

    });

    it("any stop and its matching park st stop", function() {

      MBTA.origin = {
        line: 'red',
        stop: 'south station'
      }

      MBTA.destination = {
        line: 'red',
        stop: 'park st'
      }

      expect(MBTA.calculate_distance()).toEqual(2);

    });

    it("any two stops", function() {

      MBTA.origin = {
        line: 'orange',
        stop: 'north station'
      }

      MBTA.destination = {
        line: 'green',
        stop: 'copley'
      }

      expect(MBTA.calculate_distance()).toEqual(5);

    });

  });

});