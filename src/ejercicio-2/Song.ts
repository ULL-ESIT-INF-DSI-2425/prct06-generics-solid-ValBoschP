import { MusicGenre } from './MusicGenre';

/**
 * Represents a song.
 */
export interface Song {
  /** The name of the song */
  name: string;
  /** The duration of the song in seconds. */
  duration: number;
  /** The genres associated with the song. */
  genres: MusicGenre[];
  /** The number of times the song has been played. */
  playCount: number;
}

