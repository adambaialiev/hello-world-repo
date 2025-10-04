const hello = require("../hello");

describe("hello function", () => {
  test("should return a string", () => {
    const result = hello.hello();
    expect(typeof result).toBe("string");
  });

  test("should contain the word Hello", () => {
    const result = hello.hello();
    expect(result).toContain("Hello");
  });

  test("should not be empty", () => {
    const result = hello.hello();
    expect(result.length).toBeGreaterThan(0);
  });

  test("should return exact expected message", () => {
    const result = hello.hello();
    expect(result).toBe("Hello World from JavaScript!");
  });
});
