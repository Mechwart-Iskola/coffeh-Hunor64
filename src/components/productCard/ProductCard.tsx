import { Product } from "../Products/Products"
import "./productcard.css"

const ProductCard = (product: Product) => {
  return (
    <div className="products__card">
      <img className="products__image" src={product.image} alt={product.name} />
      <h3 className="products__name">{product.name}</h3>
      <p className="products__price">{product.price}</p>
    </div>
  )
}

export default ProductCard
