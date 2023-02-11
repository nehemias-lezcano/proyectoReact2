import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="navBar">
        <div>logo</div>
        <div>
            <ul className='option'>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to="/">Todo</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to="/category/pc">Pc armadas</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to="/category/procesador">Procesadores</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'active' : 'inactive'} to="/category/placa">Placas de Video</NavLink></li>
            </ul>
        </div>
        <div>
            <Link to="/cart">
            <CartWidget/>
            </Link>
        </div>
    </div>
  )
}

export default NavBar