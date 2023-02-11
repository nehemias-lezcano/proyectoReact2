import Item from "../Item/Item"
import { Link } from "react-router-dom"
import './itemList.css'
const ItemList = ({productos}) => {
  return (
    <div className="divSpe">
        <ul className="itemList">
          {productos.map((producto) => (
          <Link className="cartPro" key={producto.id} to={`item/${producto.id}`}>
          <Item producto={producto} />
          </Link>
          ))}
        </ul>
    </div>
  )
}

export default ItemList