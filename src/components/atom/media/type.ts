import { VideoHTMLAttributes } from "react";

type MediaType = "image" | "video";

type CommonProps = {
  type: MediaType;
  src: string;
  alt: string;
  mediaClasses?: string;
  containerClasses?: string;
};

export interface MediaProps extends VideoHTMLAttributes<HTMLVideoElement> {
  
}
