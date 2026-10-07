export interface Cardworks3Props {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop" → Sk8cynhXK
   *   "Mobile" → BnPefoJqP
   */
  variant?: 'Desktop' | 'Mobile' | 'Sk8cynhXK' | 'BnPefoJqP';
  /**
   * Link — pass as `iPMQ40_CB` not `link`.
   */
  iPMQ40_CB?: string;
  /**
   * Image 1 — pass as `V6sx94wG_` not `image1`.
   */
  V6sx94wG_?: string;
  /**
   * Category — pass as `yclpiKcXE` not `category`.
   * @default "Portfolio"
   */
  yclpiKcXE?: string;
  onyclpiKcXEChange?: string;
  /**
   * Title — pass as `ebF1n0j2r` not `title`.
   * @default "Clay Nicolas Copy"
   */
  ebF1n0j2r?: string;
  onebF1n0j2rChange?: string;
  /**
   * Year — pass as `maK60wNg4` not `year`.
   * @default "2025"
   */
  maK60wNg4?: string;
  onmaK60wNg4Change?: string;
  /** Additional properties */
  [key: string]: unknown;
}
