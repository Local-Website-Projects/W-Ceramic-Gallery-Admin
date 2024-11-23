<?php
session_start();
require_once('config/dbConfig.php');
$db_handle = new DBController();
if(isset($_POST['login'])){
    $email = $db_handle->checkValue($_POST['email']);
    $password = $db_handle->checkValue($_POST['password']);

    $fetchAdmin = $db_handle->runQuery("SELECT * FROM admin WHERE email='$email' AND status='1'");
    $fetchAdminNo = $db_handle->numRows("SELECT * FROM admin WHERE email='$email' AND status='1'");
    if($fetchAdmin && $fetchAdminNo == 1) {
        $hashedPassword = $fetchAdmin[0]['password'];
        if(password_verify($password, $hashedPassword)){
            $_SESSION['admin'] = $fetchAdmin[0]['admin_id'];
            echo "
            <script>
            alert('Login Successful');
            window.location.href='Dashboard';
</script>
            ";
        }else{
            echo "<script>
alert('Invalid Password');
</script>";
        }
    } else {
        echo "<script>alert('Invalid Email or Account is not activated yet!');</script>";
    }

}


?>


<!DOCTYPE html>
<html lang="en" class="h-100" id="login-page1">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Ceramic Gallery - Login</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon.png">
    <!-- Custom Stylesheet -->
    <link href="css/style.css" rel="stylesheet">

</head>

<body class="h-100">
<div id="preloader"><div class="spinner"><div class="spinner-a"></div><div class="spinner-b"></div></div></div>
<div class="login-bg h-100">
    <div class="container h-100">
        <div class="row justify-content-center h-100">
            <div class="col-md-4">
                <div class="form-input-content">
                    <div class="card card-login page_security_card">
                        <div class="card-header text-center">
                            <h3 class="mb-0">Ceramic Gallery Admin</h3>
                        </div>
                        <div class="card-body pt-0">
                            <form action="" method="post">
                                <div class="form-group mb-4">
                                    <input type="text" name="email" class="form-control" placeholder="Email Address" required>
                                </div>
                                <div class="form-group mb-4">
                                    <input type="password" name="password" class="form-control" placeholder="Password" required>
                                </div>
                                <button class="btn btn-lg border-white gradient-9 gradient-9-hover gradient-9-shadow w-100" type="submit" name="login">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- #/ container -->
<!-- Common JS -->
<script src="assets/plugins/common/common.min.js"></script>
<!-- Custom script -->
<script src="js/custom.min.js"></script>
</body>

</html>