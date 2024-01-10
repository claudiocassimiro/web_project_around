const likeButtons = document.querySelectorAll(".elements__like-icon");

likeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button.getAttribute("src"));
    if (button.getAttribute("src") === "./images/like-button.png") {
      return button.setAttribute("src", "./images/like-button-clicked.png");
    }

    return button.setAttribute("src", "./images/like-button.png");
  });
});
