<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
$login = $_GET['login'];
$logname = $_GET['logname'];
if($login == 1){
    echo 'welcome '.$logname;
}else{
    echo 'login failed '.$logname;
}
?>
</body>
</html>
