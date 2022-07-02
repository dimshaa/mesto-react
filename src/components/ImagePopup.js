function ImagePopup() {
  return (
    <div className="popup popup_darkened popup_type_card-view">
      <div className="popup__card-container">
        <img className="popup__card-image" src="#" alt="загруженное фото" />
        <p className="popup__card-caption"></p>
        <button className="popup__close-btn" type="button" aria-label="закрыть не сохраняя"></button>
      </div>
    </div>
  );
}

export default ImagePopup;
