import soleil from '../assets/sun.svg'
import eau from '../assets/water.svg'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({scaleValue, careType}){
    const range = [1, 2, 3]

    const scaleType = (careType === 'light' ?  <img src={soleil} alt='sun-icon' />: <img src={eau} alt='water-icon' />)

    return (
        <div 
            onClick={() =>console.log(`Cette plante requiert ${quantityLabel[scaleValue]} 
                ${careType === 'light' ? 'de lumière' : "d'arrosage"}`
            )}
        >
            {range.map((rangeElement) => (scaleValue >= rangeElement) ? 
                <span key={rangeElement.toString()} > {scaleType} </span> : null 
            )}
        </div>
    )
}

export default CareScale