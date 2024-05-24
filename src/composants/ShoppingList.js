import {planteList} from "../datas/PlanteList.js"
import {useState} from 'react'
import PlanteItem from "./PlanteItem.js"
import '../styles/ShoppingList.css'
import Categories from "./Categories.js"


function ShoppingList({cart, updateCart}){
	const [activeCategory, setActiveCategory] = useState('')

	const categories = planteList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return(
        <div>
			<Categories setActiveCategory={setActiveCategory} categories={categories} activeCategory={activeCategory}  />
			<ul className='lmj-plant-list'>
				{planteList.map(({ id, cover, name, water, light, price, category }) => (
					!activeCategory || activeCategory === category ? (
						<div>
							<PlanteItem id={id} cover={cover} name={name} water={water} light={light} price={price}/>
							<button onClick={() => addToCart(name, price)}>Ajouter au panier</button>
						</div>
					):null
				))}
			</ul>
        </div>
    )
}

export default ShoppingList