import { describe, it, expect, beforeEach } from 'vitest';
import { MoviesCollection } from '../MoviesCollection';
import { Media } from '../Media';

describe('MoviesCollection', () => {
  let collection: MoviesCollection;
  let movie1: Media;
  let movie2: Media;
  let movie3: Media;

  beforeEach(() => {
    movie1 = { title: 'Inception', year: 2010, genre: 'Sci-Fi' };
    movie2 = { title: 'The Dark Knight', year: 2008, genre: 'Action' };
    movie3 = { title: 'Interstellar', year: 2014, genre: 'Sci-Fi' };

    collection = new MoviesCollection([movie1, movie2, movie3]);
  });

  it('should find a movie by name', () => {
    expect(collection.searchByName('Inception')).toEqual([movie1]);
    expect(collection.searchByName('Unknown')).toEqual([]);
  });

  it('should find movies by year', () => {
    expect(collection.searchByYear(2010)).toEqual([movie1]);
    expect(collection.searchByYear(2014)).toEqual([movie3]);
    expect(collection.searchByYear(1999)).toEqual([]);
  });

  it('should find movies by genre', () => {
    expect(collection.searchByGenre('Sci-Fi')).toEqual([movie1, movie3]);
    expect(collection.searchByGenre('Action')).toEqual([movie2]);
    expect(collection.searchByGenre('Comedy')).toEqual([]);
  });

  it('should add a new movie and search for it', () => {
    const newMovie: Media = { title: 'Dune', year: 2021, genre: 'Sci-Fi' };
    collection.addItem(newMovie);

    expect(collection.searchByName('Dune')).toEqual([newMovie]);
    expect(collection.searchByYear(2021)).toEqual([newMovie]);
    expect(collection.searchByGenre('Sci-Fi')).toContain(newMovie);
  });
});
