import { useEffect, useState } from "react";
import api from "../utils/Api.js";

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
      .catch((err) => console.log(err));
  });

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
        </ul>
      </section>
    </main>
  );
}

export default Main;
