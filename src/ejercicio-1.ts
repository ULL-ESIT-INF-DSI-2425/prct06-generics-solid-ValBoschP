/**
 * Generic interface that defines the methods that a collection of elements must implement.
 * @template T Type of the elements in the collection.
 */
interface Stremeable<T> {
  /**
   * Adds an item to the collection.
   * @param item Element to add.
   * @returns The added item.
   */
  addItem(items: T): void;

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

/**
 * Abstract class that manage streaming collection media and implements the Stremeable interface.
 * @template T Type of the elements in the collection.
 */
abstract class BasicStremeableCollection<T> implements Stremeable<T> {
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

/**
 * Interface that defines the properties of a media element.
 */
interface Media {
  /** Title of the content. */
  title: string;
  /** Year of the content. */
  year: number;
  /** Genre of the content. */
  genre: string;
}

/**
 * Class that represents a collection of series.
 */
class SeriesCollection extends BasicStremeableCollection<Media> {
  searchByName(name: string): Media[] {
    return this.items.filter((item) => item.title === name);
  }

  searchByYear(year: number): Media[] {
    return this.items.filter((item) => item.year === year);
  }

  searchByGenre(genre: string): Media[] {
    return this.items.filter((item) => item.genre === genre);
  }
}

/**
 * Class that represents a collection of movies.
 */
class MoviesCollection extends BasicStremeableCollection<Media> {
  searchByName(name: string): Media[] {
    return this.items.filter((item) => item.title === name);
  }

  searchByYear(year: number): Media[] {
    return this.items.filter((item) => item.year === year);
  }

  searchByGenre(genre: string): Media[] {
    return this.items.filter((item) => item.genre === genre);
  }
}

/**
 * Class that represents a collection of documentaries.
 */
class DocumentariesCollection extends BasicStremeableCollection<Media> {
  searchByName(name: string): Media[] {
    return this.items.filter((item) => item.title === name);
  }

  searchByYear(year: number): Media[] {
    return this.items.filter((item) => item.year === year);
  }

  searchByGenre(genre: string): Media[] {
    return this.items.filter((item) => item.genre === genre);
  }
}

export { SeriesCollection, MoviesCollection, DocumentariesCollection, Media };