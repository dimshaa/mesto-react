import { useEffect, useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
      setCurrentUser(res);
    })
      .catch(err => console.log(err))
  }, []);

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

  function handleUpdateUser({ name, about }) {
    api.setUserInfo({ name, about })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser} onClose={closeAllPopups} />
        
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
    </CurrentUserContext.Provider>
  );
}

export default App;
