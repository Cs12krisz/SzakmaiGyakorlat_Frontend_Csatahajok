import { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"

function CsatahajoElem() {
    const params = useParams()
    const nev = params.nev

    const [adat, setAdat] = useState({})

    const gethajo = async () => {
        try {
            const response = await fetch(`https://localhost:7074/api/Hajo/ByName/${nev}`, {
                method: "GET"
            })
            setAdat(await response.json())
        } catch (error) {

        }
    }

    useEffect(() => {
        gethajo()
    }, [nev])



    return (
        <>
            <div className="card">
                <div className="card-header">{adat.osztaly}</div>
                <div className="card-body">
                    <h3 className="card-title">{adat.nev}</h3>
                    <p>Felavatva: {adat.felavatva}</p>
                    <p>Vízkiszorítás: {adat.vizkiszoritas}</p>
                    <p>Kaliber: {adat.kaliber}</p>
                    <p>Ágyúk száma: {adat.agyukSzama}</p>
                    <NavLink to="/csatahajok"><button className="btn bg-primary"><i className="bi bi-arrow-left"></i>Vissza</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default CsatahajoElem