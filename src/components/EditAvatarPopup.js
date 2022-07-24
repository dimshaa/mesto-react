import { useContext, useEffect, useRef } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  const avatarRef = useRef();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    avatarRef.current.value = '';
  }, [currentUser, avatarRef])

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm 
      name="avatar-edit"
      title="Обновить аватар"
      onSubmit={handleSubmit}
      children={
        <>
          <input
            ref={avatarRef}
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
      isOpen={props.isOpen}
      onClose={props.onClose}
    />
  );
}

export default EditAvatarPopup;
