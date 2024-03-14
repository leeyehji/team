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

    document.getElementById('noticeLink').addEventListener('click', function(event) {
        event.preventDefault(); // 기본 이벤트를 방지합니다.
        // 모든 섹션을 숨깁니다.
        document.getElementById('noticeContent').style.display = 'none';
        document.getElementById('inquiryContent').style.display = 'none';
        document.getElementById('qnaContent').style.display = 'none';
        // 공지사항 섹션만 표시합니다.
        document.getElementById('noticeContent').style.display = 'block';
    });