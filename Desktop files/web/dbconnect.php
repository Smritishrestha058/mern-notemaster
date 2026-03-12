<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create Connection
$conn = new mysqli($servername, $username, $password);

//Check connection
if ($conn->connect_error) {
    die("Connection failed: ");
}
else{
    echo "Connection is sucessful";
}
$conn->close();
?>