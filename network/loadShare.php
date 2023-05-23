<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type:application/json; charset=utf-8; Access-Control-Allow-Origin: *');

    $db=mysqli_connect('localhost','tjdrjs0803','dkssud109!','tjdrjs0803');
    mysqli_query($db,"set names utf8");

    $sql="SELECT no,id,pimg,rimg,title,date FROM teamprojectShare ORDER BY no DESC";

    $result=mysqli_query($db,$sql);
  
    //결과표로부터 총 레코드 수 알아내기
    $rowNum=mysqli_num_rows($result);

    $rows=array();
    for($i=0;$i<$rowNum;$i++){
        $row=mysqli_fetch_array($result, MYSQLI_ASSOC);//연관배열로 설정
       
        $rows[$i]=$row;
    }
    
    //2차원 배열을 json으로 받아옴
    $new_testArr = str_replace('\\/', '/', json_encode($rows));
     echo $new_testArr;
     mysqli_close($db);

?>