import { describe, expect, test } from "vitest";
import { NumericPrintableCollection } from "../NumericPrintableCollection";

describe("NumeriPrintableClass Implementation", () => {
  test("should add an item", () => {
      const collection = new NumericPrintableCollection([1]);
      const number = 1;
      collection.addItem(number);
      expect(collection.getItem(0) === number);          
  });
  test("should remove an item", () => {
    const collection = new NumericPrintableCollection([1]);
    const number = 1;
    collection.addItem(number);
    collection.removeItem(number);
    expect(collection.getNumberOfItems() === 0);     
  });
  test("should get an item", () => {
    const collection = new NumericPrintableCollection([1]);
    const number = 1;
    collection.addItem(number);
    expect(collection.getItem(0) === 1);
  });
  test("should returns the numbers of items", () => {
    const collection = new NumericPrintableCollection([1]);
    const number = 1;
    collection.addItem(number);
    collection.removeItem(number);
    expect(collection.getNumberOfItems() === 1);    
  });
});
