<!DOCTYPE html>
<html>
	<head>
		<title>Sign Up</title>
		<link rel="stylesheet" type="text/css" href="main.css">
		<link href='http://fonts.googleapis.com/css?family=Roboto:500,700' rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="jquery-1.11.3.min.js"></script>
		<script type="text/javascript" src="script.js"></script>

	</head>

	<body>
		<form>
			<fieldset>
			<legend>Choose the weeks you would like have Rigu's Services &#22806; &#20154; </legend>
		<?php 
			for ($week=0; $week < 10; $week++) { 
				echo "
					<div class="weeks">
						<p>Week $week/p>
						<div class="options">
							<div class="checkmark"></div>
							<label><input type="radio" name="week$week" value="Morning">$50 plan</label> &nbsp;&nbsp;
							<label><input type="radio" name="week$week" value="Afternoon">$100 enterprise service</label>  &nbsp;&nbsp;
							<label><input type="radio" name="week$week" value="Full Day">Free</label>  &nbsp;&nbsp;
							<input type="radio" name="week$week" value="Null" style="display:none" checked>
						</div>
					</div>
				";
			}
		 ?>
		</fieldset></form>

	</body>
</html>
