import { ICartItems } from "./cart.interface"

export interface IItem {
    title: string
    description: string
    price: string
    image: string
    color: string
    category: string
    id: string
    cart: ICartItems[]
}