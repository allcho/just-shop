"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { CartService } from "@/services/cart.service";
import { pushCart, removeCart } from "@/redux/reducers/cartSlice";
import classes from './cartForm.module.scss';
import clsx from "clsx";
import { useRouter } from "next/navigation";

type PropTypes ={
    item: any,
    added: boolean,
    isCart?: boolean
}

export const CartForm = ({ item, added, isCart }:PropTypes) => {
    const [state, setState] = useState<boolean>(added ?? false);
    const dispatch = useDispatch();
    const router = useRouter();

    const onSubmit = async() => {
        if(state){
            const data = await CartService.removeItem({ id: item.id });
            data && dispatch(removeCart(item.id)) && !isCart && setState(false);
        }else{
            const data = await CartService.addItem({ id: item.id });
            data.item = item;
            data && dispatch(pushCart(data)) && setState(true);
        }

        router.refresh();
    };
    
    return (
        <div className={classes.wrapper}>
            <button onClick={onSubmit} className={clsx({[classes.disabled]: state})}>
                {state ? 'Удалить из корзины' : 'Добавить в корзину'}
            </button>
        </div>

    )

}
