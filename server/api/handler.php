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
        echo "ok";
        return;
}

function loginUser()
{
    global $db;

    if (!empty($_POST) && isset($_POST['mail']) && isset($_POST['psw'])) {
        $mail = $_POST['mail'];
        $pass = md5($_POST['psw']);

        $query = $db->prepare("SELECT * From users WHERE mail=:mail");
        $query->execute(["mail" => $mail]);
        $login = $query->fetchAll();

        foreach  ($login as $row) {
            if ($row['password'] == $pass) {
                echo "Match";
                return 0;
            }
        }

        echo "KO";
    } else
        echo "KO";
}

function registerUser()
{
    global $db;

    if (!empty($_POST) && isset($_POST['mail']) && isset($_POST['psw'])) {
        $mail = $_POST['mail'];
        $pass = md5($_POST['psw']);

        $query = $db->prepare("SELECT * From users WHERE mail=:mail");
        $query->execute(["mail" => $mail]);
        $login = $query->fetchAll();

        if (count($login) <= 0) {
            $query = $db->prepare("INSERT INTO users SET mail=:mail, password=:psw");
            $query->execute(["mail" => $mail, "psw" => $pass]);

            echo json_encode([
                "status" => "success",
                "message" => "User created"
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Wrong informations"
            ]);
        }
    }else{
        echo json_encode([
            "status" => "error",
            "message" => "Wrong informations"
        ]);
    }
}

?>