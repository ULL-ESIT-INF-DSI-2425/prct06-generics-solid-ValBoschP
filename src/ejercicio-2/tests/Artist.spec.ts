import { describe, it, expect, beforeEach } from 'vitest';
import { Artist } from '../Artist';
import { Discography } from '../Discography';
import { Album } from '../Album';
import { Song } from '../Song';

describe('Artist', () => {
  let artist: Artist<Album>;
  let discography: Discography<Album>;
  let album: Album;

  beforeEach(() => {
    const song: Song = { name: 'Hit Song', duration: 180, genres: ['Pop'], playCount: 100 };
    album = new Album('Best Album', 'Famous Artist', 2020, [song]);
    discography = new Discography<Album>([album]);

    artist = new Artist('Famous Artist', 5000000, discography);
  });

  it('should store artist name and listeners', () => {
    expect(artist.name).toBe('Famous Artist');
    expect(artist.monthlyListeners).toBe(5000000);
  });

  it('should contain a discography', () => {
    expect(artist.discography.releases).toContain(album);
  });
});
