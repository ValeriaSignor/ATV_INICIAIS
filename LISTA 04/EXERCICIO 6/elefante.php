<?php

class area {
    function arearetangulo($base, $altura) {
    $area = $base * $altura / 2;
    return $area;
}
}
$areaClass = new area();

echo $areaClass->arearetangulo((float)$_GET['base'], (float)$_GET['altura']);

?>

