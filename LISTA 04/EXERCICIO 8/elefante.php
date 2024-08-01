<?php

class celcius {
    function converteFahrenheitParaCelsius($fahrenheit) {
        
        $celsius = ($fahrenheit - 32) * 5 / 9;
        return $celsius;
}
}
$tempClass = new celcius();

echo $tempClass->converteFahrenheitParaCelsius((float)$_GET['valor1']);

?>
