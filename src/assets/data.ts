export interface Recipe {
  quickView: QuickView
  image: string
}

export interface QuickView {
  title: string
  minutes: number
  serves: number
  ingredients: string[]
}

const recepies: Recipe[] = [
  {
    quickView: {
      title: 'Triple Chocolate Chip Cookies',
      minutes: 30,
      serves: 8,
      ingredients: ['dark chocolate', 'cocoa powder', 'butter', 'eggs', 'flour', 'sugar'],
    },
    image: 'triple-chocolate.jpg',
  },
  {
    quickView: {
      title: 'Zesty Lemon Drizzle Cake',
      minutes: 45,
      serves: 10,
      ingredients: ['lemons', 'flour', 'sugar', 'eggs', 'butter'],
    },
    image: 'lemon-drizzle.jpeg',
  },
  {
    quickView: {
      title: 'Spicy Chickpea Curry',
      minutes: 35,
      serves: 4,
      ingredients: ['chickpeas', 'tomato', 'onion', 'garlic', 'chilli', 'curry powder'],
    },
    image: 'chickpea-curry.jpg',
  },
  {
    quickView: {
      title: 'Creamy Mushroom Risotto',
      minutes: 40,
      serves: 4,
      ingredients: ['arborio rice', 'mushrooms', 'garlic', 'onion', 'parmesan', 'white wine'],
    },
    image: 'mushroom-risotto.jpg',
  },
  {
    quickView: {
      title: 'Banana Oat Pancakes',
      minutes: 20,
      serves: 2,
      ingredients: ['bananas', 'rolled oats', 'eggs', 'baking powder', 'cinnamon'],
    },
    image: 'banana-pancakes.jpg',
  },
  {
    quickView: {
      title: 'Classic Margherita Pizza',
      minutes: 25,
      serves: 2,
      ingredients: ['pizza dough', 'tomato sauce', 'mozzarella', 'basil'],
    },
    image: 'margherita-pizza.webp',
  },
]

export default recepies
