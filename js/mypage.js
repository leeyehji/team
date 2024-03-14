function setupMenuHandler() {
    $(".menu-content").hide();

    $(".nav").hover(
    function () {
        $(this).find(".menu-content").stop(true, true).slideDown(300);
    },
    function () {
        $(this).find(".menu-content").stop(true, true).slideUp(300);
    }
    );
}
function setupNavHandler() {
    $(".nav-content").hide();

    $("#nadeuliNav > li").click(function(event) { // event 매개변수 추가
    $(this).children(".nav-content").slideToggle(300);
    $(this).siblings().children(".nav-content").slideUp(300);
    event.stopPropagation();
});

$(".nav-content").click(function(event) {
    event.stopPropagation();
});
}

// fetch를 이용하여 a.html 파일의 내용을 가져옵니다.
fetch('header.html')
    .then(response => response.text()) // 응답을 텍스트로 변환합니다.
    .then(data => {
        document.querySelector('header').innerHTML = data; // header 태그 안에 내용을 삽입합니다.
        setupMenuHandler();
    })
    .catch(error => console.error('Error:', error)); // 오류 처리

    fetch('nav.html')
    .then(response => response.text()) // 응답을 텍스트로 변환합니다.
    .then(data => {
        document.querySelector('#nav').innerHTML = data; // header 태그 안에 내용을 삽입합니다.
        setupNavHandler();
    })
    .catch(error => console.error('Error:', error)); // 오류 처리

    fetch('footer.html')
    .then(response => response.text()) // 응답을 텍스트로 변환합니다.
    .then(data => {
        document.querySelector('footer').innerHTML = data; // header 태그 안에 내용을 삽입합니다.
    })
    .catch(error => console.error('Error:', error)); // 오류 처리

