<?php
    // $firstNumber = $_POST['number1'];
    // $secondNumber = $_POST['number2'];
    // $ThirdNumber = $_POST['number3'];
    // if ($firstNumber>$secondNumber && $firstNumber>$ThirdNumber){
    //     echo "$firstNumber is the greatest";
    // }
    // else if ($secondNumber>$firstNumber && $secondNumber>$ThirdNumber){
    //     echo "$secondNumber is the greatest";
    // }
    // else{
    //     echo "$ThirdNumber is the greatest";
    // }
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $address = $_POST['address'];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "webtechbca";

    //Create Connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "INSERT INTO MyDetails (Firstname, Lastname, Email, Addres)
    VALUES ('$fname', '$lname', '$email', '$address')";

    if ($conn->query($sql)===TRUE) {
    echo "Data inserted created successfully";
    } else {
     echo "Error: " . $sql . "<br>" . $conn->error;
}
    $conn->close();
    ?>

