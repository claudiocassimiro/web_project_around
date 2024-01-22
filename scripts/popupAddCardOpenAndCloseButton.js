const addCardButton = document.querySelector(".profile__add-card-icon");
const popupAddCards = document.querySelector(".popup-add-card");
const closePopupAddCardButton = document.querySelector(
  ".popup-add-card__close-button"
);

addCardButton.addEventListener("click", () => {
  popupAddCards.classList.add("popup-add-card_opened");
});

closePopupAddCardButton.addEventListener("click", () => {
  popupAddCards.classList.remove("popup-add-card_opened");
});
