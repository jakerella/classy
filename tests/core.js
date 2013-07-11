
module("Core");

test("Do some stuff", function() {
    ok(true, "True is ok");
    equal(1, 1, "1 is 1");
    equal(1, "1", "1 is \"1\"");
    notEqual(1, 2, "1 is NOT 2");
});
