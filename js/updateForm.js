/*window.onload=function(){
	document.updateForm.gender['${memberDTO.gender}'].checked=true;
	document.updateForm.tel1.value='${memberDTO.tel1}';
	/* var tel1="${memberDTO.tel1}";
	var telSelect = document.getElementById("tel1");
	
	 if(tel1=="010")
		 telSelect.selectedIndex = 0;
      else if(tel1=="011")
    	  telSelect.selectedIndex = 1;
      else if(tel1=="019")
    	  telSelect.selectedIndex = 2; *
}
	
	function checkUpdate(){//유효성 검사
		//이름, 비밀번호, 비밀번호 재확인
		var pwd= document.getElementById("pwd").value;
		var repwd= document.getElementById("repwd").value;
		
		if(document.getElementById("name").value=="")
	    	document.getElementById("noname").innerHTML="이름을 작성하시오.";
		else if(pwd=="")
            document.getElementById("nopwd").innerHTML="비밀번호를 작성하시오.";
        else if(pwd !=repwd)
        	document.getElementById("incorrectPW").innerHTML="비번 틀림";
		else
			document.updateForm.submit();
	}
	
	   function tel1Check(tel1){
	      if(tel1=="010")
	         document.getElementById("010").selectedIndex=0;
	      else if(tel1=="011")
	         document.getElementById("010").selectedIndex=1;
	      else if(tel1=="019")
	         document.getElementById("019").selectedIndex=2;
	         
	   }

	   
	function emailInput(){
    	//emailInput
    	if(document.getElementById("self").selected){
    		document.getElementById("email2").value="";
    		document.getElementById("email2").readOnly=false;
    	}
    	else if(document.getElementById("naver").selected){
    		document.getElementById("email2").value="naver.com";
    		
    	}
    	else if(document.getElementById("goole").selected)
    		document.getElementById("email2").value=document.getElementById("goole").value;
    	else
    		document.getElementById("email2").value="hanmail.com";
    }
    
    function searchAddress(){
    	new daum.Postcode({
    		oncomplete: function(data) {
    			// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

    			// 각 주소의 노출 규칙에 따라 주소를 조합한다.
    			// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
    			var addr = ''; // 주소 변수

    			//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
    			if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
    				addr = data.roadAddress;
    			} else { // 사용자가 지번 주소를 선택했을 경우(J)
    				addr = data.jibunAddress;
    			}

    			// 우편번호와 주소 정보를 해당 필드에 넣는다.
    			document.getElementById("zipcode").value = data.zonecode;
    			document.getElementById("addr1").value = addr;
    			// 커서를 상세주소 필드로 이동한다.
    			document.getElementById("addr2").focus();
    		}
    	}).open();
    }*/