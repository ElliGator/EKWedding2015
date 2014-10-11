#!/usr/local/bin/php
<?
	$arr = array("A","B","C","D");
	$code = $_GET["code"];

	$exists = "false";
	foreach($arr as $x)
	{
		if($x === $code)
		{
			$exists = "true";
			break;
		}
	}
	echo $exists;
?>