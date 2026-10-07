var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/iGH3InQg1zLfEcB4QffI/pHEcrAiaHwt6OwXpM1hG/Z5NqPajCK.js
import { jsx as _jsx, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx, getFonts, getFontsFromSharedStyle, RichText, SmartComponentScopedContainer, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/qpjhCcDm4G1NbFAlpMKV/OnyZiTlIjOBuSKcKQWFv/AnimatedNumberCounter_Prod.js
import { jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { addPropertyControls, ControlType, RenderTarget } from "./_framer-runtime.js";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";
function AnimatedNumberCounter(props) {
  const { mode, start, end, value, decimals, commas, color, animation } = props;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const Tag = props.tag;
  const MotionTag = motion[props.tag];
  const isDefault = mode == "default";
  const initialValue = isDefault ? start : value;
  const transition = isDefault ? animation.transition : props.transition;
  const formatNumber = (number2) => {
    let numberString = number2.toFixed(decimals);
    if (commas) {
      numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return numberString;
  };
  const [number, setNumber] = useState(initialValue);
  const [finalValue, setFinalValue] = useState(number);
  const [currentAnimation, setCurrentAnimation] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !props.animation.replay, amount: "some" });
  const motionValue = useMotionValue(value);
  const runAnimation = (from, to) => {
    if (!isCanvas) {
      if (currentAnimation) {
        currentAnimation.stop();
      }
      setFinalValue(to);
      setCurrentAnimation(animate(from, to, { ...transition, onUpdate: (latest) => {
        setNumber(latest);
      } }));
    }
  };
  useEffect(() => {
    if (isDefault && animation.trigger == "appear") {
      runAnimation(start, end);
    }
  }, []);
  useEffect(() => {
    if (isDefault && animation.trigger == "layerInView") {
      if (isInView) {
        runAnimation(start, end);
      } else {
        if (currentAnimation) {
          currentAnimation.stop();
        }
        setNumber(start);
      }
    }
  }, [isInView]);
  useEffect(() => {
    if (!isDefault) {
      runAnimation(number, value);
    }
  }, [value]);
  return /* @__PURE__ */ _jsxs(_Fragment, { children: [/* @__PURE__ */ _jsxs(Tag, { style: { ...props.style, margin: 0, opacity: 0, pointerEvents: "none", userSelect: "none", textWrap: props.balance ? "balance" : void 0, fontVariantNumeric: props.monospace ? "tabular-nums" : void 0, textAlign: "center", ...props.font }, children: [props.prefix, formatNumber(isCanvas ? initialValue : finalValue), props.suffix] }), /* @__PURE__ */ _jsxs(MotionTag, { ref, style: { position: "absolute", inset: 0, userSelect: props.userSelect ? "auto" : "none", fontVariantNumeric: props.monospace ? "tabular-nums" : void 0, margin: 0, ...color.mode == "solid" ? { color: color.color } : { WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundImage: `linear-gradient(${color.angle}deg, ${color.startColor}, ${color.endColor})` }, textDecoration: props.decoration, textWrap: props.balance ? "balance" : void 0, textAlign: "center", ...props.font, ...props.style }, children: [props.prefix, formatNumber(isCanvas ? initialValue : number), props.suffix] })] });
}
AnimatedNumberCounter.displayName = "Animated Number Counter";
addPropertyControls(AnimatedNumberCounter, { mode: { type: ControlType.Enum, options: ["default", "variants"], optionTitles: ["Default", "Variants"], displaySegmentedControl: true }, value: { type: ControlType.Number, defaultValue: 0, hidden: (props) => props.mode !== "variants" }, start: { type: ControlType.Number, defaultValue: 0, hidden: (props) => props.mode !== "default" }, end: { type: ControlType.Number, defaultValue: 100, hidden: (props) => props.mode !== "default" }, animation: { type: ControlType.Object, icon: "effect", hidden: (props) => props.mode !== "default", controls: { trigger: { type: ControlType.Enum, defaultValue: "layerInView", options: ["appear", "layerInView"], optionTitles: ["Appear", "Layer in View"], displaySegmentedControl: true, segmentedControlDirection: "vertical" }, replay: { type: ControlType.Boolean, defaultValue: true, hidden(props) {
  return props.trigger !== "layerInView";
} }, transition: { type: ControlType.Transition, defaultValue: { type: "spring", duration: 1, bounce: 0 } } } }, transition: { type: ControlType.Transition, defaultValue: { type: "spring", duration: 1, bounce: 0 }, hidden: (props) => props.mode !== "variants" }, decimals: { type: ControlType.Enum, defaultValue: 0, options: [0, 1, 2, 3], optionTitles: ["Off", "1", "2", "3"], displaySegmentedControl: true }, commas: { type: ControlType.Boolean, defaultValue: true }, font: { type: "font", controls: "extended", defaultFontType: "sans-serif", defaultValue: { fontSize: 16, lineHeight: 1 } }, color: { type: ControlType.Object, controls: { mode: { type: ControlType.Enum, defaultValue: "solid", options: ["solid", "gradient"], optionTitles: ["Solid", "Gradient"], displaySegmentedControl: true }, color: { type: ControlType.Color, defaultValue: "#000", hidden: (props) => props.mode !== "solid" }, startColor: { type: ControlType.Color, defaultValue: "#000", hidden: (props) => props.mode !== "gradient" }, endColor: { type: ControlType.Color, defaultValue: "#FFF", hidden: (props) => props.mode !== "gradient" }, angle: { type: ControlType.Number, defaultValue: 180, min: -360, max: 360, unit: "\xB0", hidden: (props) => props.mode !== "gradient" } } }, prefix: { type: ControlType.String, placeholder: "Prefix" }, suffix: { type: ControlType.String, placeholder: "Suffix" }, decoration: { type: ControlType.Enum, defaultValue: "none", options: ["none", "underline", "line-through"], optionTitles: ["None", "Underline", "Strikethrough"] }, balance: { type: ControlType.Boolean, defaultValue: false }, userSelect: { type: ControlType.Boolean, defaultValue: true }, tag: { type: ControlType.Enum, defaultValue: "p", displaySegmentedControl: true, options: ["h1", "h2", "h3", "p"], optionTitles: ["H1", "H2", "H3", "P"] }, monospace: { type: ControlType.Boolean, defaultValue: false, description: "More components at [Framer University](https://frameruni.link/cc)." } });

// http-url:https://framerusercontent.com/modules/kT63hldXZM3aJt6TSQf8/IU65eimTihWXx750SXml/xxYpVC2ns.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["FS;Outfit-regular", "FS;Outfit-bold"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/RPEPC24XXAVK6EWUOKWQUPTOZQR35AS2/BVWMEQ5ZCLZP2VOXOHXQDCZADXNFBXUF/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2", weight: "400" }, { cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EUV6IZMPXOYBUY6KFIXKZWM47ESY5XYA/BLW2AGODUKQKRMYEVOEMMPY2ITRKBJIP/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2", weight: "700" }] }];
var css = [`.framer-RFpfK .framer-styles-preset-o3fw3z:not(.rich-text-wrapper), .framer-RFpfK .framer-styles-preset-o3fw3z.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.4px; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-background-padding: 6px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className = "framer-RFpfK";

// http-url:https://framerusercontent.com/modules/iGH3InQg1zLfEcB4QffI/pHEcrAiaHwt6OwXpM1hG/Z5NqPajCK.js
var AnimatedNumberCounterFonts = getFonts(AnimatedNumberCounter);
var serializationHash = "framer-cBRYj";
var variantClassNames = { sfGpBfn9U: "framer-v-1vqze7y" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion2.create(React.Fragment);
var getProps = ({ end, height, id, prefix, start, suffix, title, width, ...props }) => {
  return { ...props, BxSFJAa6O: prefix ?? props.BxSFJAa6O, dTdeIinrd: title ?? props.dTdeIinrd ?? "Client \nrevenue", J7_aT4sHa: start ?? props.J7_aT4sHa, JQGowXigM: end ?? props.JQGowXigM ?? 192, YsjZ8_Z3T: suffix ?? props.YsjZ8_Z3T };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className2, layoutId, variant, dTdeIinrd, J7_aT4sHa, JQGowXigM, YsjZ8_Z3T, BxSFJAa6O, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "sfGpBfn9U", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs2(motion2.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1vqze7y", className2, classNames), "data-framer-name": "Default", layoutDependency, layoutId: "CounterNumber__sfGpBfn9U", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(SmartComponentScopedContainer, { className: "framer-1yuw2aw-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "CounterNumber__aDXGoV8U_-container", nodeId: "aDXGoV8U_", rendersWithMotion: true, scopeId: "Z5NqPajCK", children: /* @__PURE__ */ _jsx(AnimatedNumberCounter, { animation: { replay: false, transition: { bounce: 0, delay: 0, duration: 3, type: "spring" }, trigger: "layerInView" }, balance: false, color: { angle: 180, color: "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23))", endColor: "rgb(255, 255, 255)", mode: "solid", startColor: "rgb(0, 0, 0)" }, commas: true, decimals: 0, decoration: "none", end: JQGowXigM, font: { fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif', fontFeatureSettings: "'zero' on, 'tnum' on, 'cv06' on, 'cv13' on, 'cv07' on, 'cv05' on, 'cv10' on, 'cv12' on, 'cv08' on, 'cv11' on, 'cv04' on, 'cv03' on, 'cv02' on, 'cv09' on", fontSize: "50px", fontStyle: "normal", fontWeight: 600, letterSpacing: "-5.2px", lineHeight: "100%" }, height: "100%", id: "aDXGoV8U_", layoutId: "CounterNumber__aDXGoV8U_", mode: "default", monospace: false, prefix: BxSFJAa6O, start: J7_aT4sHa, suffix: YsjZ8_Z3T, tag: "h3", transition: { bounce: 0, delay: 0, duration: 1, type: "spring" }, userSelect: true, value: 190, width: "100%" }) }) }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion2.p, { className: "framer-styles-preset-o3fw3z", "data-styles-preset": "xxYpVC2ns", style: { "--framer-text-alignment": "left" }, children: /* @__PURE__ */ _jsxs2(motion2.span, { style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23)))" }, children: ["Client ", /* @__PURE__ */ _jsx(motion2.br, {}), "revenue"] }) }) }), className: "framer-1yaq5lr", "data-framer-name": "Client Retention", fonts: ["Inter"], layoutDependency, layoutId: "CounterNumber__QiOmAVojM", style: { "--extracted-1w3ko1f": "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23))", "--framer-paragraph-spacing": "0px" }, text: dTdeIinrd, verticalAlignment: "center", withExternalLayout: true })] }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-cBRYj.framer-1knnicb, .framer-cBRYj .framer-1knnicb { display: block; }", ".framer-cBRYj.framer-1vqze7y { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-cBRYj .framer-1yuw2aw-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-cBRYj .framer-1yaq5lr { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ...css];
var FramerZ5NqPajCK = withCSS(Component, css2, "framer-cBRYj");
var Z5NqPajCK_default = FramerZ5NqPajCK;
FramerZ5NqPajCK.displayName = "Counter Number";
FramerZ5NqPajCK.defaultProps = { height: 55, width: 111 };
addPropertyControls2(FramerZ5NqPajCK, { dTdeIinrd: { defaultValue: "Client \nrevenue", displayTextArea: true, title: "Title", type: ControlType2.String }, J7_aT4sHa: { defaultValue: 0, title: "Start", type: ControlType2.Number }, JQGowXigM: { defaultValue: 192, title: "End", type: ControlType2.Number }, YsjZ8_Z3T: { defaultValue: "", placeholder: "Suffix", title: "Suffix", type: ControlType2.String }, BxSFJAa6O: { defaultValue: "", placeholder: "Prefix", title: "Prefix", type: ControlType2.String } });
addFonts(FramerZ5NqPajCK, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...AnimatedNumberCounterFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerZ5NqPajCK", "slots": [], "annotations": { "framerComponentViewportWidth": "true", "framerVariables": '{"dTdeIinrd":"title","J7_aT4sHa":"start","JQGowXigM":"end","YsjZ8_Z3T":"suffix","BxSFJAa6O":"prefix"}', "framerIntrinsicWidth": "111", "framerAutoSizeImages": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]}}}', "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerContractVersion": "1", "framerIntrinsicHeight": "55", "framerColorSyntax": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  Z5NqPajCK_default as default
};
