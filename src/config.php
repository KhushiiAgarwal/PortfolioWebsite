<?php
$servername="localhost";
$username="root";
$passwd="";
$conn = new mysqli($servername, $username, $passwd);
if($conn-> connect_error){
    die("Connection Failed".$conn->connect_error);
} 
echo "Connection successful";

   if (!$db) {
       die("Database connection failed: " . mysqli_connect_error());
   }
?>
