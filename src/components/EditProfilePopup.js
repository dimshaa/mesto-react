import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser && currentUser.name);
    setDescription(currentUser && currentUser.about);
  }, [currentUser])

  function handleNameChange(e) {
    setName(e.target.value);
  };

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  };

  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      children={
        <>
          <input
            value={name}
            onChange={handleNameChange}
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
            value={description}
            onChange={handleDescriptionChange}
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
      isOpen={props.isOpen}
      onClose={props.onClose}
    />
  );
}

export default EditProfilePopup;
