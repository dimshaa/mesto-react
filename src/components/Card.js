function Card(props) {
  return (
    <li className="card">
      <img className="card__image" src={props.cardData.link} alt="загруженное фото" />
      <div className="card__info">
        <h2 className="card__caption">{props.cardData.name}</h2>
        <div className="card__like-wrapper">
          <button className="card__like-btn" type="button" aria-label="мне нравится"></button>
          <p className="card__like-counter">{props.cardData.likes.length}</p>
        </div>
      </div>
      <button className="card__delete-btn" type="button" aria-label="удалить"></button>
    </li>
  );
}

export default Card;
