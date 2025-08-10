import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';

const builder = imageUrlBuilder(client);
export const urlFor = (src: any) => builder.image(src);
