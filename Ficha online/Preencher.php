<?php

$nome = $_POST["Nome"];
$idade = $_POST["Idade"];
$sexo = $_POST["Sexo"];
$altura = $_POST["Altura"];
$peso = $_POST["Peso"];
$classe = $_POST["Classe"];
$sub_classe = $_POST["Sub-Classe"];
$estilo = $_POST["Estilo de luta"];
$elemento = $_POST["Elemento"];


//Conectar com o banco de dados

$conn = new mysqli('localhost','root','','criação de personagem');

if ($conn->connect_error) {
    die('Connection failed'. $conn->connect_error);
}else{
    $sql = "INSERT INTO criação(Nome,Idade,Sexo,Altura,Peso,Classe,Sub-Classe,Estilo de luta,Elemento) 
    VALUES('$nome', '$idade', '$sexo', '$altura', '$peso', '$classe', '$sub_classe', '$estilo', '$elemento')";

    if(mysqli_query($conn, $sql)){
        session_start();
        if(mysqli_affected_rows($conn) > 0){
            $_SESSION["insert"] = "1";
            header('Location:index.html');
        }else{
            $_SESSION["insert"] = "2";
            header('Location:index.html');
        }
    }else{
        echo "Falha no comando SQL";
    }

}
?>