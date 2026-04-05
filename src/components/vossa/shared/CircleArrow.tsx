type CircleArrowProps = {
  dark?: boolean;
  size?: number;
};

export function CircleArrow({
  dark = false,
  size = 54,
}: CircleArrowProps) {
  return (
    <span
      className="grid rounded-full"
      style={{
        width: size,
        height: size,
        background: dark ? "rgba(0,0,0,0.22)" : "rgba(255,255,255,0.08)",
        border: dark
          ? "1px solid rgba(255,255,255,0.18)"
          : "1px solid rgba(56,49,42,0.12)",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 34L34 20M34 20V34M34 20H20"
          stroke={dark ? "#fff" : "#38312A"}
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}
