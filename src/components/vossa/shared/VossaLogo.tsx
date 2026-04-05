import Image from "next/image";

type VossaLogoProps = {
  dark?: boolean;
  width?: number;
  height?: number;
};

export function VossaLogo({
  dark = false,
  width = 170,
  height = 39,
}: VossaLogoProps) {
  return (
    <Image
      src="/vossa/vossa-logo-dark.jpg"
      alt="VOSSA"
      width={width}
      height={height}
      className={dark ? "" : "brightness-0 invert"}
    />
  );
}
