<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type:application/json; charset=utf-8; Access-Control-Allow-Origin: *');

    $num=$_GET['no'];
    $db=mysqli_connect('localhost','wny2023','thdek543!','wny2023');
    mysqli_query($db,"set names utf8");

    $sql="SELECT no,id,pimg,rimg,review,title,date FROM teamprojectShare where no='$num'";
    $result=mysqli_query($db,$sql);
    $row=mysqli_fetch_array($result, MYSQLI_ASSOC);
    $data=str_replace('\\/', '/', json_encode($row));
    echo $data;
  
    mysqli_close($db);

?>