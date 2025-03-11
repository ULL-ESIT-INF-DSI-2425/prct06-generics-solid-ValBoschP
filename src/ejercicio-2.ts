/**
 * Represents a music genre.
 */
type MusicGenre = 'Pop' | 'Rock' | 'Jazz' | 'Hip-Hop' | 'Electrónica' | 'Clásica' | 'Reggaetón' | 'Otro';

/**
 * Represents a song.
 */
interface Song {
  /** The name of the song */
  name: string;
  /** The duration of the song in seconds. */
  duration: number;
  /** The genres associated with the song. */
  genres: MusicGenre[];
  /** The number of times the song has been played. */
  playCount: number;
}

/**
 * Represents a music release (Album or Single).
 */
interface MusicRelease {
  /** The name of the release. */
  name: string;
  /** The artist of the release. */
  artist: string;
  /** The release year. */
  releaseYear: number;
  /** Gets the total duration of the release. */
  getTotalDuration(): number;
  /** Gets the total play count. */
  getTotalPlayCount(): number;
  /** Displays release information. */
  displayInfo(): void;
}

/**
 * Represents a music album containing multiple songs.
 */
class Album implements MusicRelease {
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

/**
 * Represents a single release with one song or multiple versions of the same song.
 */
class Single implements MusicRelease {
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

/**
 * Represents a generic discography that can hold albums, singles, or both.
 */
class Discography<T extends MusicRelease> {
  constructor(public releases: T[] = []) {}

  addRelease(release: T): void {
    this.releases.push(release);
  }

  searchByName(name: string): T[] {
    return this.releases.filter(release => release.name.toLowerCase().includes(name.toLowerCase()));
  }

  getTotalDuration(): number {
    return this.releases.reduce((total, release) => total + release.getTotalDuration(), 0);
  }

  getTotalPlayCount(): number {
    return this.releases.reduce((total, release) => total + release.getTotalPlayCount(), 0);
  }

  displayInfo(): void {
    this.releases.forEach(release => release.displayInfo());
  }
}

/**
 * Represents a musical artist with a generic discography.
 */
class Artist<T extends MusicRelease> {
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

/**
 * Represents a music library containing multiple artists.
 */
class MusicLibrary {
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

export { MusicGenre, Song, MusicRelease, Album, Single, Discography, Artist, MusicLibrary };
