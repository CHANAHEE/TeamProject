<?php
// MySQL 데이터베이스 연결 설정
$servername = "localhost";
$username = "mrhi1996";
$password = "a1b2c3d4!!";
$dbname = "mrhi1996";

    $name = $_GET['name'];
    $email = $_GET['email'];
    $password = $_GET['password'];
    // $imgPath = 
    
    //특수문자 - SQL에서 오동작 방지
    $email = addslashes($email);
    $password = addslashes($password);

    //MySQL DB [account_email]
    $db = mysqli_connect('localhost', 'mrhi1996', 'a1b2c3d4!', 'mrhi1996');
    mysqli_query($db, 'set names utf8');

    $sql = "INSERT INTO account(name,email,password,imgPath) VALUES('$name','$email','$password','qwer')";
    $result = mysqli_query($db, $sql);

    if($result){
        $url = "http://mrhi1996.dothome.co.kr/login.html";
        header("Location: $url");
        echo true;
    } 
?>
  