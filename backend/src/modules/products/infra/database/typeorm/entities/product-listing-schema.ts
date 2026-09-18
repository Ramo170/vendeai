import { ProductListingStatus } from '../../../../domain/entities/product-listing.entity.js';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_listings')
export class ProductListingSchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'integer' })
  priceInCents: number;

  @Column()
  sellerId: string;

  @Column()
  categoryId: string;

  @Column({
    type: 'enum',
    enum: ProductListingStatus,
  })
  status: ProductListingStatus;
}
