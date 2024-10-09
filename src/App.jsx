import { useState } from 'react'
import './App.css'
import IngredientList from './IngredientList';
import BurgerStack from './BurgerStack';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([])
  console.log('Stack state' ,stack)

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      {/* List & Stack components */}
      <IngredientList availableIngredients={availableIngredients} setStack={setStack} stack={stack}/>
      <BurgerStack setStack={setStack} stack={stack}/>
      </section>
    </main>
  );
};


export default App

// https://generalassembly.instructure.com/courses/297/assignments/3648