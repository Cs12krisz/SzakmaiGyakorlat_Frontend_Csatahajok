import { useEffect, useState } from "react";
import {Navbar} from "../App.jsx";
import { Link } from "react-router-dom";



function Csatahajok() {
    const [adat, setAdat] = useState([])


async function getHajok() {
    try {
        const response = await fetch("https://localhost:7074/api/Hajo/All", {
            method: "GET",
            
        })
        setAdat(await response.json())
    } catch (error) {
        console.error("Hiba")
    }
    
}

async function deletehajo() {
    try {
        const response = await fetch("https://localhost:7074/api/Kimenet/KimenetTorles/cvb/bvc", {

        })
    } catch (error) {
        
    }
}


    useEffect(() => {
        getHajok()
    })

    return(
        <>
        <Navbar/>
        <h1>Csatahajók</h1>
        <div className="row g-4">
            {adat.map((elem, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                    <div className="card h-100 shadow-sm">
                        <div className="card-header">{elem.osztaly}</div>
                        <div className="card-body">
                            <h6 className="card-title">{elem.nev}</h6>
                            <p>Felavatva: {elem.felavatva}</p>
                            <p>Vízkiszorítás: {elem.vizkiszoritas}</p>
                            <p>Kaliber: {elem.kaliber}</p>
                            <p>Ágyúk száma: {elem.agyukSzama}</p>
                            <Link to={`/csatahajo/${elem.nev}`}>Részletek</Link>
                        </div>
                        <button className="btn bg-danger" onClick={() => {}}>Törlés</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Csatahajok;