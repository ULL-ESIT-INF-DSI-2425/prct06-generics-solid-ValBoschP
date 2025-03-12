import { describe, expect, test } from "vitest";
import { Media } from "../Media";
import { BasicStremeableCollection } from "../BasicStreamableCollection";

/**
 * Concrete class that extends BasicStremeableCollection for testing purposes.
 */
class TestStreamableCollection extends BasicStremeableCollection<Media> {
  searchByName(name: string): Media[] {
    return this.items.filter(i => i.title === name);
  }

  searchByYear(year: number): Media[] {
    return this.items.filter(i => i.year === year);
  }

  searchByGenre(genre: string): Media[] {
    return this.items.filter(i => i.genre === genre);
  }
}

describe("BasicStreamableCollection", () => {
  const mediaItem1: Media = { title: "Inception", year: 2010, genre: "Sci-Fi" };
  const mediaItem2: Media = { title: "Titanic", year: 1997, genre: "Romance" };

  test("should add and retrieve items", () => {
    const collection = new TestStreamableCollection([mediaItem1]);
    
    collection.addItem(mediaItem2);
    expect(collection.getAllItems()).toEqual([mediaItem1, mediaItem2]);
  });

  test("should remove an item", () => {
    const collection = new TestStreamableCollection([mediaItem1, mediaItem2]);
    
    collection.removeItem(mediaItem1);
    expect(collection.getAllItems()).toEqual([mediaItem2]);
  });

  test("should get item by index", () => {
    const collection = new TestStreamableCollection([mediaItem1, mediaItem2]);

    expect(collection.getItem(0)).toEqual(mediaItem1);
    expect(collection.getItem(1)).toEqual(mediaItem2);
  });

  test("should search items by name", () => {
    const collection = new TestStreamableCollection([mediaItem1, mediaItem2]);

    expect(collection.searchByName("Titanic")).toEqual([mediaItem2]);
  });

  test("should search items by year", () => {
    const collection = new TestStreamableCollection([mediaItem1, mediaItem2]);

    expect(collection.searchByYear(2010)).toEqual([mediaItem1]);
  });

  test("should search items by genre", () => {
    const collection = new TestStreamableCollection([mediaItem1, mediaItem2]);

    expect(collection.searchByGenre("Sci-Fi")).toEqual([mediaItem1]);
  });
});
