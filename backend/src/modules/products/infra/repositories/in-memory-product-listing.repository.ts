import { ProductListingRepository } from '../../application/repositories/product-listing.repository.js';
import { ProductListing } from '../../domain/entities/product-listing.entity.js';

export class InMemoryProductListingRepository implements ProductListingRepository {
  public items: ProductListing[] = [];

  create(productListing: ProductListing): Promise<void> {
    this.items.push(productListing);
    return Promise.resolve();
  }

  findAll(): Promise<ProductListing[]> {
    return Promise.resolve(this.items);
  }
}
