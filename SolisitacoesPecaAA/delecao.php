<?php
   $banco = "mysql:host=localhost;port=3306;dbname=Equipamentos;charset=utf8";
   $usuario= "root";
   $senha = "";
   // header("Access-Control-Allow-Origin: *");
   header("Content-Type: application/json");
   header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
   header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS");
   header("Access-Control-Allow-Headers: Origin, Accept, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");   
   // header("Access-Control-Allow-Credentials:true");
   // header("Access-Control-Max-Age: 86400");
 
   try {
       if ($_SERVER['REQUEST_METHOD'] == "DELETE") {
           if (isset($_GET['id'])=== true) {
               $con = new PDO($banco, $usuario, $senha);
               $sql = "DELETE FROM SolisitacoesPecaAA ";
               $sql.= " WHERE ";
               $sql.= " id=? ";
               $comando = $con->prepare($sql);
               $comando->execute([
                   $_GET['id']
               ]);
               http_response_code(200); 
               echo('{"id":'.$_GET['id'].'}');
           } else {
               http_response_code(405); 
           }
       }
       else {
           if ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
               http_response_code(200);
           } else {
               http_response_code(406);
               echo('{ "message2": "'.$_SERVER['REQUEST_METHOD'].'"}');
           }
       }
   } catch (PDOException $e) {
       http_response_code(500);
       echo '{"ERROR":"' . $e->getMessage().'"}';
   }
?>

