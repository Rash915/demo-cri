import agriData from './agriCatalogue.json' with { type: 'json' };
import { Product } from '../data';

export const agriCatalogueProducts: Product[] = (agriData as unknown as any[]).map(item => ({
  ...item,
  rcp: item.rcp || item.rcpPrice,
})) as Product[];

export default agriCatalogueProducts;
