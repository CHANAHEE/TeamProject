<?php
// MySQL 데이터베이스 연결 설정
$servername = "localhost";
$username = "사용자_이름";
$password = "비밀번호";
$dbname = "데이터베이스_이름";

// MySQL 연결 생성
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die("MySQL 연결 오류: " . $conn->connect_error);
}

$sql = "CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nickname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "테이블이 생성되었습니다.";
} else {
    echo "오류: " . $conn->error;
}

$nickname = $_POST['nickname'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO users (nickname, email, password) VALUES ('$nickname', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "회원가입이 완료되었습니다.";
} else {
    echo "오류: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>