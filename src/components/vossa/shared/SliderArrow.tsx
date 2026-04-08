type SliderArrowProps = {
  direction: "left" | "right";
};

export function SliderArrow({ direction }: SliderArrowProps) {
  const rotate = direction === "left" ? "rotate-180" : "";

  return (
    <button
      className="grid h-[45px] w-[45px] place-items-center rounded-full bg-white text-[#38312a]/70"
      aria-label={direction === "left" ? "Попередній" : "Наступний"}
      type="button"
    >
      <svg
        className={rotate}
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 22.5H30M30 22.5L22.5 15M30 22.5L22.5 30" stroke="#38312A" />
      </svg>
    </button>
  );
}