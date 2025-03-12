import { Artist } from './Artist';
import { MusicRelease } from './MusicRelease';

/**
 * Represents a music library containing multiple artists.
 */
export class MusicLibrary {
  private artists: Set<Artist<MusicRelease>> = new Set();

  addArtist(artist: Artist<MusicRelease>): void {
    this.artists.add(artist);
  }

  searchArtistByName(name: string): Artist<MusicRelease> | undefined {
    return Array.from(this.artists).find(artist => artist.name.toLowerCase() === name.toLowerCase());
  }

  displayLibrary(): void {
    console.log('Biblioteca de música:');
    this.artists.forEach(artist => artist.displayInfo());
  }
}
