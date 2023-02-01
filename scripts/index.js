const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup__close");

const openPopup = () => {
  document.addEventListener("keydown", handleEscPopupClose);
  popup.classList.add("popup_visible");
  popup.addEventListener("click", exit);
};

const closePopup = () => {
  popup.classList.remove("popup_visible");
  document.removeEventListener("keydown", handleEscPopupClose);
};

const handleEscPopupClose = (evt) => {
  if (evt.key === "Escape") {
    closePopup();
  }
};

const mouseEvent = (e) => {
  const shouldShowExitIntent =
    !e.toElement && !e.relatedTarget && e.clientY < 10;

  if (shouldShowExitIntent) {
    document.removeEventListener("mouseout", mouseEvent);
    openPopup();
  }
};

const exit = (e) => {
  const shouldExit =
    [...e.target.classList].includes("popup_visible") || // user clicks on mask
    e.target.className === "popup__close"; // user clicks on the close icon
  console.log([...e.target.classList]);
  if (shouldExit) {
    closePopup();
  }
};

document.addEventListener("mouseout", mouseEvent);
closeBtn.addEventListener("click", closePopup);
