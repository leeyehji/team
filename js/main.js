//슬라이드 -------------------------------------------------------------------------------------
    var slideIndex = 0;
showSlides();

// 이전/다음 버튼 클릭 시 슬라이드 이동
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// 현재 슬라이드 표시
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// 슬라이드 보여주기
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }else if(slideIndex<=0){
      slideIndex = slides.length;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// 슬라이드 변경 간격 설정 (20초)
var slideInterval = setInterval(showSlides, 20000);

// 이미지 호버 시 이전/다음 버튼 표시
var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
var prevButton = document.getElementsByClassName("prev1")[0];
var nextButton = document.getElementsByClassName("next1")[0];

slideshowContainer.addEventListener("mouseover", function () {
    if (prevButton.classList.contains("active")) return;
    prevButton.style.display = "block";
    prevButton.classList.add("active");

    if (nextButton.classList.contains("active")) return;
    nextButton.style.display = "block";
    nextButton.classList.add("active");
});

// 슬라이드 변경 간격 조정 함수
function setSlideInterval(interval) {
    clearInterval(slideInterval); // 기존의 간격 제거
    slideInterval = setInterval(showSlides, interval); // 새로운 간격 설정
}

//캘린더-------------------------------------------------------------------------------------

// 현재 날짜 정보 가져오기
const currentDate = new Date();

// 현재 연도와 월 정보 가져오기
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

// 이전 달과 다음 달로 이동할 수 있는 버튼 요소 가져오기
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

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
      var clickedDate = new Date(currentYear, currentMonth - 1, date);  // 월을 0부터 시작하도록 설정
      var dayIndex = clickedDate.getDay();
      var days = ['일', '월', '화', '수', '목', '금', '토'];
      var day = days[(dayIndex + 6) % 7];  // 요일 순서를 한국에 맞게 조정

      // 선택된 날짜와 요일을 화면에 표시
      document.getElementById('selected-date').innerText = date;
      document.getElementById('selected-day').innerText = day;
    });
  }

// 추천여행지-------------------------------------------------------------------------------------