function validateForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");

    // 닉네임 유효성 검사
    if (name.value.length < 2 || value.name.length > 8) {
        alert("닉네임은 2글자에서 8글자 사이여야 합니다.");
        name.focus();
        return false;
    }

    // 이메일 유효성 검사
    if (regEmail.value.email  < 5 || email.length > 11)     
    // /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    {
        alert("이메일은 5글자에서 11글자 사이여야 합니다.");
        return false;
    }

    // 비밀번호 유효성 검사
    if (regPassword.value.password) { /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
        alert("비밀번호는 영문자, 숫자, 특수문자를 포함하고 8글자에서 16글자 사이여야 합니다.");
        return false;
    }

    // 비밀번호 확인
    if (password !== password2) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }
}