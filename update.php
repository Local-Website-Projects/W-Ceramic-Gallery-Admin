<?php
session_start();
require_once('config/dbConfig.php');
$db_handle = new DBController();
date_default_timezone_set("Asia/Dhaka");
$updated_at = date("Y-m-d H:i:s");
$today = date("Y-m-d");

if(isset($_GET['status']) && isset($_GET['id'])){
$status = $_GET['status'];
$id = $_GET['id'];
$update_status = $db_handle->insertQuery("UPDATE `admin` SET`status`='$status',`updated_at`='$updated_at' WHERE `admin_id`='$id'");
if($update_status){
    echo "
    <script>
    alert('Status Updated Successfully!');
    window.location.href='Profile';
</script>
    ";
} else{
    echo "
    <script>
    alert('Something Went Wrong!');
    window.location.href='Profile';
</script>
    ";
}
}