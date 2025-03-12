import { describe, it, expect, beforeEach } from 'vitest';
import { DocumentariesCollection } from '../DocumentariesCollection';
import { Media } from '../Media';

describe('DocumentariesCollection', () => {
  let collection: DocumentariesCollection;
  let documentary1: Media;
  let documentary2: Media;
  let documentary3: Media;

  beforeEach(() => {
    documentary1 = { title: 'Planet Earth', year: 2006, genre: 'Nature' };
    documentary2 = { title: 'Cosmos', year: 2014, genre: 'Science' };
    documentary3 = { title: 'Our Planet', year: 2019, genre: 'Nature' };

    collection = new DocumentariesCollection([documentary1, documentary2, documentary3]);
  });

  it('should find a documentary by name', () => {
    expect(collection.searchByName('Cosmos')).toEqual([documentary2]);
    expect(collection.searchByName('Unknown')).toEqual([]);
  });

  it('should find documentaries by year', () => {
    expect(collection.searchByYear(2006)).toEqual([documentary1]);
    expect(collection.searchByYear(2019)).toEqual([documentary3]);
    expect(collection.searchByYear(1999)).toEqual([]);
  });

  it('should find documentaries by genre', () => {
    expect(collection.searchByGenre('Nature')).toEqual([documentary1, documentary3]);
    expect(collection.searchByGenre('Science')).toEqual([documentary2]);
    expect(collection.searchByGenre('History')).toEqual([]);
  });

  it('should add a new documentary and search for it', () => {
    const newDocumentary: Media = { title: 'Inside Job', year: 2010, genre: 'Finance' };
    collection.addItem(newDocumentary);

    expect(collection.searchByName('Inside Job')).toEqual([newDocumentary]);
    expect(collection.searchByYear(2010)).toEqual([newDocumentary]);
    expect(collection.searchByGenre('Finance')).toEqual([newDocumentary]);
  });
});
