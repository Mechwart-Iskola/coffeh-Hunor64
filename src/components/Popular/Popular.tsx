import { useState } from "react"
import "./popular.css"
import PopularCard from "../popularCard/PopularCard"

export type PopularProduct = {
  name:string,
  price:string,
  image:string,
  description:string
}

const Popular = () => {

  const [products, setProducts] = useState<PopularProduct[]>([])

  {/*Fetcheld be a popular.json-ból az adatokat és tárold le egy állapotváltozóban*/}
  fetch("popular.json")
  .then((response) => response.json())
  .then((data) => {
    setProducts(data)
  })
  .catch((error) => {
    console.error("Error fetching data:", error)
  })
  {/*Hozz létre egy popularcard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/}
  return (
    <div className="popular" id="popular">
      <h2 className="section__title">Popular <br /> Products</h2>
      <div className="popular__coffes">

      {products.map(product => (
        <PopularCard {...product}/>
      ))}
      </div>
    </div>
  )
}

export default Popular
