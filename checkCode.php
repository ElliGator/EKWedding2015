#!/usr/local/bin/php
<?
	
	$con_string = "host=postgres.cise.ufl.edu port=5432 dbname=ekweddb user=ec1 password=SQLpassword12";
	
	//connection settings go here 
	$dbconn = pg_connect($con_string);

	//Test Connection
	if(pgsql_connect_errno()){
		echo "Failed to connect to PostGreSQL: " . pgsql_connect_error();
	}

	$usr_code = $_GET['code'];
	$checkcode = "SELECT code FROM codes WHERE code LIKE '$usr_code%'";

	$code_valid = pg_num_rows(pg_query($checkcode));


	if($code_valid > 0)
		return 'true';
	else 
		return 'false';
?>