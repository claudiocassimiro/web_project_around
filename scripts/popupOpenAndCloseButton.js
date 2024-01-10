const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closePopupButton = document.querySelector(".popup__close-button");

editButton.addEventListener("click", () => {
  popup.classList.add("popup_opened");
});

closePopupButton.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});
