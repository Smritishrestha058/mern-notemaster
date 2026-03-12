<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome to my PHP code</h1>
    <?php
    $x=10;
    $y=20;
    $z=15;
    if ($x>$y && $x>$z)
    {
        echo "The greatest number is $x";
    }
    else if ($y>$x && $y>$z)
    {
        echo "The greatest number is $y";
    }
    else
    {
        echo "The greatest number is $z";
    }
    // echo "The sum of two number is $z";
    // print("Hello World");
    // echo "<br>Hello another World";
    // ?>
    <!-- LAb 5
    1. Write a php program to find the greatest number among three numbers 
    2. Write a php program to check input number is positive or negative or zero
    3. Write a php program to reverse the inout number.
    4. Write a php program to check input number is palindrome or not.
    5. Write a php program to find greatest number between 10 numbers. -->
</body>
</html>