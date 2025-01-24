import {FC} from 'react'
import { MediaProps } from './type'


export const Media: FC<MediaProps> = ({type, src, alt, mediaClasses, containerClasses}) => {
  return (
    <div className={containerClasses}>

        {
            type === 'image' ? (
                <img className={mediaClasses} src={src} alt={alt} />
            ) : (
                <video src={src}/>
            )
        }
        
    </div>
  )
}
