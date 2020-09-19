<?php
$banco = "mysql:host=localhost;dbname=Equipamentos;charset=utf8";
$usuario= "root";
$senha="";
try {
    $con = new pdo($banco, $usuario, $senha);
    $sql = "SELECT * from SolisitacoesPecaAA";
    if (isset( $_GET['pesq'])){
        $sql .= " where codigoPeca like '%".$_GET['pesq']."%' ";
    }
    $dados = $con->query($sql);
    $resp = json_encode($dados->fetchALL(PDO::FETCH_ASSOC));
   header("content-type: application/json");
   header("Access-Control-Allow-Origin:* ");
    echo ($resp);
} catch (PODExcaption $e) {
    
    echo 'error: ' . $e->getMessage();
    
} 
?>