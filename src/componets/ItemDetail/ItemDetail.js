import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react';
import { cartContext } from '../../context/cartContext';

const ItemDetail = ({ product }) => {
  const { addItem } = useContext ( cartContext );
  const[contador, setContador] = useState(0);
  const stock = 7;
  return (
    <div width="200px" className="product">   
        <img alt={product.title} src={`/img/${product.imageId}`} width="200" />
        <h2>Estos productos estan listos para tu carrito {contador}</h2>
        <h2>{product.title}</h2>
        <h3>{product.categoryId}</h3>
        <h3>{product.description}</h3>
        <h3>${product.price}</h3>
        <ItemCount contador={contador} setContador={setContador} stock={product.stock}/>
        <div>
        <button onClick={() => addItem(product, contador)}>Agregar al carrito</button>
     </div>
    </div>
  )
}

export default ItemDetail