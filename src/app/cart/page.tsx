import { ItemCartList } from "@/components/item/cart/ItemCartList";
import { CartService } from "@/services/cart.service";

export default async function CartPage () {

  const cart = await CartService.getCart();
 
  return (
    <>
      <h1 className='text-3xl font-semibold pb-4'>Корзина</h1>
      {cart.length > 0 ? 
        <div>
           <ItemCartList cart={cart} />
        </div>
      :'В корзине нет товаров'}
    </>
  )
}
