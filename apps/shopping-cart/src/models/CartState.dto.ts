import { CartItemDto } from './CartItem.dto';

export interface CartStateDto {
  items: CartItemDto[];
  totalQuantity: number;
  totalAmount: number;
}
