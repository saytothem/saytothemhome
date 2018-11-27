var msg_id = "아이디를 입력해 주세요.";
var msg_passwd = "비밀번호를 입력해 주세요.";
var msg_repwd = "비밀번호를 다시 입력해 주세요.";
var msg_repwdChk = "비밀번호가 다릅니다.";
var msg_name = "이름을 입력하세요.";
var msg_birth = "주민번호를 입력하세요.";
var msg_email = "이메일을 입력하세요.";
var msg_emailChk = "이메일 형식이 맞지 않습니다.";
var msg_confirmId = "중복확인을 해주세요.";

var insertError = "회원가입에 실패했습니다. \n확인 후 다시 시도해 주세요.";
var loginError = "로그인에 실패했습니다. \n확인 후 다시 시도해 주세요.";
var passwdError = "비밀번호가 맞지 않습니다. \n확인 후 다시 시도해 주세요.";


function memId() {
	var memId = $('#memId').val();
}
//에러발생 시 뒤로 돌려보내기
function errorAlert(msg) {
	alert(msg);
	window.history.back();
}

//회원가입 시 id포커스
function inputFocus() {
	document.inputform.id.focus();
}

//회원가입 시 필수 입력 체크
function inputCheck() {
	//id
	if(!document.inputform.id.value) {
		alert(msg_id);
		document.inputform.id.focus();
		return false;
	//비밀번호	
	} else if(!document.inputform.passwd.value) {
		alert(msg_passwd);
		document.inputform.passwd.focus();
		return false;
	//비밀번호 확인
	} else if(!document.inputform.repasswd.value) {
		alert(msg_repwd);
		document.inputform.repasswd.focus();
		return false;
	//비밀번호 != 비밀번호 확인	
	} else if(document.inputform.passwd.value != document.inputform.repasswd.value) {
		alert(msg_repwdChk);
		document.inputform.passwd.value = "";
		document.inputform.repasswd.value = "";
		document.inputform.passwd.focus();
		return false;
	//이름	
	} else if(!document.inputform.name.value) {
		alert(msg_name);
		document.inputform.name.focus();
		return false;
	//주민번호	
	} else if(!document.inputform.jumin1.value) {
		alert(msg_birth);
		document.inputform.jumin1.focus();
		return false;
	
	} else if(!document.inputform.jumin2.value) {
		alert(msg_birth);
		document.inputform.jumin2.focus();
		return false;
	//이메일	
	} else if(!document.inputform.email1.value) {
		alert(msg_email);
		document.inputform.email1.focus();
		return false;
	// 직접 입력(직접입력 선택되고 값이 비어있을 경우)
	} else if (document.inputform.email3.value == 0 && !document.inputform.email2.value){
		alert(msg_email);
		document.inputform.email2.focus();
		return false;
	// 중복확인 버튼을 클릭하지 않은 경우
	} else if (document.inputform.hiddenId == 0){
		alert(msg_confirmId);
		document.inputform.dupChk.focus();
		return false;
	}
	
}

//입력편의
function nextJumin1() { //주민번호1입력시 2로
	if(document.inputform.jumin1.value.length >= 6) {
		document.inputform.jumin2.focus();
	}
}

function nextJumin2() { //주민번호 2 입력시 휴대폰1로
	if(document.inputform.jumin2.value.length >= 7) {
		document.inputform.hp1.focus();
	}
}

function nextHp1() { //휴대폰 1 -> 2
	if(document.inputform.hp1.value.length >= 3) {
		document.inputform.hp2.focus();
	}
}

function nextHp2() { //휴대폰 2 -> 3
	if(document.inputform.hp2.value.length >= 4){
		document.inputform.hp3.focus();
	}
}

function nextHp3() { //휴대폰 3 -> 4
	if(document.inputform.hp3.value.length >= 4) {
		document.inputform.email1.focus();
	}
}

//중복확인
function confirmId() {
	
	if(!document.inputform.id.value){
		alert(msg_id);
		document.inputform.id.focus();
		return false;
	}
	
	//window.open("파일명", "윈도우명", "창속성");
	//url = "주소?속성=" + 속성값;
	var url = "confirmId.do?id="+ document.inputform.id.value;
	window.open(url, "confirm", "menubar=no, width=300, height=200")
}

function confirmIdFocus() {
	document.confirmform.id.focus();
}
//중복확인 창 아이디 비었을 때 경고
function confirmIdCheck() {
	if (!document.confirmform.id.value){
		alert(msg_id);
		document.confirmform.id.focus();
		return false;
	}
}

//회원정보 수정
function modifyFocus() {
	document.passwdform.passwd.focus();
}
//비밀번호창 비었을 때
function passwdCheck() {
	if(!document.passwdform.passwd.value) {
		alert(msg_pwd);
		document.passwdform.passwd.focus();
		return false;
	}
}
function loginfocus() {
	document.logIn.id.focus();
}

/*
opener : window 객체의 open() 메소드로 열린 새창(=중복확인창)에서
		열어줄 부모창(=회원가입창)에 접근할 때 사용

self.close() : 메세지 없이 현재창을 닫을 때 사용		
*/

function setId(id) {
	opener.document.inputform.id.value = id;
	opener.document.inputform.hiddenId.value = "1";
	self.close();
}

/**
 *	valication check
 *	캐시삭제 : f12 (개발자도구) network > .js(새로고침) > 우클릭 > clear cache 
 */
//장바구니
var addCartError = "장바구니 담기에 실패했습니다. \n확인 후 다시 시도 해주세요.";
var notLoginError = "장바구니에 담으려면 로그인 해 주세요.";

var noBuyError = "구매할 책을 선택해 주세요.";
var buyError = "구매에 실패했습니다. \n확인 후 다시 시도 해주세요.";

function cartCount(i) {
	var cnum = document.getElementById('num'+i).value;
	var ccnt = document.getElementById('c_count'+i).value;
	window.location="cartCount.do?num=" + cnum + "&c_count=" + ccnt;
}

function delCart(i) {
	var cnum = document.getElementById('num'+i).value;
	window.location="delCart.do?num=" + cnum;
}

//게시판
var msg_passwdb = "비밀번호를 입력해 주세요.";
var msg_writer = "작성자를 입력하세요.";
var msg_subject = "제목을 입력하세요.";

var updateError = "수정에 실패했습니다. \n다시 시도 해주세요.";
var inputError	= "게시글 등록에 실패했습니다. \n확인 후 다시 시도 해주세요.";
var addBookError = "도서 등록에 실패했습니다. \n확인 후 다시 시도 해주세요."

function errorAlert(msg){
	alert(msg);
	history.back();
}

function memId() {
	var memId = $('#memId').val();
}

//글수정, 삭제
function passwdFocus() {
	document.passwdform.passwd.focus();
}

function passwdChk() {
	if(!document.passwdform.passwd.value) {
		alert(msg_passwdb);
		document.passwdform.passwd.focus();
		return false;
	}
}

function modifyFocus(){
	document.modifyform.subject.focus();
}

function modifyCheck() {
	if(!document.modifyform.subject.value) {
		alert(msg_subject);
		document.modifyform.subject.focus();
		return false;
	}
	
	if (!document.modifyform.passwd.value) {
		alert(msg_passwdb);
		document.modifyform.passwd.focus();
		return false;
	}
}

function writeFocus() {
	document.writeform.writer.focus();
}

function writeCheck() {
	if(!document.writeform.writer.value) {
		alert(msg_writer);
		document.writeform.writer.focus();
		return false;
	} else if(!document.writeform.passwd.value) {
		alert(msg_passwdb);
		document.writeform.passwd.focus();
		return false;
	} else if(!document.writeform.subject.value) {
		alert(msg_subject);
		document.writeform.subject.focus();
		return false;
	}
}

//카트관련
var delfailError = "장바구니에서 삭제를 하지 못했습니다. \n확인 후 다시 시도해 주세요.";

function cartCount(i) {
	var cnum = document.getElementById('num'+i).value;
	var ccnt = document.getElementById('c_count'+i).value;
	window.location="cartCount?num=" + cnum + "&c_count=" + ccnt;
}

function delCart(i) {
	var cnum = document.getElementById('num'+i).value;
	window.location="delCart?num=" + cnum;
}

//정산관련
var noRefundError = "환불 신청할 도서를 선택해 주세요.";

function refundList() {
	var id = document.getElementById('memId').value;
	window.location="refundList?memId=" + id;
}

