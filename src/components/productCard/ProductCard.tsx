import { Product } from "../Products/Products"
import "./productcard.css"

const ProductCard = (product: Product) => {
  return (
    <div className="products__card">
      <div className="products__image">
        <div className="products__shape" />
        <img className="products__ice-1" src="/img/ice-img.png" alt="Bean" />
        <img className="products__ice-2" src="/img/ice-img.png" alt="Bean" />
        <img className="products__coffe" src={product.image} alt={product.name} />
      </div>
      <div className="products__data">
      <h3 className="products__name">{product.name}</h3>
      <h3 className="products__price">${product.price}</h3>
      <button type="button" className="products__button"> <img src="/img/ice-img.png" alt="add to cart" /></button>
        </div>
    </div>
  )
}

export default ProductCard
