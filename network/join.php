\<?php
// MySQL 데이터베이스 연결 설정
$servername = "localhost"; // MySQL 서버 주소
$nickname = "root"; // MySQL 사용자 닉네임
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

$conn->close();
?>
