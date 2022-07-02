function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" alt="аватар пользователя" />
        </div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__username"></h1>
            <button className="profile__edit-btn" type="button" aria-label="редактировать профиль"></button>
          </div>
          <p className="profile__userbio"></p>
        </div>
        <button className="profile__add-btn" type="button" aria-label="добавить фото"></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
        </ul>
      </section>
    </main>
  );
}

export default Main;
