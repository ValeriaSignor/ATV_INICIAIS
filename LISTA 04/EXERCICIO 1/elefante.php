<?php

class Soma {
    function somaDoisValores($valor1, $valor2) {
        return $valor1 + $valor2;
    }
}

// carrega as funcoes da class pra mim
$somaClass = new Soma();
// agora executa a minhaFuncao 
// de dentro da class
echo $somaClass->somaDoisValores($_GET['valor1'], $_GET['valor2']);