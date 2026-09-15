import { Inject } from '@nestjs/common';
import { ProductListingRepository } from '../repositories/product-listing.repository';
import { ProductListing } from '../../domain/entities/product-listing.entity';

export class FindAllProductListingsUseCase {
  constructor(
    @Inject(ProductListingRepository)
    private readonly productListingRepository: ProductListingRepository,
  ) {}

  execute(): Promise<ProductListing[]> {
    return this.productListingRepository.findAll();
  }
}
