var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/qgBmwB27Q9IiEnwuoy38/a5WagDdsNtXPCtWXDqzk/gSxc6YmO3.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/ahM2SWkn4sJyfeE1lutn/KgtbCO2QBm2qPTNkaBBE/YrK0iTyFl.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["FS;Outfit-regular", "FS;Outfit-bold"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/RPEPC24XXAVK6EWUOKWQUPTOZQR35AS2/BVWMEQ5ZCLZP2VOXOHXQDCZADXNFBXUF/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2", weight: "400" }, { cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EUV6IZMPXOYBUY6KFIXKZWM47ESY5XYA/BLW2AGODUKQKRMYEVOEMMPY2ITRKBJIP/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2", weight: "700" }] }];
var css = [`.framer-JioR5 .framer-styles-preset-kz4is:not(.rich-text-wrapper), .framer-JioR5 .framer-styles-preset-kz4is.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-background-padding: 0px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className = "framer-JioR5";

// http-url:https://framerusercontent.com/modules/qgBmwB27Q9IiEnwuoy38/a5WagDdsNtXPCtWXDqzk/gSxc6YmO3.js
var cycleOrder = ["ny16f_1Qt", "dRf5fsK5Q"];
var serializationHash = "framer-pyQ6s";
var variantClassNames = { dRf5fsK5Q: "framer-v-cvhq57", ny16f_1Qt: "framer-v-cbep67" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableEnumMap = { "Space Around": "space-around", "Space Between": "space-between", "Space Evenly": "space-evenly", Center: "center", End: "flex-end", Start: "flex-start" };
var humanReadableVariantMap = { Dark: "ny16f_1Qt", Light: "dRf5fsK5Q" };
var getProps = ({ distribute, height, id, number, numbersVisibility, title, width, ...props }) => {
  return { ...props, bvYUJxwf_: humanReadableEnumMap[distribute] ?? distribute ?? props.bvYUJxwf_ ?? "center", dg_MYFFcN: title ?? props.dg_MYFFcN ?? "Why Chose Us", sfwFpE6pf: numbersVisibility ?? props.sfwFpE6pf ?? true, uScxfp93T: number ?? props.uScxfp93T ?? "(01)", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "ny16f_1Qt" };
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
  const { style, className: className2, layoutId, variant, uScxfp93T, dg_MYFFcN, bvYUJxwf_, sfwFpE6pf, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "ny16f_1Qt", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-cbep67", className2, classNames), "data-framer-name": "Dark", layoutDependency, layoutId: "Subtitle__ny16f_1Qt", ref: refBinding, style: { "--12yaqsb": bvYUJxwf_, ...style }, ...addPropertyOverrides({ dRf5fsK5Q: { "data-framer-name": "Light" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsxs(motion.div, { className: "framer-bxrr88", layoutDependency, layoutId: "Subtitle__eUCjFBMtu", children: [sfwFpE6pf && /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23)))" }, children: "(01)" }) }), className: "framer-d19cxl", "data-framer-name": "Number", fonts: ["Inter"], layoutDependency, layoutId: "Subtitle__qWE8tmRgW", style: { "--extracted-r6o4lv": "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23))", "--framer-paragraph-spacing": "0px" }, text: uScxfp93T, variants: { dRf5fsK5Q: { "--extracted-r6o4lv": "var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255))" } }, verticalAlignment: "center", withExternalLayout: true, ...addPropertyOverrides({ dRf5fsK5Q: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "(01)" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23)))" }, children: "Why Chose Us" }) }), className: "framer-7fpjss", "data-framer-name": "Title", fonts: ["Inter"], layoutDependency, layoutId: "Subtitle__Urld2SqNO", style: { "--extracted-r6o4lv": "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23))", "--framer-paragraph-spacing": "0px" }, text: dg_MYFFcN, variants: { dRf5fsK5Q: { "--extracted-r6o4lv": "var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255))" } }, verticalAlignment: "center", withExternalLayout: true, ...addPropertyOverrides({ dRf5fsK5Q: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "Why Chose Us" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-pyQ6s.framer-4wbaef, .framer-pyQ6s .framer-4wbaef { display: block; }", ".framer-pyQ6s.framer-cbep67 { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: var(--12yaqsb); overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-pyQ6s .framer-bxrr88 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-pyQ6s .framer-d19cxl, .framer-pyQ6s .framer-7fpjss { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-pyQ6s.framer-v-cvhq57 .framer-d19cxl { order: 0; }", ".framer-pyQ6s.framer-v-cvhq57 .framer-7fpjss { order: 1; }", ...css];
var FramergSxc6YmO3 = withCSS(Component, css2, "framer-pyQ6s");
var gSxc6YmO3_default = FramergSxc6YmO3;
FramergSxc6YmO3.displayName = "Subtitle";
FramergSxc6YmO3.defaultProps = { height: 22, width: 130 };
addPropertyControls(FramergSxc6YmO3, { variant: { options: ["ny16f_1Qt", "dRf5fsK5Q"], optionTitles: ["Dark", "Light"], title: "Variant", type: ControlType.Enum }, uScxfp93T: { defaultValue: "(01)", displayTextArea: false, title: "Number", type: ControlType.String }, dg_MYFFcN: { defaultValue: "Why Chose Us", displayTextArea: false, title: "Title", type: ControlType.String }, bvYUJxwf_: { defaultValue: "center", options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"], optionTitles: ["Start", "Center", "End", "Space Between", "Space Around", "Space Evenly"], title: "Distribute", type: ControlType.Enum }, sfwFpE6pf: { defaultValue: true, title: "Numbers Visibility", type: ControlType.Boolean } });
addFonts(FramergSxc6YmO3, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramergSxc6YmO3", "slots": [], "annotations": { "framerIntrinsicWidth": "130", "framerImmutableVariables": "true", "framerIntrinsicHeight": "22", "framerColorSyntax": "true", "framerDisplayContentsDiv": "false", "framerAutoSizeImages": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"dRf5fsK5Q":{"layout":["auto","auto"]}}}', "framerVariables": '{"uScxfp93T":"number","dg_MYFFcN":"title","bvYUJxwf_":"distribute","sfwFpE6pf":"numbersVisibility"}', "framerContractVersion": "1", "framerComponentViewportWidth": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  gSxc6YmO3_default as default
};
