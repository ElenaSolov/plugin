const popupStyles =
  "position: fixed;font-family: Arial, sans-serif;font-size: 20px;display: flex;justify-content: center;align-items: center;top: 0;left: 0;bottom: 0;right: 0;z-index: 1;background: rgba(20, 33, 33, 0.8);";
const popupVisibleStyles = "display: flex";
const iframeStyles =
  "box-sizing: border-box;background-color: #fff;width: calc(100% - 40px);max-width: 1650px;max-height: 900px;padding: 10px 10px;height: 70%;display: grid;grid-template-columns: 1.2fr 1fr;gap: 30px;align-items: center;";
const closeBtnStyles = "position: absolute;z-index: 2;top: 10px;right: 20px;";
const linksStyles =
  "height: 100%;box-sizing: border-box;display: flex;flex-direction: column;justify-content: space-evenly;background-image: linear-gradient(180deg, rgba(83, 83, 99, 0.66) 68.23%, rgba(22, 18, 236, 0) 100%);border-radius: 5px;list-style-type: none;margin: 0;padding: 20px;";
const linksItem =
  "background-color: white;box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);border-radius: 20px;padding: 0 20px;display: flex;max-width: 100%;align-items: center;justify-content: flex-end;min-height: 22%;";
const linksLink = "text-decoration: none;text-align: right;margin-right: 20px;";
const linksImg = "width: 100px;";
const joinStyles =
  "height: 80%;width: 80%;background-color: #fff;color: #000;border: 1px solid #000000;border-radius: 50%;display: grid;grid-template-rows: 1fr 40%;align-items: center;justify-content: stretch;line-height: 1.5;justify-self: center;";
const joinInfo =
  "display: flex;flex-direction: column;align-items: center;justify-content: center;";
const joinTitle =
  "font-style: normal;font-weight: 700;font-size: 1.2em;text-transform: uppercase;margin: 10px 0 20px;";
const joinText = "margin: 0;";
const joinForm =
  "width: 100%;display: flex;flex-direction: column;align-items: center;justify-content: center;";
const joinInput =
  "border: 0;border-bottom: 1px solid;outline: none;font-size: 1em;";
const joinSubmit =
  "box-sizing: border-box;padding: 10px;width: 50%;display: flex;justify-content: center;align-items: center;color: #fff;background: rgba(19, 17, 16, 0.83);box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);border-radius: 20px;margin: 17px auto 0;text-transform: uppercase;cursor: pointer;";

const popupEl = `<section class="popup"  style="${popupStyles}">
                     <button type="button" class="popup__close" style="${closeBtnStyles}">X</button>
                     <article class="popup__iframe" style="${iframeStyles}">
                         <ul class="links" style="${linksStyles}">
                             <li class="links__item" style="${linksItem}">
                                 <a href="https://www.callperfume.co.il/givenchy" class="links__link" style="${linksLink}" target="_blank" rel="noopener noreferrer">כל מותגי הבושם המובילים בעולם לנשים וגברים</a>
                                 <img style="${linksImg}" src="https://www.callperfume.co.il/Media/Uploads/logo(1).png" alt="logo">
                             </li>
                             <li class="links__item" style="${linksItem}">
                                 <a href="https://www.callperfume.co.il/givenchy" class="links__link" style="${linksLink}" target="_blank" rel="noopener noreferrer">כל מותגי הבושם המובילים בעולם לנשים וגברים</a>
                                 <img style="${linksImg}" src="https://www.dutyfree.co.il/skin/frontend/online/default/dist/images/logo.png" alt="logo">
                             </li>
                             <li class="links__item" style="${linksItem}>
                                 <a href="https://erroca.co.il/product-category/givenchy/" class="links__link" style="${linksLink}" target="_blank" rel="noopener noreferrer">מגוון משקפי שמש ממותגים בינלאומיים ב 50% הנחה</a>
                                 <img style="${linksImg}" src="https://erroca.co.il/wp-content/uploads/2018/09/errocaLogoB.png" alt="logo">
                             </li>
                             <li class="links__item" style="${linksItem}>
                                 <a href="https://www.terminalx.com/women/accessories/sun-glasses" class="links__link" style="${linksLink}" target="_blank" rel="noopener noreferrer">משקפי שמש במשלוח מהיר מהיום למחר</a>
                                 <img style="${linksImg}" src="https://בלאקפריידי.org.il/wp-content/uploads/2019/11/TERMINAL-X-%D7%98%D7%A8%D7%9E%D7%99%D7%A0%D7%9C-%D7%90%D7%99%D7%A7%D7%A1-%D7%9C%D7%95%D7%92%D7%95.jpg" alt="logo">
                             </li>
                         </ul>
                         <div class="join" style="${joinStyles}">
                           <div style="${joinInfo}">
                             <h1 class="join__title" style="${joinTitle}">Get 10% off!</h1>
                             <p style="${joinText}" class="join__text"  >מצטרפים לניוזלטר שלנוו</p>
                             <p style="${joinText}" class="join__text">מקבלים 10% הנחה לקנייה הראשונה</p>
                             <p class="join__amendment">לא כולל כפל מבצעים *</p>
                           </div>
                             <form class="join__form" style="${joinForm}">
                                 <label style="${joinText}" class="join__text" for="email"><input class="join__input" style="${joinInput}" type="email" id="email">דוא״ל</label>
                                 <button class="join__submit" style="${joinSubmit}" type="submit">yes please</button>
                             </form>
                         </div>
                     </article>
                 </section>`;

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
