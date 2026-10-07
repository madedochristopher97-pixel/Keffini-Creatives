export interface HeroProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop/End" → CSx8g5dGD
   *   "Desktop/Start" → FNNhMD9_a
   *   "Mobile/End" → CBqs25r34
   *   "Mobile/Start" → AoRFLNbhz
   */
  variant?: 'Desktop/End' | 'Desktop/Start' | 'Mobile/End' | 'Mobile/Start' | 'FNNhMD9_a' | 'CSx8g5dGD' | 'AoRFLNbhz' | 'CBqs25r34';
  /**
   * First Image — pass as `bzGCxZlef` not `firstImage`.
   */
  bzGCxZlef?: string;
  /**
   * Secondary Image — pass as `LFd6Pb2Zf` not `secondaryImage`.
   */
  LFd6Pb2Zf?: string;
  /**
   * Main Image — pass as `uD5pBfuSj` not `mainImage`.
   */
  uD5pBfuSj?: string;
  /** Additional properties */
  [key: string]: unknown;
}
