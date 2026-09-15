import { ProductListing } from 'src/modules/products/domain/entities/product-listing.entity';
import { InMemoryProductListingRepository } from 'src/modules/products/infra/repositories/in-memory-product-listing.repository';

describe('InMemoryProductListingRepository', () => {
  it('deve salvar um anuncio', async () => {
    const repository = new InMemoryProductListingRepository();
    const listing = ProductListing.create({
      title: 'Bicicleta Caloi',
      description: 'Bicicleta usada',
      priceInCents: 50000,
      sellerId: 'seller-1',
      categoryId: 'categor-1',
    });
    await repository.create(listing);
    expect(repository.items).toHaveLastReturnedWith(1);
    expect(repository.items[0]).toBe(listing);
  });
});
