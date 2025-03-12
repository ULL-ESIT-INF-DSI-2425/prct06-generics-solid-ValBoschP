import { MusicRelease } from './MusicRelease';
import { Discography } from './Discography';

/**
 * Represents a musical artist with a generic discography.
 */
export class Artist<T extends MusicRelease> {
  constructor(
    public name: string,
    public monthlyListeners: number,
    public discography: Discography<T>
  ) {}

  displayInfo(): void {
    console.log(`Artista: ${this.name} - Oyentes mensuales: ${this.monthlyListeners}`);
    this.discography.displayInfo();
  }
}
