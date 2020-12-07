# 🏎️ 자동차 경주 게임

[미션내용 확인하기](./MISSION.md)

## 🎯 구현 기능

- 자동차 이름을 입력받는 창을 화면에 띄운다.
- 자동차 이름 입력받는다.
  - 입력 조건: 각 자동차 이름은 5자 이하이며, 콤마로 구분하여 입력한다.
  - (예외) 입력된 값이 없는 경우
  - (예외) 각 자동차의 이름 중 5자가 넘는 이름이 존재하는 경우
- 자동차의 이름이 정상적으로 입력되지 않은 경우, 안내 메세지를 보여주고 입력된 값을 지운다.
- 자동차의 이름이 정상적으로 입력된 경우, 시도할 횟수를 입력하는 창을 화면에 띄운다.
- 시도할 횟수 입력받는다.
  - 입력된 횟수는 자연수여야 한다.
  - (예외) 입력된 횟수가 0이하인 경우
  - (예외) 입력된 횟수가 정수가 아닌 경우
- 시도할 횟수가 정상적으로 입력되지 않은 경우, 안내 메세지를 보여주고 입력된 값을 지운다.
- 시도할 횟수가 정상적으로 입력된 경우 실행결과를 컴포넌트를 생성한다.
- 매 회차마다 각 자동차별로 0~9 사이의 랜덤한 값을 구하고 4 이상일 경우 전진하고 3 이하일 경우 멈춘다.
- 매 회차마다 각 자동차가 얼만큼 전진했는지 화면에 출력한다.
- 최종 우승자를 찾아 회면에 띄운다.
