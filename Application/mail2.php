<?php
function fix($string){
	$string = str_replace("<", "&lt;", "$string");
	$string = str_replace(">", "&gt;", "$string");
	return($string);
	}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$student = $_POST['student'];
$grade = $_POST['grade'];
$type = $_POST['type'];

$q1 = fix($_POST['q1']);
$q2 = fix($_POST['q2']);
$q3 = fix($_POST['q3']);
$q4 = fix($_POST['q4']);
$q5 = fix($_POST['q5']);
$q6 = fix($_POST['q6']);
$q7 = fix($_POST['q7']);
$q8 = fix($_POST['q8']);
$q9 = fix($_POST['q9']);

$formcontent=" From: $name \n Phone: $phone \n Student Number: $student \n 
Grade: $grade \n Competition: $type \n\n 
What in particular interests you and entices you to join robotics club? \n $q1 \n
How dedicated do you think you’ll be to robotics club? \n $q2 \n
What is your greatest asset, as a potential member of the club?\n $q3 \n
What do you believe is the foundation for a successful robot?\n $q4 \n
How eager are you to learn about robotics? \n $q5 \n
What type of previous experience, if any, might you have in relation to robotics?\n $q6 \n
What was last year's competition? What were the scoring objects?\n $q7 \n
How are vex products categorized?\n $q8 \n
List the contact information (phone number or email) of a company that could potentially sponsor Warrior Robotix.\n $q9
\n aq9sf4T889V";
    
    
$recipient = "team4659@gmail.com";
$subject = "$name - Club Application";
$mailheader = "From: $email \r\n";
$mailheaderW = "From: $recipient \r\n";


if(isset($_POST['submit'])){
	if(empty($name) || empty($email) || empty($phone) || empty($student) || empty($grade) || empty($type)|| empty($q1) || empty($q2) || empty($q3) || empty($q4)  || empty($q5) || empty($q6) || empty($q7) || empty($q8)){
		 echo"<h1>Please go back and fill out all the fields, they are all mandatory. </br>"
		 ."<a href='javascript:history.back()' style='text-decoration:none;color:#ff0099;'>Return to form</a> </br> Thank You</h1>";
		 }
		 elseif(strpos($email,'@') == true && !preg_match('/[^A-Za-z ]/', $name) && !preg_match('/[^0-9 ]/', $student)){
			mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
			mail($email, "Warrior Robotix Application", "Thank you for applying to Warrior Robotix! \n Your application will be processed shortly.", $mailheaderW) or die("Error!");
			header('location: thankyou.html');
			 }
		else{
			echo"<h1>Please go back and fill out all the fields properly! </br> Atleast fill out your name and email properly so we can hunt you down if need be."
			."<br>And also your student number </br>"
		 	."<a href='javascript:history.back()' style='text-decoration:none;color:#ff0099;'>Return to form</a> </br> Thank You</h1>";
			}
	}else{
		header('location:warriorsapp.html');
		}
?>
