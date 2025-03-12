/**
 * Generic interface that defines the methods that a collection of elements must implement.
 * @template T Type of the elements in the collection.
 */
export interface Stremeable<T> {
  /**
   * Adds an item to the collection.
   * @param item Element to add.
   * @returns The added item.
   */
  addItem(item: T): void;

  /**
   * Removes an item from the collection.
   * @param item Element to remove.
   * @returns The removed item.
   */
  removeItem(item: T): void;

  /**
   * Get item by index
   * @param index Index of the item to get.
   * @returns Item at the specified index.
   */
  getItem(index: number): T;

  /**
   * Search items by name
   * @param name Name of the item to search.
   * @returns Items that match the name.
   */
  searchByName(name: string): T[];

  /**
   * Search items by year
   * @param year Year of the item to search.
   * @returns Items that match the year.
   */
  searchByYear(year: number): T[];

  /**
   * Search items by genre
   * @param genre Genre of the item to search.
   * @returns Items that match the genre.
   */
  searchByGenre(genre: string): T[];

  /**
   * Get all items
   * @returns All items in the collection.
   */
  getAllItems(): T[];
}