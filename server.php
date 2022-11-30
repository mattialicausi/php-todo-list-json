<?php
header("Acces-Control-Allow-Origin: *");
header("Acces-Control-Allow-Headers: X-Request-With");

$task = file_get_contents('data.json');
var_dump($task);

header('Content-Type : application/json');
echo json_encode($task);
