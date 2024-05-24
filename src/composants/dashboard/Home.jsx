import '../../styles/Home.css'
import Disponibility from '../wigets_home/Disponibility.jsx';
import InfosRamCpu from '../wigets_home/InfosRamCpu.jsx';
import InfoStockage from '../wigets_home/InfoStockage.jsx';


function Home(){

    return(
        <div className='containeur_Home'>
            <span>
                Dashboard
                <div style={{height: "2px", background: "#ffc400", width: "100%", borderRadius:"10px"}}></div>
            </span>
            <div className='section1'>
                <Disponibility infos="server"/>
                <Disponibility infos="database"/>
                <Disponibility infos="application"/>
            </div>
            <div className='section2'>
                <InfosRamCpu infos = "ram" />
                <InfosRamCpu infos = "cpu" />
            </div>
            <div className="section3">
                <InfoStockage />
            </div>
        </div>
    )
}


export default Home;