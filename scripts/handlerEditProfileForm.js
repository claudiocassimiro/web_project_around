const editProfileForm = document.querySelector(".dialog__form");
const profileName = document.querySelector(".profile__name");
const profileRole = document.querySelector(".profile__role");

const inputName = document.querySelector("#input-name");
const inputRole = document.querySelector("#input-role");
const saveButton = document.querySelector(".dialog__save-button");

editProfileForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

saveButton.addEventListener("click", () => {
  const newName = inputName.value;
  const newRole = inputRole.value;

  profileName.innerText = newName;
  profileRole.innerText = newRole;

  inputName.value = newName;
  inputRole.value = newRole;

  dialog.classList.remove("dialog_visible");
});
