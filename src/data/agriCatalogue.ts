import agriData from './agriCatalogue.json';
import { Product } from '../data';

export const agriCatalogueProducts: Product[] = agriData as unknown as Product[];

export default agriCatalogueProducts;
