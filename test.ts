const quickSort = require("./quicksort");
const fibonacci = require("./fibonacci");
const factorial = require("./factorial");

test("1 + 1 is 2, even in TypeScript", () => {
  expect(1 + 1).toBe(2);
});
test("regex test", () => {
  expect("Silly names are funny.").toMatch(/name/);
});
test("quick sorting 1", () => {
  const subject = [1, 9, 2, 8, 3, 7, 4, 6, 5];
  expect(quickSort(subject)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
test("quick sorting 2", () => {
  const subject = [1, 9, 2, 8, 3, 7, 4, 6, 5];
  expect(quickSort(subject, 2, 6)).toStrictEqual([1, 9, 2, 3, 4, 7, 8, 6, 5]);
});
test("10th fibonacci is 55", () => {
  expect(fibonacci(10)).toBe(55);
});
test("Wrong fibonacci input", () => {
  expect(() => fibonacci(0.1)).toThrow();
});
test("10! (factorial) is...", () => {
  expect(factorial(10)).toBe(3628800);
});

/**
 * 1. Basic Matchers
 *   1) toBe(primitive)       || not.toBe(primitive)
 *   2) toEqual(object)       || not.toBe(object)
 *   3) toStrictEqual(object) || not.toStrictEqual(object)
 * 2. Array
 *   1) toHaveLength(length)
 *   2) toContain(element)     || not.toContain(element)
 *   3) toContainEqual(object) || not.toContainEqual(object)
 * 3. Determine Truthiness
 *   1) toBeNull()
 *   2) toBeUndefined()
 *   3) toBeDefined()
 *   4) toBeTruthy()
 *   5) toBeFalsy()
 * 4. CalculatingNumbers
 *   1) toBeGreaterThan(n)
 *   2) toBeGreaterThanOrEqual(n)
 *   3) toBeLessThan(n)
 *   4) toBeLessThanOrEqual(n)
 *   5) toBeCloseTo(approximateValue)
 * 5. String Regex Matches
 *   1) toMatch(regex) || not.toMatch(regex)
 * 6. Exceptions
 *   1) toThrow([specific error])
 */
