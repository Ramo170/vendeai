export enum ProductListingStatus {
  AVAILABLE = 'AVAILABLE',
  SOLD = 'SOLD',
  INACTIVE = 'INACTIVE',
}

export interface CreateProductListingData {
  title: string;
  description: string;
  priceInCents: number;
  sellerId: string;
  categoryId: string;
}

interface ProductListingData extends CreateProductListingData {
  status: ProductListingStatus;
}

export class ProductListing {
  private constructor(private readonly data: ProductListingData) {}

  static create(data: CreateProductListingData): ProductListing {
    if (!data.title.trim()) {
      throw new Error('O titulo do anuncio é obrigatório');
    }

    if (data.priceInCents < 0) {
      throw new Error('não deve permitir valor negativo');
    }

    if (!data.description.trim()) {
      throw new Error('A descrição do anuncio é obrigatória');
    }

    if (!data.sellerId.trim()) {
      throw new Error('O vendedor do anuncio é obrigatório');
    }

    if (!data.categoryId.trim()) {
      throw new Error('Ter a categoria preencida é obrigatório');
    }

    return new ProductListing({
      ...data,
      status: ProductListingStatus.AVAILABLE,
    });
  }

  static restore(data: ProductListingData): ProductListing {
    return new ProductListing(data);
  }

  get status(): ProductListingStatus {
    return this.data.status;
  }

  get title(): string {
    return this.data.title;
  }

  get description(): string {
    return this.data.description;
  }

  get priceInCents(): number {
    return this.data.priceInCents;
  }

  get sellerId(): string {
    return this.data.sellerId;
  }

  get categoryId(): string {
    return this.data.categoryId;
  }

  markAsSold(): void {
    this.data.status = ProductListingStatus.SOLD;
  }
}
