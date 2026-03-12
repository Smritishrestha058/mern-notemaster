<?php
// Database connection parameters
$servername = "localhost"; // Change this to your database server name 
$username = "username"; // Change this to your database username 
$password = "password"; // Change this to your database password 
$dbname = "T.U"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// SQL query to retrieve all records from the student table 
$sql = "SELECT id, name, address FROM student"; 
$result = $conn->query($sql);

if ($result->num_rows > 0) { 
    // Output data of each row 
    echo "<table border='1'> 
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Address</th>
    </tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row["id"] . "</td>";
        echo "<td>" . $row["name"] . "</td>";
        echo "<td>" . $row["address"] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$conn->close();
?>
