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
 * Time: 上午11:00
 */
echo 'test';

for($i = 0; $i <= 25; $i++){
    echo '列表:'.$i.'<br/>';
}

$data = '设置 cookie';
setcookie('cookieName',$data);
setcookie('another',$data,time()+60*60*24*30);


?>


</body>
</html>
