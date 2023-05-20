<?php
    header("Content-Type:text/html; charset=utf-8");
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $imgPath = $_POST['profile'];
    
    //특수문자 - SQL에서 오동작 방지
    $email = addslashes($email);
    $password = addslashes($password);

    //MySQL DB [account_email]
    $db = mysqli_connect('localhost', 'tjdrjs0803', 'dkssud109!', 'tjdrjs0803');
    mysqli_query($db, 'set names utf8');

    $sql = "INSERT INTO account(name,email,password,imgPath) VALUES('$name','$email','$password','$imgPath')";
    $result = mysqli_query($db, $sql);

    if($result){
        $url = "http://tjdrjs0803.dothome.co.kr/TeamProject/successSignUp.html";
        header("Location: $url");
        echo true;
    } 
    else echo false;

    mysqli_close($db);
?>
  