export interface Contact2Props {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → cKO01587H
   *   "Phone" → y76MU6HCL
   *   "Tablet" → LweDrFAaL
   */
  variant?: 'Desktop' | 'Phone' | 'Tablet' | 'cKO01587H' | 'LweDrFAaL' | 'y76MU6HCL';
  /** Additional properties */
  [key: string]: unknown;
}
