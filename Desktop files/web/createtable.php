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

// sql to create table
$sql = "CREATE TABLE MyDetails (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
Firstname VARCHAR(30) NOT NULL,
Lastname VARCHAR(30) NOT NULL,
Email VARCHAR(50),
Addres VARCHAR(50)
)";

if ($conn->query($sql) === TRUE){
    echo "Table MyDetails created successfully";
} else{
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>