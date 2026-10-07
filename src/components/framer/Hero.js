var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/ywd0NkZqfX4b3kyUlhkb/xDDk5ynDyXC31xekRJA8/a4ePINWPa.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType as ControlType2, cx, getLoadingLazyAtYPosition, Image as Image1, Shader, SmartComponentScopedContainer, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS, withFX, withOptimizedAppearEffect } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";

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

// http-url:https://framerusercontent.com/modules/ywd0NkZqfX4b3kyUlhkb/xDDk5ynDyXC31xekRJA8/a4ePINWPa.js
var Image1WithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(Image1));
var cycleOrder = ["FNNhMD9_a", "CSx8g5dGD", "AoRFLNbhz", "CBqs25r34"];
var serializationHash = "framer-6W3y4";
var variantClassNames = { AoRFLNbhz: "framer-v-rhrnr5", CBqs25r34: "framer-v-12js91x", CSx8g5dGD: "framer-v-9k9mmv", FNNhMD9_a: "framer-v-1xq2c1i" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 1, ease: [0.96, -0.02, 0.38, 1.01], type: "tween" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var transition2 = { bounce: 0, delay: 0, duration: 1, type: "spring" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.3, skewX: 0, skewY: 0, transition: transition2, x: 0, y: 0 };
var animation1 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.3, skewX: 0, skewY: 0, x: 0, y: 660 };
var transition3 = { bounce: 0, delay: 0.4, duration: 2, type: "spring" };
var animation2 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.4, skewX: 0, skewY: 0, transition: transition3, x: 0, y: 0 };
var animation3 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.4, skewX: 0, skewY: 0, x: 0, y: 660 };
var transition4 = { bounce: 0, delay: 0.8, duration: 1.6, type: "spring" };
var animation4 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.6, skewX: 0, skewY: 0, transition: transition4, x: 0, y: 0 };
var animation5 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.5, skewX: 0, skewY: 0, x: 0, y: 1020 };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { "Desktop/End": "CSx8g5dGD", "Desktop/Start": "FNNhMD9_a", "Mobile/End": "CBqs25r34", "Mobile/Start": "AoRFLNbhz" };
var Variants = motion.create(React.Fragment);
var getProps = ({ firstImage, height, id, mainImage, secondaryImage, width, ...props }) => {
  return { ...props, bzGCxZlef: firstImage ?? props.bzGCxZlef ?? { alt: "", pixelHeight: 1024, pixelWidth: 1024, src: "https://framerusercontent.com/images/wPiTvVSrHAk94Tes9APNKlRyKbI.png?width=1024&height=1024", srcSet: "https://framerusercontent.com/images/wPiTvVSrHAk94Tes9APNKlRyKbI.png?scale-down-to=512&width=1024&height=1024 512w,https://framerusercontent.com/images/wPiTvVSrHAk94Tes9APNKlRyKbI.png?width=1024&height=1024 1024w" }, LFd6Pb2Zf: secondaryImage ?? props.LFd6Pb2Zf ?? { alt: "", pixelHeight: 1024, pixelWidth: 1024, src: "https://framerusercontent.com/images/hF2JMM2CfWFcpKzEQoV0UbiYIA.png?width=1024&height=1024", srcSet: "https://framerusercontent.com/images/hF2JMM2CfWFcpKzEQoV0UbiYIA.png?scale-down-to=512&width=1024&height=1024 512w,https://framerusercontent.com/images/hF2JMM2CfWFcpKzEQoV0UbiYIA.png?width=1024&height=1024 1024w" }, uD5pBfuSj: mainImage ?? props.uD5pBfuSj ?? { pixelHeight: 920, pixelWidth: 736, src: "https://framerusercontent.com/images/ZlMkhL9PGdEP0vptB6OqV5LECww.jpeg?width=736&height=920", srcSet: "https://framerusercontent.com/images/ZlMkhL9PGdEP0vptB6OqV5LECww.jpeg?width=736&height=920 736w" }, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "FNNhMD9_a" };
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
  const { style, className, layoutId, variant, bzGCxZlef, LFd6Pb2Zf, uD5pBfuSj, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "FNNhMD9_a", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onAppear1nei5gp = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("CSx8g5dGD", true), 1500);
  });
  const onAppear123zjxl = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("CBqs25r34", true), 1500);
  });
  useOnVariantChange(baseVariant, { AoRFLNbhz: onAppear123zjxl, CBqs25r34: void 0, default: onAppear1nei5gp });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1xq2c1i", className, classNames), "data-framer-name": "Desktop/Start", "data-highlight": true, layoutDependency, layoutId: "Hero__FNNhMD9_a", ref: refBinding, style: { backgroundColor: "var(--token-05c8fc94-9d88-4996-8c43-5ba6b09ba5c8, rgb(21, 23, 34))", ...style }, ...addPropertyOverrides({ AoRFLNbhz: { "data-framer-name": "Mobile/Start" }, CBqs25r34: { "data-framer-name": "Mobile/End", "data-highlight": void 0 }, CSx8g5dGD: { "data-framer-name": "Desktop/End" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx(SmartComponentScopedContainer, { className: "framer-1i1ckov-container", layoutDependency, layoutId: "Hero__RYcVsDWyG-container", rendersWithMotion: true, children: /* @__PURE__ */ _jsx(Shader, { __fromCanvasComponent: true, animated: GradientWave_default.animated, fallbackImage: "https://framerusercontent.com/images/JLMpmy1qLqPpIjM605yggWkgO4.png?width=2434&height=1428", feedbackLoop: GradientWave_default.feedbackLoop, fragmentShader: GradientWave_default.fragment, height: "100%", heightmapSource: GradientWave_default.heightmapSource, mode: "progressive", mouse: GradientWave_default.mouse && { enabled: GradientWave_default.mouse === "enabledByDefault" }, resolutionScale: GradientWave_default.resolutionScale, skipInitialFallback: true, uniforms: { u_blendAmount: { type: "number", value: 0.54 }, u_colors: { type: "array", value: ["rgb(255, 54, 36)", "rgb(74, 88, 176)", "rgb(255, 174, 0)", "rgb(226, 158, 255)"] }, u_maskSoftness: { type: "number", value: 0.74 }, u_seed: { type: "number", value: 32 }, u_waveAmplitude: { type: "number", value: 2.1 }, u_waveAngle: { type: "number", value: 105 }, u_waveFreqX: { type: "number", value: 0.9 }, u_waveFreqY: { type: "number", value: 6 }, u_waveSpeed: { type: "number", value: 1.5 } }, vertexShader: GradientWave_default.vertex, width: "100%" }) }), /* @__PURE__ */ _jsx(Image1WithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 714) * 0.5000000000000002 - 500)), pixelHeight: 1024, pixelWidth: 1024, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(bzGCxZlef) }, className: "framer-1esr90y", "data-framer-appear-id": "1esr90y", "data-framer-name": "1", initial: animation1, layoutDependency, layoutId: "Hero__sVJZRv_BF", optimized: true, style: { scale: 0.3 }, variants: { CSx8g5dGD: { scale: 0.5 } }, ...addPropertyOverrides({ AoRFLNbhz: { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 944) * 0.5000000000000002 - (componentViewport?.height || 944) * 1 / 2)), pixelHeight: 1024, pixelWidth: 1024, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(bzGCxZlef) } }, CBqs25r34: { animate: void 0, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 944) * 0.5000000000000002 - 52)), pixelHeight: 1024, pixelWidth: 1024, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(bzGCxZlef) }, initial: void 0, optimized: void 0 }, CSx8g5dGD: { animate: void 0, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 714) * 0.5000000000000002 - (componentViewport?.height || 714) * 1 / 2)), pixelHeight: 1024, pixelWidth: 1024, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(bzGCxZlef) }, initial: void 0, optimized: void 0 } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx(Image1WithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation2, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 714) * 0.5000000000000002 - 500)), pixelHeight: 1024, pixelWidth: 1024, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(LFd6Pb2Zf) }, className: "framer-4soasr", "data-framer-appear-id": "4soasr", "data-framer-name": "2", initial: animation3, layoutDependency, layoutId: "Hero__tyvtFWYrE", optimized: true, style: { scale: 0.4 }, variants: { CSx8g5dGD: { scale: 0.5 } }, ...addPropertyOverrides({ AoRFLNbhz: { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 944) * 0.5000000000000002 - (componentViewport?.height || 944) * 1 / 2)), pixelHeight: 1024, pixelWidth: 1024, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(LFd6Pb2Zf) } }, CBqs25r34: { animate: void 0, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 944) * 0.5000000000000002 - 65)), pixelHeight: 1024, pixelWidth: 1024, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(LFd6Pb2Zf) }, initial: void 0, optimized: void 0 }, CSx8g5dGD: { animate: void 0, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 714) * 0.5000000000000002 - (componentViewport?.height || 714) * 1 / 2)), pixelHeight: 1024, pixelWidth: 1024, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(LFd6Pb2Zf) }, initial: void 0, optimized: void 0 } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx(Image1WithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation4, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 714) * 0.5000000000000002 - (componentViewport?.height || 714) * 1 / 2)), pixelHeight: 920, pixelWidth: 736, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(uD5pBfuSj) }, className: "framer-1g4fguj", "data-framer-appear-id": "1g4fguj", "data-framer-name": "3", initial: animation5, layoutDependency, layoutId: "Hero__ou__RH9Ot", optimized: true, style: { scale: 0.6 }, variants: { CBqs25r34: { scale: 1 }, CSx8g5dGD: { scale: 1 } }, ...addPropertyOverrides({ AoRFLNbhz: { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 944) * 0.5000000000000002 - (componentViewport?.height || 944) * 1 / 2)), pixelHeight: 920, pixelWidth: 736, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(uD5pBfuSj) } }, CBqs25r34: { animate: void 0, background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 944) * 0.5000000000000002 - (componentViewport?.height || 944) * 1 / 2)), pixelHeight: 920, pixelWidth: 736, sizes: componentViewport?.width || "100vw", ...toResponsiveImage(uD5pBfuSj) }, initial: void 0, optimized: void 0 }, CSx8g5dGD: { animate: void 0, initial: void 0, optimized: void 0 } }, baseVariant, gestureVariant) })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-6W3y4.framer-1owu1x9, .framer-6W3y4 .framer-1owu1x9 { display: block; }", ".framer-6W3y4.framer-1xq2c1i { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-6W3y4 .framer-1i1ckov-container { flex: none; height: 714px; position: relative; width: 1217px; }", ".framer-6W3y4 .framer-1esr90y { flex: none; height: calc(var(--framer-viewport-height, 100vh) * 1); left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100vh / 2); width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }", ".framer-6W3y4 .framer-4soasr { flex: none; height: calc(var(--framer-viewport-height, 100vh) * 1); left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100vh / 2); width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 2; }", ".framer-6W3y4 .framer-1g4fguj { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 3; }", ".framer-6W3y4.framer-v-9k9mmv .framer-1esr90y, .framer-6W3y4.framer-v-9k9mmv .framer-4soasr, .framer-6W3y4.framer-v-rhrnr5 .framer-1esr90y, .framer-6W3y4.framer-v-rhrnr5 .framer-4soasr { height: 100%; top: calc(50.00000000000002% - 100% / 2); }", ".framer-6W3y4.framer-v-rhrnr5.framer-1xq2c1i, .framer-6W3y4.framer-v-12js91x.framer-1xq2c1i { height: auto; width: 100%; }", ".framer-6W3y4.framer-v-12js91x .framer-1esr90y { height: 104px; top: calc(50.00000000000002% - 104px / 2); }", ".framer-6W3y4.framer-v-12js91x .framer-4soasr { height: 130px; top: calc(50.00000000000002% - 130px / 2); }"];
var Framera4ePINWPa = withCSS(Component, css, "framer-6W3y4");
var a4ePINWPa_default = Framera4ePINWPa;
Framera4ePINWPa.displayName = "Hero";
Framera4ePINWPa.defaultProps = { height: 714, width: 1200 };
addPropertyControls(Framera4ePINWPa, { variant: { options: ["FNNhMD9_a", "CSx8g5dGD", "AoRFLNbhz", "CBqs25r34"], optionTitles: ["Desktop/Start", "Desktop/End", "Mobile/Start", "Mobile/End"], title: "Variant", type: ControlType2.Enum }, bzGCxZlef: { __defaultAssetReference: "data:framer/asset-reference,wPiTvVSrHAk94Tes9APNKlRyKbI.png?originalFilename=image.png&width=1024&height=1024", __vekterDefault: { alt: "", assetReference: "data:framer/asset-reference,wPiTvVSrHAk94Tes9APNKlRyKbI.png?originalFilename=image.png&width=1024&height=1024" }, title: "First Image", type: ControlType2.ResponsiveImage }, LFd6Pb2Zf: { __defaultAssetReference: "data:framer/asset-reference,hF2JMM2CfWFcpKzEQoV0UbiYIA.png?originalFilename=image.png&preferredSize=auto&width=1024&height=1024", __vekterDefault: { alt: "", assetReference: "data:framer/asset-reference,hF2JMM2CfWFcpKzEQoV0UbiYIA.png?originalFilename=image.png&preferredSize=auto&width=1024&height=1024" }, title: "Secondary Image", type: ControlType2.ResponsiveImage }, uD5pBfuSj: { __defaultAssetReference: "data:framer/asset-reference,ZlMkhL9PGdEP0vptB6OqV5LECww.jpeg?originalFilename=cosmos_195867584.jpeg&width=736&height=920", title: "Main Image", type: ControlType2.ResponsiveImage } });
addFonts(Framera4ePINWPa, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "Framera4ePINWPa", "slots": [], "annotations": { "framerAutoSizeImages": "true", "framerColorSyntax": "true", "framerIntrinsicHeight": "714", "framerImmutableVariables": "true", "framerIntrinsicWidth": "1200", "framerContractVersion": "1", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"CSx8g5dGD":{"layout":["fixed","auto"]},"AoRFLNbhz":{"layout":["fixed","fixed"]},"CBqs25r34":{"layout":["fixed","fixed"]}}}', "framerDisplayContentsDiv": "false", "framerComponentViewportWidth": "true", "framerVariables": '{"bzGCxZlef":"firstImage","LFd6Pb2Zf":"secondaryImage","uD5pBfuSj":"mainImage"}' } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  a4ePINWPa_default as default
};
