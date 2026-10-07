var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/y4Qp2BV8TeAbEs4CeKnt/7dkjfvsGmWnqsD3aQZLL/OzPOKBmWD.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType5, cx, getFonts, getLoadingLazyAtYPosition, getPropertyControls, Image, SmartComponentScopedContainer, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/lRDHiNWNVWmE0lqtoVHP/7qT0r3So12155VV5Jq5x/Video.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType as ControlType4, useIsInCurrentNavigationTarget as useIsInCurrentNavigationTarget2, RenderTarget as RenderTarget3 } from "./_framer-runtime.js";
import { isMotionValue as isMotionValue2, useInView } from "framer-motion";

// http-url:https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType } from "./_framer-runtime.js";
var containerStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: "rgba(136, 85, 255, 0.3)",
  color: "#85F",
  border: "1px dashed #85F",
  flexDirection: "column"
};
var defaultEvents = {
  onClick: {
    type: ControlType.EventHandler
  },
  onMouseEnter: {
    type: ControlType.EventHandler
  },
  onMouseLeave: {
    type: ControlType.EventHandler
  }
};
var fontSizeOptions = {
  type: ControlType.Number,
  title: "Font Size",
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true
};
var fontControls = {
  font: {
    type: ControlType.Boolean,
    title: "Font",
    defaultValue: false,
    disabledTitle: "Default",
    enabledTitle: "Custom"
  },
  fontFamily: {
    type: ControlType.String,
    title: "Family",
    placeholder: "Inter",
    hidden: ({ font }) => !font
  },
  fontWeight: {
    type: ControlType.Enum,
    title: "Weight",
    options: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    optionTitles: [
      "Thin",
      "Extra-light",
      "Light",
      "Regular",
      "Medium",
      "Semi-bold",
      "Bold",
      "Extra-bold",
      "Black"
    ],
    hidden: ({ font }) => !font
  }
};

// http-url:https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget } from "./_framer-runtime.js";
import { useEffect } from "react";
function useOnEnter(onEnter, enabled) {
  return useOnSpecificTargetChange(true, onEnter, enabled);
}
function useOnExit(onExit, enabled) {
  return useOnSpecificTargetChange(false, onExit, enabled);
}
function useOnSpecificTargetChange(goal, callback, enabled = true) {
  const isInTarget = useIsInCurrentNavigationTarget();
  useEffect(() => {
    if (enabled && isInTarget === goal)
      callback();
  }, [
    isInTarget
  ]);
}

// http-url:https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React from "react";

// http-url:https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType2 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo } from "react";
var isBrowserSafari = () => {
  if (typeof __dai_navigator !== `undefined`) {
    const userAgent = __dai_navigator.userAgent.toLowerCase();
    const isSafari = (userAgent.indexOf("safari") > -1 || userAgent.indexOf("framermobile") > -1 || userAgent.indexOf("framerx") > -1) && userAgent.indexOf("chrome") < 0;
    return isSafari;
  } else
    return false;
};
var useIsBrowserSafari = () => useMemo(
  () => isBrowserSafari(),
  []
);

// http-url:https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect3 } from "react";

// http-url:https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect4, useRef as useRef2 } from "react";
import { motionValue, animate, RenderTarget } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore } from "./_framer-runtime.js";
import { useEffect as useEffect5 } from "react";

// http-url:https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2 } from "react";
import { RenderTarget as RenderTarget2 } from "./_framer-runtime.js";
function useRenderTarget() {
  const currentRenderTarget = useMemo2(
    () => RenderTarget2.current(),
    []
  );
  return currentRenderTarget;
}
function useIsOnCanvas() {
  const onCanvas = useMemo2(
    () => RenderTarget2.current() === RenderTarget2.canvas,
    []
  );
  return onCanvas;
}

// http-url:https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3 } from "react";
import { ControlType as ControlType3 } from "./_framer-runtime.js";
function useRadius(props) {
  const { borderRadius, isMixedBorderRadius, topLeftRadius, topRightRadius, bottomRightRadius, bottomLeftRadius } = props;
  const radiusValue = useMemo3(
    () => isMixedBorderRadius ? `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px` : `${borderRadius}px`,
    [
      borderRadius,
      isMixedBorderRadius,
      topLeftRadius,
      topRightRadius,
      bottomRightRadius,
      bottomLeftRadius
    ]
  );
  return radiusValue;
}
var borderRadiusControl = {
  borderRadius: {
    title: "Radius",
    type: ControlType3.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: [
      "Radius",
      "Radius per corner"
    ],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius"
    ],
    valueLabels: [
      "TL",
      "TR",
      "BR",
      "BL"
    ],
    min: 0
  }
};
var paddingControl = {
  padding: {
    type: ControlType3.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: [
      "Padding",
      "Padding per side"
    ],
    valueKeys: [
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft"
    ],
    valueLabels: [
      "T",
      "R",
      "B",
      "L"
    ],
    min: 0,
    title: "Padding"
  }
};

// http-url:https://framerusercontent.com/modules/lRDHiNWNVWmE0lqtoVHP/7qT0r3So12155VV5Jq5x/Video.js
import { memo, useCallback as useCallback2, useEffect as useEffect7, useMemo as useMemo4, useRef as useRef3, useState as useState3 } from "react";
var ObjectFitType;
(function(ObjectFitType2) {
  ObjectFitType2["Fill"] = "fill";
  ObjectFitType2["Contain"] = "contain";
  ObjectFitType2["Cover"] = "cover";
  ObjectFitType2["None"] = "none";
  ObjectFitType2["ScaleDown"] = "scale-down";
})(ObjectFitType || (ObjectFitType = {}));
var SrcType;
(function(SrcType2) {
  SrcType2["Video"] = "Upload";
  SrcType2["Url"] = "URL";
})(SrcType || (SrcType = {}));
var defaultVideo = "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4";
function getProps(props) {
  const { width, height, topLeft, topRight, bottomRight, bottomLeft, id, children, ...rest } = props;
  return rest;
}
function Video(props) {
  const newProps = getProps(props);
  return /* @__PURE__ */ _jsx(VideoMemo, { ...newProps });
}
function usePlaybackControls(videoRef) {
  const isInCurrentNavigationTarget = useIsInCurrentNavigationTarget2();
  const requestingPlay = useRef3(false);
  const isPlayingRef = useRef3(false);
  const setProgress = useCallback2((rawProgress) => {
    if (!videoRef.current)
      return;
    const newProgress = (rawProgress === 1 ? 0.999 : rawProgress) * videoRef.current.duration;
    const isAlreadySet = Math.abs(videoRef.current.currentTime - newProgress) < 0.1;
    if (videoRef.current.duration > 0 && !isAlreadySet) {
      videoRef.current.currentTime = newProgress;
    }
  }, []);
  const play = useCallback2(() => {
    const video = videoRef.current;
    if (!video)
      return;
    video.preload = "auto";
    const isPlaying = video.currentTime > 0 && video.onplaying && !video.paused && !video.ended && video.readyState >= video.HAVE_CURRENT_DATA;
    if (!isPlaying && video && !requestingPlay.current && isInCurrentNavigationTarget) {
      requestingPlay.current = true;
      isPlayingRef.current = true;
      video.play().catch((e) => {
      }).finally(() => requestingPlay.current = false);
    }
  }, []);
  const pause = useCallback2(() => {
    if (!videoRef.current || requestingPlay.current)
      return;
    videoRef.current.pause();
    isPlayingRef.current = false;
  }, []);
  return { play, pause, setProgress, isPlaying: isPlayingRef };
}
function useAutoplayBehavior({ playingProp, muted, loop, playsinline, controls }) {
  const [initialPlayingProp] = useState3(() => playingProp);
  const [hasPlayingPropChanged, setHasPlayingPropChanged] = useState3(false);
  if (playingProp !== initialPlayingProp && !hasPlayingPropChanged) {
    setHasPlayingPropChanged(true);
  }
  const behavesAsGif = (
    // passing `playing === true` on mount indicates that the video should
    // autoplay, like a GIF
    initialPlayingProp && muted && loop && playsinline && !controls && // Some users of the <Video> component use it by wrapping it with
    // another smart component and adding their own controls on top. (The
    // controls use transitions to control the video: e.g., when clicking
    // the play button, the smart component will transition to a state with
    // <Video playing={true} />.) In this case, we don't want the video to
    // behave as a gif, as it will be weird if the video suddenly started
    // acting as such (and auto-pausing when leaving the viewport) as soon
    // as the site visitor mutes it and clicks “Play”.
    !hasPlayingPropChanged
  );
  let autoplay;
  if (behavesAsGif)
    autoplay = "on-viewport";
  else if (initialPlayingProp)
    autoplay = "on-mount";
  else
    autoplay = "no-autoplay";
  return autoplay;
}
var VideoMemo = /* @__PURE__ */ memo(function VideoInner(props) {
  const {
    // default props
    srcType = "URL",
    srcUrl,
    srcFile = "",
    posterEnabled = false,
    controls = false,
    playing = true,
    loop = true,
    muted = true,
    playsinline = true,
    restartOnEnter = false,
    objectFit = "cover",
    backgroundColor = "rgba(0,0,0,0)",
    radius = 0,
    volume = 25,
    startTime: startTimeProp = 0,
    poster,
    playing: playingProp,
    progress,
    onSeeked,
    onPause,
    onPlay,
    onEnd,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp
  } = props;
  const videoRef = useRef3();
  const isSafari = useIsBrowserSafari();
  const wasPausedOnLeave = useRef3(null);
  const wasEndedOnLeave = useRef3(null);
  const isOnCanvas = useIsOnCanvas();
  const renderTarget = useRenderTarget();
  const isStaticRenderer = isOnCanvas || renderTarget === RenderTarget3.export;
  const borderRadius = useRadius(props);
  const autoplayBehavior = isStaticRenderer ? "no-autoplay" : useAutoplayBehavior({ playingProp, muted, loop, playsinline, controls });
  const isInViewport = isStaticRenderer ? true : useInView(videoRef);
  const isCloseToViewport = isStaticRenderer ? false : useInView(videoRef, { margin: "10%", once: true });
  const startTime = startTimeProp === 100 ? 99.9 : startTimeProp;
  const { play, pause, setProgress, isPlaying } = usePlaybackControls(videoRef);
  useEffect7(() => {
    if (isStaticRenderer)
      return;
    if (autoplayBehavior === "on-viewport")
      return;
    if (playingProp)
      play();
    else
      pause();
  }, [autoplayBehavior, playingProp]);
  useEffect7(() => {
    if (isStaticRenderer)
      return;
    if (isInViewport && playingProp && autoplayBehavior !== "no-autoplay")
      play();
    if (autoplayBehavior !== "on-viewport")
      return;
    pause();
  }, [autoplayBehavior, isInViewport, playingProp]);
  useEffect7(() => {
    if (!isOnCanvas || poster || posterEnabled || startTime || !videoRef.current)
      return;
    videoRef.current.currentTime = 0.01;
  }, [posterEnabled, poster, startTime]);
  const isMountedAndReadyForProgressChanges = useRef3(false);
  useEffect7(() => {
    if (!isMountedAndReadyForProgressChanges.current) {
      isMountedAndReadyForProgressChanges.current = true;
      return;
    }
    const rawProgressValue = isMotionValue2(progress) ? progress.get() : (progress ?? 0) * 0.01;
    setProgress(
      // When the progress value exists (e.g. <Video startTime={10}
      // progress={50} />), we respect the `progress` value over
      // `startTime`, even if `startTime` changes. That’s because
      // `startTime` == start == changing it shouldn’t affect the current
      // progress
      (rawProgressValue ?? 0) || // Then why fall back to `startTime` when `progress` doesn’t exist,
      // you might ask? Now, that’s for
      // - canvas UX: we want the video progress to change when the user
      //   is scrobbling the “Start Time” in component settings.
      // - backwards compatibility: maybe some users *are* scrobbling
      //   using `startTime` instead of `progress`? We don’t know, and it
      //   always supported it, so let’s not break it
      (startTime ?? 0) / 100
    );
  }, [startTime, srcFile, srcUrl, progress]);
  useEffect7(() => {
    if (!isMotionValue2(progress))
      return;
    return progress.on("change", (value) => setProgress(value));
  }, [progress]);
  useOnEnter(() => {
    if (wasPausedOnLeave.current === null)
      return;
    if (videoRef.current) {
      if (!wasEndedOnLeave && loop || !wasPausedOnLeave.current)
        play();
    }
  });
  useOnExit(() => {
    if (videoRef.current) {
      wasEndedOnLeave.current = videoRef.current.ended;
      wasPausedOnLeave.current = videoRef.current.paused;
      pause();
    }
  });
  const src = useMemo4(() => {
    let fragment = "";
    if (srcType === "URL")
      return srcUrl + fragment;
    if (srcType === "Upload")
      return srcFile + fragment;
  }, [srcType, srcFile, srcUrl, startTime]);
  useEffect7(() => {
    if (isSafari && videoRef.current && autoplayBehavior === "on-mount") {
      setTimeout(() => play(), 50);
    }
  }, []);
  useEffect7(() => {
    if (videoRef.current && !muted)
      videoRef.current.volume = (volume ?? 0) / 100;
  }, [volume]);
  const handleReady = () => {
    const video = videoRef.current;
    if (!video)
      return;
    if (video.currentTime < 0.3 && startTime > 0)
      setProgress((startTime ?? 0) * 0.01);
    if (
      // when the component updates (e.g. only srcFile/url changes), and the video was already playing, keep playing
      isPlaying.current || autoplayBehavior === "on-mount" || playingProp && autoplayBehavior === "on-viewport" && isInViewport
    )
      play();
  };
  return /* @__PURE__ */ _jsx("video", { onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, src, loop, ref: videoRef, onSeeked: (e) => onSeeked?.(e), onPause: (e) => onPause?.(e), onPlay: (e) => onPlay?.(e), onEnded: (e) => onEnd?.(e), autoPlay: isPlaying.current || autoplayBehavior === "on-mount" || playingProp && autoplayBehavior === "on-viewport" && isInViewport, preload: isPlaying.current ? "auto" : isStaticRenderer && !poster ? "metadata" : autoplayBehavior !== "on-mount" && !isCloseToViewport ? "none" : (
    // `autoplay` overrides this too
    "metadata"
  ), poster: posterEnabled && !srcFile && srcUrl === defaultVideo ? "https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg" : posterEnabled && poster ? poster : void 0, onLoadedData: handleReady, controls, muted: isStaticRenderer ? true : muted, playsInline: playsinline, style: { cursor: !!onClick ? "pointer" : "auto", width: "100%", height: "100%", borderRadius, display: "block", objectFit, backgroundColor, objectPosition: "50% 50%" } });
});
Video.displayName = "Video";
function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
function titleCase(value) {
  const groups = value.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [];
  return groups.map(capitalizeFirstLetter).join(" ");
}
var objectFitOptions = ["cover", "fill", "contain", "scale-down", "none"];
addPropertyControls(Video, {
  srcType: { type: ControlType4.Enum, displaySegmentedControl: true, title: "Source", options: ["URL", "Upload"] },
  srcUrl: { type: ControlType4.String, title: "URL", defaultValue: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4", hidden(props) {
    return props.srcType === "Upload";
  } },
  srcFile: { type: ControlType4.File, title: "File", allowedFileTypes: ["mp4", "webm"], hidden(props) {
    return props.srcType === "URL";
  } },
  playing: { type: ControlType4.Boolean, title: "Playing", enabledTitle: "Yes", disabledTitle: "No" },
  ...borderRadiusControl,
  posterEnabled: { type: ControlType4.Boolean, title: "Poster", enabledTitle: "Yes", disabledTitle: "No" },
  poster: { type: ControlType4.Image, title: "Image", hidden: ({ posterEnabled }) => !posterEnabled, description: "We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/)." },
  backgroundColor: { type: ControlType4.Color, title: "Background", defaultValue: "rgba(0,0,0,0)" },
  startTime: { title: "Start Time", type: ControlType4.Number, min: 0, max: 100, step: 0.1, unit: "%" },
  loop: { type: ControlType4.Boolean, title: "Loop", enabledTitle: "Yes", disabledTitle: "No" },
  objectFit: { type: ControlType4.Enum, title: "Fit", options: objectFitOptions, optionTitles: objectFitOptions.map(titleCase) },
  // restartOnEnter: {
  //     type: ControlType.Boolean,
  //     title: "On ReEnter",
  //     enabledTitle: "Restart",
  //     disabledTitle: "Resume",
  // },
  controls: { type: ControlType4.Boolean, title: "Controls", enabledTitle: "Show", disabledTitle: "Hide", defaultValue: false },
  muted: { type: ControlType4.Boolean, title: "Muted", enabledTitle: "Yes", disabledTitle: "No" },
  volume: { type: ControlType4.Number, max: 100, min: 0, unit: "%", hidden: ({ muted }) => muted, defaultValue: 25 },
  onEnd: { type: ControlType4.EventHandler },
  onSeeked: { type: ControlType4.EventHandler },
  onPause: { type: ControlType4.EventHandler },
  onPlay: { type: ControlType4.EventHandler },
  ...defaultEvents
});

// http-url:https://framerusercontent.com/modules/y4Qp2BV8TeAbEs4CeKnt/7dkjfvsGmWnqsD3aQZLL/OzPOKBmWD.js
var VideoFonts = getFonts(Video);
var VideoControls = getPropertyControls(Video);
var cycleOrder = ["xVwUJ5o7w", "vUQAa1jEG"];
var serializationHash = "framer-BR2sy";
var variantClassNames = { vUQAa1jEG: "framer-v-1osidj5", xVwUJ5o7w: "framer-v-pdq5yy" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0, delay: 0, duration: 0.6, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React3.Fragment);
var humanReadableVariantMap = { "Image ": "xVwUJ5o7w", Video: "vUQAa1jEG" };
var getProps2 = ({ file, height, id, image, width, ...props }) => {
  return { ...props, B1_4iG1nE: image ?? props.B1_4iG1nE ?? { pixelHeight: 1337, pixelWidth: 1080, src: "https://framerusercontent.com/images/DFMYuERcJoJGVvcvbEs1kwyBdYM.png?scale-down-to=512&width=1080&height=1337", srcSet: "https://framerusercontent.com/images/DFMYuERcJoJGVvcvbEs1kwyBdYM.png?scale-down-to=1024&width=1080&height=1337 827w,https://framerusercontent.com/images/DFMYuERcJoJGVvcvbEs1kwyBdYM.png?width=1080&height=1337 1080w" }, iIr66hNrH: file ?? props.iIr66hNrH, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "xVwUJ5o7w" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, B1_4iG1nE, iIr66hNrH, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "xVwUJ5o7w", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "vUQAa1jEG")
      return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "vUQAa1jEG")
      return false;
    return true;
  };
  return /* @__PURE__ */ _jsx2(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-pdq5yy", className, classNames), "data-framer-name": "Image ", draggable: "false", layoutDependency, layoutId: "VideoCard__xVwUJ5o7w", ref: refBinding, style: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, ...style }, ...addPropertyOverrides({ vUQAa1jEG: { "data-framer-name": "Video" } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, { className: "framer-58atnu-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "VideoCard__Y7F7BP_kX-container", nodeId: "Y7F7BP_kX", rendersWithMotion: true, scopeId: "OzPOKBmWD", children: /* @__PURE__ */ _jsx2(Video, { backgroundColor: "var(--token-36ee2a1e-0245-4ebd-b64e-c29cac1b6d1a, rgb(224, 224, 224))", borderRadius: 0, bottomLeftRadius: 0, bottomRightRadius: 0, controls: false, height: "100%", id: "Y7F7BP_kX", isMixedBorderRadius: false, layoutId: "VideoCard__Y7F7BP_kX", loop: true, muted: true, objectFit: "cover", playing: true, posterEnabled: true, srcFile: iIr66hNrH, srcType: "Upload", srcUrl: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4", startTime: 0, style: { height: "100%", width: "100%" }, topLeftRadius: 0, topRightRadius: 0, volume: 25, width: "100%" }) }) }), isDisplayed1() && /* @__PURE__ */ _jsx2(Image, { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (0 + ((componentViewport?.height || 191) - 0 - ((componentViewport?.height || 191) - 0) * 1) / 2)), sizes: `max(${componentViewport?.width || "100vw"}, 1px)`, ...toResponsiveImage(B1_4iG1nE) }, className: "framer-1brd6fz", draggable: "false", layoutDependency, layoutId: "VideoCard__MnGebX8lR" })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BR2sy.framer-2o3t5k, .framer-BR2sy .framer-2o3t5k { display: block; }", ".framer-BR2sy.framer-pdq5yy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-BR2sy .framer-58atnu-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }", ".framer-BR2sy .framer-1brd6fz { flex: 1 0 0px; height: 100%; overflow: visible; position: relative; width: 1px; }"];
var FramerOzPOKBmWD = withCSS(Component, css, "framer-BR2sy");
var OzPOKBmWD_default = FramerOzPOKBmWD;
FramerOzPOKBmWD.displayName = "Video Card";
FramerOzPOKBmWD.defaultProps = { height: 191, width: 171 };
addPropertyControls2(FramerOzPOKBmWD, { variant: { options: ["xVwUJ5o7w", "vUQAa1jEG"], optionTitles: ["Image ", "Video"], title: "Variant", type: ControlType5.Enum }, B1_4iG1nE: { __defaultAssetReference: "data:framer/asset-reference,DFMYuERcJoJGVvcvbEs1kwyBdYM.png?originalFilename=01.png&preferredSize=auto", title: "Image", type: ControlType5.ResponsiveImage }, iIr66hNrH: VideoControls?.["srcFile"] && { ...VideoControls["srcFile"], __defaultAssetReference: "", description: void 0, hidden: void 0, title: "File" } });
addFonts(FramerOzPOKBmWD, [{ explicitInter: true, fonts: [] }, ...VideoFonts], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerOzPOKBmWD", "slots": [], "annotations": { "framerIntrinsicWidth": "171", "framerIntrinsicHeight": "191", "framerVariables": '{"B1_4iG1nE":"image","iIr66hNrH":"file"}', "framerContractVersion": "1", "framerComponentViewportWidth": "true", "framerImmutableVariables": "true", "framerDisplayContentsDiv": "false", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"vUQAa1jEG":{"layout":["fixed","fixed"]}}}', "framerColorSyntax": "true", "framerAutoSizeImages": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  OzPOKBmWD_default as default
};
