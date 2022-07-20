let { returnTwo, greeting, add } = require("./function");
test("This is to test for returnTwo.", () => {
  expect(returnTwo()).toBe(2);
});
test("This is to test for greeting.", () => {
  expect(greeting("Alice")).toBe("Hello Alice.");
});
test("This is to test for add.", () => {
  expect(add(2, 3)).toBe(5);
});
