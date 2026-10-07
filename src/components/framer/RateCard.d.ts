export interface RatecardProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → k33iiHDTp
   *   "Phone" → iT2Ii_yyL
   *   "Tablet" → QD6MEXaXv
   */
  variant?: 'Desktop' | 'Phone' | 'Tablet' | 'k33iiHDTp' | 'QD6MEXaXv' | 'iT2Ii_yyL';
  /** Additional properties */
  [key: string]: unknown;
}
