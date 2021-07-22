import { Product } from '../types/card'

export const product: Product = {
  id: 1,
  company: 'Google',
  title: 'Смартфон 1',
  rating: {
    value: 5,
    reviews: 4,
  },
  price: {
    value: 63000,
    discount: 0.17,
  },
  deliveryOptions: {
    delivery: '21.07',
    postamate: true,
    available: 1,
  },
  bage: {
    color: "#000000",
    text: "choice"
  }
}

export const products: Array<Product> = [
  {

  }
]



