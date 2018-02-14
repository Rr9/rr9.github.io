<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$warriors = "team4659@gmail.com";
		
if(!empty($phone)){
	$message="$message /n $phone"
	}
		
if(isset($_POST['submit'])){
	if(empty($name) || empty($email)||  empty($message) || empty($subject)){
		echo"<h1>Please go back and fill out allmandatory fields</br></h>1"
		 ."<h2><a href='javascript:history.back()' style='text-decoration:none;color:#ff0099;'>Return to contect form</a> </br> Thank You</h2>";
		}elseif(strpos($email,'@') == true){
			mail($warriors, $subject, $formcontent, $email) or die("Error!");
			mail($email, "Warrior Robotics - $subject")
			}
	}
?>
