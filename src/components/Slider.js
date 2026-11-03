import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Shared slider logic. Each slider calls this hook independently,
 * so state is never shared between Services and Portfolio.
 *
 * Single source of truth for "how many items are visible":
 * this hook sets --slider-items on the .slider element and CSS reads it.
 * Do NOT also set --slider-items in media queries.
 */
const getVisibleCount = (width) => (width >= 1024 ? 3 : width >= 768 ? 2 : 1);

export default function useSlider(totalItems, { autoplayMs = 1000 } = {}) {
  const sliderRef = useRef(null); // viewport (.slider)
  const trackRef = useRef(null); // moving list (.slider-container)

  const [visible, setVisible] = useState(() =>
    typeof window === "undefined" ? 1 : getVisibleCount(window.innerWidth)
  );
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, totalItems - visible);
  const canSlide = maxIndex > 0;

  /* Responsive visible count */
  useEffect(() => {
    const update = () => setVisible(getVisibleCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* Keep index valid when items/visible count change */
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  /* Measure real pixel offset, clamped so we can never pass the last item */
  useLayoutEffect(() => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    if (!slider || !track) return;

    const measure = () => {
  const items = track.children;
  if (!canSlide || items.length < 2) {
    setOffset(0);
    return;
  }

  const safeIndex = Math.min(Math.max(0, index), items.length - 1, maxIndex);
  const target = items[safeIndex];
  const first = items[0];

  if (!target || !first) {
    setOffset(0);
    return;
  }

  const maxOffset = Math.max(0, track.scrollWidth - slider.clientWidth);
  const wanted = target.offsetLeft - first.offsetLeft;
  setOffset(Math.min(Math.max(0, wanted), maxOffset));
};

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(slider);
    ro.observe(track);
    return () => ro.disconnect();
  }, [index, visible, totalItems, canSlide, maxIndex]);

  const next = useCallback(
    () => canSlide && setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [canSlide, maxIndex]
  );
  const prev = useCallback(
    () => canSlide && setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [canSlide, maxIndex]
  );

  /* Autoplay only when sliding is possible */
  useEffect(() => {
    if (!canSlide || paused || !autoplayMs) return;
    const id = setInterval(next, autoplayMs);
    return () => clearInterval(id);
  }, [canSlide, paused, autoplayMs, next]);

  return {
    sliderRef,
    trackRef,
    canSlide,
    next,
    prev,
    sliderProps: {
      ref: sliderRef,
      className: `slider${canSlide ? "" : " few-items"}`,
      style: { "--slider-items": visible },
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      onFocusCapture: () => setPaused(true),
      onBlurCapture: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      },
    },
    trackProps: {
      ref: trackRef,
      className: "slider-container",
      style: {
        transform: canSlide ? `translate3d(-${offset}px,0,0)` : "translate3d(0,0,0)",
      },
    },
  };
}