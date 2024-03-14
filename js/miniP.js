$(function () {
    $(".menu-content").hide();

    $(".nav").hover(
      function () {
        $(this).find(".menu-content").stop(true, true).slideDown(300);
      },
      function () {
        $(this).find(".menu-content").stop(true, true).slideUp(300);
      }
    );
  });

  var mybutton = document.getElementById("myButton");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        mybutton.style.display = "block";
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


    
  // mulslide.js

  var slides = document.querySelector('.slides'),
  slide = document.querySelectorAll('.slides li'),
  currentIdx = 0,
  slideCount = slide.length,
  slideWidth = 300,
  slideMargin = 30,
  prevBtn = document.querySelector('.prev'),
  nextBtn = document.querySelector('.next'),
  moveLeftBtn = document.querySelector('.move-left'),
  moveRightBtn = document.querySelector('.move-right');

slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

function moveSlide(num) {
  slides.style.left = -num * 330 + 'px';
  currentIdx = num;
}

nextBtn.addEventListener('click', function () {
  if( currentIdx < slideCount - 3){
    moveSlide(currentIdx + 1);
  }else{
    moveSlide(0);
  }   
});

prevBtn.addEventListener('click', function () {
  if( currentIdx > 0){
    moveSlide(currentIdx - 1);
  }else{
    moveSlide(slideCount - 3);
  }   
});

// 좌 우로 이동하는 버튼 동작 추가
moveLeftBtn.addEventListener('click', function () {
  if( currentIdx > 0){
    moveSlide(currentIdx - 1);
  }else{
    moveSlide(slideCount - 3);
  }   
});

moveRightBtn.addEventListener('click', function () {
  if( currentIdx < slideCount - 3){
    moveSlide(currentIdx + 1);
  }else{
    moveSlide(0);
  }   
});
//  mulslide.js

// slide.js
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// slide.js

//캘린더-------------------------------------------------------------------------------------

// 현재 날짜 정보 가져오기
const currentDate = new Date();

// 현재 연도와 월 정보 가져오기
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

// 월 텍스트 요소 가져오기
const monthText = document.querySelector('.month');

// 날짜를 추가할 컨테이너 요소 가져오기
const datesContainer = document.querySelector('.dates');

// 이전 달로 이동하는 함수
function goToPrevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentYear--;
    currentMonth = 11;
  }
  updateCalendar();
}

// 다음 달로 이동하는 함수
function goToNextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentYear++;
    currentMonth = 0;
  }
  updateCalendar();
}

// 캘린더 업데이트 함수
function updateCalendar() {
  // 월 텍스트 업데이트
  monthText.textContent = `${currentYear}년 ${currentMonth + 1}월`;

  // 기존에 생성된 날짜 요소들 삭제
  while (datesContainer.firstChild) {
    datesContainer.removeChild(datesContainer.firstChild);
  }

  // 선택된 연도와 월에 해당하는 마지막 날짜 가져오기
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

  // 날짜 요소 생성 및 추가
  for (let i = 1; i <= lastDay; i++) {
    const dateElement = document.createElement('div');
    dateElement.classList.add('date');
    dateElement.textContent = i;
    datesContainer.appendChild(dateElement);
  }
}
// 이전 달 버튼에 클릭 이벤트 추가
prevBtn.addEventListener('click', goToPrevMonth);

// 다음 달 버튼에 클릭 이벤트 추가
nextBtn.addEventListener('click', goToNextMonth);

// 캘린더 초기화
updateCalendar();

  // 모든 날짜 요소에 클릭 이벤트 핸들러를 추가
  var dates = document.querySelectorAll('.dates .date');
  for (var i = 0; i < dates.length; i++) {
    dates[i].addEventListener('click', function(event) {
      // 클릭된 날짜
      var date = event.target.innerText;

      // 클릭된 요일을 구하기
      var clickedDate = new Date(currentYear, currentMonth + 1, date);  // 월을 0부터 시작하도록 설정
      var dayIndex = clickedDate.getDay();
      var days = ['일', '월', '화', '수', '목', '금', '토'];
      var day = days[(dayIndex + 6) % 7];  // 요일 순서를 한국에 맞게 조정

      // 선택된 날짜와 요일을 화면에 표시
      document.getElementById('selected-date').innerText = date;
      document.getElementById('selected-day').innerText = day;
    });
  }

//캘린더