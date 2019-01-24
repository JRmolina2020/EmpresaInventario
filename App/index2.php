<?php 


abstract class  Portada {
public $nombre;

}


class Recibo extends Portada {
 public $producto=[];
   public function __construct(){
    $this->nombre="LOCOS";
    }
    public function App($nombre){
     Self::Mostrar($nombre);
    }

    public function Proceso($nombre){
    $this->producto[]=$nombre;
    for($i=0;$i<count($this->producto);$i++){
    echo $this->producto[$i];
    }
    }
    public function Mostrar($nombre){
    echo $this->nombre;
    Self::Proceso($nombre);
    }
}


$recibo = new Recibo();
$recibo->App('mango');
$recibo->App('pera');


?>