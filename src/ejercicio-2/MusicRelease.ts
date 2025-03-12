/**
 * Represents a music release (Album or Single).
 */
export interface MusicRelease {
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

