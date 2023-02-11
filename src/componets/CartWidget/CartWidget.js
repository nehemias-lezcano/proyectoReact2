import './CartWidget.css'
import { useContext, useState, useEffect } from 'react'
import { cartContext } from '../../context/cartContext';
const CartWidget = () => {
  const { cart } = useContext(cartContext);
  const [ total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      cart?.reduce((prev, curr) => {
        console.log(prev, curr)
        return prev + curr.quantity
      }, 0)
    )
  }, [ cart ])

  return (
    <div className="number">
        {total}
        <img alt="cart" src="/img/carrito.jpg" width='45px'/>
    </div>
  )
}

export default CartWidget