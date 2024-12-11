<?php
session_start(); // Inicia a sessão para poder destruir

// Remove todas as variáveis de sessão
session_unset();

// Destrói a sessão
session_destroy();

// Redireciona para a página de login ou outra página desejada
header("Location: Visualizar.html"); // Substitua "login.php" pela página desejada
exit();
?>
