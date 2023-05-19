<?php
// MySQL 데이터베이스 연결 설정
$servername = "localhost";
$username = "mrhi1996";
$password = "a1b2c3d4!!";
$dbname = "mrhi1996";

// POST 요청으로 전달된 로그인 정보 가져오기
$email = $_POST['email'];
$password = $_POST['password'];

// //특수문자 - SQL에서 오동작 방지
$email = addslashes($email);
$password = addslashes($password);

//MySQL DB [account_email]
$db = mysqli_connect('localhost', 'mrhi1996', 'a1b2c3d4!', 'mrhi1996');
mysqli_query($db, 'set names utf8');

// 이메일과 비밀번호를 사용하여 사용자 인증하기
$sql = "SELECT * FROM account WHERE email='$email' AND password='$password'";
$result =mysqli_query($db, $sql);

if ($result->num_rows > 0) {
    // 로그인 성공
    echo "로그인에 성공했습니다.";
} else {
    // 로그인 실패
    echo "이메일 또는 비밀번호가 올바르지 않습니다.";
}


?>