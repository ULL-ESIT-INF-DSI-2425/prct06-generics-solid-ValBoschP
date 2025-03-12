import { describe, it, expect, beforeEach } from 'vitest';
import { SeriesCollection } from '../SeriesCollection';
import { Media } from '../Media';

describe('SeriesCollection', () => {
  let collection: SeriesCollection;
  let series1: Media;
  let series2: Media;
  let series3: Media;

  beforeEach(() => {
    series1 = { title: 'Breaking Bad', year: 2008, genre: 'Drama' };
    series2 = { title: 'Stranger Things', year: 2016, genre: 'Sci-Fi' };
    series3 = { title: 'Game of Thrones', year: 2011, genre: 'Fantasy' };

    collection = new SeriesCollection([series1, series2, series3]);
  });

  it('should find a series by name', () => {
    expect(collection.searchByName('Breaking Bad')).toEqual([series1]);
    expect(collection.searchByName('Unknown')).toEqual([]);
  });

  it('should find series by year', () => {
    expect(collection.searchByYear(2008)).toEqual([series1]);
    expect(collection.searchByYear(2016)).toEqual([series2]);
    expect(collection.searchByYear(1999)).toEqual([]);
  });

  it('should find series by genre', () => {
    expect(collection.searchByGenre('Sci-Fi')).toEqual([series2]);
    expect(collection.searchByGenre('Fantasy')).toEqual([series3]);
    expect(collection.searchByGenre('Comedy')).toEqual([]);
  });

  it('should add a new series and search for it', () => {
    const newSeries: Media = { title: 'The Mandalorian', year: 2019, genre: 'Sci-Fi' };
    collection.addItem(newSeries);

    expect(collection.searchByName('The Mandalorian')).toEqual([newSeries]);
    expect(collection.searchByYear(2019)).toEqual([newSeries]);
    expect(collection.searchByGenre('Sci-Fi')).toContain(newSeries);
  });
});
