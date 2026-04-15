import { useEffect, useState } from "react"
import { Navbar } from "../App"

function DenmarkStraitCsata() {
    const [adat, setAdat] = useState([])
async function getDenmarkStraitCsata() {
    try {
        const response = await fetch("https://localhost:7074/api/Csata/Resztvevok/Denmark%20Strait", {
            method: "GET"
        })
        setAdat(await response.json())
    } catch (error) {
        
    }
}
useEffect(() => {
    getDenmarkStraitCsata()
})

    return(
        <>
            <Navbar/>
            <h1>Denmark Strait csata résztvevői</h1>
            <div className="row">
            {adat.map((elem, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h6 className="card-title">{elem}</h6>
                        <button className="btn bg-danger"><i className="bi bi-trash"></i></button>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default DenmarkStraitCsata