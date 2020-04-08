<?php
  class ConcertTicket {
    $nameTicket;
    $idPlace;
    $artist;
    $typePlace = "";

    __construct($nameTicket, $idPlace, $artist, $typePlace?) {
      $this -> nameTicket = $nameTicket;
      $idPlace -> idPlace = $idPlace;
      $artist -> artist = $artist;
      if (!is_null($typePlace) {
        $this ->typePlace = $typePlace
      };
    }
    htmlDetails() {
      $content= `
      <p>Votre nom : ${$this->nameTicket}</p>
      <p>Numéro de la place : ${$this->idPlace}</p>
      <p>Nom de l'artiste : ${$this->artist}</p> </br>`;
      if ($this->typePlace != "") {
        $content = $content + `<p>Type de place: ${this.typePlace}</p>`
      }
      return ($content);
    }
  }

$ownerTicket01: = new ConcertTicket("Johnny Hallyday", 458798, "Céline Dion");
 ?>
