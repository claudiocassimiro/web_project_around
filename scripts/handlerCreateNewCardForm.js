const addCardForm = document.querySelector(".popup-add-card");
const title = document.querySelector(".profile__name");
const image = document.querySelector(".profile__role");

const inputTitle = document.querySelector("#input-location-name");
const inputImage = document.querySelector("#input-image");
const createButton = document.querySelector(".popup-add-card__create-button");

const cards = document.querySelector(".elements").children;

addCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCard = cards[0].cloneNode(true);

  newCard.childNodes[2].nextSibling.src = inputImage.value;
  newCard.childNodes[2].nextSibling.alt = `Imagem do ${inputTitle.value}`;
  newCard.childNodes[5].children[0].innerText = inputTitle.value;

  const newCards = [newCard, ...cards];

  document.querySelector(".elements").append(...newCards);

  const likeButton = document.querySelector(".elements__like-icon");
  const deleteButton = document.querySelector(".elements__delete-icon");

  inputImage.value = "";
  inputTitle.value = "";

  handleNewLikeButton(likeButton);
  handleNewDeleteButton(deleteButton);
});

createButton.addEventListener("click", () => {
  addCardForm.classList.remove("popup-add-card_opened");
});
