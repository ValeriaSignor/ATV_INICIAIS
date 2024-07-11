<?php

class area {
    function areaQuadrado($base, $altura) {
    $area = $base * $altura;
    return $area;
}
}
$areaClass = new area();

echo $areaClass->areaQuadrado((float)$_GET['base'], (float)$_GET['altura']);

?>

