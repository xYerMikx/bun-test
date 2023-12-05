//@ts-ignore
import { test, expect, describe } from "bun:test";
import { formateBirthday } from "./someUtil";
describe("math", () => {
  test("add", () => {
    expect(2 + 2).toEqual(4);
  });

  test("multiply", () => {
    expect(2 * 3).not.toEqual(4);
  });
});
describe("birthday", () => {
  test("should return bday", () => {
    const bday: [number, string, number] = [2003, "January", 9];
    const bdayFormated = formateBirthday(bday[0], bday[1], bday[2]);
    expect(bdayFormated).toBe("09.01.2003");
  });
});
