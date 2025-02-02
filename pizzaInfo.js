import norvegianPizza from './src/assets/images/norvegian.png'
import carbonaraPizza from './src/assets/images/carbonara.png'
import doubleMeatPizza from './src/assets/images/double-meat.png'
import fourCheesePizza from './src/assets/images/fourCheese.png'
import margaritaPizza from './src/assets/images/margarita.png'
import peperoniPizza from './src/assets/images/peperoni.png'
import trufelMushroomsPizza from './src/assets/images/trufelMushrooms.png'

export const pizzaData = [
  {
    id: 0,
    category: 0,
    img: norvegianPizza,
    name: 'Norwegian',
    
    types: ['thin', 'traditional'],
    sizes: [26,   40],
    price: 15,
    rating: 1
  },
  {
    id: 1,
    category: 1,
    img: carbonaraPizza,
    name: 'Carbonara',
    types: ['thin', 'traditional'],
    sizes: [26, 30, 40],
    price: 20,
    rating: 2
  },
  {
    id: 2,
    category: 2,
    img: doubleMeatPizza,
    name: 'Double Meat',
    types: ['thin', 'traditional'],
    sizes: [26, 30, 40],
    price: 25,
    rating: 3
  },
  {
    id: 3,
    category: 3,
    img: fourCheesePizza,
    name: 'Four Cheese',
    types: ['thin', 'traditional'],
    sizes: [26, 30, 40],
    price: 18,
    rating: 4
  },
  {
    id: 4,
    category: 4,
    img: margaritaPizza,
    name: 'Margarita',
    types: ['thin', 'traditional'],
    sizes: [ 30, 40],
    price: 12,
    rating: 5
  },
  {
    id: 5,
    category: 5,
    img: peperoniPizza,
    name: 'Peperoni',
    types: ['thin', 'traditional'],
    sizes: [26,   40],
    price: 17,
    rating: 6
    
  },
  {
    id: 6,
    category: 6,
    img: trufelMushroomsPizza,
    name: 'Trufel&Mushrooms',
    types: ['thin', 'traditional'],
     sizes: [26, 30, 40],
    price: 30,
    rating: 7
  },
] 