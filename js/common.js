$(document).ready(function(){
      // 메뉴바 색
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $(".header").css("background", "rgba(0,0,0,0.7");
      $(".nav ul li a").css("color", "#fff");
    } else {
      $(".header").css("background", "#fff");
      $(".nav ul li a").css("color", "#000");
    }
    // 사이드메뉴
    // 버튼을 누르면 상단으로 이동
    const $topBtn = document.querySelector(".side-up");
    $topBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // 버튼을 누르면 하단으로 이동
    const $bottomBtn = document.querySelector(".side-down");
    $bottomBtn.onclick = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };

    // 페이지 로딩시 메인사진 글자에 밑줄 효과
  document.addEventListener("DOMContentLoaded", function () {
  const imageOverlay = document.querySelector(".main-section .container");
  // 원하는 시간(밀리초) 만큼 지연
  // setTimeout(function() {
  //   imageOverlay.classList.add("loaded");
  // }, 1000); // 1000밀리초 = 1초
  imageOverlay.classList.add("loaded");
});
  });
})