import { MusicRelease } from './MusicRelease';
import { Song } from './Song';

/**
 * Represents a music album containing multiple songs.
 */
export class Album implements MusicRelease {
  constructor(
    public name: string,
    public artist: string,
    public releaseYear: number,
    public songs: Song[]
  ) {}

  getTotalDuration(): number {
    return this.songs.reduce((total, song) => total + song.duration, 0);
  }

  getTotalPlayCount(): number {
    return this.songs.reduce((total, song) => total + song.playCount, 0);
  }

  displayInfo(): void {
    console.log(`Álbum: ${this.name} - ${this.artist} (${this.releaseYear})`);
    console.table(this.songs.map(song => ({
      Nombre: song.name,
      Duración: `${song.duration} segundos`,
      Géneros: song.genres.join(', '),
      Reproducciones: song.playCount
    })));
  }
}
