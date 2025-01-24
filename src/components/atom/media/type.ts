
type MediaType = 'image' | 'video'

export interface MediaProps{
    type: MediaType;
    src: string;
    alt: string;
    mediaClasses?: string;
    containerClasses?: string;
}