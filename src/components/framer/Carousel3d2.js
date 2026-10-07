var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/brYEBPi3PfGCwevYNki2/vATZJq2cMeEHaLCDnXKX/Carousel_3D.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addPropertyControls, ControlType } from "./_framer-runtime.js";
function ThreeDGallery(props) {
  const { images, imageWidth, imageHeight, rotateSpeed, translateZ, borderRadius, showBackface } = props;
  const totalItems = Math.max(images.length, 6);
  const spreadAngle = 360 / totalItems;
  const filledImages = [...images, ...Array.from({ length: totalItems - images.length }, (_, i) => `https://picsum.photos/200/120?random=${i}`)];
  return /* @__PURE__ */ _jsxs("div", { style: { width: "100%", height: "100%", position: "relative", perspective: "1000px", overflow: "hidden", zIndex: 0, pointerEvents: "auto" }, children: [/* @__PURE__ */ _jsx("style", { children: `
          @keyframes rotation {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }

          .carousel {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transform-style: preserve-3d;
            transform-origin: center center;
            animation: rotation ${rotateSpeed}s infinite linear;
          }

          .carousel figure {
            position: absolute;
            margin: 0;
            top: 50%;
            left: 50%;
            transform-origin: center center;
            overflow: hidden;
            transition: transform 0.5s ease;
            backface-visibility: ${showBackface ? "visible" : "hidden"};
          }

          .carousel figure img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.5s ease;
            backface-visibility: ${showBackface ? "visible" : "hidden"};
          }
        ` }), /* @__PURE__ */ _jsx("div", { className: "carousel", children: filledImages.map((src, index) => {
    const angle = index * spreadAngle;
    const transform = `
            translate(-50%, -50%)
            rotateY(${angle}deg)
            translateZ(${translateZ}px)
          `;
    return /* @__PURE__ */ _jsx("figure", { style: { width: imageWidth, height: imageHeight, transform, borderRadius }, children: /* @__PURE__ */ _jsx("img", { src, alt: `carousel-${index}`, style: { borderRadius } }) }, index);
  }) })] });
}
ThreeDGallery.defaultProps = { width: 1200, height: 400 };
addPropertyControls(ThreeDGallery, { images: { type: ControlType.Array, propertyControl: { type: ControlType.Image }, defaultValue: ["https://picsum.photos/200/120?random=1", "https://picsum.photos/200/120?random=2", "https://picsum.photos/200/120?random=3", "https://picsum.photos/200/120?random=4", "https://picsum.photos/200/120?random=5", "https://picsum.photos/200/120?random=6"] }, imageWidth: { type: ControlType.Number, defaultValue: 186, min: 50, max: 300 }, imageHeight: { type: ControlType.Number, defaultValue: 116, min: 50, max: 300 }, rotateSpeed: { type: ControlType.Number, defaultValue: 20, min: 1, max: 60, unit: "s" }, translateZ: { type: ControlType.Number, defaultValue: 288, min: 100, max: 800, unit: "px" }, borderRadius: { type: ControlType.Number, defaultValue: 5, min: 0, max: 50, unit: "px" }, showBackface: { type: ControlType.Boolean, defaultValue: true, title: "Show Backface" } });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "ThreeDGallery", "slots": [], "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  ThreeDGallery as default
};
