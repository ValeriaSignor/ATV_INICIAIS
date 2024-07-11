<?php

class area {
    function areaCirculo($raio) {
        $pi = 3.14159;
    $area = $raio * $raio * $pi ;
    return $area;
}
}
$areaClass = new area();

echo $areaClass->areaCirculo((float)$_GET['valor1']);

?>

