var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/WtLbYhWzLrY00ec25Vxu/axSX79OpMpGMmFkZel8a/AKYp2RbGi.js
import { jsx as _jsx4, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts as addFonts4, ComponentViewportProvider, cx as cx4, forwardLoader, getFonts, runTasksWithYield, Shader, SmartComponentScopedContainer, useActiveVariantCallback, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useOnVariantChange, useVariantState as useVariantState4, withCSS as withCSS4 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React4 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/qbISo04IgXwHvt1f08Bw/PqHx9uwswPwEixzYIrpZ/GradientWave.js
import { defineShader, ControlType } from "./_framer-runtime.js";
var GradientWave_default = defineShader({ title: "Wave Gradient", fragment: `
#define S(a,b,t) smoothstep(a,b,t)

mat2 Rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

vec2 hash(vec2 p) {
    float s = u_seed;
    vec2 k1 = vec2(2127.1 + s * 13.37, 81.17 + s * 7.31);
    vec2 k2 = vec2(1269.5 + s * 11.13, 283.37 + s * 5.79);
    p = vec2(dot(p, k1), dot(p, k2));
    return fract(sin(p) * (43758.5453 + s * 1.618));
}

float noise(in vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(
        mix(dot(-1.0 + 2.0 * hash(i), f),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
    );
    return 0.5 + 0.5 * n;
}

vec3 getColor(int idx) {
    if (u_colors_length < 1) return vec3(0.0);
    int safeIdx = clamp(idx, 0, u_colors_length - 1);
    return u_colors[safeIdx].rgb;
}

float seedF(float base) {
    return base * (1.0 + 0.5 * sin(u_seed * 3.17 + base));
}

vec2 warpUV(vec2 uv) {
    float t = u_time * u_waveSpeed;

    float angleOffset = sin(u_seed * 2.73) * 30.0;
    mat2 dirRot = Rot(radians(u_waveAngle + angleOffset));
    vec2 ruv = dirRot * uv;

    float fxMod = seedF(u_waveFreqX);
    float fyMod = seedF(u_waveFreqY);

    float phaseX = fract(sin(u_seed * 7.19) * 437.58) * 6.2832;
    float phaseY = fract(cos(u_seed * 3.41) * 291.37) * 6.2832;

    // Core wave with seed-dependent harmonics
    float harmonic = sin(u_seed * 1.23) * 0.5;
    float a = fyMod * ruv.y - sin(ruv.x * fxMod + ruv.y - t + phaseX);
    a += harmonic * sin(ruv.x * fxMod * 2.0 + ruv.y * 0.5 + t * 0.7 + phaseY);

    // Smoothstep mask (unchanged)
    a = smoothstep(
        cos(a) * u_maskSoftness,
        sin(a) * u_maskSoftness + 3.,
        cos(a - fyMod * ruv.y) - sin(a - fxMod * ruv.x)
    );

    a *= u_waveAmplitude;

    uv = cos(a) * uv + sin(a) * vec2(-uv.y, uv.x);
    return uv;
}

void main() {
    vec2 fragCoord = v_uv * u_resolution;
    vec2 uv = fragCoord / u_resolution.xy;
    float ratio = u_resolution.x / u_resolution.y;
    float t = u_time * u_waveSpeed;

    vec2 tuv = uv - 0.5;

    vec2 seedShift = vec2(sin(u_seed * 4.37), cos(u_seed * 5.91)) * 100.0;
    float degree = noise(vec2(t * 0.1, tuv.x * tuv.y) + seedShift);
    tuv.y *= 1.0 / ratio;
    tuv *= Rot(radians((degree - 0.5) * 720.0 + 180.0));
    tuv.y *= ratio;

    // Seed-rotate uv2 before warping
    vec2 uv2 = (fragCoord * 2.0 - u_resolution.xy) / (u_resolution.x + u_resolution.y) * 2.0;
    float preRotAngle = fract(sin(u_seed * 5.63) * 173.29) * 6.2832;
    uv2 *= Rot(preRotAngle);
    vec2 warped = warpUV(uv2) * 0.5 + 0.5;

    vec2 blendUV = mix(tuv, warped - 0.5, u_blendAmount);

    float layerRot1 = -5.0 + sin(u_seed * 1.83) * 20.0;
    float layerRot2 = 10.0 + cos(u_seed * 2.47) * 20.0;

    vec3 c0 = getColor(0);
    vec3 c1 = getColor(1);
    vec3 c2 = getColor(2);
    vec3 c3 = getColor(3);

    vec3 layer1 = mix(c0, c2, S(-0.3, 0.3, (blendUV * Rot(radians(layerRot1))).x));
    vec3 layer2 = mix(c3, c1, S(-0.3, 0.3, (blendUV * Rot(radians(layerRot2))).x));
    vec3 col = mix(layer1, layer2, S(0.3, -0.3, blendUV.y));

    col = mix(col, col * col + 0.5 * sqrt(col), 0.3);

    fragColor = vec4(col, 1.0);
}
`, propertyControls: { colors: { type: ControlType.Array, title: "Colors", control: { type: ControlType.Color }, maxCount: 4, defaultValue: ["#FF3624", "#9EABFF", "#FFAE00", "#E29EFF"] }, seed: { type: ControlType.Number, title: "Seed", defaultValue: 32, min: 0, max: 100, step: 1 }, waveSpeed: { type: ControlType.Number, title: "Speed", defaultValue: 1.5, min: 0, max: 3, step: 0.01 }, waveFreqX: { type: ControlType.Number, title: "Freq X", defaultValue: 0.9, min: 0.1, max: 6, step: 0.1 }, waveFreqY: { type: ControlType.Number, title: "Freq Y", defaultValue: 6, min: 0.1, max: 6, step: 0.1 }, waveAngle: { type: ControlType.Number, title: "Angle", defaultValue: 105, min: -180, max: 180, step: 1 }, waveAmplitude: { type: ControlType.Number, title: "Amplitude", defaultValue: 2.1, min: 0.5, max: 3, step: 0.01 }, maskSoftness: { type: ControlType.Number, title: "Softness", defaultValue: 0.74, min: 0.01, max: 2, step: 0.01 }, blendAmount: { type: ControlType.Number, title: "Blend", defaultValue: 0.54, min: 0, max: 1, step: 0.01 } } });

// http-url:https://framerusercontent.com/modules/bjVGIyM99iq2c630Roi7/oLjVTSbIge4gRJyhTiW7/jWDbmH9qc.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, cx, getLoadingLazyAtYPosition, Image as Image1, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX, withOptimizedAppearEffect } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
var Image1WithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(Image1));
var serializationHash = "framer-ZUvKD";
var variantClassNames = { MUUyCkxrX: "framer-v-14s4wkg" };
var transition1 = { bounce: 0, delay: 0, duration: 1, type: "spring" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition1, x: 0, y: 0 };
var animation1 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.3, skewX: 0, skewY: 0, x: 0, y: 660 };
var transition2 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props };
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
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "MUUyCkxrX", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition2, children: /* @__PURE__ */ _jsx(Image1WithFXWithOptimizedAppearEffect, { ...restProps, ...gestureHandlers, __framer__presenceAnimate: animation, __framer__presenceInitial: animation1, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition(componentViewport?.y || 0), pixelHeight: 3712, pixelWidth: 5568, sizes: componentViewport?.width || "100vw", src: "https://framerusercontent.com/images/anyg0bKWoONQtaRf149qQ4VVM.jpg?width=5568&height=3712", srcSet: "https://framerusercontent.com/images/anyg0bKWoONQtaRf149qQ4VVM.jpg?scale-down-to=512&width=5568&height=3712 512w,https://framerusercontent.com/images/anyg0bKWoONQtaRf149qQ4VVM.jpg?scale-down-to=1024&width=5568&height=3712 1024w,https://framerusercontent.com/images/anyg0bKWoONQtaRf149qQ4VVM.jpg?scale-down-to=2048&width=5568&height=3712 2048w,https://framerusercontent.com/images/anyg0bKWoONQtaRf149qQ4VVM.jpg?scale-down-to=4096&width=5568&height=3712 4096w,https://framerusercontent.com/images/anyg0bKWoONQtaRf149qQ4VVM.jpg?width=5568&height=3712 5568w" }, className: cx(scopingClassNames, "framer-14s4wkg", className, classNames), "data-framer-appear-id": "14s4wkg", "data-framer-name": "Variant 1", layoutDependency, layoutId: "Hero2__MUUyCkxrX", optimized: true, ref: refBinding, style: { ...style } }) }) }) });
});
var css = [".framer-ZUvKD.framer-1gdjn16, .framer-ZUvKD .framer-1gdjn16 { display: block; }", ".framer-ZUvKD.framer-14s4wkg { height: auto; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }"];
var FramerjWDbmH9qc = withCSS(Component, css, "framer-ZUvKD");
var jWDbmH9qc_default = FramerjWDbmH9qc;
FramerjWDbmH9qc.displayName = "Image 1";
FramerjWDbmH9qc.defaultProps = { height: 800, width: 1200 };
addFonts(FramerjWDbmH9qc, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/oYphUXIboPIE4XRDqGn3/LuyvuHhXvyjSdX65PGvx/l9OyDD1xu.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addFonts as addFonts2, cx as cx2, getLoadingLazyAtYPosition as getLoadingLazyAtYPosition2, Image as Image12, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2, withFX as withFX2, withOptimizedAppearEffect as withOptimizedAppearEffect2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef2 } from "react";
var Image1WithFXWithOptimizedAppearEffect2 = withOptimizedAppearEffect2(withFX2(Image12));
var serializationHash2 = "framer-QqUdp";
var variantClassNames2 = { o3kne5m5L: "framer-v-6or5ff" };
var transition12 = { bounce: 0, delay: 0.8, duration: 1.6, type: "spring" };
var animation2 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition12, x: 0, y: 0 };
var animation12 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.5, skewX: 0, skewY: 0, x: 0, y: 1020 };
var transition22 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion2.create(React2.Fragment);
var getProps2 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className, layoutId, variant, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ defaultVariant: "o3kne5m5L", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition2, { value: transition22, children: /* @__PURE__ */ _jsx2(Image1WithFXWithOptimizedAppearEffect2, { ...restProps, ...gestureHandlers, __framer__presenceAnimate: animation2, __framer__presenceInitial: animation12, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition2(componentViewport?.y || 0), pixelHeight: 2333, pixelWidth: 3500, sizes: componentViewport?.width || "100vw", src: "https://framerusercontent.com/images/uO8xBHedMIWjWvjMukdjan5NWo.jpg?width=3500&height=2333", srcSet: "https://framerusercontent.com/images/uO8xBHedMIWjWvjMukdjan5NWo.jpg?scale-down-to=512&width=3500&height=2333 512w,https://framerusercontent.com/images/uO8xBHedMIWjWvjMukdjan5NWo.jpg?scale-down-to=1024&width=3500&height=2333 1024w,https://framerusercontent.com/images/uO8xBHedMIWjWvjMukdjan5NWo.jpg?scale-down-to=2048&width=3500&height=2333 2048w,https://framerusercontent.com/images/uO8xBHedMIWjWvjMukdjan5NWo.jpg?width=3500&height=2333 3500w" }, className: cx2(scopingClassNames, "framer-6or5ff", className, classNames), "data-framer-appear-id": "6or5ff", "data-framer-name": "Variant 1", layoutDependency, layoutId: "Hero2__o3kne5m5L", optimized: true, ref: refBinding, style: { ...style } }) }) }) });
});
var css2 = [".framer-QqUdp.framer-1b2p91b, .framer-QqUdp .framer-1b2p91b { display: block; }", ".framer-QqUdp.framer-6or5ff { height: auto; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }"];
var Framerl9OyDD1xu = withCSS2(Component2, css2, "framer-QqUdp");
var l9OyDD1xu_default = Framerl9OyDD1xu;
Framerl9OyDD1xu.displayName = "Image 3";
Framerl9OyDD1xu.defaultProps = { height: 800, width: 1200 };
addFonts2(Framerl9OyDD1xu, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/nSbPqgdHDxB347zIDbes/CrBg5mb5eJZpUNHvEIGS/mSNYXdf52.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addFonts as addFonts3, cx as cx3, getLoadingLazyAtYPosition as getLoadingLazyAtYPosition3, Image as Image13, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS3, withFX as withFX3, withOptimizedAppearEffect as withOptimizedAppearEffect3 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef3 } from "react";
var Image1WithFXWithOptimizedAppearEffect3 = withOptimizedAppearEffect3(withFX3(Image13));
var serializationHash3 = "framer-VPT4x";
var variantClassNames3 = { Q3Zklm9CW: "framer-v-5u5190" };
var transition13 = { bounce: 0, delay: 0.4, duration: 2, type: "spring" };
var animation3 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition13, x: 0, y: 0 };
var animation13 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.4, skewX: 0, skewY: 0, x: 0, y: 660 };
var transition23 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition3 = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext3.Provider, { value: contextValue, children });
};
var Variants3 = motion3.create(React3.Fragment);
var getProps3 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className, layoutId, variant, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ defaultVariant: "Q3Zklm9CW", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx3(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition3, { value: transition23, children: /* @__PURE__ */ _jsx3(Image1WithFXWithOptimizedAppearEffect3, { ...restProps, ...gestureHandlers, __framer__presenceAnimate: animation3, __framer__presenceInitial: animation13, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition3(componentViewport?.y || 0), pixelHeight: 4480, pixelWidth: 6720, sizes: componentViewport?.width || "100vw", src: "https://framerusercontent.com/images/S4d2yH5p5m0g72E421AqUg5TsUw.jpg?width=6720&height=4480", srcSet: "https://framerusercontent.com/images/S4d2yH5p5m0g72E421AqUg5TsUw.jpg?scale-down-to=512&width=6720&height=4480 512w,https://framerusercontent.com/images/S4d2yH5p5m0g72E421AqUg5TsUw.jpg?scale-down-to=1024&width=6720&height=4480 1024w,https://framerusercontent.com/images/S4d2yH5p5m0g72E421AqUg5TsUw.jpg?scale-down-to=2048&width=6720&height=4480 2048w,https://framerusercontent.com/images/S4d2yH5p5m0g72E421AqUg5TsUw.jpg?scale-down-to=4096&width=6720&height=4480 4096w,https://framerusercontent.com/images/S4d2yH5p5m0g72E421AqUg5TsUw.jpg?width=6720&height=4480 6720w" }, className: cx3(scopingClassNames, "framer-5u5190", className, classNames), "data-framer-appear-id": "5u5190", "data-framer-name": "Variant 1", layoutDependency, layoutId: "Hero2__Q3Zklm9CW", optimized: true, ref: refBinding, style: { ...style } }) }) }) });
});
var css3 = [".framer-VPT4x.framer-6t3on5, .framer-VPT4x .framer-6t3on5 { display: block; }", ".framer-VPT4x.framer-5u5190 { height: auto; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }"];
var FramermSNYXdf52 = withCSS3(Component3, css3, "framer-VPT4x");
var mSNYXdf52_default = FramermSNYXdf52;
FramermSNYXdf52.displayName = "Image 2";
FramermSNYXdf52.defaultProps = { height: 800, width: 1200 };
addFonts3(FramermSNYXdf52, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/WtLbYhWzLrY00ec25Vxu/axSX79OpMpGMmFkZel8a/AKYp2RbGi.js
var Image1Fonts = getFonts(jWDbmH9qc_default);
var Image2Fonts = getFonts(mSNYXdf52_default);
var Image3Fonts = getFonts(l9OyDD1xu_default);
var serializationHash4 = "framer-fdYr3";
var variantClassNames4 = { ilfDaBpHF: "framer-v-1kisoko" };
var transition14 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition4 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext4.Provider, { value: contextValue, children });
};
var Variants4 = motion4.create(React4.Fragment);
var getProps4 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const { style, className, layoutId, variant, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ defaultVariant: "ilfDaBpHF", ref: refBinding, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const sharedStyleClassNames = [];
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onAppear1nei5gp = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("CSx8g5dGD", true), 1500);
  });
  const scopingClassNames = cx4(serializationHash4, ...sharedStyleClassNames);
  useOnVariantChange(baseVariant, { default: onAppear1nei5gp });
  return /* @__PURE__ */ _jsx4(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition4, { value: transition14, children: /* @__PURE__ */ _jsxs(motion4.div, { ...restProps, ...gestureHandlers, className: cx4(scopingClassNames, "framer-1kisoko", className, classNames), "data-framer-name": "Variant 1", "data-highlight": true, layoutDependency, layoutId: "Hero2__ilfDaBpHF", ref: refBinding, style: { backgroundColor: "var(--token-05c8fc94-9d88-4996-8c43-5ba6b09ba5c8, rgb(21, 23, 34))", ...style }, children: [/* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-1i5tpae-container", layoutDependency, layoutId: "Hero2__iMqILg1hb-container", rendersWithMotion: true, children: /* @__PURE__ */ _jsx4(Shader, { __fromCanvasComponent: true, animated: GradientWave_default.animated, buffers: GradientWave_default.buffers, fallbackImage: "https://framerusercontent.com/images/JLMpmy1qLqPpIjM605yggWkgO4.png?width=2434&height=1428", fragmentShader: GradientWave_default.fragment, height: "100%", heightmapSource: GradientWave_default.heightmapSource, mode: "progressive", mouse: GradientWave_default.mouse && { enabled: GradientWave_default.mouse === "enabledByDefault" }, resolutionScale: GradientWave_default.resolutionScale, skipInitialFallback: true, uniforms: { u_blendAmount: { type: "number", value: 0.54 }, u_colors: { type: "array", value: ["rgb(255, 54, 36)", "rgb(74, 88, 176)", "rgb(255, 174, 0)", "rgb(226, 158, 255)"] }, u_maskSoftness: { type: "number", value: 0.74 }, u_seed: { type: "number", value: 32 }, u_waveAmplitude: { type: "number", value: 2.1 }, u_waveAngle: { type: "number", value: 105 }, u_waveFreqX: { type: "number", value: 0.9 }, u_waveFreqY: { type: "number", value: 6 }, u_waveSpeed: { type: "number", value: 1.5 } }, vertexShader: GradientWave_default.vertex, width: "100%" }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 800, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + ((componentViewport?.height || 800) * 0.5000000000000002 - 400), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-11rrnsf-container", layoutDependency, layoutId: "Hero2__dJUR5DKss-container", nodeId: "dJUR5DKss", rendersWithMotion: true, scopeId: "AKYp2RbGi", style: { scale: 0.3 }, children: /* @__PURE__ */ _jsx4(jWDbmH9qc_default, { height: "100%", id: "dJUR5DKss", layoutId: "Hero2__dJUR5DKss", style: { height: "100%", width: "100%" }, width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 800, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + ((componentViewport?.height || 800) * 0.5000000000000002 - 400), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-18h65rz-container", layoutDependency, layoutId: "Hero2__rVUELnRzD-container", nodeId: "rVUELnRzD", rendersWithMotion: true, scopeId: "AKYp2RbGi", style: { scale: 0.4 }, children: /* @__PURE__ */ _jsx4(mSNYXdf52_default, { height: "100%", id: "rVUELnRzD", layoutId: "Hero2__rVUELnRzD", style: { height: "100%", width: "100%" }, width: "100%" }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: (componentViewport?.height || 800) * 1, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + ((componentViewport?.height || 800) * 0.5000000000000002 - (componentViewport?.height || 800) * 1 / 2), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-jntjfk-container", layoutDependency, layoutId: "Hero2__A2Qxh7clW-container", nodeId: "A2Qxh7clW", rendersWithMotion: true, scopeId: "AKYp2RbGi", style: { scale: 0.6 }, children: /* @__PURE__ */ _jsx4(l9OyDD1xu_default, { height: "100%", id: "A2Qxh7clW", layoutId: "Hero2__A2Qxh7clW", style: { height: "100%", width: "100%" }, width: "100%" }) }) })] }) }) }) });
});
var css4 = [".framer-fdYr3.framer-10hef25, .framer-fdYr3 .framer-10hef25 { display: block; }", ".framer-fdYr3.framer-1kisoko { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-fdYr3 .framer-1i5tpae-container { flex: none; height: 714px; position: relative; width: 1217px; }", ".framer-fdYr3 .framer-11rrnsf-container { flex: none; height: 800px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 800px / 2); width: 100%; z-index: 1; }", ".framer-fdYr3 .framer-18h65rz-container { flex: none; height: 800px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 800px / 2); width: 100%; z-index: 2; }", ".framer-fdYr3 .framer-jntjfk-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 3; }"];
var FramerAKYp2RbGi = withCSS4(Component4, css4, "framer-fdYr3");
var AKYp2RbGi_default = FramerAKYp2RbGi;
FramerAKYp2RbGi.displayName = "Hero 2";
FramerAKYp2RbGi.defaultProps = { height: 800, width: 1200 };
addFonts4(FramerAKYp2RbGi, [{ explicitInter: true, fonts: [] }, ...Image1Fonts, ...Image2Fonts, ...Image3Fonts], { supportsExplicitInterCodegen: true });
FramerAKYp2RbGi.loader = { load: (props, context) => {
  return runTasksWithYield([() => forwardLoader(jWDbmH9qc_default, {}, context), () => forwardLoader(mSNYXdf52_default, {}, context), () => forwardLoader(l9OyDD1xu_default, {}, context)], context);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerAKYp2RbGi", "slots": [], "annotations": { "framerImmutableVariables": "true", "framerIntrinsicWidth": "1200", "framerIntrinsicHeight": "800", "framerComponentViewportWidth": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}', "framerDisplayContentsDiv": "false", "framerContractVersion": "1", "framerColorSyntax": "true", "framerAutoSizeImages": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  AKYp2RbGi_default as default
};
