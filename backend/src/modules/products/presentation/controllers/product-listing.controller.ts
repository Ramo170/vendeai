import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductListingUseCase } from '../../application/use-cases/create-product-listing.use-case.js';
import { CreateProductListingDto } from '../dtos/create-product-listing.dto.js';
import { FindAllProductListingsUseCase } from '../../application/use-cases/find-all-product-listings.use-case.js';

@Controller('products')
export class ProductListingController {
  constructor(
    private readonly createProductListingUseCase: CreateProductListingUseCase,
    private readonly findAllProductListingUseCase: FindAllProductListingsUseCase,
  ) {}

  @Post()
  create(@Body() body: CreateProductListingDto) {
    return this.createProductListingUseCase.execute(body);
  }

  @Get()
  async;
}
