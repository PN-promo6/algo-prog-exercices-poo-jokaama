<?php
class Furniture {
  public $editor;
  public $designer;
  public $year;

  function __construct($editor, $designer, $year) {
    $this -> editor = $editor;
    $this -> designer = $designer;
    $this -> year = $year;
  }
}
$wassily = new Furniture("Knoll", "Marcel Breuer", 1926);

print_r($wassily);
?>
<!-- Autre possibilité de l'echo echo($wassily->editor .' '. $wassily->designer .' '. $wassily->year) -->
