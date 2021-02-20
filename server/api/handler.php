<?php

$db = new PDO('mysql:host=localhost;dbname=Restaurant;charset=utf8', 'apiUser', 'apiUser', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);

$task = NULL;

if(array_key_exists("task", $_GET)){
    $task = $_GET['task'];
}

switch ($task) {
    case 'register':
        registerUser();
        break;
    case 'login':
        loginUser();
        break;
    default:
        return;
}

function loginUser()
{
    global $db;

    if (!empty($_POST) && isset($_POST['mail']) && isset($_POST['psw'])) {
        $mail = $_POST['mail'];
        $pass = $_POST['psw'];

        $query = $db->prepare("SELECT * From users WHERE mail=:mail, password=:psw");
        $query->execute(["mail" => $mail, "psw" => $pass]);
        $login = $query->fetchAll();

        echo json_encode($login);
    }else{
        echo json_encodeson_encode([
            "status" => "error",
            "message" => "Message not exist"
        ]);
    }
}

function postMessage()
{
    global $db;

    if (!empty($_POST) && isset($_POST['mail']) && isset($_POST['psw'])) {
        $mail = $_POST['mail'];
        $pass = $_POST['psw'];

        $query = $db->prepare("INSERT INTO users SET mail=:mail, password=:psw, created_at = NOW(), party_room_id = :party_room_id, color_id = :color_id");
        $query->execute(["mail" => $mail, "psw" => $pass]);

        echo json_encode([
            "status" => "success",
            "message" => "Message send"
        ]);

    }else{
        echo json_encodeson_encode([
            "status" => "error",
            "message" => "Message not exist"
        ]);
    }
}

?>