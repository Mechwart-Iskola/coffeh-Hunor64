import { PopularProduct } from "../Popular/Popular"
import "./popularcard.css"

const PopularCard = (product:PopularProduct) => {
  return (
    <div>
      <div className="popular__card">
        <div className="popular__images">
          <div className="popular__shape" />
          <img className="popular__bean-1" src="/img/bean-img.png" alt="Bean" />
          <img className="popular__bean-2" src="/img/bean-img.png" alt="Bean" />
          <img className="popular__coffee" src={product.image} alt={product.name} />
        </div>
        <div className="popular__data">
          <h3 className="popular__name">{product.name}</h3>
          <p className="popular__description">{product.description}</p>
          <button className="button button-dark">{product.price}</button>
        </div>
      </div>
    </div>
  )
}

export default PopularCard