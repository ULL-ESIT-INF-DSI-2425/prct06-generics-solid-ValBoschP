import { describe, it, expect, beforeEach } from 'vitest';
import { MusicLibrary } from '../MusicLibrary';
import { Artist } from '../Artist';
import { Discography } from '../Discography';
import { Album } from '../Album';

describe('MusicLibrary', () => {
  let library: MusicLibrary;
  let artist: Artist<Album>;
  let album: Album;

  beforeEach(() => {
    album = new Album('Top Album', 'Top Artist', 2022, [
      { name: 'Hit Single', duration: 240, genres: ['Pop'], playCount: 100 }
    ]);
    const discography = new Discography<Album>([album]);
    artist = new Artist('Top Artist', 10000000, discography);

    library = new MusicLibrary();
  });

  it('should add an artist', () => {
    library.addArtist(artist);
    expect(library.searchArtistByName('Top Artist')).toBe(artist);
  });

  it('should return undefined if artist is not found', () => {
    expect(library.searchArtistByName('Unknown Artist')).toBeUndefined();
  });
});
