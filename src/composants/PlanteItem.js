import CareScale from './CareScale'
import '../styles/PlanteItem.css'


function HandleClick(plantName){
	alert(`Voulez vous achetez 1 pot de fleur ${plantName}? Très bon choix 🌱✨`)
}  

function PlanteItem({name, cover, id, light, water, price}){
	return (
		<li key={id} className='lmj-plant-item' onClick={() => HandleClick(name)}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlanteItem
