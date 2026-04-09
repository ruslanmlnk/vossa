"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

type ScaledArtboardProps = {
  baseWidth: number;
  baseHeight: number;
  children: ReactNode;
  className?: string;
};

export function ScaledArtboard({
  baseWidth,
  baseHeight,
  children,
  className,
}: ScaledArtboardProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState({
    scale: 1,
    height: baseHeight,
    contentHeight: baseHeight,
  });

  useLayoutEffect(() => {
    const outerElement = outerRef.current;
    const innerElement = innerRef.current;

    if (!outerElement || !innerElement) {
      return;
    }

    const updateMetrics = () => {
      const scale = Math.min(1, outerElement.clientWidth / baseWidth);
      const contentHeight = Math.max(baseHeight, innerElement.scrollHeight);

      setMetrics((current) => {
        const nextHeight = Math.ceil(contentHeight * scale);

        if (
          current.scale === scale &&
          current.height === nextHeight &&
          current.contentHeight === contentHeight
        ) {
          return current;
        }

        return {
          scale,
          height: nextHeight,
          contentHeight,
        };
      });
    };

    updateMetrics();

    const resizeObserver = new ResizeObserver(() => {
      updateMetrics();
    });

    resizeObserver.observe(outerElement);
    resizeObserver.observe(innerElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [baseHeight, baseWidth]);

  return (
    <div ref={outerRef} className={className} style={{ height: `${metrics.height}px` }}>
      <div
        ref={innerRef}
        style={{
          minHeight: `${baseHeight}px`,
          transform: `scale(${metrics.scale})`,
          transformOrigin: "top left",
          width: `${baseWidth}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
