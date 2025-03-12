import { Media } from "./Media";
import { Stremeable } from "./Streamable";

/**
 * Abstract class that manage streaming collection media and implements the Stremeable interface.
 * @template T Type of the elements in the collection.
 */
export abstract class BasicStremeableCollection<T extends Media> implements Stremeable<T> {
  protected items: T[] = [];

  /**
   * Constructor of the collection.
   * @param items 
   */
  constructor (items: T[]) {
    this.items = items;
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T): void {
    this.items = this.items.filter((i) => i !== item);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getAllItems(): T[] {
    return this.items;
  }

  abstract searchByName(name: string): T[];
  abstract searchByYear(year: number): T[];
  abstract searchByGenre(genre: string): T[];
}