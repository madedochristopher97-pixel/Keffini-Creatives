export interface Subtitle23Props {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Dark" → ny16f_1Qt
   *   "Light" → dRf5fsK5Q
   */
  variant?: 'Dark' | 'Light' | 'ny16f_1Qt' | 'dRf5fsK5Q';
  /**
   * Number — pass as `uScxfp93T` not `number`.
   * @default "(01)"
   */
  uScxfp93T?: string;
  /**
   * Title — pass as `dg_MYFFcN` not `title`.
   * @default "Why Chose Us"
   */
  dg_MYFFcN?: string;
  /**
   * Distribute — pass as `bvYUJxwf_` not `distribute`.
   * Options: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly"
   * @default "center"
   */
  bvYUJxwf_?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * Numbers Visibility — pass as `sfwFpE6pf` not `numbersVisibility`.
   * @default true
   */
  sfwFpE6pf?: boolean;
  /** Additional properties */
  [key: string]: unknown;
}
