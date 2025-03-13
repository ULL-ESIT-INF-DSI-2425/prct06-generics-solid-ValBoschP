import { describe, expect, test } from "vitest";
import { Printable } from "../Printable";
import { stringify } from "querystring";

class TestClassString implements Printable {
  protected item: string;
  constructor(str: string) {
    this.item = str
  }
  print(): string {
    return this.item;
  }
}
class TestClassNumber implements Printable {
  protected item: number;
  constructor(num: number) {
    this.item = num;
  }
  print(): string {
    return this.item.toString();
  }
}

describe("Printable Interface Implementation", () => {
  test("should print the string", () => {
      const printest = new TestClassString("guacamole");
      expect(printest.print() === "guacamole");      
  });
  test("should print the number", () => {
    const printest = new TestClassNumber(666);
    expect(printest.print() === "666");      
  });
});
