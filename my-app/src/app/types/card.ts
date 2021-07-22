export interface Product {
  id?: number
  company?: string
  title?: string
  rating?: ProductRating
  reviews?: number
  price?: ProductPrice
  deliveryOptions?: DeliveryOptions
  bage?: ProductBage
}

export interface ProductPrice {
  value?: number
  discount?: number
}

export interface ProductRating {
  value?: number
  reviews?: number
}


export interface DeliveryOptions {
  delivery?: string
  postamate?: boolean
  available?: number
}


export interface ProductBage {
  color?: string
  text?: string
}




