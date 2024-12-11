<?php
$conn = new mysqli('localhost','root','','descronic');

    if ($conn->connect_error) {
        die('Connection failed'. $conn->connect_error);
    }
?>