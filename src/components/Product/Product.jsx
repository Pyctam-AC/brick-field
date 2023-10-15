import "./Product.scss";
import Card  from "../Card/Card";
import { catalogList } from "../../utils/constants"



export const Product = () => {

  return (
    <section className="section-product product">
      <h2 className="product__title">Продукция</h2>
      <ul className="product__list">
        {catalogList.map((item, i) => {
          return <Card cardName={item.title} key={i} cardImage={item.image}/>
        })}
      </ul>
    </section>
  )
};
