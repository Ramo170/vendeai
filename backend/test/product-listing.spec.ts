import {
  ProductListing,
  ProductListingStatus,
} from '../src/modules/products/domain/entities/product-listing.entity.js';

describe('ProductListing', () => {
  it('não deve permitir anuncio sem titulo', () => {
    expect(() =>
      ProductListing.create({
        title: '',
        description: 'bicicleta usada',
        priceInCents: 50000,
        sellerId: 'seller-1',
        categoryId: 'category-1',
      }),
    ).toThrow('O titulo do anuncio é obrigatório');
  });
  it('deve criar um anuncio válido', () => {
    const listing = ProductListing.create({
      title: 'Bicicleta Caloi',
      description: 'Bicicleta usada em ótimo estado',
      priceInCents: 50000,
      sellerId: 'seller-1',
      categoryId: 'category-1',
    });
    expect(listing).toBeInstanceOf(ProductListing);
  });

  it('deve iniciar com status AVAILABLE', () => {
    const listing = ProductListing.create({
      title: 'Bicicleta Caloi',
      description: 'Bicicleta usada em ótimo estado',
      priceInCents: 50000,
      sellerId: 'seller-1',
      categoryId: 'category-1',
    });
    expect(listing.status).toBe('AVAILABLE');
  });

  it('não deve permitir valor negativo', () => {
    expect(() =>
      ProductListing.create({
        title: 'Bicicleta usada',
        description: 'bicicleta usada',
        priceInCents: -500,
        sellerId: 'seller-1',
        categoryId: 'category-1',
      }),
    ).toThrow('não deve permitir valor negativo');
  });

  it('A descrição do anuncio é obrigatória', () => {
    expect(() =>
      ProductListing.create({
        title: 'Bicicleta usada',
        description: '',
        priceInCents: 50000,
        sellerId: 'seller-1',
        categoryId: 'category-1',
      }),
    ).toThrow('A descrição do anuncio é obrigatória');
  });

  it('O vendedor do anuncio é obrigatório', () => {
    expect(() =>
      ProductListing.create({
        title: 'Bicicleta usada',
        description: 'bicicleta usada',
        priceInCents: 50000,
        sellerId: '',
        categoryId: 'category-1',
      }),
    ).toThrow('O vendedor do anuncio é obrigatório');
  });

  it('Ter a categoria preencida é obrigatório', () => {
    expect(() =>
      ProductListing.create({
        title: 'Bicicleta usada',
        description: 'bicicleta usada',
        priceInCents: 50000,
        sellerId: 'seller-1',
        categoryId: '',
      }),
    ).toThrow('Ter a categoria preencida é obrigatório');
  });

  it('Deve marcar o anuncio como vendido', () => {
    const listing = ProductListing.create({
      title: 'Bicicleta Caloi',
      description: 'Bicicleta usada',
      priceInCents: 50000,
      sellerId: 'seller-1',
      categoryId: 'categor-1',
    });
    listing.markAsSold();
    expect(listing.status).toBe(ProductListingStatus.SOLD);
  });
});
