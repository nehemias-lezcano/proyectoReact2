import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import './cart.css'

const Cart = () => {
  const { cart, removeItem, clear } = useContext(cartContext);
  if(cart.length === 0){
    return (<h1 className="h1No">
      No hay productos en el carrito
    </h1>)
  }
  return (
    <div className="divCont">
      <ul>
        {cart.map((product) => (
        <li key={product.id}>
          <div className="listCart">
            <img alt={product.id} src={`/img/${product.image}`} width="50px" />
            <h3>{product.name}</h3>
            <h4>{product.category}</h4>
            <h4>{product.quantity}</h4>
            <h4>{product.price}</h4>
            <button onClick={() => removeItem(product.id)} className="botonElim">Eliminar</button>
          </div>
        </li> 
      ))}
      </ul>
      <div className="vaciaCart">
        <button onClick={() => clear()}>vaciar carrito</button>
      </div>
    </div>
  )
}

export default Cart