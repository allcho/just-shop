import { IItem } from '@/interfaces/item.interface';
import classes from './ItemFull.module.scss';
import Image from 'next/image';
import { CartForm } from '@/components/forms/CartForm';

type PropTypes = {
  item: IItem;
};

export const ItemFull = ({ item }: PropTypes) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.item}>
        {item && 
           <Image
            src={`${item?.image}?abc=${item?.id}`}
            className={classes.image}
            alt={item?.title}
            width={300}
            height={200}
          />
         }
        <div>
          <h1>{item?.title}</h1>
          <span>Цена: {item?.price} руб.</span>
          <span>Цвет: {item?.color}</span>
          <CartForm item={item} added={item.cart.length > 0 ? true: false}/>
          <h2>Описание товара</h2>
          <p>{item?.description}</p>
        </div>
      </div>
    </div>
  );
};
