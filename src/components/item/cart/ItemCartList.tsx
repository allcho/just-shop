"use client"

import { CartForm } from '@/components/forms/CartForm';
import classes from './ItemCartList.module.scss';
import { ICartItems } from '@/interfaces/cart.interface';
import Image from 'next/image';
import Link from 'next/link';

type PropTypes = {
  cart: ICartItems[],
};

export const ItemCartList = ({cart}: PropTypes) => {

  return (
    <> 
      <div className={classes.wrapper}>
      {cart.map((data, idx) => (
          <div className={classes.item} key={idx}>
            <Image
              src={`${data.item?.image}`}
              className={classes.image}
              alt={data.item?.title}
              width={200}
              height={150}
            />
            <div>
              <Link
                href={`/item/${data?.item.id}`}
              >
                {data.item.title}
              </Link>
              <span>Цена: {data.item?.price} руб.</span>
              <span>Цвет: {data.item?.color}</span>
              <CartForm item={data.item} added={true} isCart={true}/>
            </div>
          </div>
        ))}
      </div>
   
    </>
  );
};
