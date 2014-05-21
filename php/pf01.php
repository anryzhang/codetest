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
 * Date: 14-5-17
 * Time: 下午1:15
 */
function testFun(){
    echo 'test fun ';
}
testFun();

echo "<br>";
function addNum($f=2,$s=3,$d=6){
    echo $f+$s+$d;
}

addNum(3,5);
echo "<br>";

function testVal(&$t){
    echo $t .= 'test'.'<br>';
}
$msg = "传值";
testVal($msg);
echo $msg
?>
</body>
</html>
