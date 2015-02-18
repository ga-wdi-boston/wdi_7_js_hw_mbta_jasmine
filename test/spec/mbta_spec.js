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
        it("has a 'startStation' property with a string value", function() {
            expect(trip1.startStation).toEqual(jasmine.any(String));
            expect(trip1.startStation).toEqual('South Station');
        });
        it("has an 'endLine' property with a string value", function() {
            expect(trip1.endLine).toEqual(jasmine.any(String));
            expect(trip1.endLine).toEqual('green');
        });
        it("has an 'endStation' property with a string value", function() {
            expect(trip1.endStation).toEqual(jasmine.any(String));
            expect(trip1.endStation).toEqual('Copley');
        });
        it("has a 'calcStops' method", function() {
            expect(trip1.calcStops).toEqual(jasmine.any(Function));
        });
        it("returns the number of stops between 'startStation' and 'endStation' when the 'calcStops' method is invoked", function() {
            spyOn(trip1, 'calcStops').and.callThrough();
            trip1.calcStops();
            expect(trip1.calcStops).toHaveBeenCalled();
            expect(trip1.calcStops()).toEqual(4);
            expect(trip2.calcStops()).toEqual(6);
            expect(trip3.calcStops()).toEqual(4);
            expect(trip4.calcStops()).toEqual(5);
            expect(trip5.calcStops()).toEqual(7);
            expect(trip6.calcStops()).toEqual(3);
            expect(trip7.calcStops()).toEqual(3);
        });
        it("has a 'describe' method", function() {
            expect(trip1.describe).toEqual(jasmine.any(Function));
        });
        it("returns a description when the 'describe' property is invoked", function() {
            spyOn(trip1, 'describe').and.callThrough();
            trip1.describe();
            expect(trip1.describe).toHaveBeenCalled();
            expect(trip1.describe()).toEqual('South Station to Copley is 4 stops.')
            expect(trip2.describe()).toEqual('Haymarket to Tufts is 6 stops.')
            expect(trip3.describe()).toEqual('Haymarket to North Station is 4 stops.')
            expect(trip4.describe()).toEqual('Copley to North Station is 5 stops.')
            expect(trip5.describe()).toEqual('Copley to Tufts is 7 stops.')
            expect(trip6.describe()).toEqual('Haymarket to Boylston is 3 stops.')
            expect(trip7.describe()).toEqual('Boylston to Haymarket is 3 stops.')
        });
        it('inherits from the Trip.prototype', function() {
            expect(trip1.__proto__).toBeDefined();
            expect(trip1.__proto__).toEqual(jasmine.any(Object));
            expect(trip1.__proto__).toEqual(Trip.prototype);
        });
    });
});
