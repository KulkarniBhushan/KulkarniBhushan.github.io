<?php

	$fullname = $_POST['fullname'];
	$username = $_POST['username'];
	$email = $_POST['email'];
	$mobno = $_POST['mobno'];
	$password = $_POST['password'];

	//Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error)
	{
		die('Connection Failed :'.$conn->connect_error);
	}
	else{
		$stmt = $conn->prepare("insert into registration(fullname, username, email, mobno, password)
				values(?,?,?,?,?)");
		$stmt->bind_param("sssis",$fullname,$username,$email,$mobno,$password);
		$stmt->execute();
		echo "registration success";
		$stmt->close();
		$conn->close();
	}


?>