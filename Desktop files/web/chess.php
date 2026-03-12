<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table{
            border-collapse: collapse;
            margin: 50px auto;
        }
        td{
            width: 70px;
            height: 70px;
        }
        .black{
            background-color: black;
        }
        .white{
            background-color: white;
        }
    </style>
</head>
<body>
    <table border="1">
        <?php
        $size=8;
        for ($row=0;$row<$size;$row++){
            echo "<tr>";
                for ($col=0;$col<$size;$col++){
                    if (($row+$col) %2 == 0){
                        echo "<td class='white'></td>";
                    }
                    else{
                        echo "<td class='black'></td>";
                    }
                }
        }
        ?>
    </table>

</body>
</html>