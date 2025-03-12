import { BasicStremeableCollection } from './BasicStreamableCollection';
import { Media } from './Media';

/**
 * Class that represents a collection of series.
 */
export class SeriesCollection extends BasicStremeableCollection<Media> {
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