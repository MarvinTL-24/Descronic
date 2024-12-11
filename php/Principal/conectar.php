<?php
$conn = new mysqli('localhost','Descrente24','Descrente&amor300p','descronic');

    if ($conn->connect_error) {
        die('Connection failed'. $conn->connect_error);
    }
?>