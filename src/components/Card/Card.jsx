import "./Card.scss";
import { HashLink as Link } from 'react-router-hash-link';

const Card = ({ cardImage, cardName, cardID }) => {
  const cardLink = `catalog#${cardID}`

  return (
    <li className="card">
      <Link className="card__wrapper" to={cardLink}>
        <img className="card__image" src={cardImage}/>
        <div className="card__textarea">
          <h4 className="card__title">{cardName}</h4>
        </div>
      </Link>
    </li>
  )
}

export default Card;
