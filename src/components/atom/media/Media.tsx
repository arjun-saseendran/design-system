import {FC} from 'react'
import { MediaProps } from './type'


export const Media: FC<MediaProps> = ({src, alt, mediaClasses, containerClasses}) => {
  return (
    <div className={containerClasses}>
        <img className={mediaClasses} src={src} alt={alt} />
    </div>
  )
}
