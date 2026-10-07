export interface FooterProps {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → ahZjV6moi
   *   "Phone" → x0fyaK3vj
   *   "Tablet" → XJf91a7wY
   */
  variant?: 'Desktop' | 'Phone' | 'Tablet' | 'ahZjV6moi' | 'XJf91a7wY' | 'x0fyaK3vj';
  /**
   * Click 2 — pass as `aOTr0q51k` not `click2`.
   */
  aOTr0q51k?: () => void;
  /**
   * Click 3 — pass as `OkVeLCYvg` not `click3`.
   */
  OkVeLCYvg?: () => void;
  /** Additional properties */
  [key: string]: unknown;
}
