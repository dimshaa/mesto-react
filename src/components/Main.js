function Main() {

  function handleEditAvatarClick() {
    document
    .querySelector('.popup_type_avatar-edit')
    .classList
    .add('popup_opened');
  }

  function handleEditProfileClick() {
    document
    .querySelector('.popup_type_profile-edit')
    .classList
    .add('popup_opened');
  }

  function handleAddPlaceClick() {
    document
    .querySelector('.popup_type_card-add')
    .classList
    .add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={handleEditAvatarClick}>
          <img className="profile__avatar" alt="аватар пользователя" />
        </div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__username"></h1>
            <button className="profile__edit-btn" onClick={handleEditProfileClick} type="button" aria-label="редактировать профиль"></button>
          </div>
          <p className="profile__userbio"></p>
        </div>
        <button className="profile__add-btn" onClick={handleAddPlaceClick} type="button" aria-label="добавить фото"></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
        </ul>
      </section>
    </main>
  );
}

export default Main;
