AOS.init();

//
function box1() {
  document.getElementById("main-img").style.backgroundImage =
    "url('images/sub_page_1_img/gomo.png')";
  document.getElementById("map-img").style.backgroundImage =
    "url('images/sub_page_1_img/gomomap.png')";
  document.getElementById("main-img").style.transition = "0.5s";
  document.getElementById("map-img").style.transition = "0.5s";
  updateButtonState(1);
}

function box2() {
  document.getElementById("main-img").style.backgroundImage =
    "url('images/sub_page_1_img/gajang.png')";
  document.getElementById("map-img").style.backgroundImage =
    "url('images/sub_page_1_img/gajjangmap.png')";
  document.getElementById("main-img").style.transition = "0.5s";
  document.getElementById("map-img").style.transition = "0.5s";
  updateButtonState(2);
}

function box3() {
  document.getElementById("main-img").style.backgroundImage =
    "url('images/sub_page_1_img/goungsan.png')";
  document.getElementById("map-img").style.backgroundImage =
    "url('images/sub_page_1_img/goungsanmap.png')";
  document.getElementById("main-img").style.transition = "0.5s";
  document.getElementById("map-img").style.transition = "0.5s";
  updateButtonState(3);
}

function updateButtonState(selectedIndex) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button, index) => {
    if (index === selectedIndex - 1) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const scrollToGuide = document.querySelector("a[href='#guide']");

  scrollToGuide.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 방지

    const guideSection = document.getElementById("guide");
    guideSection.scrollIntoView({
      behavior: "smooth", // 부드러운 스크롤링 사용
      block: "start", // 섹션의 시작 부분에 맞춰 스크롤링
    });
  });
});

   // 페이지 로딩시 메인사진 글자에 밑줄 효과
   document.addEventListener("DOMContentLoaded", function () {
    const imageOverlay = document.querySelector(".main-section .container");
    // 원하는 시간(밀리초) 만큼 지연
    // setTimeout(function() {
    //   imageOverlay.classList.add("loaded");
    // }, 1000); // 1000밀리초 = 1초
    imageOverlay.classList.add("loaded");
  });