<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 14-5-21
 * Time: 下午2:23
 */
$uploadF = "upload/";
if(($_FILES["file"]["type"] == "image/gif") ||
    ($_FILES["file"]["type"] == "image/jpeg") ||
    ($_FILES["file"]["type"] == "image/pjpeg") ||
    ($_FILES["file"]["size"] < 200000)
 ){
    if($_FILES["file"]["error"]){
        echo "return code:" . $_FILES["file"]["error"]."<br>";
    }else{
        echo "upload:" .$_FILES["file"]["name"]."<br>";
        echo "type:" . $_FILES["file"]["type"]."<br>";
        echo "size:" .$_FILES["file"]["size"]/1024 ."kb<br>";
        echo "temp file:" .$_FILES["file"]["tmp_name"]."<br>";
        if(!file_exists($uploadF).$_FILES["file"]["name"]){
            mkdir($uploadF,0777);
            echo $_FILES["file"]["name"] . "已经上传!";
        }else{
            move_uploaded_file($_FILES["file"]["tmp_name"],$uploadF.$_FILES["file"]["name"]);
            echo "stored in:" .$uploadF .$_FILES["file"]["name"].'<br>';
        }

    }
}



?>
<a href="p07_fileUpudate.php">返回</a>
</body>
</html>
