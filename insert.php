<?php
session_start();
require_once('config/dbConfig.php');
$db_handle = new DBController();
date_default_timezone_set("Asia/Dhaka");
$inserted_at = date("Y-m-d H:i:s");
$today = date("Y-m-d");

if (isset($_POST['register'])) {
    $name = $db_handle->checkValue($_POST['name']);
    $email = $db_handle->checkValue($_POST['email']);
    $password = $db_handle->checkValue($_POST['password']);
    $cpassword = $db_handle->checkValue($_POST['cpassword']);

    if ($password == $cpassword) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $registerAdmin = $db_handle->insertQuery("INSERT INTO `admin`(`name`, `email`, `password`, `inserted_at`) VALUES ('$name','$email','$hashedPassword','$inserted_at')");
        if ($registerAdmin) {
            echo "<script>alert('Registration Successful!');
                        window.location.href='Login';
                    </script>";
        } else {
            echo "<script>alert('Something Went Wrong!');</script>";
        }
    } else {
        echo "<script>alert('Password did not match');</script>";
    }
}

if (isset($_POST['add_cat'])) {
    $sub_cat = $db_handle->checkValue($_POST['sub_cat']);
    $cat_id = $db_handle->checkValue($_POST['cat_id']);

    $insert_subcat = $db_handle->insertQuery("INSERT INTO `sub_category`(`sub_cat_name`, `cat_id`, `inserted_at`) VALUES ('$sub_cat','$cat_id','$inserted_at')");
    if ($insert_subcat) {
        echo "<script>document.cookie='alert=4;';
                        window.location.href='Sub-Category';
                    </script>";
    } else {
        echo "<script>document.cookie='alert=5;';
                        window.location.href='Sub-Category';
                    </script>";
    }
}

if (isset($_POST['add_certificate'])) {
    $certificate_title = $db_handle->checkValue($_POST['certificate_title']);
    $image = '';
    if (!empty($_FILES['certificate_image']['name'])) {
        $RandomAccountNumber = mt_rand(1, 99999);
        $file_name = $RandomAccountNumber . "_" . $_FILES['certificate_image']['name'];
        $file_size = $_FILES['certificate_image']['size'];
        $file_tmp  = $_FILES['certificate_image']['tmp_name'];

        $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        if ($file_type != "jpg" && $file_type != "png" && $file_type != "svg") {
            $attach_files = '';
            echo "<script>
                document.cookie = 'alert = 5;';
                window.location.href='Certificates';
                </script>";

        }
        move_uploaded_file($file_tmp, "assets/certificates/" . $file_name);
        $image = "assets/certificates/" . $file_name;
    }

    $insert_certificate = $db_handle->insertQuery("INSERT INTO `certificates`(`certificate_name`, `certificate_file`, `inserted_at`) VALUES ('$certificate_title','$image','$inserted_at')");
    if($insert_certificate){
        echo "<script>document.cookie='alert=4;';
                        window.location.href='Certificates';
                    </script>";
    } else{
        echo "<script>
                document.cookie = 'alert = 5;';
                window.location.href='Certificates';
                </script>";
    }
}


if(isset($_POST['add_brand'])){
    $image = '';
    $color_image = '';
    if (!empty($_FILES['brand_image']['name'])) {
        $RandomAccountNumber = mt_rand(1, 99999);
        $file_name = $RandomAccountNumber . "_" . $_FILES['brand_image']['name'];
        $file_size = $_FILES['brand_image']['size'];
        $file_tmp  = $_FILES['brand_image']['tmp_name'];

        $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        if ($file_type != "jpg" && $file_type != "png" && $file_type != "svg") {
            $attach_files = '';
            echo "<script>
                document.cookie = 'alert = 5;';
                window.location.href='Brands';
                </script>";

        }
        move_uploaded_file($file_tmp, "assets/brand/" . $file_name);
        $image = "assets/brand/" . $file_name;
    }

    if (!empty($_FILES['brand_image_color']['name'])) {
        $RandomAccountNumber = mt_rand(1, 99999);
        $file_name = $RandomAccountNumber . "_" . $_FILES['brand_image_color']['name'];
        $file_size = $_FILES['brand_image_color']['size'];
        $file_tmp  = $_FILES['brand_image_color']['tmp_name'];

        $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        if ($file_type != "jpg" && $file_type != "png" && $file_type != "svg") {
            $attach_files = '';
            echo "<script>
                document.cookie = 'alert = 5;';
                window.location.href='Brands';
                </script>";
        }
        move_uploaded_file($file_tmp, "assets/brand/" . $file_name);
        $color_image = "assets/brand/" . $file_name;
    }

    $insert_brand = $db_handle->insertQuery("INSERT INTO `brands`( `main_image`, `hover_image`, `inserted_at`) VALUES ('$image','$color_image','$inserted_at')");
    if($insert_brand){
        echo "<script>document.cookie='alert=4;';
                        window.location.href='Brands';
                    </script>";
    } else {
        echo "<script>document.cookie='alert=5;';
                        window.location.href='Brands';
                    </script>";
    }
}


if (isset($_POST['add_design_cat'])) {
    $cat_name = $db_handle->checkValue($_POST['cat_name']);
    $image = '';
    if (!empty($_FILES['cat_image']['name'])) {
        $RandomAccountNumber = mt_rand(1, 99999);
        $file_name = $RandomAccountNumber . "_" . $_FILES['cat_image']['name'];
        $file_size = $_FILES['cat_image']['size'];
        $file_tmp  = $_FILES['cat_image']['tmp_name'];

        $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        if ($file_type != "jpg" && $file_type != "png" && $file_type != "svg") {
            $attach_files = '';
            echo "<script>
                document.cookie = 'alert = 5;';
                window.location.href='Category';
                </script>";

        }
        move_uploaded_file($file_tmp, "assets/category/" . $file_name);
        $image = "assets/category/" . $file_name;
    }

    $insert_certificate = $db_handle->insertQuery("INSERT INTO `design_category`(`category_name`, `cat_image`, `inserted_at`) VALUES ('$cat_name','$image','$inserted_at')");
    if($insert_certificate){
        echo "<script>document.cookie='alert=4;';
                        window.location.href='Category';
                    </script>";
    } else{
        echo "<script>
                document.cookie = 'alert = 5;';
                window.location.href='Category';
                </script>";
    }
}


if (isset($_POST['add_design_idea'])) {
    $cat_id = $db_handle->checkValue($_POST['cat_id']);
    $image = '';
    if (!empty($_FILES['design_image']['name'])) {
        $RandomAccountNumber = mt_rand(1, 99999);
        $file_name = $RandomAccountNumber . "_" . $_FILES['design_image']['name'];
        $file_size = $_FILES['design_image']['size'];
        $file_tmp  = $_FILES['design_image']['tmp_name'];

        $file_type = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        if ($file_type != "jpg" && $file_type != "png" && $file_type != "svg") {
            $attach_files = '';
            echo "<script>
                document.cookie = 'alert = 5;';
                window.location.href='Design-Idea';
                </script>";

        }
        move_uploaded_file($file_tmp, "assets/design_idea/" . $file_name);
        $image = "assets/design_idea/" . $file_name;
    }

    $insert_certificate = $db_handle->insertQuery("INSERT INTO `design_idea`(`cat_id`, `design_file`, `inserted_at`) VALUES ('$cat_id','$image','$inserted_at')");
    if($insert_certificate){
        echo "<script>document.cookie='alert=4;';
                        window.location.href='Design-Idea';
                    </script>";
    } else{
        echo "<script>
                document.cookie = 'alert = 5;';
                window.location.href='Design-Idea';
                </script>";
    }
}