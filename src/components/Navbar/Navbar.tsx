import React from 'react'
import { Link } from 'react-router-dom'
interface props{
  styles?:React.CSSProperties
}
const Navbar = (props:props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   <Link className="navbar-brand" to="/">Crud Application</Link>
    <button className="navbar-toggler" type="button"   >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
         <Link className="nav-link active" to="/newusers">Add users</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Navbar