import accessoriesData from './accessoriesCatalogue.json' with { type: 'json' };
import { Product } from '../data';

export const accessoriesCatalogueProducts: Product[] = accessoriesData as unknown as Product[];

export default accessoriesCatalogueProducts;
