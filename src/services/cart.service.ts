import { notFound } from 'next/navigation';

const baseURL = 'http://localhost:3099';

export const CartService = {
   async getCart(){
      const res = await fetch(`${baseURL}/cart?_expand=item`, {cache: 'no-store'});

      if (res.status === 404) {
         notFound();
      }else if(!res.ok){
         throw new Error('Failed to fetch data')
      }

      return res.json();
   },

   async addItem(req: any){
    const findItem = await fetch(`${baseURL}/cart?itemId=${req.id}`);

    if(findItem.ok){
        const item = await findItem.json();
        if(item.length > 0){
         return false;
        }
    }

    const res = await fetch(`${baseURL}/cart`, {
        method: 'POST', 
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ itemId: req.id, count: req.count })}
     );

    if(!res.ok){
       throw new Error('Failed to fetch data')
    }

    return res.json();
 },

 async removeItem(req: any){
   const findItem = await fetch(`${baseURL}/cart?itemId=${req.id}`);

   const cart = await findItem.json();
   const res = await fetch(`${baseURL}/cart/${cart[0].id}`, {method: 'DELETE'});

   if(!res.ok){
      throw new Error('Failed to fetch data')
   }

   return res.json();
},


}