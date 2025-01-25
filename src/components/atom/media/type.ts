import { VideoHTMLAttributes} from 'react'

type MediaType = 'image' | 'video'

export interface MediaProps extends VideoHTMLAttributes<HTMLVideoElement> {
  type: MediaType;
  src: string;
  alt: string;
  mediaClasses?: string;
  containerClasses?: string;
}