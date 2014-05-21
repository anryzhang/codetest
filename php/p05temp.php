<h1>外部模板</h1>
<?php
/**
 * Created by PhpStorm.
 * User: DELL
 * Date: 14-5-21
 * Time: 下午1:57

 */

date_default_timezone_set('UTC');

$tomorrow = mktime(0,0,0,date("m"),date("d")+1,date("Y"));
echo '<div>';
echo "明天是 ".date("Y/m/d", $tomorrow);
echo '</div>';

?>