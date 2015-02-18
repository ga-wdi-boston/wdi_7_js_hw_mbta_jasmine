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
});
