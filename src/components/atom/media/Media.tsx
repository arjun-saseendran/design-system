import { FC, ImgHTMLAttributes, VideoHTMLAttributes } from "react";
import type { MediaProps } from "./type";

export const Media: FC<MediaProps> = ({
  type,
  src,
  alt,
  mediaClasses,
  containerClasses,
  ...restProps
}) => {
  {
    if (type === "image") {
      const imageRestProps = restProps as ImgHTMLAttributes<HTMLImageElement>;
      return (
        <div className={containerClasses}>
          <img
            src={src}
            alt={alt}
            className={mediaClasses}
            {...imageRestProps}
          />
        </div>
      );
    } else {
      const videoRestProps = restProps as VideoHTMLAttributes<HTMLVideoElement>;
      return (
        <div className={containerClasses}>
          <video src={src} {...videoRestProps} />
        </div>
      );
    }
  }
};
