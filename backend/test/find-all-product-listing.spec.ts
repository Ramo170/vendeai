import { ProductListingRepository } from 'src/modules/products/application/repositories/product-listing.repository';
import { FindAllProductListingsUseCase } from 'src/modules/products/application/use-cases/find-all-product-listings.use-case';

describe('Find all product listings', () => {
  it('deve retorna todos os produtos', async () => {
    const productListingRepository = {
      findAll: () =>
        Promise.resolve([
          {
            id: '1',
            title: 'iphone 13',
            description: 'Iphone usado',
            priceInCents: 250000,
            sellerId: 'seller-1',
            categoryId: 'category-1',
            status: 'AVAILABLE',
          },
        ]),
    } as unknown as ProductListingRepository;

    const sut = new FindAllProductListingsUseCase(productListingRepository);

    const result = await sut.execute();

    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('iphone 13');
  });
});
