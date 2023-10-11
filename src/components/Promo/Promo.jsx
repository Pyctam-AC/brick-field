import promoImage from "../../images/promo_image.jpg";
import './Promo.css'

function Promo() {
  return (
    <section className='promo section-promo'>
      <div className='promo__layout'>
        <h1 className='promo__title'>Кирпичный завод Балтымский</h1>
        <p className="promo__subtitle">Производство и продажа кирпича</p>
        <form className="promo__form">
          <input className="promo__input" placeholder="Номер телефона"></input>
          <button className="promo__button">Перезвонить</button>
        </form>
      </div>
      <img className="promo__image" src={promoImage} alt="Продукция кирпичного завода"/>
    </section>
  )
}

export default Promo;