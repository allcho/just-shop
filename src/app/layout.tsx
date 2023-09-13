import { Header } from '@/components/layouts/Header';
import classes from './globals.module.scss';
import './style.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/layouts/Footer';
import { Categories } from '@/components/item/Categories';
import { Providers } from "@/redux/Provider";
import { CategoryService } from '@/services/category.service';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Just Shop App',
  description: 'Just Shop App - portfolio',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dataCategories = await CategoryService.getCategories();
  
  return (
   
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Header/>
            <main className={classes.wrapper}>
              <div>
                <Categories categories={dataCategories.categories}/>
                <div>
                  {children}
                </div>
              </div>
            </main>
            <Footer/>
          </Providers>
        </body>
      </html>
   
  )
}
