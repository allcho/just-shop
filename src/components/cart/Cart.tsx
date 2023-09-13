"use client";

import { RiShoppingBasket2Line } from 'react-icons/ri';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { useEffect, useState } from 'react';

export const Cart = () => {
    const [count, setCount] = useState<number>(0);
    const cart = useCart();

    useEffect(()=>{ 
        cart && cart.length > 0 ? setCount(cart.reduce((acc: number) => acc + 1, 0)) : setCount(0);
    },[cart])
    
    return (
        <Link href='/cart'>
            {count > 0 && <span>{count}</span>}
            <RiShoppingBasket2Line size='2.1rem'/>
            Корзина
        </Link>
    )
}
