import residentialData from './residentialCatalogue.json' with { type: 'json' };
import { Product } from '../data';

export const residentialCatalogueProducts: Product[] = (residentialData as unknown as any[]).map(item => ({
  ...item,
  rcp: item.rcp || item.rcpPrice,
})) as Product[];

export default residentialCatalogueProducts;
