import { describe, it, expect, beforeEach } from 'vitest';

interface Media {
  title: string;
  year: number;
  genre: string;
}

import { SeriesCollection, MoviesCollection, DocumentariesCollection } from "../src/ejercicio-1";

describe('BasicStremeableCollection Tests', () => {
  let seriesCollection: SeriesCollection;
  let moviesCollection: MoviesCollection;
  let documentariesCollection: DocumentariesCollection;
  let mediaItems: Media[];

  beforeEach(() => {
    mediaItems = [
      { title: 'Breaking Bad', year: 2008, genre: 'Crime' },
      { title: 'Interstellar', year: 2014, genre: 'Sci-Fi' },
      { title: 'Planet Earth', year: 2006, genre: 'Documentary' }
    ];

    seriesCollection = new SeriesCollection([mediaItems[0]]);
    moviesCollection = new MoviesCollection([mediaItems[1]]);
    documentariesCollection = new DocumentariesCollection([mediaItems[2]]);
  });

  it('should add an item to the collection', () => {
    seriesCollection.addItem({ title: 'Game of Thrones', year: 2011, genre: 'Fantasy' });
    expect(seriesCollection.getAllItems()).toHaveLength(2);
  });

  it('should remove an item from the collection', () => {
    seriesCollection.removeItem(mediaItems[0]);
    expect(seriesCollection.getAllItems()).toHaveLength(0);
  });

  it('should get an item by index', () => {
    expect(seriesCollection.getItem(0)).toEqual(mediaItems[0]);
  });

  it('should search items by name', () => {
    expect(moviesCollection.searchByName('Interstellar')).toEqual([mediaItems[1]]);
  });

  it('should search items by year', () => {
    expect(documentariesCollection.searchByYear(2006)).toEqual([mediaItems[2]]);
  });

  it('should search items by genre', () => {
    expect(seriesCollection.searchByGenre('Crime')).toEqual([mediaItems[0]]);
  });

  it('should return all items', () => {
    expect(moviesCollection.getAllItems()).toEqual([mediaItems[1]]);
  });
});