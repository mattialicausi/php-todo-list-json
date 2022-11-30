<?php
header("Acces-Control-Allow-Origin: *");
header("Acces-Control-Allow-Headers: X-Request-With");

$file_url = 'data.json';

$file_text = file_get_contents($file_url);
$todo_list = json_decode($file_text);

if(isset($_POST['newTodoText'])){

    $newToDo = [
        'text' => $_POST['newTodoText'],
        'done' => false,
    ];

    array_push($todo_list, $newToDo);
    file_put_contents($file_url, json_encode($todo_list));

} else {

    header('Content-Type: application/json');
    echo json_encode($todo_list);

}



