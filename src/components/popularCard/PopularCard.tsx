import { PopularProduct } from "../Popular/Popular"
import "./popularcard.css"

const PopularCard = (product:PopularProduct) => {
  return (
    <div>
      <div className="popular__card">
        <div className="popular__images">
          <img className="popular__image" src={product.image} alt={product.name} />
        </div>
        <div className="popular__data">
          <h3 className="popular__name">{product.name}</h3>
          <p className="popular__price">{product.price}</p>
          <p className="popular__description">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default PopularCard