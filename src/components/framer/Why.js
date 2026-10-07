var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/krflm6uMKLZ6B9FhevSR/9Ird4NLfcORdgMcz6wvu/lOvvyCnYE.js
import { jsx as _jsx11 } from "react/jsx-runtime";
import { addFonts as addFonts8, addPropertyControls as addPropertyControls6, ComponentViewportProvider as ComponentViewportProvider7, ControlType as ControlType10, cx as cx8, forwardLoader as forwardLoader5, getFonts as getFonts7, runTasksWithYield as runTasksWithYield5, SmartComponentScopedContainer as SmartComponentScopedContainer7, useComponentViewport as useComponentViewport8, useLocaleInfo as useLocaleInfo8, useVariantState as useVariantState8, withCSS as withCSS8 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup8, motion as motion9, MotionConfigContext as MotionConfigContext8 } from "framer-motion";
import * as React12 from "react";
import { useRef as useRef12 } from "react";

// http-url:https://framerusercontent.com/modules/A5Pkr6482SQrrbgzaUrq/f6xZ6mlSh4chijnl3FAZ/Z_P4oNiOt.js
import { jsx as _jsx10, jsxs as _jsxs6 } from "react/jsx-runtime";
import { addFonts as addFonts7, ComponentViewportProvider as ComponentViewportProvider6, cx as cx7, forwardLoader as forwardLoader4, getFonts as getFonts6, runTasksWithYield as runTasksWithYield4, SmartComponentScopedContainer as SmartComponentScopedContainer6, useComponentViewport as useComponentViewport7, useLocaleInfo as useLocaleInfo7, useVariantState as useVariantState7, withCSS as withCSS7 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup7, motion as motion8, MotionConfigContext as MotionConfigContext7 } from "framer-motion";
import * as React11 from "react";
import { useRef as useRef11 } from "react";

// http-url:https://framerusercontent.com/modules/vf7tu7gCCV1gZKzX6YCq/uOrSvKZMRycOAMVhk0JZ/AXXxXvFux.js
import { jsx as _jsx6, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts5, ComponentViewportProvider as ComponentViewportProvider4, cx as cx5, forwardLoader as forwardLoader3, getFonts as getFonts4, runTasksWithYield as runTasksWithYield3, SmartComponentScopedContainer as SmartComponentScopedContainer4, useComponentViewport as useComponentViewport5, useLocaleInfo as useLocaleInfo5, useVariantState as useVariantState5, withCSS as withCSS5 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup5, motion as motion5, MotionConfigContext as MotionConfigContext5 } from "framer-motion";
import * as React7 from "react";
import { useRef as useRef8 } from "react";

// http-url:https://framerusercontent.com/modules/BFvVYmQx3INyBfPMFHYQ/5EP3eWfR7YoGtBSx3Mkz/pBl8WFKvl.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addFonts as addFonts2, ComponentViewportProvider as ComponentViewportProvider2, cx as cx2, forwardLoader, getFonts as getFonts2, runTasksWithYield, SmartComponentScopedContainer as SmartComponentScopedContainer2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2, withFX } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React4 from "react";
import { useRef as useRef5 } from "react";

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
  const { style, className: className5, layoutId, variant, B1_4iG1nE, iIr66hNrH, ...restProps } = getProps2(props);
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
  return /* @__PURE__ */ _jsx2(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-pdq5yy", className5, classNames), "data-framer-name": "Image ", draggable: "false", layoutDependency, layoutId: "WhyChoose__xVwUJ5o7w", ref: refBinding, style: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, ...style }, ...addPropertyOverrides({ vUQAa1jEG: { "data-framer-name": "Video" } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, { className: "framer-58atnu-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "WhyChoose__Y7F7BP_kX-container", nodeId: "Y7F7BP_kX", rendersWithMotion: true, scopeId: "OzPOKBmWD", children: /* @__PURE__ */ _jsx2(Video, { backgroundColor: "var(--token-36ee2a1e-0245-4ebd-b64e-c29cac1b6d1a, rgb(224, 224, 224))", borderRadius: 0, bottomLeftRadius: 0, bottomRightRadius: 0, controls: false, height: "100%", id: "Y7F7BP_kX", isMixedBorderRadius: false, layoutId: "WhyChoose__Y7F7BP_kX", loop: true, muted: true, objectFit: "cover", playing: true, posterEnabled: true, srcFile: iIr66hNrH, srcType: "Upload", srcUrl: "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4", startTime: 0, style: { height: "100%", width: "100%" }, topLeftRadius: 0, topRightRadius: 0, volume: 25, width: "100%" }) }) }), isDisplayed1() && /* @__PURE__ */ _jsx2(Image, { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (0 + ((componentViewport?.height || 191) - 0 - ((componentViewport?.height || 191) - 0) * 1) / 2)), sizes: `max(${componentViewport?.width || "100vw"}, 1px)`, ...toResponsiveImage(B1_4iG1nE) }, className: "framer-1brd6fz", draggable: "false", layoutDependency, layoutId: "WhyChoose__MnGebX8lR" })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-BR2sy.framer-2o3t5k, .framer-BR2sy .framer-2o3t5k { display: block; }", ".framer-BR2sy.framer-pdq5yy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-BR2sy .framer-58atnu-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }", ".framer-BR2sy .framer-1brd6fz { flex: 1 0 0px; height: 100%; overflow: visible; position: relative; width: 1px; }"];
var FramerOzPOKBmWD = withCSS(Component, css, "framer-BR2sy");
var OzPOKBmWD_default = FramerOzPOKBmWD;
FramerOzPOKBmWD.displayName = "Video Card";
FramerOzPOKBmWD.defaultProps = { height: 191, width: 171 };
addPropertyControls2(FramerOzPOKBmWD, { variant: { options: ["xVwUJ5o7w", "vUQAa1jEG"], optionTitles: ["Image ", "Video"], title: "Variant", type: ControlType5.Enum }, B1_4iG1nE: { __defaultAssetReference: "data:framer/asset-reference,DFMYuERcJoJGVvcvbEs1kwyBdYM.png?originalFilename=01.png&preferredSize=auto", title: "Image", type: ControlType5.ResponsiveImage }, iIr66hNrH: VideoControls?.["srcFile"] && { ...VideoControls["srcFile"], __defaultAssetReference: "", description: void 0, hidden: void 0, title: "File" } });
addFonts(FramerOzPOKBmWD, [{ explicitInter: true, fonts: [] }, ...VideoFonts], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/BFvVYmQx3INyBfPMFHYQ/5EP3eWfR7YoGtBSx3Mkz/pBl8WFKvl.js
var VideoCardFonts = getFonts2(OzPOKBmWD_default);
var SmartComponentScopedContainerWithFX = withFX(SmartComponentScopedContainer2);
var serializationHash2 = "framer-8kyNt";
var variantClassNames2 = { TWvAeY7kS: "framer-v-1d2qz48" };
var transition12 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var animation = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 48 };
var transition2 = { damping: 20, delay: 0, mass: 2, stiffness: 120, type: "spring" };
var addImageAlt = (image, alt) => {
  if (!image || typeof image !== "object") {
    return;
  }
  return { ...image, alt };
};
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var Transition2 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion2.create(React4.Fragment);
var getProps3 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef5(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className5, layoutId, variant, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ defaultVariant: "TWvAeY7kS", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx3(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx3(motion2.div, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-1d2qz48", className5, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "WhyChoose__TWvAeY7kS", ref: refBinding, style: { ...style }, children: /* @__PURE__ */ _jsx3(ComponentViewportProvider2, { height: Math.max(0, ((componentViewport?.height || 168) - 0 - 0) / 1) * 1, width: `min(${componentViewport?.width || "100vw"}, 248px)`, y: (componentViewport?.y || 0) + 0 + 0, children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainerWithFX, { __framer__animate: { transition: transition2 }, __framer__animateOnce: true, __framer__enter: animation, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.5, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-f65l30-container", layoutDependency, layoutId: "WhyChoose__fACgW1ja8-container", nodeId: "fACgW1ja8", rendersWithMotion: true, scopeId: "pBl8WFKvl", children: /* @__PURE__ */ _jsx3(OzPOKBmWD_default, { B1_4iG1nE: addImageAlt({ pixelHeight: 1337, pixelWidth: 1080, src: "https://framerusercontent.com/images/DFMYuERcJoJGVvcvbEs1kwyBdYM.png?width=1080&height=1337", srcSet: "https://framerusercontent.com/images/DFMYuERcJoJGVvcvbEs1kwyBdYM.png?scale-down-to=1024&width=1080&height=1337 827w,https://framerusercontent.com/images/DFMYuERcJoJGVvcvbEs1kwyBdYM.png?width=1080&height=1337 1080w" }, "Room"), height: "100%", id: "fACgW1ja8", iIr66hNrH: "https://framerusercontent.com/assets/EQ0iP9SdXrwc0V8XuyB6jkfYU0.mp4", layoutId: "WhyChoose__fACgW1ja8", style: { height: "100%", maxWidth: "100%", width: "100%" }, variant: matchVariant("vUQAa1jEG"), width: "100%" }) }) }) }) }) }) });
});
var css2 = [".framer-8kyNt.framer-iyabm7, .framer-8kyNt .framer-iyabm7 { display: block; }", ".framer-8kyNt.framer-1d2qz48 { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: auto; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-8kyNt .framer-f65l30-container { flex: 1 0 0px; height: 1px; max-width: 248px; position: relative; width: 100%; z-index: 1; }"];
var FramerpBl8WFKvl = withCSS2(Component2, css2, "framer-8kyNt");
var pBl8WFKvl_default = FramerpBl8WFKvl;
FramerpBl8WFKvl.displayName = "Right";
FramerpBl8WFKvl.defaultProps = { height: 168, width: 351 };
addFonts2(FramerpBl8WFKvl, [{ explicitInter: true, fonts: [] }, ...VideoCardFonts], { supportsExplicitInterCodegen: true });
FramerpBl8WFKvl.loader = { load: (props, context) => {
  return runTasksWithYield([() => forwardLoader(OzPOKBmWD_default, {}, context)], context);
} };

// http-url:https://framerusercontent.com/modules/XRAdFozIVGPL5vV6KWN3/lkc79qfGQQTYnaapxXfh/RgRhigsOB.js
import { jsx as _jsx5, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts4, ComponentViewportProvider as ComponentViewportProvider3, cx as cx4, forwardLoader as forwardLoader2, getFonts as getFonts3, getFontsFromSharedStyle as getFontsFromSharedStyle2, RichText as RichText2, runTasksWithYield as runTasksWithYield2, SmartComponentScopedContainer as SmartComponentScopedContainer3, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS4, withFX as withFX2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React6 from "react";
import { useRef as useRef7 } from "react";

// http-url:https://framerusercontent.com/modules/swlyWn9EPPRyzCzrgIpQ/Xfm5BgDqCMGO915g0262/ORsURQZGk.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["CUSTOMV2;Dr Boysk DEMO VERSION Regular"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Dr Boysk DEMO VERSION Regular", source: "custom", style: "normal", uiFamilyName: "Dr Boysk DEMO VERSION", url: "https://framerusercontent.com/assets/mWWjGWLDqhT86Z0oR22SYszkRA0.woff2", weight: "400" }] }];
var css3 = [`.framer-sGFoJ .framer-styles-preset-18a6hfr:not(.rich-text-wrapper), .framer-sGFoJ .framer-styles-preset-18a6hfr.rich-text-wrapper h2 { --framer-font-family: "Dr Boysk DEMO VERSION Regular", "Dr Boysk DEMO VERSION Regular Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 106px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 120px; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-background-padding: 0px 0px 8px 0px; --framer-text-color: var(--token-8a650152-2d6e-46ea-8610-9e6ba7a473d7, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-sGFoJ .framer-styles-preset-18a6hfr:not(.rich-text-wrapper), .framer-sGFoJ .framer-styles-preset-18a6hfr.rich-text-wrapper h2 { --framer-font-family: "Dr Boysk DEMO VERSION Regular", "Dr Boysk DEMO VERSION Regular Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 92px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 120px; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-background-padding: 0px 0px 8px 0px; --framer-text-color: var(--token-8a650152-2d6e-46ea-8610-9e6ba7a473d7, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-sGFoJ .framer-styles-preset-18a6hfr:not(.rich-text-wrapper), .framer-sGFoJ .framer-styles-preset-18a6hfr.rich-text-wrapper h2 { --framer-font-family: "Dr Boysk DEMO VERSION Regular", "Dr Boysk DEMO VERSION Regular Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 76px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 100%; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-background-padding: 0px 0px 8px 0px; --framer-text-color: var(--token-8a650152-2d6e-46ea-8610-9e6ba7a473d7, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className = "framer-sGFoJ";

// http-url:https://framerusercontent.com/modules/qgBmwB27Q9IiEnwuoy38/a5WagDdsNtXPCtWXDqzk/gSxc6YmO3.js
import { jsx as _jsx4, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls3, ControlType as ControlType6, cx as cx3, getFontsFromSharedStyle, RichText, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS3 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React5 from "react";
import { useRef as useRef6 } from "react";

// http-url:https://framerusercontent.com/modules/ahM2SWkn4sJyfeE1lutn/KgtbCO2QBm2qPTNkaBBE/YrK0iTyFl.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["FS;Outfit-regular", "FS;Outfit-bold"]);
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/RPEPC24XXAVK6EWUOKWQUPTOZQR35AS2/BVWMEQ5ZCLZP2VOXOHXQDCZADXNFBXUF/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2", weight: "400" }, { cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EUV6IZMPXOYBUY6KFIXKZWM47ESY5XYA/BLW2AGODUKQKRMYEVOEMMPY2ITRKBJIP/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2", weight: "700" }] }];
var css4 = [`.framer-JioR5 .framer-styles-preset-kz4is:not(.rich-text-wrapper), .framer-JioR5 .framer-styles-preset-kz4is.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-background-padding: 0px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className2 = "framer-JioR5";

// http-url:https://framerusercontent.com/modules/qgBmwB27Q9IiEnwuoy38/a5WagDdsNtXPCtWXDqzk/gSxc6YmO3.js
var cycleOrder2 = ["ny16f_1Qt", "dRf5fsK5Q"];
var serializationHash3 = "framer-pyQ6s";
var variantClassNames3 = { dRf5fsK5Q: "framer-v-cvhq57", ny16f_1Qt: "framer-v-cbep67" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition3 = ({ value, children }) => {
  const config = React5.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext3.Provider, { value: contextValue, children });
};
var Variants3 = motion3.create(React5.Fragment);
var humanReadableEnumMap = { "Space Around": "space-around", "Space Between": "space-between", "Space Evenly": "space-evenly", Center: "center", End: "flex-end", Start: "flex-start" };
var humanReadableVariantMap2 = { Dark: "ny16f_1Qt", Light: "dRf5fsK5Q" };
var getProps4 = ({ distribute, height, id, number, numbersVisibility, title, width, ...props }) => {
  return { ...props, bvYUJxwf_: humanReadableEnumMap[distribute] ?? distribute ?? props.bvYUJxwf_ ?? "center", dg_MYFFcN: title ?? props.dg_MYFFcN ?? "Why Chose Us", sfwFpE6pf: numbersVisibility ?? props.sfwFpE6pf ?? true, uScxfp93T: number ?? props.uScxfp93T ?? "(01)", variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "ny16f_1Qt" };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  const fallbackRef = useRef6(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React5.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className5, layoutId, variant, uScxfp93T, dg_MYFFcN, bvYUJxwf_, sfwFpE6pf, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder: cycleOrder2, defaultVariant: "ny16f_1Qt", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [className2];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx4(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition3, { value: transition13, children: /* @__PURE__ */ _jsx4(motion3.div, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-cbep67", className5, classNames), "data-framer-name": "Dark", layoutDependency, layoutId: "WhyChoose__ny16f_1Qt", ref: refBinding, style: { "--12yaqsb": bvYUJxwf_, ...style }, ...addPropertyOverrides2({ dRf5fsK5Q: { "data-framer-name": "Light" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsxs2(motion3.div, { className: "framer-bxrr88", layoutDependency, layoutId: "WhyChoose__eUCjFBMtu", children: [sfwFpE6pf && /* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React5.Fragment, { children: /* @__PURE__ */ _jsx4(motion3.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23)))" }, children: "(01)" }) }), className: "framer-d19cxl", "data-framer-name": "Number", fonts: ["Inter"], layoutDependency, layoutId: "WhyChoose__qWE8tmRgW", style: { "--extracted-r6o4lv": "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23))", "--framer-paragraph-spacing": "0px" }, text: uScxfp93T, variants: { dRf5fsK5Q: { "--extracted-r6o4lv": "var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255))" } }, verticalAlignment: "center", withExternalLayout: true, ...addPropertyOverrides2({ dRf5fsK5Q: { children: /* @__PURE__ */ _jsx4(React5.Fragment, { children: /* @__PURE__ */ _jsx4(motion3.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "(01)" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx4(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React5.Fragment, { children: /* @__PURE__ */ _jsx4(motion3.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23)))" }, children: "Why Chose Us" }) }), className: "framer-7fpjss", "data-framer-name": "Title", fonts: ["Inter"], layoutDependency, layoutId: "WhyChoose__Urld2SqNO", style: { "--extracted-r6o4lv": "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23))", "--framer-paragraph-spacing": "0px" }, text: dg_MYFFcN, variants: { dRf5fsK5Q: { "--extracted-r6o4lv": "var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255))" } }, verticalAlignment: "center", withExternalLayout: true, ...addPropertyOverrides2({ dRf5fsK5Q: { children: /* @__PURE__ */ _jsx4(React5.Fragment, { children: /* @__PURE__ */ _jsx4(motion3.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "Why Chose Us" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-pyQ6s.framer-4wbaef, .framer-pyQ6s .framer-4wbaef { display: block; }", ".framer-pyQ6s.framer-cbep67 { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: var(--12yaqsb); overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-pyQ6s .framer-bxrr88 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-pyQ6s .framer-d19cxl, .framer-pyQ6s .framer-7fpjss { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-pyQ6s.framer-v-cvhq57 .framer-d19cxl { order: 0; }", ".framer-pyQ6s.framer-v-cvhq57 .framer-7fpjss { order: 1; }", ...css4];
var FramergSxc6YmO3 = withCSS3(Component3, css5, "framer-pyQ6s");
var gSxc6YmO3_default = FramergSxc6YmO3;
FramergSxc6YmO3.displayName = "Subtitle";
FramergSxc6YmO3.defaultProps = { height: 22, width: 130 };
addPropertyControls3(FramergSxc6YmO3, { variant: { options: ["ny16f_1Qt", "dRf5fsK5Q"], optionTitles: ["Dark", "Light"], title: "Variant", type: ControlType6.Enum }, uScxfp93T: { defaultValue: "(01)", displayTextArea: false, title: "Number", type: ControlType6.String }, dg_MYFFcN: { defaultValue: "Why Chose Us", displayTextArea: false, title: "Title", type: ControlType6.String }, bvYUJxwf_: { defaultValue: "center", options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"], optionTitles: ["Start", "Center", "End", "Space Between", "Space Around", "Space Evenly"], title: "Distribute", type: ControlType6.Enum }, sfwFpE6pf: { defaultValue: true, title: "Numbers Visibility", type: ControlType6.Boolean } });
addFonts3(FramergSxc6YmO3, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/XRAdFozIVGPL5vV6KWN3/lkc79qfGQQTYnaapxXfh/RgRhigsOB.js
var SubtitleFonts = getFonts3(gSxc6YmO3_default);
var MotionDivWithFX = withFX2(motion4.div);
var serializationHash4 = "framer-eBC6u";
var variantClassNames4 = { J4ZDfQ1BI: "framer-v-isxc0x" };
var animation2 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 48 };
var transition14 = { damping: 20, delay: 0, mass: 2, stiffness: 120, type: "spring" };
var transition22 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var matchVariant2 = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var animation1 = { opacity: 1e-3, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 30 };
var transition3 = { damping: 60, delay: 0.1, mass: 1, stiffness: 300, type: "spring" };
var textEffect = { effect: animation1, repeat: false, startDelay: 0, threshold: 0.5, tokenization: "word", transition: transition3, trigger: "onInView", type: "appear" };
var Transition4 = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext4.Provider, { value: contextValue, children });
};
var Variants4 = motion4.create(React6.Fragment);
var getProps5 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const fallbackRef = useRef7(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React6.useId();
  const { activeLocale, setLocale } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const { style, className: className5, layoutId, variant, ...restProps } = getProps5(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ defaultVariant: "J4ZDfQ1BI", ref: refBinding, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx4(serializationHash4, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx5(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition4, { value: transition22, children: /* @__PURE__ */ _jsxs3(MotionDivWithFX, { ...restProps, ...gestureHandlers, __framer__animate: { transition: transition14 }, __framer__animateOnce: true, __framer__enter: animation2, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.5, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: cx4(scopingClassNames, "framer-isxc0x", className5, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "WhyChoose__J4ZDfQ1BI", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsx5(ComponentViewportProvider3, { height: 22, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + 0 + 0, children: /* @__PURE__ */ _jsx5(SmartComponentScopedContainer3, { className: "framer-i1msch-container", layoutDependency, layoutId: "WhyChoose__AVTrw6pxE-container", nodeId: "AVTrw6pxE", rendersWithMotion: true, scopeId: "RgRhigsOB", children: /* @__PURE__ */ _jsx5(gSxc6YmO3_default, { bvYUJxwf_: "flex-start", dg_MYFFcN: "Why Choose Keffini", height: "100%", id: "AVTrw6pxE", layoutId: "WhyChoose__AVTrw6pxE", sfwFpE6pf: true, style: { width: "100%" }, uScxfp93T: "(03)", variant: matchVariant2("ny16f_1Qt"), width: "100%" }) }) }), /* @__PURE__ */ _jsx5(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React6.Fragment, { children: /* @__PURE__ */ _jsx5(motion4.h2, { className: "framer-styles-preset-18a6hfr", "data-styles-preset": "ORsURQZGk", dir: "auto", style: { "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(10, 10, 10)))" }, children: "Why Keffini?" }) }), className: "framer-12cc86w", effect: textEffect, fonts: ["Inter"], layoutDependency, layoutId: "WhyChoose__QZ7qSwMC3", style: { "--extracted-1of0zx5": "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(10, 10, 10))", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "center", withExternalLayout: true })] }) }) }) });
});
var css6 = [".framer-eBC6u.framer-1q7x5vc, .framer-eBC6u .framer-1q7x5vc { display: block; }", ".framer-eBC6u.framer-isxc0x { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 17px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-eBC6u .framer-i1msch-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-eBC6u .framer-12cc86w { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ...css3];
var FramerRgRhigsOB = withCSS4(Component4, css6, "framer-eBC6u");
var RgRhigsOB_default = FramerRgRhigsOB;
FramerRgRhigsOB.displayName = "Text 3";
FramerRgRhigsOB.defaultProps = { height: 167, width: 711 };
addFonts4(FramerRgRhigsOB, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...SubtitleFonts, ...getFontsFromSharedStyle2(fonts)], { supportsExplicitInterCodegen: true });
FramerRgRhigsOB.loader = { load: (props, context) => {
  return runTasksWithYield2([() => forwardLoader2(gSxc6YmO3_default, {}, context)], context);
} };

// http-url:https://framerusercontent.com/modules/vf7tu7gCCV1gZKzX6YCq/uOrSvKZMRycOAMVhk0JZ/AXXxXvFux.js
var Text3Fonts = getFonts4(RgRhigsOB_default);
var RightFonts = getFonts4(pBl8WFKvl_default);
var serializationHash5 = "framer-cn3Vn";
var variantClassNames5 = { U0pvHl0Sn: "framer-v-1ubl94p" };
var transition15 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition5 = ({ value, children }) => {
  const config = React7.useContext(MotionConfigContext5);
  const transition = value ?? config.transition;
  const contextValue = React7.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx6(MotionConfigContext5.Provider, { value: contextValue, children });
};
var Variants5 = motion5.create(React7.Fragment);
var getProps6 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency5 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = /* @__PURE__ */ React7.forwardRef(function(props, ref) {
  const fallbackRef = useRef8(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React7.useId();
  const { activeLocale, setLocale } = useLocaleInfo5();
  const componentViewport = useComponentViewport5();
  const { style, className: className5, layoutId, variant, ...restProps } = getProps6(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState5({ defaultVariant: "U0pvHl0Sn", ref: refBinding, variant, variantClassNames: variantClassNames5 });
  const layoutDependency = createLayoutDependency5(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx5(serializationHash5, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx6(LayoutGroup5, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx6(Variants5, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx6(Transition5, { value: transition15, children: /* @__PURE__ */ _jsxs4(motion5.div, { ...restProps, ...gestureHandlers, className: cx5(scopingClassNames, "framer-1ubl94p", className5, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "WhyChoose__U0pvHl0Sn", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsx6(ComponentViewportProvider4, { height: 167, width: `calc(max((${componentViewport?.width || "100vw"} - 20px) / 3, 50px) * 2 + 10px)`, y: (componentViewport?.y || 0) + 0 + (0 * (((componentViewport?.height || 167) - 0 - 0) / 1) + 0 + 0), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer4, { className: "framer-15a42gi-container", layoutDependency, layoutId: "WhyChoose__vuWjzOw_o-container", nodeId: "vuWjzOw_o", rendersWithMotion: true, scopeId: "AXXxXvFux", children: /* @__PURE__ */ _jsx6(RgRhigsOB_default, { height: "100%", id: "vuWjzOw_o", layoutId: "WhyChoose__vuWjzOw_o", style: { width: "100%" }, width: "100%" }) }) }), /* @__PURE__ */ _jsx6(ComponentViewportProvider4, { height: ((componentViewport?.height || 167) - 0 - 0) / 1 * 1 + 0, width: `max((${componentViewport?.width || "100vw"} - 20px) / 3, 50px)`, y: (componentViewport?.y || 0) + 0 + (0 * (((componentViewport?.height || 167) - 0 - 0) / 1) + 0 + 0), children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer4, { className: "framer-tt31kj-container", layoutDependency, layoutId: "WhyChoose__SQp4mrNCY-container", nodeId: "SQp4mrNCY", rendersWithMotion: true, scopeId: "AXXxXvFux", children: /* @__PURE__ */ _jsx6(pBl8WFKvl_default, { height: "100%", id: "SQp4mrNCY", layoutId: "WhyChoose__SQp4mrNCY", style: { height: "100%", width: "100%" }, width: "100%" }) }) })] }) }) }) });
});
var css7 = [".framer-cn3Vn.framer-onbfk2, .framer-cn3Vn .framer-onbfk2 { display: block; }", ".framer-cn3Vn.framer-1ubl94p { display: grid; gap: 0px 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-cn3Vn .framer-15a42gi-container { align-self: start; flex: none; grid-column: span 2; height: auto; justify-self: start; position: relative; width: 100%; }", ".framer-cn3Vn .framer-tt31kj-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }"];
var FramerAXXxXvFux = withCSS5(Component5, css7, "framer-cn3Vn");
var AXXxXvFux_default = FramerAXXxXvFux;
FramerAXXxXvFux.displayName = "Text 4";
FramerAXXxXvFux.defaultProps = { height: 167, width: 1072 };
addFonts5(FramerAXXxXvFux, [{ explicitInter: true, fonts: [] }, ...Text3Fonts, ...RightFonts], { supportsExplicitInterCodegen: true });
FramerAXXxXvFux.loader = { load: (props, context) => {
  return runTasksWithYield3([() => forwardLoader3(RgRhigsOB_default, {}, context), () => forwardLoader3(pBl8WFKvl_default, {}, context)], context);
} };

// http-url:https://framerusercontent.com/modules/4lhjF2lrqoYQZGiTgbJO/hBphkLVx3Aj5xz3603JN/SiMPcK80H.js
import { jsx as _jsx9, jsxs as _jsxs5 } from "react/jsx-runtime";
import { addFonts as addFonts6, addPropertyControls as addPropertyControls5, ComponentViewportProvider as ComponentViewportProvider5, ControlType as ControlType9, cx as cx6, getFonts as getFonts5, getFontsFromSharedStyle as getFontsFromSharedStyle3, getPropertyControls as getPropertyControls2, RichText as RichText3, SmartComponentScopedContainer as SmartComponentScopedContainer5, useComponentViewport as useComponentViewport6, useLocaleInfo as useLocaleInfo6, useVariantState as useVariantState6, withCSS as withCSS6, withFX as withFX3 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup6, motion as motion7, MotionConfigContext as MotionConfigContext6 } from "framer-motion";
import * as React10 from "react";
import { useRef as useRef10 } from "react";

// http-url:https://framerusercontent.com/modules/7uKPjOgRN10BaWc1q0Ty/wiPtqw1SlJ1RpHjHkatQ/Phosphor_3.js
import { jsx as _jsx8 } from "react/jsx-runtime";
import * as React9 from "react";
import { useState as useState4, useEffect as useEffect8, useRef as useRef9 } from "react";
import { addPropertyControls as addPropertyControls4, ControlType as ControlType8, RenderTarget as RenderTarget4 } from "./_framer-runtime.js";
import { motion as motion6 } from "framer-motion";

// http-url:https://framerusercontent.com/modules/DyldKav0OOAWR3bCAlhK/8c3l9FzyOlGpbPncYhfc/nullstate.js
import { jsx as _jsx7 } from "react/jsx-runtime";
import * as React8 from "react";
var containerStyles2 = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle2 = {
  ...containerStyles2,
  borderRadius: 6,
  background: "rgba(149, 149, 149, 0.1)",
  border: "1px dashed rgba(149, 149, 149, 0.15)",
  color: "#a5a5a5",
  flexDirection: "column"
};
var NullState = /* @__PURE__ */ React8.forwardRef((_, ref) => {
  return /* @__PURE__ */ _jsx7("div", {
    style: emptyStateStyle2,
    ref
  });
});

// http-url:https://framerusercontent.com/modules/Qc8yuHkQmGO0kFiSWbkX/rVmMAFttOHuuiwSg6KjZ/House.js
var Component6;
var IconInner;
var Icon = (React13) => {
  if (!Component6) {
    Component6 = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("path", { d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement(
          "path",
          {
            d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React13.createElement("path", { d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("path", { d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("path", { d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("path", { d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("path", { d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z" }))
      ]
    ]);
    IconInner = React13.forwardRef((props, ref) => /* @__PURE__ */ React13.createElement("g", { ref, ...props }, Component6.get(props.weight)));
  }
  return IconInner;
};
var House_default = Icon;

// http-url:https://framerusercontent.com/modules/Ma20hU0GGRxLxZphbywl/OSpwWF91FHPVFyQJjMHt/utils.js
import { useMemo as useMemo10 } from "react";
import { ControlType as ControlType7 } from "./_framer-runtime.js";
var defaultEvents2 = { onClick: { type: ControlType7.EventHandler }, onMouseDown: { type: ControlType7.EventHandler }, onMouseUp: { type: ControlType7.EventHandler }, onMouseEnter: { type: ControlType7.EventHandler }, onMouseLeave: { type: ControlType7.EventHandler } };
var findByArray = (arr, search) => arr.find((a) => a.toLowerCase().includes(search));
function useIconSelection(iconKeys2, selectByList, iconSearch = "", iconSelection, lowercaseIconKeyPairs2) {
  const iconSearchResult = useMemo10(() => {
    if (iconSearch == null || (iconSearch === null || iconSearch === void 0 ? void 0 : iconSearch.length) === 0)
      return null;
    const iconSearchTerm = iconSearch.toLowerCase().replace(/-|\s/g, "");
    var _iconSearchTerm;
    const searchResult = (_iconSearchTerm = lowercaseIconKeyPairs2[iconSearchTerm]) !== null && _iconSearchTerm !== void 0 ? _iconSearchTerm : findByArray(iconKeys2, iconSearchTerm);
    return searchResult;
  }, [iconSelection, iconSearch]);
  const name = selectByList ? iconSelection : iconSearchResult;
  return name;
}

// http-url:https://framerusercontent.com/modules/7uKPjOgRN10BaWc1q0Ty/wiPtqw1SlJ1RpHjHkatQ/Phosphor_3.js
var iconKeys = ["Acorn", "AddressBook", "AddressBookTabs", "AirTrafficControl", "Airplane", "AirplaneInFlight", "AirplaneLanding", "AirplaneTakeoff", "AirplaneTaxiing", "AirplaneTilt", "Airplay", "Alarm", "Alien", "AlignBottom", "AlignBottomSimple", "AlignCenterVertical", "AlignLeft", "AlignLeftSimple", "AlignRight", "AlignRightSimple", "AlignTop", "AlignTopSimple", "AmazonLogo", "Ambulance", "Anchor", "AnchorSimple", "AndroidLogo", "Angle", "AngularLogo", "Aperture", "AppStoreLogo", "AppWindow", "AppleLogo", "ApplePodcastsLogo", "ApproximateEquals", "Archive", "ArchiveBox", "ArchiveTray", "Armchair", "ArrowArcLeft", "ArrowArcRight", "ArrowBendDownLeft", "ArrowBendDownRight", "ArrowBendLeftDown", "ArrowBendLeftUp", "ArrowBendRightDown", "ArrowBendRightUp", "ArrowBendUpLeft", "ArrowBendUpRight", "ArrowCircleDown", "ArrowCircleDownLeft", "ArrowCircleDownRight", "ArrowCircleLeft", "ArrowCircleRight", "ArrowCircleUp", "ArrowCircleUpLeft", "ArrowCircleUpRight", "ArrowClockwise", "ArrowDown", "ArrowDownLeft", "ArrowDownRight", "ArrowElbowDownLeft", "ArrowElbowDownRight", "ArrowElbowLeft", "ArrowElbowLeftDown", "ArrowElbowLeftUp", "ArrowElbowRight", "ArrowElbowRightDown", "ArrowElbowRightUp", "ArrowElbowUpLeft", "ArrowElbowUpRight", "ArrowFatDown", "ArrowFatLeft", "ArrowFatLineDown", "ArrowFatLineLeft", "ArrowFatLineRight", "ArrowFatLineUp", "ArrowFatLinesDown", "ArrowFatLinesLeft", "ArrowFatLinesRight", "ArrowFatLinesUp", "ArrowFatRight", "ArrowFatUp", "ArrowLeft", "ArrowLineDown", "ArrowLineDownLeft", "ArrowLineDownRight", "ArrowLineLeft", "ArrowLineRight", "ArrowLineUp", "ArrowLineUpLeft", "ArrowLineUpRight", "ArrowRight", "ArrowSquareDown", "ArrowSquareDownLeft", "ArrowSquareDownRight", "ArrowSquareIn", "ArrowSquareLeft", "ArrowSquareOut", "ArrowSquareRight", "ArrowSquareUp", "ArrowSquareUpLeft", "ArrowSquareUpRight", "ArrowUDownLeft", "ArrowUDownRight", "ArrowULeftDown", "ArrowULeftUp", "ArrowURightDown", "ArrowURightUp", "ArrowUUpLeft", "ArrowUUpRight", "ArrowUp", "ArrowUpLeft", "ArrowUpRight", "ArrowsClockwise", "ArrowsDownUp", "ArrowsHorizontal", "ArrowsIn", "ArrowsInCardinal", "ArrowsInLineVertical", "ArrowsInSimple", "ArrowsLeftRight", "ArrowsMerge", "ArrowsOut", "ArrowsOutCardinal", "ArrowsOutSimple", "ArrowsSplit", "ArrowsVertical", "Article", "ArticleMedium", "ArticleNyTimes", "Asclepius", "Asterisk", "AsteriskSimple", "At", "Atom", "Avocado", "Axe", "Baby", "BabyCarriage", "Backpack", "Backspace", "Bag", "BagSimple", "Balloon", "Bandaids", "Bank", "Barbell", "Barcode", "Barn", "Barricade", "Baseball", "BaseballCap", "BaseballHelmet", "Basket", "Basketball", "Bathtub", "BatteryCharging", "BatteryEmpty", "BatteryFull", "BatteryHigh", "BatteryLow", "BatteryMedium", "BatteryPlus", "BatteryPlusVertical", "BatteryVerticalEmpty", "BatteryVerticalFull", "BatteryVerticalHigh", "BatteryVerticalLow", "BatteryWarning", "BeachBall", "Beanie", "Bed", "BeerBottle", "BeerStein", "BehanceLogo", "Bell", "BellRinging", "BellSimple", "BellSimpleRinging", "BellSimpleSlash", "BellSimpleZ", "BellSlash", "BellZ", "Belt", "BezierCurve", "Bicycle", "Binary", "Binoculars", "Biohazard", "Bird", "Blueprint", "Bluetooth", "BluetoothConnected", "BluetoothSlash", "BluetoothX", "Boat", "Bomb", "Bone", "Book", "BookBookmark", "BookOpen", "BookOpenText", "BookOpenUser", "BookUser", "Bookmark", "BookmarkSimple", "Bookmarks", "BookmarksSimple", "Books", "Boot", "Boules", "BoundingBox", "BowlFood", "BowlSteam", "BowlingBall", "BoxArrowDown", "BoxArrowUp", "BoxingGlove", "BracketsAngle", "BracketsCurly", "BracketsRound", "BracketsSquare", "Brain", "Brandy", "Bread", "Bridge", "Briefcase", "BriefcaseMetal", "Broadcast", "Broom", "Browser", "Browsers", "Bug", "BugBeetle", "BugDroid", "Building", "BuildingApartment", "BuildingOffice", "Buildings", "Bulldozer", "Bus", "Butterfly", "CableCar", "Cactus", "Cake", "Calculator", "Calendar", "CalendarBlank", "CalendarCheck", "CalendarDot", "CalendarDots", "CalendarHeart", "CalendarMinus", "CalendarPlus", "CalendarSlash", "CalendarStar", "CalendarX", "CallBell", "Camera", "CameraPlus", "CameraRotate", "CameraSlash", "Campfire", "Car", "CarBattery", "CarProfile", "CarSimple", "Cardholder", "Cards", "CardsThree", "CaretCircleDoubleUp", "CaretCircleDown", "CaretCircleLeft", "CaretCircleRight", "CaretCircleUp", "CaretCircleUpDown", "CaretDoubleDown", "CaretDoubleLeft", "CaretDoubleRight", "CaretDoubleUp", "CaretDown", "CaretLeft", "CaretLineDown", "CaretLineLeft", "CaretLineRight", "CaretLineUp", "CaretRight", "CaretUp", "CaretUpDown", "Carrot", "CashRegister", "CassetteTape", "CastleTurret", "Cat", "CellSignalFull", "CellSignalHigh", "CellSignalLow", "CellSignalMedium", "CellSignalNone", "CellSignalSlash", "CellSignalX", "CellTower", "Certificate", "Chair", "Chalkboard", "ChalkboardSimple", "ChalkboardTeacher", "Champagne", "ChargingStation", "ChartBar", "ChartBarHorizontal", "ChartDonut", "ChartLine", "ChartLineDown", "ChartLineUp", "ChartPie", "ChartPieSlice", "ChartPolar", "ChartScatter", "Chat", "ChatCentered", "ChatCenteredDots", "ChatCenteredSlash", "ChatCenteredText", "ChatCircle", "ChatCircleDots", "ChatCircleSlash", "ChatCircleText", "ChatDots", "ChatSlash", "ChatTeardrop", "ChatTeardropDots", "ChatTeardropSlash", "ChatTeardropText", "ChatText", "Chats", "ChatsCircle", "ChatsTeardrop", "Check", "CheckCircle", "CheckFat", "CheckSquare", "CheckSquareOffset", "Checkerboard", "Checks", "Cheers", "Cheese", "ChefHat", "Cherries", "Church", "Cigarette", "CigaretteSlash", "Circle", "CircleDashed", "CircleHalf", "CircleHalfTilt", "CircleNotch", "CirclesFour", "CirclesThree", "CirclesThreePlus", "Circuitry", "City", "Clipboard", "ClipboardText", "Clock", "ClockAfternoon", "ClockClockwise", "ClockCountdown", "ClockUser", "ClosedCaptioning", "Cloud", "CloudArrowDown", "CloudArrowUp", "CloudCheck", "CloudFog", "CloudLightning", "CloudMoon", "CloudRain", "CloudSlash", "CloudSnow", "CloudSun", "CloudWarning", "CloudX", "Clover", "Club", "CoatHanger", "CodaLogo", "Code", "CodeBlock", "CodeSimple", "CodepenLogo", "CodesandboxLogo", "Coffee", "CoffeeBean", "Coin", "CoinVertical", "Coins", "Columns", "ColumnsPlusLeft", "ColumnsPlusRight", "Command", "Compass", "CompassRose", "CompassTool", "ComputerTower", "Confetti", "ContactlessPayment", "Control", "Cookie", "CookingPot", "Copy", "CopySimple", "Copyleft", "Copyright", "CornersIn", "CornersOut", "Couch", "CourtBasketball", "Cow", "CowboyHat", "Cpu", "Crane", "CraneTower", "CreditCard", "Cricket", "Crop", "Cross", "Crosshair", "CrosshairSimple", "Crown", "CrownCross", "CrownSimple", "Cube", "CubeFocus", "CubeTransparent", "CurrencyBtc", "CurrencyCircleDollar", "CurrencyCny", "CurrencyDollar", "CurrencyDollarSimple", "CurrencyEth", "CurrencyEur", "CurrencyGbp", "CurrencyInr", "CurrencyJpy", "CurrencyKrw", "CurrencyKzt", "CurrencyNgn", "CurrencyRub", "Cursor", "CursorClick", "CursorText", "Cylinder", "Database", "Desk", "Desktop", "DesktopTower", "Detective", "DevToLogo", "DeviceMobile", "DeviceMobileCamera", "DeviceMobileSlash", "DeviceMobileSpeaker", "DeviceRotate", "DeviceTablet", "DeviceTabletCamera", "DeviceTabletSpeaker", "Devices", "Diamond", "DiamondsFour", "DiceFive", "DiceFour", "DiceOne", "DiceSix", "DiceThree", "DiceTwo", "Disc", "DiscoBall", "DiscordLogo", "Divide", "Dna", "Dog", "Door", "DoorOpen", "Dot", "DotOutline", "DotsNine", "DotsSix", "DotsSixVertical", "DotsThree", "DotsThreeCircle", "DotsThreeOutline", "DotsThreeVertical", "Download", "DownloadSimple", "Dress", "Dresser", "DribbbleLogo", "Drone", "Drop", "DropHalf", "DropHalfBottom", "DropSimple", "DropSlash", "DropboxLogo", "Ear", "EarSlash", "Egg", "EggCrack", "Eject", "EjectSimple", "Elevator", "Empty", "Engine", "Envelope", "EnvelopeOpen", "EnvelopeSimple", "EnvelopeSimpleOpen", "Equalizer", "Equals", "Eraser", "EscalatorDown", "EscalatorUp", "Exam", "ExclamationMark", "Exclude", "ExcludeSquare", "Export", "Eye", "EyeClosed", "EyeSlash", "Eyedropper", "EyedropperSample", "Eyeglasses", "Eyes", "FaceMask", "FacebookLogo", "Factory", "Faders", "FadersHorizontal", "FalloutShelter", "Fan", "Farm", "FastForward", "FastForwardCircle", "Feather", "FediverseLogo", "FigmaLogo", "File", "FileArchive", "FileArrowDown", "FileArrowUp", "FileAudio", "FileC", "FileCloud", "FileCode", "FileCpp", "FileCss", "FileCsv", "FileDashed", "FileDoc", "FileHtml", "FileImage", "FileIni", "FileJpg", "FileJs", "FileJsx", "FileLock", "FileMagnifyingGlass", "FileMd", "FileMinus", "FilePdf", "FilePlus", "FilePng", "FilePpt", "FilePy", "FileRs", "FileSql", "FileSvg", "FileText", "FileTs", "FileTsx", "FileTxt", "FileVideo", "FileVue", "FileX", "FileXls", "FileZip", "Files", "FilmReel", "FilmScript", "FilmSlate", "FilmStrip", "Fingerprint", "FingerprintSimple", "FinnTheHuman", "Fire", "FireExtinguisher", "FireSimple", "FireTruck", "FirstAid", "FirstAidKit", "Fish", "FishSimple", "Flag", "FlagBanner", "FlagBannerFold", "FlagCheckered", "FlagPennant", "Flame", "Flashlight", "Flask", "FlipHorizontal", "FlipVertical", "FloppyDisk", "FloppyDiskBack", "FlowArrow", "Flower", "FlowerLotus", "FlowerTulip", "FlyingSaucer", "Folder", "FolderDashed", "FolderLock", "FolderMinus", "FolderNotch", "FolderNotchMinus", "FolderNotchOpen", "FolderNotchPlus", "FolderOpen", "FolderPlus", "FolderSimple", "FolderSimpleDashed", "FolderSimpleLock", "FolderSimpleMinus", "FolderSimplePlus", "FolderSimpleStar", "FolderSimpleUser", "FolderStar", "FolderUser", "Folders", "Football", "FootballHelmet", "Footprints", "ForkKnife", "FourK", "FrameCorners", "FramerLogo", "Function", "Funnel", "FunnelSimple", "FunnelSimpleX", "FunnelX", "GameController", "Garage", "GasCan", "GasPump", "Gauge", "Gavel", "Gear", "GearFine", "GearSix", "GenderFemale", "GenderIntersex", "GenderMale", "GenderNeuter", "GenderNonbinary", "GenderTransgender", "Ghost", "Gif", "Gift", "GitBranch", "GitCommit", "GitDiff", "GitFork", "GitMerge", "GitPullRequest", "GithubLogo", "GitlabLogo", "GitlabLogoSimple", "Globe", "GlobeHemisphereEast", "GlobeHemisphereWest", "GlobeSimple", "GlobeSimpleX", "GlobeStand", "GlobeX", "Goggles", "Golf", "GoodreadsLogo", "GoogleCardboardLogo", "GoogleChromeLogo", "GoogleDriveLogo", "GoogleLogo", "GooglePhotosLogo", "GooglePlayLogo", "GooglePodcastsLogo", "Gps", "GpsFix", "GpsSlash", "Gradient", "GraduationCap", "Grains", "GrainsSlash", "Graph", "GraphicsCard", "GreaterThan", "GreaterThanOrEqual", "GridFour", "GridNine", "Guitar", "HairDryer", "Hamburger", "Hammer", "Hand", "HandArrowDown", "HandArrowUp", "HandCoins", "HandDeposit", "HandEye", "HandFist", "HandGrabbing", "HandHeart", "HandPalm", "HandPeace", "HandPointing", "HandSoap", "HandSwipeLeft", "HandSwipeRight", "HandTap", "HandWaving", "HandWithdraw", "Handbag", "HandbagSimple", "HandsClapping", "HandsPraying", "Handshake", "HardDrive", "HardDrives", "HardHat", "Hash", "HashStraight", "HeadCircuit", "Headlights", "Headphones", "Headset", "Heart", "HeartBreak", "HeartHalf", "HeartStraight", "HeartStraightBreak", "Heartbeat", "Hexagon", "HighDefinition", "HighHeel", "Highlighter", "HighlighterCircle", "Hockey", "Hoodie", "Horse", "Hospital", "Hourglass", "HourglassHigh", "HourglassLow", "HourglassMedium", "HourglassSimple", "HourglassSimpleHigh", "HourglassSimpleLow", "House", "HouseLine", "HouseSimple", "Hurricane", "IceCream", "IdentificationBadge", "IdentificationCard", "Image", "ImageBroken", "ImageSquare", "Images", "ImagesSquare", "Infinity", "Info", "InstagramLogo", "Intersect", "IntersectSquare", "IntersectThree", "Intersection", "Invoice", "Island", "Jar", "JarLabel", "Jeep", "Joystick", "Kanban", "Key", "KeyReturn", "Keyboard", "Keyhole", "Knife", "Ladder", "LadderSimple", "Lamp", "LampPendant", "Laptop", "Lasso", "LastfmLogo", "Layout", "Leaf", "Lectern", "Lego", "LegoSmiley", "LessThan", "LessThanOrEqual", "LetterCircleH", "LetterCircleP", "LetterCircleV", "Lifebuoy", "Lightbulb", "LightbulbFilament", "Lighthouse", "Lightning", "LightningA", "LightningSlash", "LineSegment", "LineSegments", "LineVertical", "Link", "LinkBreak", "LinkSimple", "LinkSimpleBreak", "LinkSimpleHorizontal", "LinkedinLogo", "LinktreeLogo", "LinuxLogo", "List", "ListBullets", "ListChecks", "ListDashes", "ListHeart", "ListMagnifyingGlass", "ListNumbers", "ListPlus", "ListStar", "Lock", "LockKey", "LockKeyOpen", "LockLaminated", "LockLaminatedOpen", "LockOpen", "LockSimple", "LockSimpleOpen", "Lockers", "Log", "MagicWand", "Magnet", "MagnetStraight", "MagnifyingGlass", "MagnifyingGlassMinus", "MagnifyingGlassPlus", "Mailbox", "MapPin", "MapPinArea", "MapPinLine", "MapPinPlus", "MapPinSimple", "MapPinSimpleArea", "MapPinSimpleLine", "MapTrifold", "MarkdownLogo", "MarkerCircle", "Martini", "MaskHappy", "MaskSad", "MastodonLogo", "MathOperations", "MatrixLogo", "Medal", "MedalMilitary", "MediumLogo", "Megaphone", "MegaphoneSimple", "MemberOf", "Memory", "MessengerLogo", "MetaLogo", "Meteor", "Metronome", "Microphone", "MicrophoneSlash", "MicrophoneStage", "Microscope", "MicrosoftExcelLogo", "MicrosoftOutlookLogo", "MicrosoftTeamsLogo", "MicrosoftWordLogo", "Minus", "MinusCircle", "MinusSquare", "Money", "MoneyWavy", "Monitor", "MonitorArrowUp", "MonitorPlay", "Moon", "MoonStars", "Moped", "MopedFront", "Mosque", "Motorcycle", "Mountains", "Mouse", "MouseLeftClick", "MouseMiddleClick", "MouseRightClick", "MouseScroll", "MouseSimple", "MusicNote", "MusicNoteSimple", "MusicNotes", "MusicNotesMinus", "MusicNotesPlus", "MusicNotesSimple", "NavigationArrow", "Needle", "Network", "NetworkSlash", "NetworkX", "Newspaper", "NewspaperClipping", "NotEquals", "NotMemberOf", "NotSubsetOf", "NotSupersetOf", "Notches", "Note", "NoteBlank", "NotePencil", "Notebook", "Notepad", "Notification", "NotionLogo", "NuclearPlant", "NumberCircleEight", "NumberCircleFive", "NumberCircleFour", "NumberCircleNine", "NumberCircleOne", "NumberCircleSeven", "NumberCircleSix", "NumberCircleThree", "NumberCircleTwo", "NumberCircleZero", "NumberEight", "NumberFive", "NumberFour", "NumberNine", "NumberOne", "NumberSeven", "NumberSix", "NumberSquareEight", "NumberSquareFive", "NumberSquareFour", "NumberSquareNine", "NumberSquareOne", "NumberSquareSeven", "NumberSquareSix", "NumberSquareThree", "NumberSquareTwo", "NumberSquareZero", "NumberThree", "NumberTwo", "NumberZero", "Numpad", "Nut", "NyTimesLogo", "Octagon", "OfficeChair", "Onigiri", "OpenAiLogo", "Option", "Orange", "OrangeSlice", "Oven", "Package", "PaintBrush", "PaintBrushBroad", "PaintBrushHousehold", "PaintBucket", "PaintRoller", "Palette", "Panorama", "Pants", "PaperPlane", "PaperPlaneRight", "PaperPlaneTilt", "Paperclip", "PaperclipHorizontal", "Parachute", "Paragraph", "Parallelogram", "Park", "Password", "Path", "PatreonLogo", "Pause", "PauseCircle", "PawPrint", "PaypalLogo", "Peace", "Pen", "PenNib", "PenNibStraight", "Pencil", "PencilCircle", "PencilLine", "PencilRuler", "PencilSimple", "PencilSimpleLine", "PencilSimpleSlash", "PencilSlash", "Pentagon", "Pentagram", "Pepper", "Percent", "Person", "PersonArmsSpread", "PersonSimple", "PersonSimpleBike", "PersonSimpleCircle", "PersonSimpleHike", "PersonSimpleRun", "PersonSimpleSki", "PersonSimpleSwim", "PersonSimpleTaiChi", "PersonSimpleThrow", "PersonSimpleWalk", "Perspective", "Phone", "PhoneCall", "PhoneDisconnect", "PhoneIncoming", "PhoneList", "PhoneOutgoing", "PhonePause", "PhonePlus", "PhoneSlash", "PhoneTransfer", "PhoneX", "PhosphorLogo", "Pi", "PianoKeys", "PicnicTable", "PictureInPicture", "PiggyBank", "Pill", "PingPong", "PintGlass", "PinterestLogo", "Pinwheel", "Pipe", "PipeWrench", "PixLogo", "Pizza", "Placeholder", "Planet", "Plant", "Play", "PlayCircle", "PlayPause", "Playlist", "Plug", "PlugCharging", "Plugs", "PlugsConnected", "Plus", "PlusCircle", "PlusMinus", "PlusSquare", "PokerChip", "PoliceCar", "Polygon", "Popcorn", "Popsicle", "PottedPlant", "Power", "Prescription", "Presentation", "PresentationChart", "Printer", "Prohibit", "ProhibitInset", "ProjectorScreen", "ProjectorScreenChart", "Pulse", "PushPin", "PushPinSimple", "PushPinSimpleSlash", "PushPinSlash", "PuzzlePiece", "QrCode", "Question", "QuestionMark", "Queue", "Quotes", "Rabbit", "Racquet", "Radical", "Radio", "RadioButton", "Radioactive", "Rainbow", "RainbowCloud", "Ranking", "ReadCvLogo", "Receipt", "ReceiptX", "Record", "Rectangle", "RectangleDashed", "Recycle", "RedditLogo", "Repeat", "RepeatOnce", "ReplitLogo", "Resize", "Rewind", "RewindCircle", "RoadHorizon", "Robot", "Rocket", "RocketLaunch", "Rows", "RowsPlusBottom", "RowsPlusTop", "Rss", "RssSimple", "Rug", "Ruler", "Sailboat", "Scales", "Scan", "ScanSmiley", "Scissors", "Scooter", "Screencast", "Screwdriver", "Scribble", "ScribbleLoop", "Scroll", "Seal", "SealCheck", "SealPercent", "SealQuestion", "SealWarning", "Seat", "Seatbelt", "SecurityCamera", "Selection", "SelectionAll", "SelectionBackground", "SelectionForeground", "SelectionInverse", "SelectionPlus", "SelectionSlash", "Shapes", "Share", "ShareFat", "ShareNetwork", "Shield", "ShieldCheck", "ShieldCheckered", "ShieldChevron", "ShieldPlus", "ShieldSlash", "ShieldStar", "ShieldWarning", "ShippingContainer", "ShirtFolded", "ShootingStar", "ShoppingBag", "ShoppingBagOpen", "ShoppingCart", "ShoppingCartSimple", "Shovel", "Shower", "Shrimp", "Shuffle", "ShuffleAngular", "ShuffleSimple", "Sidebar", "SidebarSimple", "Sigma", "SignIn", "SignOut", "Signature", "Signpost", "SimCard", "Siren", "SketchLogo", "SkipBack", "SkipBackCircle", "SkipForward", "SkipForwardCircle", "Skull", "SkypeLogo", "SlackLogo", "Sliders", "SlidersHorizontal", "Slideshow", "Smiley", "SmileyAngry", "SmileyBlank", "SmileyMeh", "SmileyMelting", "SmileyNervous", "SmileySad", "SmileySticker", "SmileyWink", "SmileyXEyes", "SnapchatLogo", "Sneaker", "SneakerMove", "Snowflake", "SoccerBall", "Sock", "SolarPanel", "SolarRoof", "SortAscending", "SortDescending", "SoundcloudLogo", "Spade", "Sparkle", "SpeakerHifi", "SpeakerHigh", "SpeakerLow", "SpeakerNone", "SpeakerSimpleHigh", "SpeakerSimpleLow", "SpeakerSimpleNone", "SpeakerSimpleSlash", "SpeakerSimpleX", "SpeakerSlash", "SpeakerX", "Speedometer", "Sphere", "Spinner", "SpinnerBall", "SpinnerGap", "Spiral", "SplitHorizontal", "SplitVertical", "SpotifyLogo", "SprayBottle", "Square", "SquareHalf", "SquareHalfBottom", "SquareLogo", "SquareSplitVertical", "SquaresFour", "Stack", "StackMinus", "StackOverflowLogo", "StackPlus", "StackSimple", "Stairs", "Stamp", "StandardDefinition", "Star", "StarAndCrescent", "StarFour", "StarHalf", "StarOfDavid", "SteamLogo", "SteeringWheel", "Steps", "Stethoscope", "Sticker", "Stool", "Stop", "StopCircle", "Storefront", "Strategy", "StripeLogo", "Student", "SubsetOf", "SubsetProperOf", "Subtitles", "SubtitlesSlash", "Subtract", "SubtractSquare", "Subway", "Suitcase", "SuitcaseRolling", "SuitcaseSimple", "Sun", "SunDim", "SunHorizon", "Sunglasses", "SupersetOf", "SupersetProperOf", "Swap", "Swatches", "SwimmingPool", "Sword", "Synagogue", "Syringe", "TShirt", "Table", "Tabs", "Tag", "TagChevron", "TagSimple", "Target", "Taxi", "TeaBag", "TelegramLogo", "Television", "TelevisionSimple", "TennisBall", "Tent", "Terminal", "TerminalWindow", "TestTube", "TextAUnderline", "TextAa", "TextAlignCenter", "TextAlignJustify", "TextAlignLeft", "TextAlignRight", "TextB", "TextColumns", "TextH", "TextHFive", "TextHFour", "TextHOne", "TextHSix", "TextHThree", "TextHTwo", "TextIndent", "TextItalic", "TextOutdent", "TextStrikethrough", "TextSubscript", "TextSuperscript", "TextT", "TextTSlash", "TextUnderline", "Textbox", "Thermometer", "ThermometerCold", "ThermometerHot", "ThermometerSimple", "ThreadsLogo", "ThreeD", "ThumbsDown", "ThumbsUp", "Ticket", "TidalLogo", "TiktokLogo", "Tilde", "Timer", "TipJar", "Tipi", "Tire", "ToggleLeft", "ToggleRight", "Toilet", "ToiletPaper", "Toolbox", "Tooth", "Tornado", "Tote", "ToteSimple", "Towel", "Tractor", "Trademark", "TrademarkRegistered", "TrafficCone", "TrafficSign", "TrafficSignal", "Train", "TrainRegional", "TrainSimple", "Tram", "Translate", "Trash", "TrashSimple", "Tray", "TrayArrowDown", "TrayArrowUp", "TreasureChest", "Tree", "TreeEvergreen", "TreePalm", "TreeStructure", "TreeView", "TrendDown", "TrendUp", "Triangle", "TriangleDashed", "Trolley", "TrolleySuitcase", "Trophy", "Truck", "TruckTrailer", "TumblrLogo", "TwitchLogo", "TwitterLogo", "Umbrella", "UmbrellaSimple", "Union", "Unite", "UniteSquare", "Upload", "UploadSimple", "Usb", "User", "UserCheck", "UserCircle", "UserCircleCheck", "UserCircleDashed", "UserCircleGear", "UserCircleMinus", "UserCirclePlus", "UserFocus", "UserGear", "UserList", "UserMinus", "UserPlus", "UserRectangle", "UserSound", "UserSquare", "UserSwitch", "Users", "UsersFour", "UsersThree", "Van", "Vault", "VectorThree", "VectorTwo", "Vibrate", "Video", "VideoCamera", "VideoCameraSlash", "VideoConference", "Vignette", "VinylRecord", "VirtualReality", "Virus", "Visor", "Voicemail", "Volleyball", "Wall", "Wallet", "Warehouse", "Warning", "WarningCircle", "WarningDiamond", "WarningOctagon", "WashingMachine", "Watch", "WaveSawtooth", "WaveSine", "WaveSquare", "WaveTriangle", "Waveform", "WaveformSlash", "Waves", "Webcam", "WebcamSlash", "WebhooksLogo", "WechatLogo", "WhatsappLogo", "Wheelchair", "WheelchairMotion", "WifiHigh", "WifiLow", "WifiMedium", "WifiNone", "WifiSlash", "WifiX", "Wind", "Windmill", "WindowsLogo", "Wine", "Wrench", "X", "XCircle", "XLogo", "XSquare", "Yarn", "YinYang", "YoutubeLogo"];
var moduleBaseUrl = "https://framer.com/m/phosphor-icons/";
var weightOptions = ["thin", "light", "regular", "bold", "fill", "duotone"];
var lowercaseIconKeyPairs = iconKeys.reduce((res, key) => {
  res[key.toLowerCase()] = key;
  return res;
}, {});
function Icon2(props) {
  const { color, selectByList, iconSearch, iconSelection, onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave, weight, mirrored } = props;
  const isMounted = useRef9(false);
  const iconKey = useIconSelection(iconKeys, selectByList, iconSearch, iconSelection, lowercaseIconKeyPairs);
  const [SelectedIcon, setSelectedIcon] = useState4(iconKey === "Home" ? House_default(React9) : null);
  async function importModule() {
    try {
      const version = "0.0.57";
      const iconModuleUrl = `${moduleBaseUrl}${iconKey}.js@${version}`;
      const module = await import(
        /* webpackIgnore: true */
        iconModuleUrl
      );
      if (isMounted.current)
        setSelectedIcon(module.default(React9));
    } catch (err) {
      if (isMounted.current)
        setSelectedIcon(null);
    }
  }
  useEffect8(() => {
    isMounted.current = true;
    importModule();
    return () => {
      isMounted.current = false;
    };
  }, [iconKey]);
  const isOnCanvas = RenderTarget4.current() === RenderTarget4.canvas;
  const emptyState = isOnCanvas ? /* @__PURE__ */ _jsx8(NullState, {}) : null;
  return /* @__PURE__ */ _jsx8(motion6.div, { style: { display: "contents" }, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, children: SelectedIcon ? /* @__PURE__ */ _jsx8("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", style: { userSelect: "none", width: "100%", height: "100%", display: "inline-block", fill: color, color, flexShrink: 0, transform: mirrored ? "scale(-1, 1)" : void 0 }, focusable: "false", color, children: /* @__PURE__ */ _jsx8(SelectedIcon, { color, weight }) }) : emptyState });
}
Icon2.displayName = "Phosphor";
Icon2.defaultProps = { width: 24, height: 24, iconSelection: "House", iconSearch: "House", color: "#66F", selectByList: true, weight: "regular", mirrored: false };
addPropertyControls4(Icon2, { selectByList: { type: ControlType8.Boolean, title: "Select", enabledTitle: "List", disabledTitle: "Search", defaultValue: Icon2.defaultProps.selectByList }, iconSelection: { type: ControlType8.Enum, options: iconKeys, defaultValue: Icon2.defaultProps.iconSelection, title: "Name", hidden: ({ selectByList }) => !selectByList, description: "Find every icon name on the [Phosphor site](https://phosphoricons.com/)" }, iconSearch: { type: ControlType8.String, title: "Name", placeholder: "Menu, Wifi, Box\u2026", hidden: ({ selectByList }) => selectByList }, color: { type: ControlType8.Color, title: "Color", defaultValue: Icon2.defaultProps.color }, weight: { type: ControlType8.Enum, title: "Weight", optionTitles: weightOptions.map((piece) => piece.charAt(0).toUpperCase() + piece.slice(1)), options: weightOptions, defaultValue: Icon2.defaultProps.weight }, mirrored: { type: ControlType8.Boolean, enabledTitle: "Yes", disabledTitle: "No", defaultValue: Icon2.defaultProps.mirrored }, ...defaultEvents2 });

// http-url:https://framerusercontent.com/modules/kSdB6pm55b785R0kyB8k/Sq5B8F4ETUHNE8pFwK5u/dn4SBv53G.js
import { fontStore as fontStore4 } from "./_framer-runtime.js";
fontStore4.loadFonts(["FS;Outfit-light", "FS;Outfit-regular"]);
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/HGVZO4W7MOWSOT5FITRR2LXJL4LPEVKA/JGNFYTACJN27RPO2O5AUTRRZD4FNRJPI/W7JHARPQSG6P4YAUJKIMUM6JNAX2RFW3.woff2", weight: "300" }, { cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/RPEPC24XXAVK6EWUOKWQUPTOZQR35AS2/BVWMEQ5ZCLZP2VOXOHXQDCZADXNFBXUF/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2", weight: "400" }] }];
var css8 = [`.framer-opfDq .framer-styles-preset-16zkny:not(.rich-text-wrapper), .framer-opfDq .framer-styles-preset-16zkny.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: -0.8px; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-background-padding: 0px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 0px) { .framer-opfDq .framer-styles-preset-16zkny:not(.rich-text-wrapper), .framer-opfDq .framer-styles-preset-16zkny.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: -0.8px; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-background-padding: 0px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className3 = "framer-opfDq";

// http-url:https://framerusercontent.com/modules/kT63hldXZM3aJt6TSQf8/IU65eimTihWXx750SXml/xxYpVC2ns.js
import { fontStore as fontStore5 } from "./_framer-runtime.js";
fontStore5.loadFonts(["FS;Outfit-regular", "FS;Outfit-bold"]);
var fonts4 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/RPEPC24XXAVK6EWUOKWQUPTOZQR35AS2/BVWMEQ5ZCLZP2VOXOHXQDCZADXNFBXUF/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2", weight: "400" }, { cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EUV6IZMPXOYBUY6KFIXKZWM47ESY5XYA/BLW2AGODUKQKRMYEVOEMMPY2ITRKBJIP/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2", weight: "700" }] }];
var css9 = [`.framer-RFpfK .framer-styles-preset-o3fw3z:not(.rich-text-wrapper), .framer-RFpfK .framer-styles-preset-o3fw3z.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.4px; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-background-padding: 6px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className4 = "framer-RFpfK";

// http-url:https://framerusercontent.com/modules/4lhjF2lrqoYQZGiTgbJO/hBphkLVx3Aj5xz3603JN/SiMPcK80H.js
var PhosphorFonts = getFonts5(Icon2);
var MotionDivWithFX2 = withFX3(motion7.div);
var PhosphorControls = getPropertyControls2(Icon2);
var serializationHash6 = "framer-XS05R";
var variantClassNames6 = { pprnU5vTP: "framer-v-v48e2v" };
var animation3 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 48 };
var transition16 = { damping: 20, delay: 0, mass: 2, stiffness: 120, type: "spring" };
var transition23 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition6 = ({ value, children }) => {
  const config = React10.useContext(MotionConfigContext6);
  const transition = value ?? config.transition;
  const contextValue = React10.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx9(MotionConfigContext6.Provider, { value: contextValue, children });
};
var Variants6 = motion7.create(React10.Fragment);
var getProps7 = ({ description, height, iconName, id, title, width, ...props }) => {
  return { ...props, ADRUDeMTm: description ?? props.ADRUDeMTm ?? "Each project reflects a unique story. From bold visuals to thoughtful design, my selected works showcase years of creative growth and vision.", BQtazzjaH: title ?? props.BQtazzjaH ?? "Client\nRetention", PyjuAHMRH: iconName ?? props.PyjuAHMRH ?? "Flower" };
};
var createLayoutDependency6 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component7 = /* @__PURE__ */ React10.forwardRef(function(props, ref) {
  const fallbackRef = useRef10(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React10.useId();
  const { activeLocale, setLocale } = useLocaleInfo6();
  const componentViewport = useComponentViewport6();
  const { style, className: className5, layoutId, variant, BQtazzjaH, ADRUDeMTm, PyjuAHMRH, ...restProps } = getProps7(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState6({ defaultVariant: "pprnU5vTP", ref: refBinding, variant, variantClassNames: variantClassNames6 });
  const layoutDependency = createLayoutDependency6(props, variants);
  const sharedStyleClassNames = [className3, className4];
  const scopingClassNames = cx6(serializationHash6, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx9(LayoutGroup6, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx9(Variants6, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx9(Transition6, { value: transition23, children: /* @__PURE__ */ _jsxs5(MotionDivWithFX2, { ...restProps, ...gestureHandlers, __framer__animate: { transition: transition16 }, __framer__animateOnce: true, __framer__enter: animation3, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.5, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: cx6(scopingClassNames, "framer-v48e2v", className5, classNames), "data-framer-name": "Why Choose", layoutDependency, layoutId: "WhyChoose__pprnU5vTP", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsxs5(motion7.div, { className: "framer-1it8sxb", "data-framer-name": "Title", layoutDependency, layoutId: "WhyChoose__sCgDgu72T", children: [/* @__PURE__ */ _jsx9(ComponentViewportProvider5, { children: /* @__PURE__ */ _jsx9(SmartComponentScopedContainer5, { className: "framer-ohpuzs-container", "data-framer-name": "ICON", isAuthoredByUser: true, layoutDependency, layoutId: "WhyChoose__e_hsExfWn-container", name: "ICON", nodeId: "e_hsExfWn", rendersWithMotion: true, scopeId: "SiMPcK80H", children: /* @__PURE__ */ _jsx9(Icon2, { color: "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(0, 0, 0))", height: "100%", iconSearch: "House", iconSelection: PyjuAHMRH, id: "e_hsExfWn", layoutId: "WhyChoose__e_hsExfWn", mirrored: false, name: "ICON", selectByList: true, style: { height: "100%", width: "100%" }, weight: "thin", width: "100%" }) }) }), /* @__PURE__ */ _jsx9(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx9(React10.Fragment, { children: /* @__PURE__ */ _jsxs5(motion7.p, { className: "framer-styles-preset-16zkny", "data-styles-preset": "dn4SBv53G", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23)))" }, children: ["Client", /* @__PURE__ */ _jsx9(motion7.br, {}), "Retention"] }) }), className: "framer-wflojt", fonts: ["Inter"], layoutDependency, layoutId: "WhyChoose__nSRlcsRxc", style: { "--extracted-r6o4lv": "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23))", "--framer-paragraph-spacing": "0px" }, text: BQtazzjaH, verticalAlignment: "center", withExternalLayout: true })] }), /* @__PURE__ */ _jsx9(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx9(React10.Fragment, { children: /* @__PURE__ */ _jsx9(motion7.p, { className: "framer-styles-preset-o3fw3z", "data-styles-preset": "xxYpVC2ns", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(0, 0, 0)))" }, children: "Each project reflects a unique story. From bold visuals to thoughtful design, my selected works showcase years of creative growth and vision." }) }), className: "framer-1j4arwp", "data-framer-name": "Description", fonts: ["Inter"], layoutDependency, layoutId: "WhyChoose__KKjPZDcZ2", style: { "--extracted-r6o4lv": "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(0, 0, 0))", "--framer-paragraph-spacing": "0px" }, text: ADRUDeMTm, verticalAlignment: "top", withExternalLayout: true })] }) }) }) });
});
var css10 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-XS05R.framer-1pqf25z, .framer-XS05R .framer-1pqf25z { display: block; }", ".framer-XS05R.framer-v48e2v { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-XS05R .framer-1it8sxb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-XS05R .framer-ohpuzs-container { flex: none; height: 54px; position: relative; width: 54px; }", ".framer-XS05R .framer-wflojt { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-XS05R .framer-1j4arwp { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ...css8, ...css9];
var FramerSiMPcK80H = withCSS6(Component7, css10, "framer-XS05R");
var SiMPcK80H_default = FramerSiMPcK80H;
FramerSiMPcK80H.displayName = "Cards/WhyChoose";
FramerSiMPcK80H.defaultProps = { height: 230, width: 250 };
addPropertyControls5(FramerSiMPcK80H, { BQtazzjaH: { defaultValue: "Client\nRetention", displayTextArea: true, title: "Title", type: ControlType9.String }, ADRUDeMTm: { defaultValue: "Each project reflects a unique story. From bold visuals to thoughtful design, my selected works showcase years of creative growth and vision.", displayTextArea: true, title: "Description", type: ControlType9.String }, PyjuAHMRH: PhosphorControls?.["iconSelection"] && { ...PhosphorControls["iconSelection"], defaultValue: "Flower", description: void 0, hidden: void 0, title: "icon Name" } });
addFonts6(FramerSiMPcK80H, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...PhosphorFonts, ...getFontsFromSharedStyle3(fonts3), ...getFontsFromSharedStyle3(fonts4)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/A5Pkr6482SQrrbgzaUrq/f6xZ6mlSh4chijnl3FAZ/Z_P4oNiOt.js
var Text4Fonts = getFonts6(AXXxXvFux_default);
var CardsWhyChooseFonts = getFonts6(SiMPcK80H_default);
var serializationHash7 = "framer-Bd3Wc";
var variantClassNames7 = { TvfpfW3Lp: "framer-v-r4lx2v" };
var transition17 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition7 = ({ value, children }) => {
  const config = React11.useContext(MotionConfigContext7);
  const transition = value ?? config.transition;
  const contextValue = React11.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx10(MotionConfigContext7.Provider, { value: contextValue, children });
};
var Variants7 = motion8.create(React11.Fragment);
var getProps8 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency7 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component8 = /* @__PURE__ */ React11.forwardRef(function(props, ref) {
  const fallbackRef = useRef11(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React11.useId();
  const { activeLocale, setLocale } = useLocaleInfo7();
  const componentViewport = useComponentViewport7();
  const { style, className: className5, layoutId, variant, ...restProps } = getProps8(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState7({ defaultVariant: "TvfpfW3Lp", ref: refBinding, variant, variantClassNames: variantClassNames7 });
  const layoutDependency = createLayoutDependency7(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx7(serializationHash7, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx10(LayoutGroup7, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx10(Variants7, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx10(Transition7, { value: transition17, children: /* @__PURE__ */ _jsxs6(motion8.div, { ...restProps, ...gestureHandlers, className: cx7(scopingClassNames, "framer-r4lx2v", className5, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "WhyChoose__TvfpfW3Lp", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsx10(ComponentViewportProvider6, { height: 167, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + 0 + ((componentViewport?.height || 493) - 0 - 479 + 0 + 0), children: /* @__PURE__ */ _jsx10(SmartComponentScopedContainer6, { className: "framer-159dxya-container", layoutDependency, layoutId: "WhyChoose__j5LHYN82d-container", nodeId: "j5LHYN82d", rendersWithMotion: true, scopeId: "Z_P4oNiOt", children: /* @__PURE__ */ _jsx10(AXXxXvFux_default, { height: "100%", id: "j5LHYN82d", layoutId: "WhyChoose__j5LHYN82d", style: { width: "100%" }, width: "100%" }) }) }), /* @__PURE__ */ _jsxs6(motion8.div, { className: "framer-1z8h61", "data-framer-name": "Cards", layoutDependency, layoutId: "WhyChoose__mVmKEHF2O", children: [/* @__PURE__ */ _jsx10(ComponentViewportProvider6, { height: 230, width: `max((${componentViewport?.width || "100vw"} - 72px) / 4, 1px)`, y: (componentViewport?.y || 0) + 0 + ((componentViewport?.height || 493) - 0 - 479 + 167 + 82) + 0, children: /* @__PURE__ */ _jsx10(SmartComponentScopedContainer6, { className: "framer-218fkp-container", layoutDependency, layoutId: "WhyChoose__CgwqMGjvH-container", nodeId: "CgwqMGjvH", rendersWithMotion: true, scopeId: "Z_P4oNiOt", children: /* @__PURE__ */ _jsx10(SiMPcK80H_default, { ADRUDeMTm: "We begin by shaping tailored strategies and performing in-depth research to reveal critical insights. This creates a solid roadmap for impactful, measurable outcomes.", BQtazzjaH: "Strategy &\nResearch", height: "100%", id: "CgwqMGjvH", layoutId: "WhyChoose__CgwqMGjvH", PyjuAHMRH: "Strategy", style: { width: "100%" }, width: "100%" }) }) }), /* @__PURE__ */ _jsx10(ComponentViewportProvider6, { height: 230, width: `max((${componentViewport?.width || "100vw"} - 72px) / 4, 1px)`, y: (componentViewport?.y || 0) + 0 + ((componentViewport?.height || 493) - 0 - 479 + 167 + 82) + 0, children: /* @__PURE__ */ _jsx10(SmartComponentScopedContainer6, { className: "framer-9iqkoj-container", layoutDependency, layoutId: "WhyChoose__Ae5SxxcMh-container", nodeId: "Ae5SxxcMh", rendersWithMotion: true, scopeId: "Z_P4oNiOt", children: /* @__PURE__ */ _jsx10(SiMPcK80H_default, { ADRUDeMTm: "We transform ideas into engaging designs and functional prototypes that bring your vision to life. This approach ensures smooth collaboration and early validation.", BQtazzjaH: "Design &\xA0 \nPrototype", height: "100%", id: "Ae5SxxcMh", layoutId: "WhyChoose__Ae5SxxcMh", PyjuAHMRH: "Sphere", style: { width: "100%" }, width: "100%" }) }) }), /* @__PURE__ */ _jsx10(ComponentViewportProvider6, { height: 230, width: `max((${componentViewport?.width || "100vw"} - 72px) / 4, 1px)`, y: (componentViewport?.y || 0) + 0 + ((componentViewport?.height || 493) - 0 - 479 + 167 + 82) + 0, children: /* @__PURE__ */ _jsx10(SmartComponentScopedContainer6, { className: "framer-x9yf55-container", layoutDependency, layoutId: "WhyChoose__EDtcCBovt-container", nodeId: "EDtcCBovt", rendersWithMotion: true, scopeId: "Z_P4oNiOt", children: /* @__PURE__ */ _jsx10(SiMPcK80H_default, { ADRUDeMTm: "We craft reliable solutions, perform thorough testing, and fine-tune for top performance. The result is efficient, high-impact outcomes that drive long-term success.", BQtazzjaH: "Build, Test &\xA0 \nOptimize", height: "100%", id: "EDtcCBovt", layoutId: "WhyChoose__EDtcCBovt", PyjuAHMRH: "Layout", style: { width: "100%" }, width: "100%" }) }) }), /* @__PURE__ */ _jsx10(ComponentViewportProvider6, { height: 230, width: `max((${componentViewport?.width || "100vw"} - 72px) / 4, 1px)`, y: (componentViewport?.y || 0) + 0 + ((componentViewport?.height || 493) - 0 - 479 + 167 + 82) + 0, children: /* @__PURE__ */ _jsx10(SmartComponentScopedContainer6, { className: "framer-94jck3-container", layoutDependency, layoutId: "WhyChoose__MO2BYZSSS-container", nodeId: "MO2BYZSSS", rendersWithMotion: true, scopeId: "Z_P4oNiOt", children: /* @__PURE__ */ _jsx10(SiMPcK80H_default, { ADRUDeMTm: "We launch with precision and provide ongoing support to help your product grow. By thorough understanding of your goals and users, we ensure speedy and lasting results.", BQtazzjaH: "Launch &\xA0\nSupport", height: "100%", id: "MO2BYZSSS", layoutId: "WhyChoose__MO2BYZSSS", PyjuAHMRH: "RocketLaunch", style: { width: "100%" }, width: "100%" }) }) })] })] }) }) }) });
});
var css11 = [".framer-Bd3Wc.framer-1mp1ily, .framer-Bd3Wc .framer-1mp1ily { display: block; }", ".framer-Bd3Wc.framer-r4lx2v { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 82px; height: min-content; justify-content: flex-end; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-Bd3Wc .framer-159dxya-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-Bd3Wc .framer-1z8h61 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-Bd3Wc .framer-218fkp-container, .framer-Bd3Wc .framer-9iqkoj-container, .framer-Bd3Wc .framer-x9yf55-container, .framer-Bd3Wc .framer-94jck3-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }"];
var FramerZ_P4oNiOt = withCSS7(Component8, css11, "framer-Bd3Wc");
var Z_P4oNiOt_default = FramerZ_P4oNiOt;
FramerZ_P4oNiOt.displayName = "Container 4";
FramerZ_P4oNiOt.defaultProps = { height: 493, width: 1072 };
addFonts7(FramerZ_P4oNiOt, [{ explicitInter: true, fonts: [] }, ...Text4Fonts, ...CardsWhyChooseFonts], { supportsExplicitInterCodegen: true });
FramerZ_P4oNiOt.loader = { load: (props, context) => {
  return runTasksWithYield4([() => forwardLoader4(AXXxXvFux_default, {}, context), () => forwardLoader4(SiMPcK80H_default, {}, context)], context);
} };

// http-url:https://framerusercontent.com/modules/krflm6uMKLZ6B9FhevSR/9Ird4NLfcORdgMcz6wvu/lOvvyCnYE.js
var Container4Fonts = getFonts7(Z_P4oNiOt_default);
var cycleOrder3 = ["BxZGKg_w1", "PpwYzfd4a", "xltt2Mcur"];
var serializationHash8 = "framer-tm4CW";
var variantClassNames8 = { BxZGKg_w1: "framer-v-cw5iba", PpwYzfd4a: "framer-v-1sqqe3b", xltt2Mcur: "framer-v-h4egpc" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition18 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition8 = ({ value, children }) => {
  const config = React12.useContext(MotionConfigContext8);
  const transition = value ?? config.transition;
  const contextValue = React12.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx11(MotionConfigContext8.Provider, { value: contextValue, children });
};
var humanReadableVariantMap3 = { Desktop: "BxZGKg_w1", Phone: "xltt2Mcur", Tablet: "PpwYzfd4a" };
var Variants8 = motion9.create(React12.Fragment);
var getProps9 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "BxZGKg_w1" };
};
var createLayoutDependency8 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component9 = /* @__PURE__ */ React12.forwardRef(function(props, ref) {
  const fallbackRef = useRef12(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React12.useId();
  const { activeLocale, setLocale } = useLocaleInfo8();
  const componentViewport = useComponentViewport8();
  const { style, className: className5, layoutId, variant, ...restProps } = getProps9(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState8({ cycleOrder: cycleOrder3, defaultVariant: "BxZGKg_w1", ref: refBinding, variant, variantClassNames: variantClassNames8 });
  const layoutDependency = createLayoutDependency8(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx8(serializationHash8, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx11(LayoutGroup8, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx11(Variants8, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx11(Transition8, { value: transition18, children: /* @__PURE__ */ _jsx11(motion9.section, { ...restProps, ...gestureHandlers, className: cx8(scopingClassNames, "framer-cw5iba", className5, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "WhyChoose__BxZGKg_w1", ref: refBinding, style: { backgroundColor: "var(--token-90eb39eb-8ae7-4d64-805e-41357c9bae67, rgb(255, 255, 255))", ...style }, ...addPropertyOverrides3({ PpwYzfd4a: { "data-framer-name": "Tablet" }, xltt2Mcur: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(ComponentViewportProvider7, { height: 493, width: `min(${componentViewport?.width || "100vw"} - 128px, 1280px)`, y: (componentViewport?.y || 0) + 120 + (((componentViewport?.height || 733) - 240 - 493) / 2 + 0 + 0), ...addPropertyOverrides3({ PpwYzfd4a: { width: `min(${componentViewport?.width || "100vw"} - 64px, 1280px)`, y: (componentViewport?.y || 0) + 100 + (((componentViewport?.height || 913) - 200 - 493) / 2 + 0 + 0) }, xltt2Mcur: { width: `min(${componentViewport?.width || "100vw"} - 48px, 1280px)`, y: (componentViewport?.y || 0) + 80 + (((componentViewport?.height || 1523) - 160 - 493) / 2 + 0 + 0) } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx11(SmartComponentScopedContainer7, { className: "framer-g5juyj-container", layoutDependency, layoutId: "WhyChoose__XOtyUOWri-container", nodeId: "XOtyUOWri", rendersWithMotion: true, scopeId: "lOvvyCnYE", children: /* @__PURE__ */ _jsx11(Z_P4oNiOt_default, { height: "100%", id: "XOtyUOWri", layoutId: "WhyChoose__XOtyUOWri", style: { maxWidth: "100%", width: "100%" }, width: "100%" }) }) }) }) }) }) });
});
var css12 = [".framer-tm4CW.framer-1ixcgw0, .framer-tm4CW .framer-1ixcgw0 { display: block; }", ".framer-tm4CW.framer-cw5iba { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 120px 64px 120px 64px; position: relative; width: 100%; }", ".framer-tm4CW .framer-g5juyj-container { flex: none; height: auto; max-width: 1280px; position: relative; width: 100%; }", ".framer-tm4CW.framer-v-1sqqe3b.framer-cw5iba { padding: 100px 32px 100px 32px; width: 100%; }", ".framer-tm4CW.framer-v-h4egpc.framer-cw5iba { padding: 80px 24px 80px 24px; width: 100%; }"];
var FramerlOvvyCnYE = withCSS8(Component9, css12, "framer-tm4CW");
var lOvvyCnYE_default = FramerlOvvyCnYE;
FramerlOvvyCnYE.displayName = "Why Choose";
FramerlOvvyCnYE.defaultProps = { height: 733, width: 1200 };
addPropertyControls6(FramerlOvvyCnYE, { variant: { options: ["BxZGKg_w1", "PpwYzfd4a", "xltt2Mcur"], optionTitles: ["Desktop", "Tablet", "Phone"], title: "Variant", type: ControlType10.Enum } });
addFonts8(FramerlOvvyCnYE, [{ explicitInter: true, fonts: [] }, ...Container4Fonts], { supportsExplicitInterCodegen: true });
FramerlOvvyCnYE.loader = { load: (props, context) => {
  return runTasksWithYield5([() => forwardLoader5(Z_P4oNiOt_default, {}, context)], context);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerlOvvyCnYE", "slots": [], "annotations": { "framerIntrinsicWidth": "1200", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"PpwYzfd4a":{"layout":["fixed","auto"]},"xltt2Mcur":{"layout":["fixed","auto"]}}}', "framerContractVersion": "1", "framerColorSyntax": "true", "framerImmutableVariables": "true", "framerDisplayContentsDiv": "false", "framerComponentViewportWidth": "true", "framerAutoSizeImages": "true", "framerIntrinsicHeight": "733" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  lOvvyCnYE_default as default
};
