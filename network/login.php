<?php
    header("Content-Type:text/html; charset=utf-8");

    // POST 요청으로 전달된 로그인 정보 가져오기
    $email = $_POST['email'];
    $password = $_POST['password'];

    // //특수문자 - SQL에서 오동작 방지
    $email = addslashes($email);
    $password = addslashes($password);

    //MySQL DB [account_email]
    $db = mysqli_connect('localhost', 'tjdrjs0803', 'dkssud109!', 'tjdrjs0803');
    mysqli_query($db, 'set names utf8');

    // 이메일과 비밀번호를 사용하여 사용자 인증하기
    //$sql = "SELECT * FROM account WHERE email='$email' AND password='$password'";
    $sql = "SELECT name,imgPath FROM account WHERE email='$email' AND password='$password'";
    $result =mysqli_query($db, $sql);
    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
    $name = $row['name'];
    $imgPath = $row['imgPath'];

    if ($result->num_rows > 0) {
        $url = "http://tjdrjs0803.dothome.co.kr/TeamProject/login_success.html?name=" . urlencode($name) . "&imgPath=" . urlencode($imgPath);
        header("Location: $url");
        echo true;
    } else {
        $url = "http://tjdrjs0803.dothome.co.kr/TeamProject/login_fail.html";
        header("Location: $url");
        echo true;
    }
?>