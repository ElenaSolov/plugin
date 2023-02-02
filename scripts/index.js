const popupStyles =
  "position: fixed;display: flex;justify-content: center;align-items: center;top: 0;left: 0;bottom: 0;right: 0;z-index: 1;background: rgba(20, 33, 33, 0.8);transform: translateY(60%) scale(0);";
const iframeStyles =
  "position: absolute;top: 5%;left: 5%;bottom: 0;right: 0;width: 90%;height: 90%;";
const popupVisibleStyles = "transform: translateY(0) scale(1);";
const closeBtnStyles = "position: absolute;z-index: 2;top: 10px;right: 20px;";
const popupEl = `<article class="popup" style="${popupStyles} ${popupVisibleStyles}"\>
                      <button type="button" class="popup__close" style="${closeBtnStyles}">X</button\>
                          <iframe src="https://www.bing.com/search?q=%D7%97%D7%A0%D7%95%D7%AA+%D7%A9%D7%95%D7%A7%D7%95%D7%9C%D7%93" title="contextual ads" class="popup__iframe" style="${iframeStyles}" \>
                          </iframe\>
                  </article\>`;

const body = document.querySelector("body");

const openPopup = () => {
  body.insertAdjacentHTML("beforeend", popupEl);
  const popup = document.querySelector(".popup");
  const closeBtn = document.querySelector(".popup__close");
  document.addEventListener("keydown", handleEscPopupClose);
  popup.addEventListener("click", exit);
};

const closePopup = (popup) => {
  popup.style.transform = "translateY(60%) scale(0)";
  document.removeEventListener("keydown", handleEscPopupClose);
};

const handleEscPopupClose = (evt) => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup"));
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
    [...e.target.classList].includes("popup") || // user clicks on mask
    e.target.className === "popup__close"; // user clicks on the close icon
  console.log([...e.target.classList]);
  if (shouldExit) {
    closePopup(document.querySelector(".popup"));
  }
};

document.addEventListener("mouseout", mouseEvent);
