// 회원가입 양식 제출 시 유효성 검사
function validateForm() {
    var name = document.getElementById("name").value; 
    var email = document.getElementById("email").value;
    var password = document.getElementById["password"].value;

     // 닉네임 유효성 검사
     if (name.length < 2 || name.length > 8) {
        alert("닉네임은 2글자에서 8글자 사이여야 합니다.");
        return false;
    }

     // 이메일 유효성 검사
     var regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
     if (regEmail.test(email) || email.length < 5 || email.length > 11) {
         return true;
     }else {
        alert("이메일은 5글자에서 11글자사이입니다.")
     }

    // 비밀번호 유효성 검사
    var regpassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    if (regpassword.test(password)) {
        alert("비밀번호는 영문자, 숫자, 특수문자를 포함하고 8글자에서 16글자 사이여야 합니다.");
        return true;
    }

    // 비밀번호 확인
    if ($password !== $confirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return true;
}
}