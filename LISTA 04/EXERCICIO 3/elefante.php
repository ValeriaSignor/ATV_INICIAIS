<?php

class Soma {
    function ehpar($numero) {
        return $numero % 2;
    }
}


$somaClass = new Soma();

if($somaClass->ehpar($_GET['valor'])== 0){
    echo "numero par";

}

else {
    echo "numero impar"; 

}



