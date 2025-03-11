import { describe, it, expect, beforeEach } from 'vitest';
import { Album, Single, Discography, Artist, MusicLibrary, Song } from '../src/ejercicio-2';

describe('Music Library Tests', () => {
  let album: Album;
  let single: Single;
  let discography: Discography<Album | Single>;
  let artist: Artist<Album | Single>;
  let library: MusicLibrary;
  let song1: Song;
  let song2: Song;
  let song3: Song;

  beforeEach(() => {
    song1 = { name: 'Song A', duration: 180, genres: ['Rock'], playCount: 50 };
    song2 = { name: 'Song B', duration: 200, genres: ['Pop'], playCount: 30 };
    song3 = { name: 'Song C', duration: 220, genres: ['Jazz'], playCount: 20 };

    album = new Album('Best Album', 'Artist X', 2021, [song1, song2]);
    single = new Single('Hit Single', 'Artist X', 2022, song3);
    discography = new Discography([album, single]);
    artist = new Artist('Artist X', 1000000, discography);
    library = new MusicLibrary();
    library.addArtist(artist);
  });

  it('should calculate total duration of an album', () => {
    expect(album.getTotalDuration()).toBe(380);
  });

  it('should calculate total play count of an album', () => {
    expect(album.getTotalPlayCount()).toBe(80);
  });

  it('should calculate total duration of a single', () => {
    expect(single.getTotalDuration()).toBe(220);
  });

  it('should calculate total play count of a single', () => {
    expect(single.getTotalPlayCount()).toBe(20);
  });

  it('should add a release to the discography', () => {
    const newAlbum = new Album('New Album', 'Artist X', 2023, [song1]);
    discography.addRelease(newAlbum);
    expect(discography.releases).toHaveLength(3);
  });

  it('should search for releases by name', () => {
    expect(discography.searchByName('Best Album')).toEqual([album]);
  });

  it('should calculate total duration of a discography', () => {
    expect(discography.getTotalDuration()).toBe(600);
  });

  it('should calculate total play count of a discography', () => {
    expect(discography.getTotalPlayCount()).toBe(100);
  });

  it('should search for an artist by name in the library', () => {
    expect(library.searchArtistByName('Artist X')).toBe(artist);
  });
});
