const popupViewImage = document.querySelector(".popup-view-image");
const closePopupViewImageButton = document.querySelector(
  ".popup-view-image__close-button"
);
const elementsCards = document.querySelectorAll(".elements__card");

elementsCards.forEach((card) => {
  const image = card.childNodes[3];
  const title = card.childNodes[5].children[0].innerText;
  const popupImage = document.querySelector(".popup-view-image__render-image");
  const poputTitle = document.querySelector(".popup-view-image__image-title");

  image.addEventListener("click", (e) => {
    popupViewImage.classList.add("popup-view-image_opened");

    const imageSource = image.getAttribute("src");
    const imageAlt = image.getAttribute("alt");
    popupImage.setAttribute("src", imageSource);
    popupImage.setAttribute("alt", imageAlt);
    poputTitle.innerText = title;
  });

  closePopupViewImageButton.addEventListener("click", () => {
    popupViewImage.classList.remove("popup-view-image_opened");
  });
});
