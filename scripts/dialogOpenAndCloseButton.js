const editButton = document.querySelector(".profile__edit-button");
const dialog = document.querySelector(".dialog");
const closeDialogButton = document.querySelector(".dialog__close-button");

editButton.addEventListener("click", () => {
  dialog.classList.add("dialog_visible");
});

closeDialogButton.addEventListener("click", () => {
  dialog.classList.remove("dialog_visible");
});
