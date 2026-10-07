export interface Faq16Props {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Desktop (Closed)" → F5p6SAOd2
   *   "Mobile (Closed)" → kfU0UQk2c
   *   "Desktop" → f_jFP5Z0z
   *   "Mobile" → MP8V106Sh
   */
  variant?: 'Desktop (Closed)' | 'Mobile (Closed)' | 'Desktop' | 'Mobile' | 'F5p6SAOd2' | 'f_jFP5Z0z' | 'kfU0UQk2c' | 'MP8V106Sh';
  /**
   * Question — pass as `CAMoD9Z8N` not `question`.
   * @default "What industries do you specialize in?"
   */
  CAMoD9Z8N?: string;
  /**
   * Answer — pass as `rz_T6n7XM` not `answer`.
   * @default "I have experience working across various industries including but not limited to technology, healthcare, fashion, hospitality, and non-profit organizations."
   */
  rz_T6n7XM?: string;
  /**
   * Line Top Visibiity — pass as `ejE4iIxQg` not `lineTopVisibiity`.
   * @default true
   */
  ejE4iIxQg?: boolean;
  /**
   * Fill — pass as `nkgOxRUtD` not `fill`.
   * @default "var(--token-36ee2a1e-0245-4ebd-b64e-c29cac1b6d1a, rgb(224, 224, 224)) /* {"name":"Content 40"} */"
   */
  nkgOxRUtD?: string;
  /** Additional properties */
  [key: string]: unknown;
}
