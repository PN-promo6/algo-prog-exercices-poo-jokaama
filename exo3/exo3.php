<<?php
class Student {
  public $name;
  public $age;

  function __construct($name, $age) {
    $this -> name = $name;
    $this -> age = $age;
  }
  function displayInfo() {
    echo("Son nom est " . $this->name . " Il a " . $this->age . " ans");
  }
}
$information = new Student("John", 24);
$information->displayInfo();

 ?>
