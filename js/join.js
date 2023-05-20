function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var passwordForCertifyInput = document.getElementById("password2");

    // 닉네임 유효성 검사
    var name = nameInput.value;
    var namePattern = /^[a-zA-Z0-9]{2,9}$/;
    if (!namePattern.test(name)) {
        alert("닉네임은 문자,숫자 조합의 2글자에서 8글자 사이여야 합니다.");
        nameInput.focus();
        return false;
    }

    // 이메일 유효성 검사
    var email = emailInput.value;
    var emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email))     
    {
        alert("유효한 이메일 형식이 아닙니다.");
        emailInput.focus();
        return false;
    }

    // 비밀번호 유효성 검사
    var password = passwordInput.value;
    var passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    if (!passwordPattern.test(password)) { 
        alert("비밀번호는 영문자, 숫자, 특수문자를 포함하고 8글자에서 16글자 사이여야 합니다.");
        passwordInput.focus();
        return false;
    }

    // 비밀번호 확인
    var passwordForCertify = passwordForCertifyInput.value;
    if (password !== passwordForCertify) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }

    return true;
}