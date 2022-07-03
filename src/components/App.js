import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { useState } from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />

      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm 
        name="avatar-edit"
        title="Обновить аватар"
        children={
          <>
            <input
              className="popup__input popup__input_type_avatar-url"
              type="url"
              name="avatarUrl"
              placeholder="Ссылка на картинку"
              id="avatar-url-input"
              required 
            />
            <span className="popup__input-error" id="avatar-url-input-error"></span>
          </>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        children={
          <>
            <input
              className="popup__input popup__input_type_username"
              type="text"
              name="userName"
              placeholder="Ваше имя"
              id="username-input"
              minLength="2"
              maxLength="40"
              required />
            <span className="popup__input-error" id="username-input-error"></span>
            <input
              className="popup__input popup__input_type_userbio"
              type="text"
              name="userBio"
              placeholder="Чем вы занимаетесь"
              id="userbio-input"
              minLength="2"
              maxLength="200"
              required />
            <span className="popup__input-error" id="userbio-input-error"></span>
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      
      <PopupWithForm 
        name="card-add"
        title="Новое место"
        children={
          <>
            <input
              className="popup__input popup__input_type_card-name"
              type="text"
              name="cardName"
              placeholder="Название"
              id="card-name-input"
              minLength="2"
              maxLength="30"
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
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm 
        name="confirm"
        title="Вы уверены?"
      />

      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
