import './Item.css'
const Item = ({producto}) => {
  return (
    <li width='200px' className='product'>
      <img alt={producto.title} src={producto.image} width='200px' />
      <h2>{producto.title}</h2>
      <h3>{producto.category}</h3>
      <h3>{producto.description}</h3>
      </li>
  )
}

export default Item