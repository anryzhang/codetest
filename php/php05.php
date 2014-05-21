<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        p{
            margin: 5px;
            padding: 5px;
            border: 1px solid #ccc;

        }
    </style>
</head>
<body>
<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 14-5-21
 * Time: 下午1:54
 */
$myarr = array(1,3,4,5,6);
for($i=0; $i< count($myarr); $i++){
    echo $myarr[$i] . ' ';
}

include 'p05temp.php';

include 'php06.php';
?>

</body>
</html>