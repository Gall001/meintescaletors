
<?php
$banco = "mysql:host=localhost;dbname=agendaApp";
$usuario= "root";
$senha="";
try {
    $con = new pdo($banco, $usuario, $senha);
    $sql = "SELECT * from contato";
    $dados = $con->query($sql);
    header("Access-Control-Allow-Origin:* ");
    foreach ($dados as $seq=> $item ){
        echo "<p>";
		print_r($seq);
		echo ") ";
        print_r($item["nome"]);
        echo "</p>";
    }


} catch (PODExcaption $e) {
    
    echo 'error: ' . $e->getMessage();
    
} 
?>