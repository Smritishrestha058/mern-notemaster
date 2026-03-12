<?php
class Animal{
    //proprerties
    public $name;
    public $col;
    //methods
    function set_name($name){
        $this->name = $name;
    
    }
    function get_name(){
        return $this->name;
    }
}
$deer = new Animal();
$Lion = new Animal();
$deer-> set_name('I love deer');
$Lion-> set_name('Lion is dangerous');

echo $deer->get_name();
echo "<br>";
echo $Lion->get_name();
    
?>