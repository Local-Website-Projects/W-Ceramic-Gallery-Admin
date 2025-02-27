<?php
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");


require_once('../config/dbConfig.php');
$db_handle = new DBController();
date_default_timezone_set("Asia/Dhaka");
$inserted_at = date("Y-m-d H:i:s");
$today = date("Y-m-d");

$name = $db_handle->checkValue($_POST['name']);
$email = $db_handle->checkValue($_POST['email']);
$phone = $db_handle->checkValue($_POST['phone']);
$projectScope = $db_handle->checkValue($_POST['projectScope']);
$message = $db_handle->checkValue($_POST['message']);


$insert_form = $db_handle->insertQuery("INSERT INTO `contact_data`(`name`, `email`, `phone`, `projectScope`, `message`, `inserted_at`) VALUES ('$name','$email','$phone','$projectScope','$message','$inserted_at')");
if($insert_form){
    echo json_encode(["success" => true, "message" => "Form submitted successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Error inserting form data"]);
}

