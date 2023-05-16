<?php
    header('Content-Type:text/plain; charset=utf-8');
    
    //아이디랑 프로필사진은 dummy임 나중에 회원로그인 처리후 수정예정
    $id="김마리씨";
    $dstName1="../image/profile/profile02.png";

    //form으로 전달된 데이터들
    $title=$_POST['title'];
    $review=$_POST['review'];

    //form에서 전달된 파일 (rimg)
    $file=$_FILES['rimg'];
    $srcName=$file['name']; //원본파일명
    $tmpName=$file['tmp_name']; //임시저장소 경로/파일명
    $dstName="../rimg/".date('YmdHis').$srcName;
    move_uploaded_file($tmpName,$dstName);

    //타이틀, 메시지 중에 특수문자(줄바꿈포함) 사용 가능성 있음 -> SQL에서 쿼리문이 잘못 해석될 수 있음
    //특수문자 앞에는 자동으로 슬래시문자를 추가해줌 -> 원본은 안바뀜-> 다시 메시지에 넣어서 원본바꿈
    $review=addslashes($review);
    $title=addslashes($title);

    //데이터가 저장되는 시간
    $now=date('Y-m-d H:i:s');

    //MySQL DB에 데이터를 저장[테이블명: teamprojectShare]
    $db=mysqli_connect('localhost','wny2023','thdek543!','wny2023');
    mysqli_query($db,"set names utf8");

    //저장할 데이터($id, $pass, $email, $file, $dstName, $now)들을 삽입하는 쿼리문
    $sql="INSERT INTO teamprojectShare(id, pimg, rimg, review, title, date) VALUES ('$id','$dstName1','$dstName','$review','$title','$now')";
    $result=mysqli_query($db,$sql);

    //$result로 확인 echo
    if($result) echo "리뷰가 등록 되었습니다.";
    else echo "리뷰 등록 취소/실패".$result;

    mysqli_close($db);

?>