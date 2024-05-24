import logo from '../assets/pot_de_fleur.jpg'
import '../styles/Banner.css'


function Banner(){
    const title = "la maison jungle"
    return (
        <div className="lmj-banner">
            <img src = {logo} alt="logo maison jungle" className="lmj-logo"/>
            <div className= "lmj-textBanner">
                <h1 className="lmj-title">{title.toUpperCase()}</h1>
                <p style = {{margin:0}}>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>
            </div>
        </div>
    )
}

export default Banner