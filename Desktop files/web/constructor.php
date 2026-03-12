<?php
class myclass{
    public $x;
    public $y;

    function __construct($x,$y)
    {
        $this->x=$x;
        $this->y=$y;
    }
}
$c1= new myclass(5,6);
echo "the value of x is $c1->x";
?>