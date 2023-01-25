import Item from "../Item/Item"
import { Link } from "react-router-dom"
const ItemList = ({productos}) => {
  return (
    <div>
        <ul>
        {productos.map((producto) => (
          <Link key={producto.id} to={`item/${producto.id}`}>
          <Item producto={producto} />
          </Link>
          ))}
        </ul>
    </div>
  )
}

export default ItemList