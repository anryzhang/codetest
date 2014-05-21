<h2>打开指定文件</h2>
<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 14-5-21
 * Time: 下午2:07
 */
$file = fopen('p06.text',"r");
while(!feof($file)){
    echo '<p>'.fgets($file).'</p>';
}
fclose($file);
?>