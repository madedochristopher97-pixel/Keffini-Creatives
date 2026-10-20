export interface NumbersProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → ff6Ttcb7W
   *   "Phone" → civsaRtdo
   *   "Tablet" → TW9fVgDTv
   */
  variant?: 'Desktop' | 'Phone' | 'Tablet' | 'ff6Ttcb7W' | 'TW9fVgDTv' | 'civsaRtdo';
  /** Additional properties */
  [key: string]: unknown;
}
