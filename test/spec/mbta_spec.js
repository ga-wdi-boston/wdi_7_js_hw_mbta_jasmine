describe("Mbta.js ", function() {
  var trip1, trip2, trip3, trip4, trip5,trip6,trip7,trip8,trip9,trip10;
  beforeAll(function() {
    trip1 = new Mbta( "Red",  "Alewife",  "Red",  "South Station");
    trip2 = new Mbta("Green", "Boylston", "Green", "Haymarket");
    trip3 = new Mbta("Orange", "Haymarket", "Orange", "Downtown Crossing");
    trip4 = new Mbta("Red", "Kendall/MIT", "Orange", "State Street");
    trip5 = new Mbta("Red", "Porter", "Green", "Copley");
    trip6 = new Mbta("Orange", "Park Street", "Green", "Park Street");
    trip7 = new Mbta("Red", "South Station", "Orange", "North Station");
    trip8 = new Mbta("Orange", "Haymarket", "Green", "Haymarket");
    trip9 = new Mbta("Red", "Central", "Green", "Arlington");
    trip10 = new Mbta("Red", "Alewife", "Orange", "Tufts Medical Center");
  });

  it('Mbta is a function',function(){
    expect(Mbta).toEqual(jasmine.any(Function));
    expect(Mbta).toBeDefined();
  });
  it('Mbta creates a new object with the parameters passed above',function(){
    expect(trip1).toBeDefined();
    expect(trip1.orig_line).toEqual('Red');
    expect(trip1.orig_stop).toEqual("Alewife");
    expect(trip1.dest_line).toEqual("Red");
    expect(trip1.dest_stop).toEqual("South Station");
  });

  it("counts stops between stations", function() {
    expect(trip1.countStops()).toBe(7);
    expect(trip2.countStops()).toBe(3);
    expect(trip3.countStops()).toBe(3);
    expect(trip4.countStops()).toBe(2);
    expect(trip5.countStops()).toBe(7);
    expect(trip6.countStops()).toBe(0);
    expect(trip7.countStops()).toBe(3);
    expect(trip8.countStops()).toBe(0);
    expect(trip9.countStops()).toBe(4);
    expect(trip10.countStops()).toBe(10);
  });
});
