import Link from 'next/link';
import classes from './logobar.module.scss';
import { Cart } from '@/components/cart/Cart';

export const Logobar = ()=>{
    return (
      <div className={classes.wrapper}>
        <div>
          <div className={classes.logo}>
            <Link href='/'>JustShop</Link>
          </div>
          <div className={classes.cart}>
            <Cart/>
          </div>
        </div>
      </div>
    )
}