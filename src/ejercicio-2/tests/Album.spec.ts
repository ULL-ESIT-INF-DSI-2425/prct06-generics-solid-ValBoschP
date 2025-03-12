import { describe, it, expect, beforeEach } from 'vitest';
import { Album } from '../Album';
import { Song } from '../Song';

describe('Album', () => {
  let album: Album;
  let song1: Song;
  let song2: Song;

  beforeEach(() => {
    song1 = { name: 'Song A', duration: 200, genres: ['Rock'], playCount: 10 };
    song2 = { name: 'Song B', duration: 180, genres: ['Pop'], playCount: 5 };

    album = new Album('Greatest Hits', 'Artist X', 2024, [song1, song2]);
  });

  it('should calculate total duration', () => {
    expect(album.getTotalDuration()).toBe(380);
  });

  it('should calculate total play count', () => {
    expect(album.getTotalPlayCount()).toBe(15);
  });
});
