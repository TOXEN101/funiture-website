<?php
$name= htmlspecialchars(trim($_POST['name']));
$email= filter_var(trim($_POST['email']),FILTER_SANITIZE_EMAIL);
$subject= htmlspecialchars(trim($_POST['subject']));
$message= htmlspecialchars(trim($_POST['message']));
if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
    die("invalid email address!");
}
$to="info@example.com";
$header="From: - server's email-\r\n";
$header.="Reply-to:$email-\r\n";
$header.="Content-Type: text/plain; charset=UTF-8\r\n";


mail($to,$subject
,$message,$header)
or die('Error in sending message!');
?>