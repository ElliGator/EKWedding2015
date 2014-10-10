!/usr/local/bin/php
<?
	var $codes = {"A", "B", "C", "D"};
	var $code = $_GET["code"];

	var $exists = false;
	var $x;
	foreach($x in $codes)
	{
		if($codes[$x] === $code)
		{
			$exists = true;
			break;
		}
	}

	return $exists;

?>