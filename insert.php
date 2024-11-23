<?php
session_start();
require_once('config/dbConfig.php');
$db_handle = new DBController();
date_default_timezone_set("Asia/Dhaka");
$inserted_at = date("Y-m-d H:i:s");
$today = date("Y-m-d");

if(isset($_POST['register'])){
    $name = $db_handle->checkValue($_POST['name']);
    $email = $db_handle->checkValue($_POST['email']);
    $password = $db_handle->checkValue($_POST['password']);
    $cpassword = $db_handle->checkValue($_POST['cpassword']);

    if($password == $cpassword){
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $registerAdmin = $db_handle->insertQuery("INSERT INTO `admin`(`name`, `email`, `password`, `inserted_at`) VALUES ('$name','$email','$hashedPassword','$inserted_at')");
        if($registerAdmin){
            echo "<script>alert('Registration Successful!');
                        window.location.href='Login';
                    </script>";
        }else {
            echo "<script>alert('Something Went Wrong!');</script>";
        }
    }else {
        echo "<script>alert('Password did not match');</script>";
    }
}
