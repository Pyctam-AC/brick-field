import "./Card.scss";

const Card = ({ cardImage, cardName }) => {
  return (
    <li className="card">
      <img className="card__image" src={cardImage}/>
      <div className="card__textarea">
        <h4 className="card__title">{cardName}</h4>
      </div>
    </li>
  )
}

export default Card;
