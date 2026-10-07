var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/q72KccLCnQskQRrfgWEk/USMn7POD8d8zS7ZsA6Lp/Yxwohc4Ps.js
import { jsx as _jsx2, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, ComponentViewportProvider, cx, getFonts, Image as Image1, SmartComponentScopedContainer, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX, withOptimizedAppearEffect } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/B2xAlJLcN0gOnt11mSPw/plhC5PVnCMllW5QXjFK5/Ticker.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, useLayoutEffect, useEffect, useState, useRef, useMemo, useCallback, cloneElement, startTransition, forwardRef, useImperativeHandle } from "react";
import { addPropertyControls, ControlType, RenderTarget } from "./_framer-runtime.js";
import { useReducedMotion, LayoutGroup, useInView, useMotionValue, useTransform, motion, frame } from "framer-motion";
import { resize } from "@motionone/dom";
var MAX_DUPLICATED_ITEMS = 100;
var directionTransformers = { left: (offset) => `translateX(-${offset}px)`, right: (offset) => `translateX(${offset}px)`, top: (offset) => `translateY(-${offset}px)`, bottom: (offset) => `translateY(${offset}px)` };
function Ticker(props) {
  let { slots = [], gap, padding, paddingPerSide, paddingTop, paddingRight, paddingBottom, paddingLeft, speed, hoverFactor, direction, alignment, sizingOptions, fadeOptions, style } = props;
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha } = fadeOptions;
  const { widthType, heightType } = sizingOptions;
  const paddingValue = paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : `${padding}px`;
  const currentTarget = RenderTarget.current();
  const isCanvas = currentTarget === RenderTarget.canvas || currentTarget === RenderTarget.export;
  const writingDirection = useWritingDirection();
  const filteredSlots = slots.filter(Boolean);
  const numChildren = Children.count(filteredSlots);
  const hasChildren = numChildren > 0;
  const offset = useMotionValue(0);
  const resolvedDirection = getTickerResolvedDirection(direction === true ? "left" : direction, writingDirection);
  const isHorizontal = resolvedDirection === "left" || resolvedDirection === "right";
  const transformer = directionTransformers[resolvedDirection];
  const transform = useTransform(offset, transformer);
  const parentRef = useRef(null);
  const childrenRef = useMemo(() => {
    return [{ current: null }, { current: null }];
  }, []);
  const [size, setSize] = useState({ parent: null, children: null });
  let clonedChildren = null;
  let dupedChildren = [];
  let duplicateBy = 0;
  let opacity = 0;
  if (isCanvas) {
    duplicateBy = numChildren ? Math.floor(10 / numChildren) : 0;
    opacity = 1;
  }
  if (!isCanvas && hasChildren && size.parent) {
    duplicateBy = Math.round(size.parent / size.children * 2) + 1;
    duplicateBy = Math.min(duplicateBy, MAX_DUPLICATED_ITEMS);
    opacity = 1;
  }
  const measure = useCallback(() => {
    if (hasChildren && parentRef.current) {
      const parentLength = isHorizontal ? parentRef.current.offsetWidth : parentRef.current.offsetHeight;
      const start = childrenRef[0].current ? isHorizontal ? childrenRef[0].current.offsetLeft : childrenRef[0].current.offsetTop : 0;
      const end = childrenRef[1].current ? isHorizontal ? childrenRef[1].current.offsetLeft + childrenRef[1].current.offsetWidth : childrenRef[1].current.offsetTop + childrenRef[1].current.offsetHeight : 0;
      const childrenLength = end - start + gap;
      startTransition(() => {
        setSize({ parent: parentLength, children: childrenLength });
      });
    }
  }, []);
  const childrenStyles = isCanvas ? { contentVisibility: "auto" } : {};
  if (hasChildren) {
    if (!isCanvas) {
      let initialResize = useRef(true);
      useLayoutEffect(() => {
        frame.read(measure, false, true);
        return resize(parentRef.current, ({ contentSize }) => {
          if (!initialResize.current && (contentSize.width || contentSize.height)) {
            frame.read(measure, false, true);
          }
          initialResize.current = false;
        });
      }, []);
    }
    clonedChildren = Children.map(filteredSlots, (child, index) => {
      let ref;
      if (index === 0) {
        ref = childrenRef[writingDirection === "rtl" && isHorizontal ? 1 : 0];
      }
      if (index === filteredSlots.length - 1) {
        ref = childrenRef[writingDirection === "rtl" && isHorizontal ? 0 : 1];
      }
      const size2 = { width: widthType ? child.props?.width : "100%", height: heightType ? child.props?.height : "100%" };
      return /* @__PURE__ */ _jsx(LayoutGroup, { inherit: "id", children: /* @__PURE__ */ _jsx(Wrapper, { ref, style: size2, children: /* @__PURE__ */ cloneElement(child, { style: { ...child.props?.style, ...size2, flexShrink: 0, ...childrenStyles }, layoutId: child.props.layoutId ? child.props.layoutId + "-original-" + index : void 0 }, child.props?.children) }) });
    });
  }
  const isInView = isCanvas ? true : useInView(parentRef);
  if (!isCanvas) {
    for (let i = 0; i < duplicateBy; i++) {
      dupedChildren = dupedChildren.concat(Children.map(filteredSlots, (child, childIndex) => {
        const size2 = { width: widthType ? child.props?.width : "100%", height: heightType ? child.props?.height : "100%", willChange: !isInView ? void 0 : "transform" };
        return /* @__PURE__ */ _jsx(LayoutGroup, { inherit: "id", children: /* @__PURE__ */ _jsx(Wrapper, { style: size2, children: /* @__PURE__ */ cloneElement(child, { key: i + " " + childIndex, style: { ...child.props?.style, width: widthType ? child.props?.width : "100%", height: heightType ? child.props?.height : "100%", flexShrink: 0, ...childrenStyles }, layoutId: child.props.layoutId ? child.props.layoutId + "-dupe-" + i : void 0 }, child.props?.children) }, i + "li" + childIndex) }, i + "lg" + childIndex);
      }));
    }
  }
  const animateToValue = size.children + size.children * Math.round(size.parent / size.children);
  const initialTime = useRef(null);
  const prevTime = useRef(null);
  const xOrY = useRef(0);
  const isHover = useRef(false);
  const isReducedMotion = useReducedMotion();
  const listRef = useRef(null);
  const animationRef = useRef(null);
  if (!isCanvas) {
    useEffect(() => {
      if (isReducedMotion || !animateToValue || !speed) {
        return;
      }
      animationRef.current = listRef.current.animate({ transform: [transformer(0), transformer(animateToValue)] }, { duration: Math.abs(animateToValue) / speed * 1e3, iterations: Infinity, iterationStart: writingDirection === "rtl" ? 1 : 0, easing: "linear" });
      return () => animationRef.current.cancel();
    }, [hoverFactor, animateToValue, speed, writingDirection]);
    const playOrPause = useCallback(() => {
      if (!animationRef.current)
        return;
      const hidden = document.hidden;
      if (isInView && !hidden && animationRef.current.playState === "paused") {
        animationRef.current.play();
      } else if ((!isInView || hidden) && animationRef.current.playState === "running") {
        animationRef.current.pause();
      }
    }, [isInView]);
    useEffect(() => {
      playOrPause();
    }, [isInView, hoverFactor, animateToValue, speed]);
    useEffect(() => {
      document.addEventListener("visibilitychange", playOrPause);
      return () => {
        document.removeEventListener("visibilitychange", playOrPause);
      };
    }, [playOrPause]);
  }
  const fadeDirection = isHorizontal ? "to right" : "to bottom";
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart);
  const fadeInsetEnd = 100 - fadeInset;
  const fadeMask = `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;
  if (!hasChildren) {
    return /* @__PURE__ */ _jsxs("section", { style: placeholderStyles, children: [/* @__PURE__ */ _jsx("div", { style: emojiStyles, children: "\u2728" }), /* @__PURE__ */ _jsx("p", { style: titleStyles, children: "Connect to Content" }), /* @__PURE__ */ _jsx("p", { style: subtitleStyles, children: "Add layers or components to infinitely loop on your page." })] });
  }
  return /* @__PURE__ */ _jsx("section", { style: { ...containerStyle, opacity, WebkitMaskImage: fadeContent ? fadeMask : void 0, maskImage: fadeContent ? fadeMask : void 0, overflow: overflow ? "visible" : "hidden", padding: paddingValue }, ref: parentRef, children: /* @__PURE__ */ _jsxs(motion.ul, { ref: listRef, style: { ...containerStyle, gap, top: direction === "bottom" && isValidNumber(animateToValue) ? -animateToValue : void 0, left: direction === "right" && isValidNumber(animateToValue) ? animateToValue * (writingDirection === "rtl" ? 1 : -1) : void 0, placeItems: alignment, position: "relative", flexDirection: isHorizontal ? "row" : "column", ...style, willChange: isCanvas || !isInView ? "auto" : "transform", transform: transformer(0) }, onMouseEnter: () => {
    isHover.current = true;
    if (animationRef.current) {
      animationRef.current.playbackRate = hoverFactor;
    }
  }, onMouseLeave: () => {
    isHover.current = false;
    if (animationRef.current) {
      animationRef.current.playbackRate = 1;
    }
  }, children: [clonedChildren, dupedChildren] }) });
}
var Wrapper = /* @__PURE__ */ forwardRef(({ children, ...props }, ref) => {
  const innerRef = useRef();
  const inView = useInView(innerRef);
  useImperativeHandle(ref, () => innerRef.current);
  useEffect(() => {
    const current = innerRef.current;
    if (!current)
      return;
    if (inView) {
      current.querySelectorAll("button,a").forEach((el) => {
        const orig = el.dataset.origTabIndex;
        if (orig)
          el.tabIndex = orig;
        else
          el.removeAttribute("tabIndex");
      });
    } else {
      current.querySelectorAll("button,a").forEach((el) => {
        const orig = el.getAttribute("tabIndex");
        if (orig)
          el.dataset.origTabIndex = orig;
        el.tabIndex = -1;
      });
    }
  }, [inView]);
  return /* @__PURE__ */ _jsx("li", { ...props, "aria-hidden": !inView, ref: innerRef, children });
});
Ticker.defaultProps = { gap: 10, padding: 10, sizingOptions: { widthType: true, heightType: true }, fadeOptions: { fadeContent: true, overflow: false, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 }, direction: true };
addPropertyControls(Ticker, { slots: { type: ControlType.Array, title: "Children", control: { type: ControlType.ComponentInstance } }, speed: { type: ControlType.Number, title: "Speed", min: 0, max: 1e3, defaultValue: 100, unit: "%", displayStepper: true, step: 5 }, direction: { type: ControlType.Enum, title: "Direction", options: ["left", "right", "top", "bottom"], optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"], optionTitles: ["Left", "Right", "Top", "Bottom"], defaultValue: "left", displaySegmentedControl: true }, alignment: { type: ControlType.Enum, title: "Align", options: ["flex-start", "center", "flex-end"], optionIcons: { direction: { right: ["align-top", "align-middle", "align-bottom"], left: ["align-top", "align-middle", "align-bottom"], top: ["align-left", "align-center", "align-right"], bottom: ["align-left", "align-center", "align-right"] } }, defaultValue: "center", displaySegmentedControl: true }, gap: { type: ControlType.Number, title: "Gap" }, padding: { title: "Padding", type: ControlType.FusedNumber, toggleKey: "paddingPerSide", toggleTitles: ["Padding", "Padding per side"], valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], valueLabels: ["T", "R", "B", "L"], min: 0 }, sizingOptions: { type: ControlType.Object, title: "Sizing", controls: { widthType: { type: ControlType.Boolean, title: "Width", enabledTitle: "Auto", disabledTitle: "Stretch", defaultValue: true }, heightType: { type: ControlType.Boolean, title: "Height", enabledTitle: "Auto", disabledTitle: "Stretch", defaultValue: true } } }, fadeOptions: { type: ControlType.Object, title: "Clipping", controls: { fadeContent: { type: ControlType.Boolean, title: "Fade", defaultValue: true }, overflow: { type: ControlType.Boolean, title: "Overflow", enabledTitle: "Show", disabledTitle: "Hide", defaultValue: false, hidden(props) {
  return props.fadeContent === true;
} }, fadeWidth: { type: ControlType.Number, title: "Width", defaultValue: 25, min: 0, max: 100, unit: "%", hidden(props) {
  return props.fadeContent === false;
} }, fadeInset: { type: ControlType.Number, title: "Inset", defaultValue: 0, min: 0, max: 100, unit: "%", hidden(props) {
  return props.fadeContent === false;
} }, fadeAlpha: { type: ControlType.Number, title: "Opacity", defaultValue: 0, min: 0, max: 1, step: 0.05, hidden(props) {
  return props.fadeContent === false;
} } } }, hoverFactor: { type: ControlType.Number, title: "Hover", min: 0, max: 1, unit: "x", defaultValue: 1, step: 0.1, displayStepper: true, description: "Slows down the speed while you are hovering." } });
var containerStyle = { display: "flex", width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", placeItems: "center", margin: 0, padding: 0, listStyleType: "none", textIndent: "none" };
var placeholderStyles = { display: "flex", width: "100%", height: "100%", placeContent: "center", placeItems: "center", flexDirection: "column", color: "#96F", background: "rgba(136, 85, 255, 0.1)", fontSize: 11, overflow: "hidden", padding: "20px 20px 30px 20px" };
var emojiStyles = { fontSize: 32, marginBottom: 10 };
var titleStyles = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" };
var subtitleStyles = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: "center" };
var clamp = (num, min, max) => Math.min(Math.max(num, min), max);
var isValidNumber = (value) => typeof value === "number" && !isNaN(value);
function useWritingDirection() {
  if (!__dai_window || !__dai_window.document || !__dai_window.document.documentElement)
    return "ltr";
  return __dai_window.document.documentElement.dir === "rtl" ? "rtl" : "ltr";
}
function getTickerResolvedDirection(direction, writingDirection) {
  if (writingDirection !== "rtl")
    return direction;
  if (direction === "left")
    return "right";
  if (direction === "right")
    return "left";
  return direction;
}

// http-url:https://framerusercontent.com/modules/q72KccLCnQskQRrfgWEk/USMn7POD8d8zS7ZsA6Lp/Yxwohc4Ps.js
var TickerFonts = getFonts(Ticker);
var SmartComponentScopedContainerWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(SmartComponentScopedContainer));
var serializationHash = "framer-KLHNZ";
var variantClassNames = { jCohpTlA4: "framer-v-1kv8bj0" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var transition2 = { damping: 100, delay: 0.3, mass: 3, stiffness: 500, type: "spring" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition2, x: 0, y: 0 };
var animation1 = { opacity: 1e-3, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 48 };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion2.create(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props };
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
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "jCohpTlA4", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsx2(motion2.section, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1kv8bj0", className, classNames), "data-framer-name": "Brands", layoutDependency, layoutId: "Brands__jCohpTlA4", ref: refBinding, style: { backgroundColor: "var(--token-90eb39eb-8ae7-4d64-805e-41357c9bae67, rgb(255, 255, 255))", ...style }, children: /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainerWithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation, className: "framer-1pxampu-container", "data-framer-appear-id": "1pxampu", "data-framer-name": "Brands", initial: animation1, isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "Brands__ZKPozBtTW-container", name: "Brands", nodeId: "ZKPozBtTW", optimized: true, rendersWithMotion: true, scopeId: "Yxwohc4Ps", children: /* @__PURE__ */ _jsx2(Ticker, { alignment: "center", direction: "left", fadeOptions: { fadeAlpha: 0, fadeContent: true, fadeInset: 0, fadeWidth: 25, overflow: false }, gap: 10, height: "100%", hoverFactor: 1, id: "ZKPozBtTW", layoutId: "Brands__ZKPozBtTW", name: "Brands", padding: 10, paddingBottom: 10, paddingLeft: 10, paddingPerSide: false, paddingRight: 10, paddingTop: 10, sizingOptions: { heightType: true, widthType: true }, slots: [/* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-3f0bgu", "data-framer-name": "Logos", layoutDependency, layoutId: "Brands__CPO6_bCAv", children: [/* @__PURE__ */ _jsx2(Image1, { background: { alt: "", fit: "fit", intrinsicHeight: 1083, intrinsicWidth: 3638, pixelHeight: 1083, pixelWidth: 3638, positionX: "center", positionY: "center", sizes: "64px", src: "https://framerusercontent.com/images/5FdM5F84eXnEhnsuNnESLIX30.png?width=3638&height=1083", srcSet: "https://framerusercontent.com/images/5FdM5F84eXnEhnsuNnESLIX30.png?scale-down-to=512&width=3638&height=1083 512w,https://framerusercontent.com/images/5FdM5F84eXnEhnsuNnESLIX30.png?scale-down-to=1024&width=3638&height=1083 1024w,https://framerusercontent.com/images/5FdM5F84eXnEhnsuNnESLIX30.png?scale-down-to=2048&width=3638&height=1083 2048w,https://framerusercontent.com/images/5FdM5F84eXnEhnsuNnESLIX30.png?width=3638&height=1083 3638w" }, className: "framer-1ybepg6", layoutDependency, layoutId: "Brands__mMBVKOpD2" }), /* @__PURE__ */ _jsx2(Image1, { background: { alt: "", fit: "fit", intrinsicHeight: 444, intrinsicWidth: 1882, pixelHeight: 444, pixelWidth: 1882, positionX: "center", positionY: "center", sizes: "88px", src: "https://framerusercontent.com/images/Qlof8ECIwCaQ9xLMqvlU988nUdg.png?width=1882&height=444", srcSet: "https://framerusercontent.com/images/Qlof8ECIwCaQ9xLMqvlU988nUdg.png?scale-down-to=512&width=1882&height=444 512w,https://framerusercontent.com/images/Qlof8ECIwCaQ9xLMqvlU988nUdg.png?scale-down-to=1024&width=1882&height=444 1024w,https://framerusercontent.com/images/Qlof8ECIwCaQ9xLMqvlU988nUdg.png?width=1882&height=444 1882w" }, className: "framer-1v1olm7", layoutDependency, layoutId: "Brands__x2R0YuVKA" }), /* @__PURE__ */ _jsx2(Image1, { background: { alt: "", fit: "fit", intrinsicHeight: 848, intrinsicWidth: 2304, pixelHeight: 848, pixelWidth: 2304, positionX: "center", positionY: "center", sizes: "64px", src: "https://framerusercontent.com/images/hjONueiKP2Z4nmQYJ1eMa08ygU.png?width=2304&height=848", srcSet: "https://framerusercontent.com/images/hjONueiKP2Z4nmQYJ1eMa08ygU.png?scale-down-to=512&width=2304&height=848 512w,https://framerusercontent.com/images/hjONueiKP2Z4nmQYJ1eMa08ygU.png?scale-down-to=1024&width=2304&height=848 1024w,https://framerusercontent.com/images/hjONueiKP2Z4nmQYJ1eMa08ygU.png?scale-down-to=2048&width=2304&height=848 2048w,https://framerusercontent.com/images/hjONueiKP2Z4nmQYJ1eMa08ygU.png?width=2304&height=848 2304w" }, className: "framer-1jxg12j", layoutDependency, layoutId: "Brands__m53pVdU7i" }), /* @__PURE__ */ _jsx2(Image1, { background: { alt: "", fit: "fill", intrinsicHeight: 441, intrinsicWidth: 264, pixelHeight: 441, pixelWidth: 264, sizes: "85px", src: "https://framerusercontent.com/images/oL6j8y2RSkEwIdxkjAOQhzTe3tA.png?width=264&height=441" }, className: "framer-yn0nmn", layoutDependency, layoutId: "Brands__ChdsAfKOn" }), /* @__PURE__ */ _jsx2(Image1, { background: { alt: "", fit: "fill", intrinsicHeight: 441, intrinsicWidth: 441, pixelHeight: 441, pixelWidth: 441, sizes: "64px", src: "https://framerusercontent.com/images/hflyd9IpWoeWfIBvhUFAEeVgXlY.png?width=441&height=441" }, className: "framer-mgp35k", layoutDependency, layoutId: "Brands__gCEfDyJf2" }), /* @__PURE__ */ _jsx2(Image1, { background: { alt: "", fit: "fit", intrinsicHeight: 538, intrinsicWidth: 355, pixelHeight: 538, pixelWidth: 355, positionX: "center", positionY: "center", sizes: "61px", src: "https://framerusercontent.com/images/Dkyjchr5VFjYZsvQFQlbAvhnr6M.png?width=355&height=538", srcSet: "https://framerusercontent.com/images/Dkyjchr5VFjYZsvQFQlbAvhnr6M.png?width=355&height=538 355w" }, className: "framer-1dnf4cm", layoutDependency, layoutId: "Brands__KC_PyHYdv" }), /* @__PURE__ */ _jsx2(Image1, { background: { alt: "", fit: "fit", intrinsicHeight: 472, intrinsicWidth: 1972, pixelHeight: 472, pixelWidth: 1972, positionX: "center", positionY: "center", sizes: "68px", src: "https://framerusercontent.com/images/rEdTnKT7OGWo01fz3IjwNbNwkRM.png?width=1972&height=472", srcSet: "https://framerusercontent.com/images/rEdTnKT7OGWo01fz3IjwNbNwkRM.png?scale-down-to=512&width=1972&height=472 512w,https://framerusercontent.com/images/rEdTnKT7OGWo01fz3IjwNbNwkRM.png?scale-down-to=1024&width=1972&height=472 1024w,https://framerusercontent.com/images/rEdTnKT7OGWo01fz3IjwNbNwkRM.png?width=1972&height=472 1972w" }, className: "framer-1btmwfu", layoutDependency, layoutId: "Brands__sl6coiZNt" }), /* PORT: client logo */ /* @__PURE__ */ _jsx2(Image1, { background: { alt: "Squeaky Clean", fit: "fit", intrinsicHeight: 107, intrinsicWidth: 217, pixelHeight: 107, pixelWidth: 217, positionX: "center", positionY: "center", sizes: "90px", src: "/images/brands/squeaky-clean.png", srcSet: "/images/brands/squeaky-clean.png 217w" }, className: "kc-brand kc-brand--sq", layoutDependency, layoutId: "Brands__kc_sq" }), /* PORT: client logo */ /* @__PURE__ */ _jsx2(Image1, { background: { alt: "F.O.M. Studio", fit: "fit", intrinsicHeight: 996, intrinsicWidth: 1692, pixelHeight: 996, pixelWidth: 1692, positionX: "center", positionY: "center", sizes: "90px", src: "/images/brands/fom-studio.png", srcSet: "/images/brands/fom-studio.png 1692w" }, className: "kc-brand kc-brand--fom", layoutDependency, layoutId: "Brands__kc_fom" }), /* PORT: client logo */ /* @__PURE__ */ _jsx2(Image1, { background: { alt: "Cleophas & Associates", fit: "fit", intrinsicHeight: 975, intrinsicWidth: 2000, pixelHeight: 975, pixelWidth: 2000, positionX: "center", positionY: "center", sizes: "90px", src: "/images/brands/cleophas.webp", srcSet: "/images/brands/cleophas.webp 2000w" }, className: "kc-brand kc-brand--cl", layoutDependency, layoutId: "Brands__kc_cl" }), /* PORT: client logo */ /* @__PURE__ */ _jsx2(Image1, { background: { alt: "Ivory Horizons Tours", fit: "fit", intrinsicHeight: 300, intrinsicWidth: 647, pixelHeight: 300, pixelWidth: 647, positionX: "center", positionY: "center", sizes: "90px", src: "/images/brands/ivory-horizons.png", srcSet: "/images/brands/ivory-horizons.png 647w" }, className: "kc-brand kc-brand--iv", layoutDependency, layoutId: "Brands__kc_iv" })] })], speed: 40, style: { height: "100%", width: "100%" }, width: "100%" }) }) }) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-KLHNZ.framer-9ktyyf, .framer-KLHNZ .framer-9ktyyf { display: block; }", ".framer-KLHNZ.framer-1kv8bj0 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-KLHNZ .framer-1pxampu-container { flex: none; height: 48px; position: relative; width: 100%; }", ".framer-KLHNZ .framer-3f0bgu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 82px; height: 48px; justify-content: center; overflow: hidden; padding: 0px 45px 0px 45px; position: relative; width: min-content; }", ".framer-KLHNZ .framer-1ybepg6 { flex: none; height: 17px; min-width: 4%; position: relative; width: 64px; }", ".framer-KLHNZ .framer-1v1olm7 { flex: none; height: 18px; min-width: 4%; position: relative; width: 88px; }", ".framer-KLHNZ .framer-1jxg12j { flex: none; height: 20px; min-width: 5%; position: relative; width: 64px; }", ".framer-KLHNZ .framer-yn0nmn { flex: none; height: 48px; position: relative; width: 85px; }", ".framer-KLHNZ .framer-mgp35k { flex: none; height: 48px; position: relative; width: 64px; }", ".framer-KLHNZ .framer-1dnf4cm { flex: none; height: 46px; position: relative; width: 61px; }", ".framer-KLHNZ .framer-1btmwfu { flex: none; height: 16px; position: relative; width: 68px; }"];
var FramerYxwohc4Ps = withCSS(Component, css, "framer-KLHNZ");
var Yxwohc4Ps_default = FramerYxwohc4Ps;
FramerYxwohc4Ps.displayName = "Brands";
FramerYxwohc4Ps.defaultProps = { height: 48, width: 1200 };
addFonts(FramerYxwohc4Ps, [{ explicitInter: true, fonts: [] }, ...TickerFonts], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerYxwohc4Ps", "slots": [], "annotations": { "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerIntrinsicHeight": "48", "framerContractVersion": "1", "framerComponentViewportWidth": "true", "framerAutoSizeImages": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}', "framerColorSyntax": "true", "framerIntrinsicWidth": "1200" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  Yxwohc4Ps_default as default
};
