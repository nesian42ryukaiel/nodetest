test("1 + 1 is 2, even in TypeScript", () => {
  expect(1 + 1).toBe(2);
});
test("regex test", () => {
  expect("Silly names are funny.").toMatch(/name/);
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
