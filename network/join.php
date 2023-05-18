\<?php
// MySQL 데이터베이스 연결 설정
$servername = "localhost"; // MySQL 서버 주소
$nickname = "mun960327"; // MySQL 사용자 닉네임
$password = "cjtgmlakd12!"; // MySQL 사용자 비밀번호
$dbname = "profile";

// MySQL 연결 생성
$conn = new mysqli($servername, $nickname, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die("MySQL 연결 실패: " . $conn->connect_error);
}

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . ", 이름: " . $row["name"];
    }
} else {
    echo "결과가 없습니다";
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 닉네임, 이메일, 비밀번호, 확인용 비밀번호를 변수에 할당
    $nickname = $_POST["nickname"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    // 닉네임 유효성 검사
    if (strlen($nickname) < 2 || strlen($nickname) > 8) {
        $error = "닉네임은 2~8글자 사이여야 합니다.";
    }
    // 이메일 유효성 검사
    else if (!preg_match("/^[a-zA-Z0-9]{5,11}$/", $email)) {
        $error = "이메일은 영어와 숫자를 포함한 5~11글자여야 합니다.";
    }
    // 비밀번호 유효성 검사
    else if (!preg_match("/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/", $password)) {
        $error = "비밀번호는 영어, 숫자, 특수문자를 포함하고 8~16글자여야 합니다.";
    } else if ($password !== $confirm_password) {
        $error = "비밀번호가 일치하지 않습니다.";
    }
}

$conn->close();
?>
