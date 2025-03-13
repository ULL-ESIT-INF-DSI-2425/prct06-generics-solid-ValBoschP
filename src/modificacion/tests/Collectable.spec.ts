import { describe, expect, test } from "vitest";
import { Collectable } from "../Collectable";

class TestClass implements Collectable<number> {
  protected items: number[] = [];
  addItem(item: number): void {
    this.items.push(item);
  }
  getItem(index: number): number {
    return this.items[index];
  }
 
  removeItem(item: number): void {
    this.items = this.items.filter((i) => i !== item);
  }
 
  getNumberOfItems(): number {
    return this.items.length;
  }
}

describe("Collectable Interface Implementation", () => {
  test("should add an item", () => {
      const collection = new TestClass();
      const number = 1;
      collection.addItem(number);
      expect(collection.getItem(0) === number);      
  });
  test("should remove an item", () => {
    const collection = new TestClass();
    const number = 1;
    collection.addItem(number);
    collection.removeItem(number);
    expect(collection.getNumberOfItems() === 0);      
  });
  test("should get an item", () => {
    const collection = new TestClass();
    const number = 1;
    collection.addItem(number);
    expect(collection.getItem(0) === 1);
  });
  test("should returns the numbers of items", () => {
    const collection = new TestClass();
    const number = 1;
    collection.addItem(number);
    collection.removeItem(number);
    expect(collection.getNumberOfItems() === 1);      
  });
});
