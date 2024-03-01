<?php

// Connection variables
//include '../general/conn.php';
//$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
// Check connection
//if (!$conn) {
//    die("Connection failed: " . mysqli_connect_error());
//}

$datos = array();  // Inicializar el array fuera del bucle

$datos1 = mysqli_query($conn, "SELECT * FROM nodos");

while ($fila = mysqli_fetch_array($datos1)) {
    // Agregar datos a $datos en cada iteración
    $datos[] = array(
        'numero' => $fila['ID'],
        'coordenadas' => $fila['coordenadas'],
        'estado' => $fila['test220'],
        'nombre' => $fila['nombreN'],
    );
}

// Devolver datos como JSON
header('Content-Type: application/json');
echo json_encode($datos);
?>