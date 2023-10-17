import "./Card.scss";
import { HashLink as Link } from 'react-router-hash-link';

const Card = ({ cardImage, cardName, cardID }) => {
  const cardLink = `catalog#${cardID}`

  return (
    <li className="card">
      <Link to={cardLink} className="card__wrapper">
        <img className="card__image" src={cardImage}/>
        <div className="card__textarea">
          <h4 className="card__title">{cardName}</h4>
        </div>
      </Link>
    </li>
  )
}

export default Card;
