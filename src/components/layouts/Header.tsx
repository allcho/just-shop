import { Logobar } from '@/components/header/Logobar';
import { Topbar } from '@/components/header/Topbar';
import classes from './header.module.scss';

export const Header = async() =>{

  return (
    <header className={classes.wrapper}>
        <Topbar/>
        <Logobar/>
    </header>
  )
}