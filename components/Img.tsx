import NextImage, { type ImageProps } from "next/image";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Img({ src, ...props }: ImageProps) {
  const resolved =
    typeof src === "string" && src.startsWith("/") ? `${base}${src}` : src;
  return <NextImage src={resolved} {...props} />;
}
