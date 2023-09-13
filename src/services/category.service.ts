import { notFound } from 'next/navigation';

const baseURL = 'http://localhost:3099';

export const CategoryService = {

   async getCategory(id: any){
      const res = await fetch(`${baseURL}/categories/${id}`, { cache: 'no-store' });
     
      if (res.status === 404) {
         notFound();
      }else if(!res.ok){
         throw new Error('Failed to fetch data')
      }

      return res.json();
   },

   async getCategories(){
      const res = await fetch(`${baseURL}/categories`, { cache: 'no-store' });
     
      if (res.status === 404) {
         notFound();
      }else if(!res.ok){
         throw new Error('Failed to fetch data')
      }

      return {
         categories: await res.json(),
      };
   },
 
}