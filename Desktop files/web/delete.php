<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webtechbca";

// Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM MyDetails WHERE id=2";

if ($conn->query($sql) === TRUE){
    echo "Record deleted successfully";
} else{
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>