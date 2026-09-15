import { ProductListingRepository } from '../../application/repositories/product-listing.repository';
import { ProductListing } from '../../domain/entities/product-listing.entity';

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
