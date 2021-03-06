import { ELEMENT_ID, GAME_NUMBERS } from "../util/constants.js";

export default class CarNameInput {
  constructor({ $target, updateCarNames }) {
    this.$target = $target;
    this.updateCarNames = updateCarNames;
    this.carNameSeparator = ",";

    this.init();
    this.bindEventListener();
  }

  init = () => {
    const HTMLString = `
      <div>
        <input id="${ELEMENT_ID.carNamesInput}" type="text" />
        <button id="${ELEMENT_ID.carNamesButton}">확인</button>
      </div>
    `;

    this.$target.insertAdjacentHTML("beforeend", HTMLString);
  };

  isValidCarNameLength = (carNames) => {
    return !carNames.some((carName) => carName.length === 0 || carName.length > GAME_NUMBERS.carNameMaxLength);
  };

  onSubmitCarNames = () => {
    const $inputCarNames = document.querySelector(`#${ELEMENT_ID.carNamesInput}`);
    const carNames = $inputCarNames.value.split(this.carNameSeparator);
    const isValidCarNames = this.isValidCarNameLength(carNames);

    if (!isValidCarNames) {
      alert("1자 이상, 5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요.");
      $inputCarNames.value = "";
    }

    this.updateCarNames({ isValidCarNames, nextCarNames: carNames });
  };

  bindEventListener = () => {
    document.querySelector(`#${ELEMENT_ID.carNamesButton}`).addEventListener("click", this.onSubmitCarNames);
  };
}
