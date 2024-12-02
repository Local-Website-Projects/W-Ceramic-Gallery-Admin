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

if(isset($_GET['certificate_id']) && isset($_GET['status'])){
    $update_certificate_status = $db_handle->insertQuery("UPDATE `certificates` SET `status`='{$_GET['status']}' WHERE `certificate_id`={$_GET['certificate_id']}");

    if($update_certificate_status){
        echo "
                <script>
                document.cookie='alert=4;';
    window.location.href='Certificates';
</script>
                ";
    } else {
        echo "
                <script>
                document.cookie='alert=5;';
    window.location.href='Certificates';
</script>
                ";
    }
}


if(isset($_POST['update_certificate'])){
    $certificate_id = $db_handle->checkValue($_POST['certificate_id']);
    $certificate_title = $db_handle->checkValue($_POST['certificate_title']);
    $image = '';
    $query = '';
    if (!empty($_FILES['certificate_image']['name'])) {
        $RandomAccountNumber = mt_rand(1, 99999);
        $file_name = $RandomAccountNumber . "_" . $_FILES['certificate_image']['name'];
        $file_size = $_FILES['certificate_image']['size'];
        $file_tmp = $_FILES['certificate_image']['tmp_name'];

        $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        if ($file_type != "jpg" && $file_type != "png" && $file_type != "jpeg" && $file_type != "svg") {
            $image = '';
        } else {
            $data = $db_handle->runQuery("select * FROM `certificates` WHERE certificate_id='{$certificate_id}'");
            unlink($data[0]['certificate_file']);
            move_uploaded_file($file_tmp, "assets/certificates/" . $file_name);
            $image = "assets/certificates/" . $file_name;
            $query .= ",`certificate_file`='" . $image . "'";
        }
    }

    $update_certificate = $db_handle->insertQuery("update certificates set certificate_name='$certificate_title',`updated_at` = '$updated_at'" . $query . " where certificate_id={$certificate_id}");

    if($update_certificate){
        echo "
                <script>
                document.cookie='alert=4;';
                window.location.href='Certificates';
</script>
                ";
    } else {
        echo "
                <script>
                document.cookie='alert=5;';
    window.location.href='Certificates';
</script>
                ";
    }
}