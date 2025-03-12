import { describe, it, expect, beforeEach } from 'vitest';
import { Single } from '../Single';
import { Song } from '../Song';

describe('Single', () => {
  let single: Single;
  let song: Song;

  beforeEach(() => {
    song = { name: 'Solo Hit', duration: 150, genres: ['Hip-Hop'], playCount: 200 };
    single = new Single('Solo Hit', 'Solo Artist', 2023, song);
  });

  it('should return the duration of the single', () => {
    expect(single.getTotalDuration()).toBe(150);
  });

  it('should return the total play count', () => {
    expect(single.getTotalPlayCount()).toBe(200);
  });
});
