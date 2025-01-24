
export type MediaType = 'image' | 'video'

export interface MediaProps{
    src: string;
    alt: string;
    mediaClasses?: string;
    containerClasses?: string;
}