import { Route, Link, Routes } from 'react-router-dom'
import './App.css'
import Csatahajok from './pages/Csatahajok'
import CsatahajoElem from './pages/CsatahajoElem'
import DenmarkStraitCsata from './pages/DenmarkStraitCsata'


export function Navbar() {
  return(
    <>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/csatahajok">Csatahajók</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/DenmarkStraitCsata">A Denmark Strait csata</Link>
      </li>
    </ul>
  </div>
</nav>
    
    </>
  )
}

export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Navbar/>}/>
        <Route path="/csatahajok" element={<Csatahajok/>}/>
        <Route path="/csatahajo/:nev" element={<CsatahajoElem/>}/>
        <Route path="/DenmarkStraitCsata" element={<DenmarkStraitCsata/>}/>

      </Routes>
    </>
  )
}

export default App
