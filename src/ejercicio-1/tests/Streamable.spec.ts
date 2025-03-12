import { describe, expect, test } from "vitest";
import { Stremeable } from "../Streamable";
import { Media } from "../Media";

/**
 * Mock class that implements the Stremeable interface.
 */
class MockStreamable implements Stremeable<Media> {
  private items: Media[] = [];

  addItem(item: Media): void {
    this.items.push(item);
  }

  removeItem(item: Media): void {
    this.items = this.items.filter(i => i !== item);
  }

  getItem(index: number): Media {
    return this.items[index];
  }

  getAllItems(): Media[] {
    return this.items;
  }

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

describe("Stremeable Interface Implementation", () => {
  test("should add and retrieve items", () => {
    const collection = new MockStreamable();
    const mediaItem: Media = { title: "Inception", year: 2010, genre: "Sci-Fi" };

    collection.addItem(mediaItem);
    expect(collection.getItem(0)).toEqual(mediaItem);
  });

  test("should remove items", () => {
    const collection = new MockStreamable();
    const mediaItem: Media = { title: "Inception", year: 2010, genre: "Sci-Fi" };

    collection.addItem(mediaItem);
    collection.removeItem(mediaItem);
    expect(collection.getAllItems()).toEqual([]);
  });

  test("should search by name", () => {
    const collection = new MockStreamable();
    const mediaItem1: Media = { title: "Inception", year: 2010, genre: "Sci-Fi" };
    const mediaItem2: Media = { title: "Interstellar", year: 2014, genre: "Sci-Fi" };

    collection.addItem(mediaItem1);
    collection.addItem(mediaItem2);

    expect(collection.searchByName("Inception")).toEqual([mediaItem1]);
  });

  test("should search by year", () => {
    const collection = new MockStreamable();
    const mediaItem1: Media = { title: "Inception", year: 2010, genre: "Sci-Fi" };
    const mediaItem2: Media = { title: "Interstellar", year: 2014, genre: "Sci-Fi" };

    collection.addItem(mediaItem1);
    collection.addItem(mediaItem2);

    expect(collection.searchByYear(2014)).toEqual([mediaItem2]);
  });

  test("should search by genre", () => {
    const collection = new MockStreamable();
    const mediaItem1: Media = { title: "Inception", year: 2010, genre: "Sci-Fi" };
    const mediaItem2: Media = { title: "Titanic", year: 1997, genre: "Romance" };

    collection.addItem(mediaItem1);
    collection.addItem(mediaItem2);

    expect(collection.searchByGenre("Sci-Fi")).toEqual([mediaItem1]);
  });
});
