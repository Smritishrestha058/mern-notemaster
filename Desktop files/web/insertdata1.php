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

$sql = "INSERT INTO TDetails (date, account, category, transactions, amount, notes)
VALUES ('09/07/2024', 'Food', 'Groceries', 'Expenses', '500', 'Dinner')";

if ($conn->query($sql) === TRUE){
    echo "New Record created successfully";
} else{
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>