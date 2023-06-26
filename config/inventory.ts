import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]

  price: number
  currency: string
  sizes: string[]
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "kupalniki_1",
    name: "Kupalniki1",
    
    price: 16800, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg?format=jpg&width=960",
    images: [
      "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg?format=jpg&width=960",
      "https://freesvg.org/img/1286146771.png",
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/dark-green-square-thomas-woolworth.jpg",
    ],

    categories: ["kupalnikebi"],
    sizes: ["xs", "s", "m", "l"],

    currency: "USD",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "kupalniki_2",
    name: "Kupalniki2",
    
    price: 14500,
    image:
      "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg?format=jpg&width=960",
    images: [
      "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg?format=jpg&width=960",
      "https://freesvg.org/img/1286146771.png",
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/dark-green-square-thomas-woolworth.jpg",
    ],
 
    categories: ["kupalnikebi"],
    sizes: ["xs", "s", "m", "l"],
    currency: "USD",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "kupalniki_3",
    name: "Kupalniki3",
    
    price: 4999,
    image:
      "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg?format=jpg&width=960",
    images: [
      "https://freesvg.org/img/1286146771.png",
    ],
   
    categories: ["kupalnikebi"],
    sizes: ["xs", "s", "m", "l"],
    currency: "USD",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "kupalniki_4",
    name: "Kupalniki4",
    
    price: 5599,
    image:
      "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg?format=jpg&width=960",
    images: [
      "https://freesvg.org/img/1286146771.png0",
    ],
    
    categories: ["kupalnikebi"],
    sizes: ["xs", "s", "m", "l"],
    currency: "USD",
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "kupalniki_5",
    name: "Kupalniki5",
   
    price: 6199,
    image:
      "https://imageio.forbes.com/specials-images/imageserve/5ed6636cdd5d320006caf841/The-Blackout-Tuesday-movement-is-causing-Instagram-feeds-to-turn-black-/960x0.jpg?format=jpg&width=960",
    images: [
      "https://freesvg.org/img/1286146771.png",
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/dark-green-square-thomas-woolworth.jpg",
    ],
   
    categories: ["kupalnikebi"],
    sizes: ["xs", "s", "m", "l"],
    currency: "USD",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "kalgotka_1",
    name: "Kalgotka1",
   
    price: 9800,
    image:
      "https://www.nj.com/resizer/UF6-3JBUiF5bPmmZ0fqXCnOEzEU=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/ELE2VGM36FEQXEZVWW5MVKM52A.png",
    images: [
      "https://www.nj.com/resizer/UF6-3JBUiF5bPmmZ0fqXCnOEzEU=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/ELE2VGM36FEQXEZVWW5MVKM52A.png",
    ],
    
    categories: ["kalgotkebi"],
    sizes: ["xs", "s", "m", "l"],
    currency: "USD",
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "kalgotka_2",
    name: "Kalgotka2",
    
    price: 13999,
    image:
      "https://www.nj.com/resizer/UF6-3JBUiF5bPmmZ0fqXCnOEzEU=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/ELE2VGM36FEQXEZVWW5MVKM52A.png",
    images: [
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/dark-green-square-thomas-woolworth.jpg",
    ],
  
    categories: ["kalgotkebi"],
    sizes: ["xs", "s", "m", "l"],
    currency: "USD",
  },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "kalgotka_3",
    name: "Kalgotka3",
    
    price: 42000,
    image:
      "https://www.nj.com/resizer/UF6-3JBUiF5bPmmZ0fqXCnOEzEU=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/ELE2VGM36FEQXEZVWW5MVKM52A.png",
    images: [
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/dark-green-square-thomas-woolworth.jpg",
      "https://www.nj.com/resizer/UF6-3JBUiF5bPmmZ0fqXCnOEzEU=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/ELE2VGM36FEQXEZVWW5MVKM52A.png",
    ],
   
    categories: ["kalgotkebi"],
    sizes: ["xs", "s", "m", "l"],
    currency: "USD",
  },
  {
    id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
    sku: "kalgotka_4",
    name: "Kalgotka4",
   
    price: 5599,
    image:
      "https://www.nj.com/resizer/UF6-3JBUiF5bPmmZ0fqXCnOEzEU=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/ELE2VGM36FEQXEZVWW5MVKM52A.png",
    images: [
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/dark-green-square-thomas-woolworth.jpg",
    ],
  
    categories: ["kalgotkebi"],
    sizes: ["xs", "s", "m", "l"],
    currency: "USD",
  },
]
