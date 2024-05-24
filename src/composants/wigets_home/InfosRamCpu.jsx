import React from 'react'
import '../../styles/Infos_ram.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function InfosRamCpu({infos}) {
    let data = []

    switch (infos){
        case "ram":
            data = {
                title : "RAM informations",
                sous_titre : "Ram used graph",
                total : 16,
                used : 10.4,
                percent : 65,
                free : 5.6
            }
            break;
        case "cpu":
            data = {
                title : "Cpu informations",
                sous_titre : "Cpu used graph",
                vitesse : 5.4,
                percent : 81,
                process: 285,
                coeurs: 4
            }
            break;
        default:
            break;
    }


  return (
    <div className='bulle_section2'>
        <div className='texts_bulle_section2'>
            <span>{data.title}</span>
            <div style={{height: "2px", background: "#ffc400", width: "100%", borderRadius:"10px"}}></div>
        </div>
        <div className='graph_ram_infos'>
            <div className="graph_ram">
                <span>{data.sous_titre}</span>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar 
                        value={data.percent} 
                        maxValue={100} 
                        text={`${data.percent}%`} 
                        strokeWidth={10}
                        styles={buildStyles({
                            textColor: '#000000f4',
                            pathColor: "#ffc400"
                        })}
                    />
                </div>
            </div>
            <div className='infos_ram'>
                <span>
                    <div style={{height: "5px", background: "#ffc400", width: "5px", borderRadius:"100%"}}></div>
                    {infos === "ram" ? `Total : ${data.total} Go`: `Vitesse : ${data.vitesse} Ghz`}
                </span>
                <span>
                    <div style={{height: "5px", background: "#ffc400", width: "5px", borderRadius:"100%"}}></div>
                    {infos === "ram" ? `Used : ${data.used} Go`: `Used : ${data.percent}%`}
                </span>
                <span>
                    <div style={{height: "5px", background: "#ffc400", width: "5px", borderRadius:"100%"}}></div>
                    {infos === "ram" ? `Percent : ${data.percent}%`: `Process : ${data.process}`}
                </span>
                <span>
                    <div style={{height: "5px", background: "#ffc400", width: "5px", borderRadius:"100%"}}></div>
                    {infos === "ram" ? `Free : ${data.free} Go`: `Hearts : ${data.coeurs}`}
                </span>
            </div>
        </div>
    </div>
  )
}

export default InfosRamCpu