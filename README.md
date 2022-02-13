# 원티드 프리온보딩 코스

2022 원티드 프리온보딩 FE코스

## 프로젝트 실행 전 설치 명령어

—custom-component 폴더에서—
- npm 설치 : npm install
- CRA 설치 : npm install create-react-app
- yarn 설치 : npm install yarn --global
- sass 설치 : yarn add node-sass
- modal 설치 : yarn add react-modal

## 프로그램 실행
- custom-component 폴더에서 : yarn start

## 사용 기술
- React
- JavaScript
- SCSS, CSS, inline-CSS

## Components
### Toggle
- 구현 방법
  - input의 checkbox 타입을 활용하여 onChange로 체크 여부를 핸들링하여 색상과 ON, OFF여부를 변경해주었습니다. 슬라이드되는 애니메이션은 css로 구현하였습니다.
- 어려웠던 점과 error handling
  - CSS에서 부드럽게 슬라이드되는 모션을 구성하는데 어려움을 느겼고 mdn을 참고하여 calc와 translateX로 해결하였습니다.
- 실행 방법
  - 토클 스위치를 클리하면 슬라이드되며 색상변경으로 스위치가 ON된 여부를 확인할 수 있으며, 하단 span에 ON, OFF여부가 표시됩니다.

### Modal
- 구현 방법
  - isOpen, isClose props로 modal창의 ON, OFF여부를 확인하고 부모 컴포넌트에서 레이아웃을 구성해 props를 넘겨주었습니다. 자료조사중 react-modal이라는 라이브러리를 찾게되어 적용해보았습니다. 별도의 컴포넌트로 작성하며, 인라인css로 overlay, content등의 인자를 통해 직접 css를 다룰 수 있었습니다.
- 어려웠던 점과 error handling
  - 한개의 컴포넌트에서 레이아웃창과 모달 팝업창을 구성하는데에 어려움이 있어 부모 컴포넌트를 활용해 props를 넘겨주어 핸들링하였습니다.
- 실행 방법
  - Modal Open 버튼을 누르면 카드메세지가 나오고 'X'버튼을 누르면 닫힙니다.

### Tab
- 구현 방법
  - 상단바 메뉴바와 하단페이지 content를 dictionary 배열선언 후,useState로 index상태관리로 map을 통해 구현하였습니다.
- 어려웠던 점과 error handling
  - 기존엔 탭 클릭시 색상변경을 scss에서 hover로 구현하였지만, 마우스를 옮기면 유지되지않는 문제가있었습니다. 따라서 인라인css에서 삼항연산자를 이용하여 조건부 css를 적용하였습니다.
- 실행 방법
  - 메뉴탭의 1, 2, 3을 누르면 하단 페이지의 내용이 인덱스에 따라 변경됩니다.

### Tag
- 구현 방법
  - state를 이용해 각각의 tag와 tag를 담은 배열을 관리하였습니다. 내부에서 함수를 통해 태그추가와 태그삭제를 구현했습니다.
- 어려웠던 점과 error handling
  - 첫째, 구성 초기에는 input박스와 tag박스를 별개로 만든 후, tag박스를 인풋값이 들어올때마다 input 박스안에 넣으려고했으나 불가능 -> 큰 박스div생성후 새로운 태그가 입력될때마다 좌측으로 추가되게하고, 오른쪽 input의 width는 동적으로 줄어들게 설계했습니다.
  - 둘째, 삭제버튼 기능 구현시 innerText로 내부 텍스트를 불러온 후, filter적용하여 삭제하는 로직을 만들었는데, 삭제 버튼에 알파벳 X를 추가해서 만들어버린 바람에 X가 같이 로드되어서 filter작동이 제대로되지 않았다. -> 알파벳 X를 지우고 단순 css만으로 버튼을 X모양으로 변경하였다. 'transform: rotate(+-45deg)'인데, 버튼의 :after, :before에 적용해주면된다.
- 실행 방법
  - input bar에 텍스트 입력후 엔터를 입력하면 새로운 div에 입력된 텍스트와 삭제버튼이 같이 생성됩니다. 삭제버튼을 누르면 해당 div가 삭제됩니다.

### ClickToEdit
- 구현 방법
  - useState를 통해 나이와 이름을 따로 관리하였고, 내부 함수에서 target.value를 통해 input내부의 텍스트 값을 가져와 하단 span에 뿌려주었습니다. 
- 어려웠던 점과 error handling
  - 현재는 input값이 변경될때마다 하단의 span의 글씨가 실시간으로 update됩니다. 하지만 문제에서 요구하는 바는 input값이 변경되어도 하단값은 그대로, focus가 풀리면 변경이 적용되어야합니다. -> 따로 edit관련 state를 통해 상태관리시도하다가 실패. 구글링을 통해 찾아보니 주로 자식 컴포넌트를 따로 만들어 props를 넘겨주어 관리하였다. 구현시부터 생각지도 못한 방법이였고, 과제에 해당되니 내 수준에서 마무리하였다.
- 실행 방법
  - input에 text를 입력하면 변경된 내용이 하단 span에 표시됩니다.