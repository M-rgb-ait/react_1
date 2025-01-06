import { Link, NavLink } from "react-router-dom";



export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg fixed_top position-sticky">
  <div className="container">
    <Link className="navbar-brand text-white text-uppercase fw-bolder fs-2" to=''>Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder" aria-current="page" to='/Hom2e'>about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder" to='/Layout'>portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder" to='/Contant'>Contant</NavLink>
        </li>

      </ul>

    </div>
  </div>
</nav>


    
    </>
  )
}
