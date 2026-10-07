export interface Carousel3dProps {
  /**
   * @default ["https://picsum.photos/200/120?random=1","https://picsum.photos/200/120?random=2","https://picsum.photos/200/120?random=3","https://picsum.photos/200/120?random=4","https://picsum.photos/200/120?random=5","https://picsum.photos/200/120?random=6"]
   */
  images?: unknown[];
  /**
   * Range: min: 50, max: 300
   * @default 186
   */
  imageWidth?: number;
  /**
   * Range: min: 50, max: 300
   * @default 116
   */
  imageHeight?: number;
  /**
   * Range: min: 1, max: 60
   * @default 20
   */
  rotateSpeed?: number;
  /**
   * Range: min: 100, max: 800
   * @default 288
   */
  translateZ?: number;
  /**
   * Range: min: 0, max: 50
   * @default 5
   */
  borderRadius?: number;
  /**
   * Show Backface
   * @default true
   */
  showBackface?: boolean;
  /** Additional properties */
  [key: string]: unknown;
}
