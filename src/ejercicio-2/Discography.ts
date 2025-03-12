import { MusicRelease } from './MusicRelease';

/**
 * Represents a generic discography that can hold albums, singles, or both.
 */
export class Discography<T extends MusicRelease> {
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

