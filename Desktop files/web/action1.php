<?php
    $date = $_POST['date'];
    $account = $_POST['account'];
    $category = $_POST['category'];
    $transactions = $_POST['entry-type'];
    $amount = $_POST['amount'];
    $notes = $_POST['notes'];
    

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "budgettracker";

    //Create Connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO TDetails (date, account, category, transactions, amount, notes)
    VALUES ('$date', '$account', '$category', '$transactions', '$amount', '$notes')";

    if ($conn->query($sql)===TRUE) {
    echo "Data inserted created successfully";
    } else {
     echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
?>

