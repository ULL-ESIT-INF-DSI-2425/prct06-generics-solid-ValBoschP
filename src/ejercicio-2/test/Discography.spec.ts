import { describe, it, expect, beforeEach } from 'vitest';
import { Discography } from '../Discography';
import { Album } from '../Album';

describe('Discography', () => {
  let discography: Discography<Album>;
  let album1: Album;
  let album2: Album;

  beforeEach(() => {
    album1 = new Album('Album One', 'Artist X', 2020, [
      { name: 'Track 1', duration: 200, genres: ['Rock'], playCount: 50 }
    ]);
    album2 = new Album('Album Two', 'Artist Y', 2021, [
      { name: 'Track 2', duration: 180, genres: ['Pop'], playCount: 30 }
    ]);

    discography = new Discography<Album>([album1]);
  });

  it('should add new releases', () => {
    discography.addRelease(album2);
    expect(discography.releases).toContain(album2);
  });

  it('should search albums by name', () => {
    expect(discography.searchByName('Album One')).toEqual([album1]);
    expect(discography.searchByName('Unknown')).toEqual([]);
  });

  it('should calculate total duration', () => {
    expect(discography.getTotalDuration()).toBe(200);
  });

  it('should calculate total play count', () => {
    expect(discography.getTotalPlayCount()).toBe(50);
  });
});
