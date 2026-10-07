export interface VideocardProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Image " → xVwUJ5o7w
   *   "Video" → vUQAa1jEG
   */
  variant?: 'Image ' | 'Video' | 'xVwUJ5o7w' | 'vUQAa1jEG';
  /**
   * Image — pass as `B1_4iG1nE` not `image`.
   */
  B1_4iG1nE?: string;
  /** Additional properties */
  [key: string]: unknown;
}
