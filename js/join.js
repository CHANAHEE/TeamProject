function profile(){
    var nickname = document.forms["profile"]["nickname"].value;
    var email = document.forms["profile"]["email"].value;
    var password = document.forms["profile"]["password"].value;
    var confirm_password = document.forms["profile"]["confirm_password"].value;

    //닉네임 유효성 검사
    function profile(nickname){
        if(nickname.length < 2 || nickname.length > 8){
            alert("닉네임은 2글자에서 8글자 사이여야 합니다.");
            return false;
        }
        return true;
    }

    //email 유효성 검사
    function validateEmail($email) {
        if (!preg_match("/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/", $email)) {
            return false;
        }
        return true;
    }
    

    //비밀번호 유효성 검사
    function profile(password){
        if(!preg_match("/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/"));
        alert("비밀번호는 숫자와 영어,특수문자를 포합해서 8~16글자 사이여야 합니다.");
    }

    //비밀번호 확인 검사
    function profile(confirm_password){
        if($password !== $confirm_password){

        }
    }

}