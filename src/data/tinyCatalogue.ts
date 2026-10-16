import tinyData from './tinyCatalogue.json' with { type: 'json' };
import { Product } from '../data';

export const tinyCatalogueProducts: Product[] = tinyData as unknown as Product[];

export default tinyCatalogueProducts;
