import { useEffect, useState } from "react";
import api from "../utils/Api.js";

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setCards(cardsData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="аватар пользователя" />
        </div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__username">{userName}</h1>
            <button className="profile__edit-btn" onClick={props.onEditProfile} type="button" aria-label="редактировать профиль"></button>
          </div>
          <p className="profile__userbio">{userDescription}</p>
        </div>
        <button className="profile__add-btn" onClick={props.onAddPlace} type="button" aria-label="добавить фото"></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
              <li className="card" key={card._id}>
                <img className="card__image" src={card.link} alt="загруженное фото" />
                <div className="card__info">
                  <h2 className="card__caption">{card.name}</h2>
                  <div className="card__like-wrapper">
                    <button className="card__like-btn" type="button" aria-label="мне нравится"></button>
                    <p className="card__like-counter">{card.likes.length}</p>
                  </div>
                </div>
                <button className="card__delete-btn" type="button" aria-label="удалить"></button>
              </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
