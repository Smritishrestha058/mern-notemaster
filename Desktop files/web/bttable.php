<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "budgettracker";

// Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "CREATE TABLE TDetails (
Date INT(10) NOT NULL,
Account VARCHAR(30) NOT NULL primary key,
Category VARCHAR(30) NOT NULL,
Transactions ENUM('income', 'expense') NOT NULL,
Amount INT(10) NOT NULL,
Notes VARCHAR(100) NULL
)";

if ($conn->query($sql) === TRUE){
    echo "Table TransactionDetails created successfully";
} else{
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>