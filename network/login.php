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
    echo("
    
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset='utf-8'>
                <title>No AJAX</title>
            </head>
            <body>
            <div style='height: 3rem;'></div>
            <div class=container>
                <div id='success'>
                    <p id='title'>로그인 완료</p>
                <p id='message'>로그인되었습니다!</p>
                </div>
                
                <div id='button'>
                    <a href='http://tjdrjs0803.dothome.co.kr/TeamProject/index.html'><button id='button_main'>홈화면으로</button></a>
                </div>
            </div>
               
            <style>
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        .container {
            width: 90%;
            text-align: center;
            max-width: 360px;
            height: 70%;
            margin: 1rem auto 0 auto;
            margin-bottom: 60px;
            align-content: center;
        }
        #title {
            font-family: 'Pretendard';
           font-weight: 700;
            font-size: 2.5rem;
            color: #17BCE0;
            margin-bottom: 2rem;
        }
        #message {
            font-family: 'Pretendard';
           font-weight: 400;
            font-size: 1rem;
            line-height: 1.5rem;
        }
        #button{
            margin: 2rem 0;
        }


        #button_main {
    font-family: 'Pretendard';
            font-weight: 400;
            margin: 0.5rem 0;
            width: 100%;
            height: 50px;
            background-color: #17BCE0;
            border:none;
            color:white;
            font-size: 1.2rem;
            border-radius: 0.2rem;
        }


    </style>        
            </body>
        </html>
        
    ");
} else {
    // 로그인 실패
    echo ("
    
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset='utf-8'>
                <title>No AJAX</title>
            </head>
            <body>
            <div style='height: 3rem;'></div>
            <div class=container>
                <div id='success'>
                    <p id='title'>로그인 실패</p>
                <p id='message'>로그인이 실패했습니다.</p>
                </div>
                
                <div id='button'>
                    <a href='http://tjdrjs0803.dothome.co.kr/TeamProject/login.html'><button id='button_main'>로그인화면으로</button></a>
                </div>
            </div>
               
            <style>
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        .container {
            width: 90%;
            text-align: center;
            max-width: 360px;
            height: 70%;
            margin: 1rem auto 0 auto;
            margin-bottom: 60px;
            align-content: center;
        }
        #title {
            font-family: 'Pretendard';
           font-weight: 700;
            font-size: 2.5rem;
            color: #17BCE0;
            margin-bottom: 2rem;
        }
        #message {
            font-family: 'Pretendard';
           font-weight: 400;
            font-size: 1rem;
            line-height: 1.5rem;
        }
        #button{
            margin: 2rem 0;
        }


        #button_main {
    font-family: 'Pretendard';
            font-weight: 400;
            margin: 0.5rem 0;
            width: 100%;
            height: 50px;
            background-color: #17BCE0;
            border:none;
            color:white;
            font-size: 1.2rem;
            border-radius: 0.2rem;
        }


    </style>        
            </body>
        </html>
        
    ");
}


?>