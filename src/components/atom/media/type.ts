import { VideoHTMLAttributes, ImgHTMLAttributes } from "react";

export type MediaType = "image" | "video";

export type CommonProps = {
  type: MediaType;
  src: string;
  alt: string;
  mediaClasses?: string;
  containerClasses?: string;
};

export type ImageProps = CommonProps & ImgHTMLAttributes<HTMLImageElement>;
export type VideoProps = CommonProps & VideoHTMLAttributes<HTMLVideoElement>;

export type MediaProps = ImageProps | VideoProps;
