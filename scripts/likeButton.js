const handleLikeButtons = () => {
  const likeButtons = document.querySelectorAll(".elements__like-icon");

  likeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (button.getAttribute("src") === "./images/like-button.png") {
        return button.setAttribute("src", "./images/like-button-clicked.png");
      }

      return button.setAttribute("src", "./images/like-button.png");
    });
  });
};

const handleNewLikeButton = (button) => {
  button.addEventListener("click", (e) => {
    if (button.getAttribute("src") === "./images/like-button.png") {
      return button.setAttribute("src", "./images/like-button-clicked.png");
    }

    return button.setAttribute("src", "./images/like-button.png");
  });
};
