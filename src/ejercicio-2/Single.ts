import { MusicRelease } from './MusicRelease';
import { Song } from './Song';

/**
 * Represents a single release with one song or multiple versions of the same song.
 */
export class Single implements MusicRelease {
  constructor(
    public name: string,
    public artist: string,
    public releaseYear: number,
    public song: Song
  ) {}

  getTotalDuration(): number {
    return this.song.duration;
  }

  getTotalPlayCount(): number {
    return this.song.playCount;
  }

  displayInfo(): void {
    console.log(`Single: ${this.name} - ${this.artist} (${this.releaseYear})`);
    console.table({
      Nombre: this.song.name,
      Duración: `${this.song.duration} segundos`,
      Géneros: this.song.genres.join(', '),
      Reproducciones: this.song.playCount
    });
  }
}
