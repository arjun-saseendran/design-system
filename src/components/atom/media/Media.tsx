import {FC} from 'react'
import { MediaProps } from './type'


export const Media: FC<MediaProps> = ({type, src, alt, mediaClasses, containerClasses, ...restProps}) => {
  return (
    <div className={containerClasses}>

        {
            type === 'image' ? (
                <img src={src} alt={alt} className={mediaClasses} {...restProps}  />
            ) : (
                <video src={src} {...restProps}/>
            )
        }
        
    </div>
  )
}
