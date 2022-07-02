import logo from '../images/logo.svg';
import Footer from './Footer.js';
import Header from './Header.js';
import Main from './Main.js';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_type_profile-edit">
        <form className="popup__form" name="userProfile" novalidate>
          <h2 className="popup__header">Редактировать профиль</h2>
          <input
            className="popup__input popup__input_type_username"
            type="text"
            name="userName"
            placeholder="Ваше имя"
            id="username-input"
            minlength="2"
            maxlength="40"
            required />
          <span className="popup__input-error" id="username-input-error"></span>
          <input
            className="popup__input popup__input_type_userbio"
            type="text"
            name="userBio"
            placeholder="Чем вы занимаетесь"
            id="userbio-input"
            minlength="2"
            maxlength="200"
            required />
          <span className="popup__input-error" id="userbio-input-error"></span>
          <button className="popup__submit-btn" type="submit">Сохранить</button>
          <button className="popup__close-btn" type="button" aria-label="закрыть не сохраняя"></button>
        </form>
      </div>
      <div className="popup popup_type_card-add">
        <form className="popup__form" name="addCard" novalidate>
          <h2 className="popup__header">Новое место</h2>
          <input
            className="popup__input popup__input_type_card-name"
            type="text"
            name="cardName"
            placeholder="Название"
            id="card-name-input"
            minlength="2"
            maxlength="30"
            required />
          <span className="popup__input-error" id="card-name-input-error"></span>
          <input
            className="popup__input popup__input_type_card-url"
            type="url"
            name="cardUrl"
            placeholder="Ссылка на картинку"
            id="card-url-input"
            required />
          <span className="popup__input-error" id="card-url-input-error"></span>
          <button className="popup__submit-btn" type="submit">Создать</button>
          <button className="popup__close-btn" type="button" aria-label="закрыть не сохраняя"></button>
        </form>
      </div>
      <div className="popup popup_darkened popup_type_card-view">
        <div className="popup__card-container">
          <img className="popup__card-image" src="#" alt="загруженное фото" />
          <p className="popup__card-caption"></p>
          <button className="popup__close-btn" type="button" aria-label="закрыть не сохраняя"></button>
        </div>
      </div>
      <div className="popup popup_type_confirm">
        <form className="popup__form" name="confirmDeletion" novalidate>
          <h2 className="popup__header">Вы уверены?</h2>
          <button className="popup__submit-btn" type="submit">Да</button>
          <button className="popup__close-btn" type="button" aria-label="закрыть не сохраняя"></button>
        </form>
      </div>
      <div className="popup popup_type_avatar-edit">
        <form className="popup__form" name="editAvatar" novalidate>
          <h2 className="popup__header">Обновить аватар</h2>
          <input
            className="popup__input popup__input_type_avatar-url"
            type="url"
            name="avatarUrl"
            placeholder="Ссылка на картинку"
            id="avatar-url-input"
            required />
          <span className="popup__input-error" id="avatar-url-input-error"></span>
          <button className="popup__submit-btn" type="submit">Сохранить</button>
          <button className="popup__close-btn" type="button" aria-label="закрыть не сохраняя"></button>
        </form>
      </div>
    </div>
  );
}

export default App;
