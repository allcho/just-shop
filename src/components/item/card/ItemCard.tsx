import classes from './itemCard.module.scss';
import { IItem } from '@/interfaces/item.interface';
import Image from 'next/image';
import { CartForm } from '@/components/forms/CartForm';
import Link from 'next/link';

type PropTypes = {
  data: IItem;
};

export const ItemCard = ({
  data,
}: PropTypes) => {

  return (
    <article className={classes.wrapper} >
      <Link
        href={`/item/${data?.id}`}
      >
         {data && 
           <Image
            src={`${data?.image}?abc=${data?.id}`}
            className={classes.image}
            alt={data?.title}
            width={365}
            height={165}
          />
         }
      </Link>
      <div className={classes.title}>
        {data?.title}
      </div>
      <div className={classes.price}>
        Цена: {data?.price} руб.
      </div>
      <div className={classes.color}>
        Цвет: {data?.color}
      </div>
      <CartForm item={data} added={data.cart.length > 0 ? true: false}/>
    </article>
  );
};
