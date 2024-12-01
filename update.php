<?php
session_start();
require_once('config/dbConfig.php');
$db_handle = new DBController();
date_default_timezone_set("Asia/Dhaka");
$updated_at = date("Y-m-d H:i:s");
$today = date("Y-m-d");

if (isset($_GET['status']) && isset($_GET['id'])) {
    $status = $_GET['status'];
    $id = $_GET['id'];
    $update_status = $db_handle->insertQuery("UPDATE `admin` SET`status`='$status',`updated_at`='$updated_at' WHERE `admin_id`='$id'");
    if ($update_status) {
        echo "
    <script>
    document.cookie='alert=4;';
    window.location.href='Profile';
</script>
    ";
    } else {
        echo "
    <script>
    document.cookie='alert=5;';
    window.location.href='Profile';
</script>
    ";
    }
}


if(isset($_POST['update_pass'])){
    $old_pass = $db_handle->checkValue($_POST['old_pass']);
    $new_pass = $db_handle->checkValue($_POST['new_pass']);
    $confirm_new_pass = $db_handle->checkValue($_POST['confirm_new_pass']);
    $id = $_SESSION['admin'];

    $fetch_pass = $db_handle->runQuery("SELECT password FROM `admin` WHERE `admin_id`='$id'");
    $pass = $fetch_pass[0]['password'];

    if (password_verify($old_pass, $pass)){
        if ($new_pass == $confirm_new_pass){
            $hashed_password = password_hash($new_pass, PASSWORD_DEFAULT);
            $update_pass = $db_handle->insertQuery("UPDATE `admin` SET `password`='$hashed_password' WHERE `admin_id`='$id'");
            if($update_pass){
                echo "
                <script>
                document.cookie='alert=4;';
    window.location.href='Profile';
</script>
                ";
            }
        }
    } else{
        echo "
        <script>
        document.cookie='alert=5;';
    window.location.href='Profile';
</script>
        ";
    }
}



if (isset($_GET['status']) && isset($_GET['sub_cat_id'])) {
    $sub_cat_id = $db_handle->checkValue($_GET['sub_cat_id']);
    $status = $db_handle->checkValue($_GET['status']);

    $update_subcat = $db_handle->insertQuery("UPDATE `sub_category` SET`subcat_status`='$status',`updated_at`='$updated_at' WHERE `sub_cat_id` = '$sub_cat_id'");

    if($update_subcat){
        echo "
                <script>
                document.cookie='alert=4;';
    window.location.href='Sub-Category';
</script>
                ";
    } else {
        echo "
                <script>
                document.cookie='alert=5;';
    window.location.href='Sub-Category';
</script>
                ";
    }
}


if(isset($_POST['update_subCat'])){
    $sub_cat_id = $db_handle->checkValue($_POST['sub_cat']);
    $sub_cat_name = $db_handle->checkValue($_POST['sub_cat_name']);
    $cat_id = $db_handle->checkValue($_POST['cat_id']);

    $update_sub_cat = $db_handle->insertQuery("UPDATE `sub_category` SET `sub_cat_name`='$sub_cat_name',`cat_id`='$cat_id',`updated_at`='$updated_at' WHERE `sub_cat_id`='$sub_cat_id'");
    if($update_sub_cat){
        echo "
                <script>
                document.cookie='alert=4;';
    window.location.href='Sub-Category';
</script>
                ";
    } else {
        echo "
                <script>
                document.cookie='alert=5;';
    window.location.href='Sub-Category';
</script>
                ";
    }
}