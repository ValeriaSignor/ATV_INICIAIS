<?php

class MaiorValor {
    function buscaMaiorValor($a, $b, $c) {
        $maior = $a;

        if ($b > $maior) {
            $maior = $b;
        }
        if ($c > $maior) {
            $maior = $c;
        }
        return $maior;
    }
}
$MaiorValorClass = new MaiorValor();

echo $MaiorValorClass->buscaMaiorValor($_GET['valor1'], $_GET['valor2'], $_GET['valor3']);

?>


     