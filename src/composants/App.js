import { useState } from 'react'
import Banner from './Banner.js';
import Cart from './Cart.js';
import ShoppingList from './ShoppingList.js';
import Footer from './Footer';
import '../styles/App.css'

function App() {
  const [cart, updateCart] = useState([])

  return (
    <div>
      <Banner/>
      <div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
      <Footer/>
    </div>
  )
  
}

export default App;
