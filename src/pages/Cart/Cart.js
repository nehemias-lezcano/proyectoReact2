import { prettyDOM } from "@testing-library/react"
import { addDoc, collection, getFirestore, doc, updateDoc} from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { cartContext } from "../../context/cartContext"
import './cart.css'
/* import {collection, addDoc, getFirestore } from "firebase/firestore" */

const Cart = () => {
  const { cart, removeItem, clear } = useContext(cartContext);
  const [ order, setOrder ] = useState({});
  const db = getFirestore();

  useEffect(() => {
    setOrder(
      {
        buyer: {
          name: 'ne lezcano',
          phone: '1234',
          email: '121231@213213'
        },
        items: cart.map((product) => {
          const {name, price, id} = product;
          return{name, price, id}
        }),
        total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity , 0)
      }
    )
  }, [cart])

  if(cart.length === 0){
    return (<h1 className="h1No">
      No hay productos en el carrito
    </h1>)
  }
  const createOrder = () => {
   const querySnapshot = collection(db, 'orders')

   /* setOrder(newOrder) */
   addDoc(querySnapshot, order)
   .then((response) => {
    console.log(response)
    updateStockProduct()
    alert('compra realizada')
   }
   )
   .catch(error => console.log(error))
  }
  const updateStockProduct = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, 'items', product.id)
      updateDoc( querySnapshot, {
        stock: product.stock - product.quantity,
      })
      .then(() => {
        console.log('el producto actualizo su stock')
      })
      .catch((error) => console.log(error))
    })
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
      <div className="">
        <button onClick={() => createOrder()}>comprar</button>
      </div>
    </div>
  )
}

export default Cart