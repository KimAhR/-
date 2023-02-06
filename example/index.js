/* 
    1. 필요한 요소 가져오기
    2. 이벤트 바인딩 => 클래스명 추가 및 제거
*/
let btnSide = document.querySelector(".btnSide");
let nav = document.querySelector("nav");
let modalBg = document.querySelector(".modalBg");
let btnCloseModal = document.querySelector(".modalBg .btnBox button");

btnSide.addEventListener("click", function () {
  nav.classList.add("on");
});

nav.addEventListener("click", function (e) {
  // 이벤트가 바인딩된 타겟과 이벤트가 실제 발생한 타겟을 비교
  if (e.target === e.currentTarget) {
    nav.classList.remove("on");
  }
});

btnCloseModal.addEventListener("click", function () {
  modalBg.classList.add("hide");
  setTimeout(() => {
    modalBg.style.display = "none";
  }, 300);
});

window.addEventListener("resize", function () {
  // 사이즈 조절을 했더니 창의 너비가 800보다 커지면 nav 태그의 on 클래스 삭제
  if (window.innerWidth > 800) nav.classList.remove("on");
});
