import Link from 'next/link';
import classes from './topbar.module.scss';
import { BsPhoneVibrate } from 'react-icons/bs';

export const Topbar = ()=>{
    return (
      <div className={classes.wrapper}>
            <BsPhoneVibrate size='1.2rem'/>
            <Link href='/feedback'>Обратная связь</Link>
      </div>
    )
}