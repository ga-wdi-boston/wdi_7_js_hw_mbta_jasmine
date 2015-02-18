+describe("MBTA Calculator", function() {
+  it("returns 0 if the stop is the same", function() {
+    expect(numberOfStops('green', 'haymarket', 'green', 'haymarket')).toBe(0);
+  });
+
+  it("calculates the number of stops on the same line", function() {
+    expect(numberOfStops('green', 'haymarket', 'green', 'park st')).toBe(2);
+  });
+
+    it("calculates the number of stops on different lines", function() {
+    expect(numberOfStops('green', 'haymarket', 'red', 'south station')).toBe(3);
+  });
+});
