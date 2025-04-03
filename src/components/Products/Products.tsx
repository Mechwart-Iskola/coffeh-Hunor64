import { useState } from "react"
import "./products.css"
import ProductCard from "../productCard/ProductCard"

export type Product = {
  name: string
  price: string
  image: string
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])

  {
    /*Fetcheld be a products.json-ból az adatokat és tárold le egy állapotváltozóban*/
  }
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      setProducts(data)
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
    })

  {
    /*Hozz létre egy productCard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/
  }
  return (
    <div className="products" id="products">
      <h2 className="section__title">
        THE MOST <br /> REQUESTED
      </h2>
      <div className="products__container">
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  )
}

export default Products
