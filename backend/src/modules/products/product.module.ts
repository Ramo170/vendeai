import { Module } from '@nestjs/common';
import { ProductListingController } from './presentation/controllers/product-listing.controller.js';
import { CreateProductListingUseCase } from './application/use-cases/create-product-listing.use-case.js';

import { ProdcuctListingRepository } from './application/repositories/product-listing.repository.js';
import { ProductListingTypeOrmRepository } from './infra/database/typeorm/repositories/product-listing-typeorm.repository.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductListingSchema } from './infra/database/typeorm/entities/product-listing-schema.js';

@Module({
  imports: [TypeOrmModule.forFeature([ProductListingSchema])],
  controllers: [ProductListingController],

  providers: [
    CreateProductListingUseCase,
    {
      provide: ProdcuctListingRepository,
      useClass: ProductListingTypeOrmRepository,
    },
  ],
  exports: [ProdcuctListingRepository],
})
export class ProductsModule {}
