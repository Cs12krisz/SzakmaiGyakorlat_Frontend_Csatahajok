import { useEffect, useState } from "react"
import { Navbar } from "../App"
import { useNavigate } from "react-router-dom"

function DenmarkStraitCsata() {
    const navigate = useNavigate()
    const [adat, setAdat] = useState([])
    const [csata,] = useState("Denmark Strait")


async function getDenmarkStraitCsata() {
    try {
        const response = await fetch(`https://localhost:7074/api/Csata/Resztvevok/${csata}`, {
            method: "GET"
        })


        setAdat(await response.json())
    } catch (error) {
        
    }
}

async function deletehajo(hajoNev) {
    try {
        if(confirm("Biztosan szeretnéd törölni?")){
            const response = await fetch(`https://localhost:7074/api/Kimenet/KimenetTorles/Denmark%20Strai/${hajoNev}`, {
                method: "DELETE"
            })

            if (response.ok) {
                alert("Sikeres törlés!")
                navigate("/csatahajok")
            }else{
                throw await response.text();
            }
        }
        
    } catch (error) {
        console.error(error)
    }
}

useEffect(() => {
    getDenmarkStraitCsata()
}, [])

    return(
        <>
            <Navbar/>
            <h1>Denmark Strait csata résztvevői</h1>
            <div className="row">
            {adat.map((elem, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h6 className="card-title">{elem}</h6>
                        <button className="btn bg-danger" onClick={() => {deletehajo(elem)}}><i className="bi bi-trash"></i></button>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default DenmarkStraitCsata