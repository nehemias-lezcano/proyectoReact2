import ItemCount from "../../componets/ItemCount/ItemCount";
import { useEffect, useState } from 'react';
import ItemList from "../../componets/ItemList/ItemList";
import { useParams } from "react-router-dom";
const arreglo = [
  {title: 'Pc Asus Prime 06', id: '1', price: '$150.000', pictureUrl: "./img/pc1.jpg"},
  {title: 'Pc Asus Rog Strix 11', id: '2' , price: '$160.000' , pictureUrl:"./img/pc2.jpg"},
  {title: 'Pc Asus Tuf 05', id: '3' , price: '$170.000' , pictureUrl:"./img/pc3.jpg"},
  {title: 'Pc Asus newPEs07', id: '4' , price: '$180.000' , pictureUrl:"./img/pc4.png"},
  {title: 'Placa De Video Asus Dual Gtx 1650 O4gd6 Mini Csm', id: '5' , price: '$104.553' , pictureUrl:"./img/placa1.jpg"},
  {title: 'Placa De Video Asus Dual Rtx 3050 O8g', id: '6' , price: '$161.124' , pictureUrl:"./img/placa2.jpg"},
  {title: 'Placa De Video Asus Ph Rtx 3060 12gb V2', id: '7' , price: '$172.886' , pictureUrl:"./img/placa3.jpg"},
  {title: 'Placa De Video Asus Dual Rtx 3070 O8gb V2', id: '8' , price: '$228.217' , pictureUrl:"./img/placa4.png"}
]

const ItemListContainer = ({ greeting }) => {

   const [products, setProducts] = useState ([]);
   const [filteredProducts, setFilteredProducts] = useState([])
   const { category } = useParams();


    const getProducts = fetch('https://fakestoreapi.com/products',{
      method: 'GET',
      headers: {
        'conten-type' : 'json'
      }
    })

    useEffect(() => {
      getProducts
      .then((res) => {
        return res.json();
      })
       .then((response) => {
        setProducts(response);
      }) 
     .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
      if(category){
        const removeCharacters = category?.includes('%20')
        ? category.replace('%20', ' ') 
        : category;
       const filterProducts = products.filter((products) => {
        return products.category === removeCharacters;
       });
         setFilteredProducts(filterProducts);
      }
    }, [category]);


  return (
    <div>
        {greeting}
        <ItemCount />
        <ItemList productos={category ? filteredProducts : products} />
        <h1>este es un producto solo</h1>
    </div>
  )
}

export default ItemListContainer