import indicateHealth from "../health.js";

test.each([
  ["Маг", 70, "healthy"],
  ["Воин", 40, "wounded"],
  ["Лучник", 10, "critical"],
])("testing health function", (person, health, expected) => {
  const result = indicateHealth({ name: person, health: health });
  expect(result).toBe(expected);
});
