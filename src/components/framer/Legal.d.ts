export interface LegalProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → jyF9b06lo
   *   "Phone" → fVRS4TXzT
   *   "Tablet" → Hs8dY963u
   */
  variant?: 'Desktop' | 'Phone' | 'Tablet' | 'jyF9b06lo' | 'Hs8dY963u' | 'fVRS4TXzT';
  /**
   * Effective date — pass as `J2m4hLUS7` not `effectiveDate`.
   * @default ""
   */
  J2m4hLUS7?: string;
  onJ2m4hLUS7Change?: string;
  /**
   * Title — pass as `lkVIlJHj3` not `title`.
   * @default ""
   */
  lkVIlJHj3?: string;
  onlkVIlJHj3Change?: string;
  /**
   * Content — pass as `eCbqlIgR1` not `content`.
   * @default ""
   */
  eCbqlIgR1?: string;
  /** Additional properties */
  [key: string]: unknown;
}
