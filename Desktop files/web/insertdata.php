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

$sql = "INSERT INTO MyDetails (Firstname, Lastname, Email, addres)
VALUES ('David', 'Smith', 'Davidsmith@example.com', 'Baneshwor')";

if ($conn->query($sql) === TRUE){
    echo "New Record created successfully";
} else{
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>