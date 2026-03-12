<?php
class myclass{
    public $x,$y;
    function __construct()
    {
        echo"I am constructor<br>";
    }
    function __destruct()
    {
        echo"I am destructor<br>";
    }
}
$c1= new myclass();
?>