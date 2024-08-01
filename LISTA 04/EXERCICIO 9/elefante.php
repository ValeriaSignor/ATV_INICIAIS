<?php

class soma {
    function ehBissexto($ano) {
        if (($ano % 4 == 0 && $ano % 100 != 0) || $ano % 400 == 0) {
            return 1; 
        } else {
            return 0; 
        }
    }

$somaclass = new soma();


if($somaclass = ->ehBissexto((float)$_GET['valor']));{
    echo "é bissexto";
}
else{
    echo "não é bissexto";
} 
}

?>
