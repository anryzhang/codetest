<?php


echo('test');
echo "<br>";

$firstname = 'peter';
$fname = &$firstname;
echo $firstname . '<br>';
echo $fname;

$fname = 'anry';
echo '<br>'. $firstname;
echo "<br>";
date_default_timezone_set('UTC');


// Prints something like: Monday
echo date("l");

?>