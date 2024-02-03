const handleDeleteButtons = () => {
  const deleteButton = document.querySelectorAll(".elements__delete-icon");

  deleteButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      const elements = document.querySelector(".elements");
      const card = e.target.offsetParent;

      elements.removeChild(card);
    });
  });
};

const handleNewDeleteButton = (button) => {
  button.addEventListener("click", (e) => {
    const elements = document.querySelector(".elements");
    const card = e.target.offsetParent;

    elements.removeChild(card);
  });
};
