#!/usr/local/bin/php
<?
	//connection settings go here 
	$dbconn = pg_connect($con_string);

	//Test Connection
	if(pgsql_connect_errno()){
		echo "Failed to connect to PostGreSQL: " . pgsql_connect_error();
	}

	$usr_code = $_GET['code'];
	$checkcode = "SELECT code FROM codes WHERE code LIKE '$usr_code%'";

	if(!$checkcode)
		return 'false';
	else 
		return 'true';
?>