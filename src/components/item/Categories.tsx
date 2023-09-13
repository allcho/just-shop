"use client"

import Link from "next/link"
import classes from './categories.module.scss';
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import clsx from "clsx";


type PropTypes = {
    categories: []
}

export const Categories = ({categories}: PropTypes) => {
    const [show, setShow] = useState<boolean>(false);
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    return (
        <div className={classes.wrapper}>
            <h2 onClick={()=> !isDesktop && setShow(!show)}><FiMenu size='1.6rem'/>{show && !isDesktop ? 'Закрыть' : 'Категории'}</h2>
            <ul className={clsx({[classes.show]: show && !isDesktop,})} >
                <li>
                    <Link href='/'>Главная</Link>
                </li>
                {categories.map((cat: any, key: any)=>
                    <li key={key}>
                        <Link href={`/category/${cat.id}`}  onClick={()=> !isDesktop && setShow(false)}>{cat.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
