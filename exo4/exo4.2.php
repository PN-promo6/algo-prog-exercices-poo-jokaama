<?php
  class Client {
    private $name;
    private $idbank;

    function __construct($name, $idbank){
      $this -> name = $name;
      $this -> idbank = $idbank;
    }
    function getIdbank() {
      return $this -> idbank;
    }
  };
$userBank = new Client("Silva", 802694);
echo($userBank -> getIdBank());
 ?>

<!-- // Créez une classe représentant un client d’une banque avec :
// - un constructeur
// - un attribut privé pour le nom
// - un attribut privé pour le numero de compte en banque
// - une méthode pour connaître le numero de compte en banque
//
// Dans un algorithme, créez une instance de cette classe et afficher le numéro de compte en banque d’un client. -->
