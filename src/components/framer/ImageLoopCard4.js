var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/qy6K9tQNtlzQwxMBbxBk/aKbtxHaU7ot74AtiWaiV/oDJseBDYQ.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getLoadingLazyAtYPosition, Image, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
var cycleOrder = ["rwVy46cSw", "fXz2uPEpF", "SUjh3_MZT", "ftDlrfWhC", "HLsNJgaQm"];
var serializationHash = "framer-J6WoG";
var variantClassNames = { ftDlrfWhC: "framer-v-16lilzz", fXz2uPEpF: "framer-v-1hygnvo", HLsNJgaQm: "framer-v-16xxkdx", rwVy46cSw: "framer-v-1xdqqfc", SUjh3_MZT: "framer-v-1yrjcwm" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { "Image 1": "rwVy46cSw", "Image 2": "fXz2uPEpF", "Image 3": "SUjh3_MZT", "Image 4": "ftDlrfWhC", "Image 5": "HLsNJgaQm" };
var getProps = ({ height, id, image1, image2, image3, image4, image5, width, ...props }) => {
  return { ...props, bNIxmSYTX: image1 ?? props.bNIxmSYTX ?? { alt: "", pixelHeight: 1280, pixelWidth: 896, src: "https://framerusercontent.com/images/kDDFdQi11eufzZl2QNW6DZQPHc.png?scale-down-to=1024&width=896&height=1280", srcSet: "https://framerusercontent.com/images/kDDFdQi11eufzZl2QNW6DZQPHc.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/kDDFdQi11eufzZl2QNW6DZQPHc.png?width=896&height=1280 896w" }, CXo7fyVBS: image2 ?? props.CXo7fyVBS ?? { alt: "", pixelHeight: 1408, pixelWidth: 768, src: "https://framerusercontent.com/images/opHG6G3XXBPn4u7fJmN9pqpI.png?scale-down-to=1024&width=768&height=1408", srcSet: "https://framerusercontent.com/images/opHG6G3XXBPn4u7fJmN9pqpI.png?scale-down-to=1024&width=768&height=1408 558w,https://framerusercontent.com/images/opHG6G3XXBPn4u7fJmN9pqpI.png?width=768&height=1408 768w" }, Hu6fn5bt1: image4 ?? props.Hu6fn5bt1 ?? { alt: "", pixelHeight: 1280, pixelWidth: 896, src: "https://framerusercontent.com/images/8Hyh6pB3pbhNuDNsxVZH0w3kvKo.png?scale-down-to=1024&width=896&height=1280", srcSet: "https://framerusercontent.com/images/8Hyh6pB3pbhNuDNsxVZH0w3kvKo.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/8Hyh6pB3pbhNuDNsxVZH0w3kvKo.png?width=896&height=1280 896w" }, UhE81XPkg: image5 ?? props.UhE81XPkg ?? { alt: "", pixelHeight: 1280, pixelWidth: 896, src: "https://framerusercontent.com/images/My7SNbGqP7RXWC7NQ2gn0m4yxl8.png?scale-down-to=1024&width=896&height=1280", srcSet: "https://framerusercontent.com/images/My7SNbGqP7RXWC7NQ2gn0m4yxl8.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/My7SNbGqP7RXWC7NQ2gn0m4yxl8.png?width=896&height=1280 896w" }, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "rwVy46cSw", YzLWPJL0x: image3 ?? props.YzLWPJL0x ?? { alt: "", pixelHeight: 1280, pixelWidth: 896, src: "https://framerusercontent.com/images/uEuzLmHidyU1NDRflf2P1Y4ylsY.png?scale-down-to=1024&width=896&height=1280", srcSet: "https://framerusercontent.com/images/uEuzLmHidyU1NDRflf2P1Y4ylsY.png?scale-down-to=1024&width=896&height=1280 716w,https://framerusercontent.com/images/uEuzLmHidyU1NDRflf2P1Y4ylsY.png?width=896&height=1280 896w" } };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, bNIxmSYTX, CXo7fyVBS, YzLWPJL0x, Hu6fn5bt1, UhE81XPkg, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "rwVy46cSw", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onAppear1y87l36 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("fXz2uPEpF", true), 1e3);
  });
  const onAppearf0z8ru = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("SUjh3_MZT", true), 1e3);
  });
  const onAppear150n1kn = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("ftDlrfWhC", true), 1e3);
  });
  const onAppearib0ntp = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("HLsNJgaQm", true), 1e3);
  });
  const onAppear1wsbyrc = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("rwVy46cSw", true), 1e3);
  });
  useOnVariantChange(baseVariant, { default: onAppear1y87l36, ftDlrfWhC: onAppearib0ntp, fXz2uPEpF: onAppearf0z8ru, HLsNJgaQm: onAppear1wsbyrc, SUjh3_MZT: onAppear150n1kn });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Image, { ...restProps, ...gestureHandlers, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition(componentViewport?.y || 0), sizes: componentViewport?.width || "100vw", ...toResponsiveImage(bNIxmSYTX) }, className: cx(scopingClassNames, "framer-1xdqqfc", className, classNames), "data-framer-name": "Image 1", "data-highlight": true, layoutDependency, layoutId: "ImageLoopCard__rwVy46cSw", ref: refBinding, style: { borderBottomLeftRadius: 4, borderBottomRightRadius: 4, borderTopLeftRadius: 4, borderTopRightRadius: 4, ...style }, ...addPropertyOverrides({ ftDlrfWhC: { "data-framer-name": "Image 4", background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition(componentViewport?.y || 0), pixelHeight: 1280, pixelWidth: 896, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(Hu6fn5bt1) } }, fXz2uPEpF: { "data-framer-name": "Image 2", background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition(componentViewport?.y || 0), pixelHeight: 1408, pixelWidth: 768, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(CXo7fyVBS) } }, HLsNJgaQm: { "data-framer-name": "Image 5", background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition(componentViewport?.y || 0), pixelHeight: 1280, pixelWidth: 896, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(UhE81XPkg) } }, SUjh3_MZT: { "data-framer-name": "Image 3", background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition(componentViewport?.y || 0), pixelHeight: 1280, pixelWidth: 896, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(YzLWPJL0x) } } }, baseVariant, gestureVariant) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-J6WoG.framer-xaj5yg, .framer-J6WoG .framer-xaj5yg { display: block; }", ".framer-J6WoG.framer-1xdqqfc { height: auto; position: relative; width: 100%; }"];
var FrameroDJseBDYQ = withCSS(Component, css, "framer-J6WoG");
var oDJseBDYQ_default = FrameroDJseBDYQ;
FrameroDJseBDYQ.displayName = "Image Loop Card";
FrameroDJseBDYQ.defaultProps = { height: 560, width: 400 };
addPropertyControls(FrameroDJseBDYQ, { variant: { options: ["rwVy46cSw", "fXz2uPEpF", "SUjh3_MZT", "ftDlrfWhC", "HLsNJgaQm"], optionTitles: ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"], title: "Variant", type: ControlType.Enum }, bNIxmSYTX: { __defaultAssetReference: "data:framer/asset-reference,kDDFdQi11eufzZl2QNW6DZQPHc.png?originalFilename=porsche-1920x-q72.png&preferredSize=auto", __vekterDefault: { alt: "", assetReference: "data:framer/asset-reference,kDDFdQi11eufzZl2QNW6DZQPHc.png?originalFilename=porsche-1920x-q72.png&preferredSize=auto" }, title: "Image 1", type: ControlType.ResponsiveImage }, CXo7fyVBS: { __defaultAssetReference: "data:framer/asset-reference,opHG6G3XXBPn4u7fJmN9pqpI.png?originalFilename=visualelectric-1743070022280.png&preferredSize=auto", __vekterDefault: { alt: "", assetReference: "data:framer/asset-reference,opHG6G3XXBPn4u7fJmN9pqpI.png?originalFilename=visualelectric-1743070022280.png&preferredSize=auto" }, title: "Image 2", type: ControlType.ResponsiveImage }, YzLWPJL0x: { __defaultAssetReference: "data:framer/asset-reference,uEuzLmHidyU1NDRflf2P1Y4ylsY.png?originalFilename=visualelectric-1743151990833.png&preferredSize=auto", __vekterDefault: { alt: "", assetReference: "data:framer/asset-reference,uEuzLmHidyU1NDRflf2P1Y4ylsY.png?originalFilename=visualelectric-1743151990833.png&preferredSize=auto" }, title: "Image 3", type: ControlType.ResponsiveImage }, Hu6fn5bt1: { __defaultAssetReference: "data:framer/asset-reference,8Hyh6pB3pbhNuDNsxVZH0w3kvKo.png?originalFilename=visualelectric-1743060486232.png&preferredSize=auto", __vekterDefault: { alt: "", assetReference: "data:framer/asset-reference,8Hyh6pB3pbhNuDNsxVZH0w3kvKo.png?originalFilename=visualelectric-1743060486232.png&preferredSize=auto" }, title: "Image 4", type: ControlType.ResponsiveImage }, UhE81XPkg: { __defaultAssetReference: "data:framer/asset-reference,My7SNbGqP7RXWC7NQ2gn0m4yxl8.png?originalFilename=visualelectric-1740465449258.png&preferredSize=auto", __vekterDefault: { alt: "", assetReference: "data:framer/asset-reference,My7SNbGqP7RXWC7NQ2gn0m4yxl8.png?originalFilename=visualelectric-1740465449258.png&preferredSize=auto" }, title: "Image 5", type: ControlType.ResponsiveImage } });
addFonts(FrameroDJseBDYQ, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FrameroDJseBDYQ", "slots": [], "annotations": { "framerVariables": '{"bNIxmSYTX":"image1","CXo7fyVBS":"image2","YzLWPJL0x":"image3","Hu6fn5bt1":"image4","UhE81XPkg":"image5"}', "framerContractVersion": "1", "framerImmutableVariables": "true", "framerComponentViewportWidth": "true", "framerIntrinsicWidth": "400", "framerDisplayContentsDiv": "false", "framerColorSyntax": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"fXz2uPEpF":{"layout":["fixed","fixed"]},"SUjh3_MZT":{"layout":["fixed","fixed"]},"ftDlrfWhC":{"layout":["fixed","fixed"]},"HLsNJgaQm":{"layout":["fixed","fixed"]}}}', "framerAutoSizeImages": "true", "framerIntrinsicHeight": "560" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  oDJseBDYQ_default as default
};
