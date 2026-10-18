import nextGenData from './nextGenCatalogue.json' with { type: 'json' };
import { Product } from '../data';

export const nextGenCatalogueProducts: Product[] = (nextGenData as unknown as any[]).map(item => ({
  ...item,
  rcp: item.rcp || item.rcpPrice,
})) as Product[];

export default nextGenCatalogueProducts;
