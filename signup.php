<!DOCTYPE html>
<html lang="en" class="h-100" id="login-page1">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Ceramic Gallery - Signup</title>
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
                            <form action="Insert" method="post">
                                <div class="form-group mb-4">
                                    <input type="text" class="form-control" name="name" placeholder="Full Name" required>
                                </div>
                                <div class="form-group mb-4">
                                    <input type="email" class="form-control" name="email" placeholder="Email" required>
                                </div>
                                <div class="form-group mb-4">
                                    <input type="password" class="form-control" name="password" placeholder="Password" required>
                                </div>
                                <div class="form-group mb-4">
                                    <input type="password" class="form-control" name="cpassword" placeholder="Confirm password" required>
                                </div>
                                <button class="btn btn-lg border-white gradient-11 gradient-11-hover gradient-11-shadow w-100" type="submit" name="register">Register</button>
                                <p class="mt-3">You already have a account? <a href="Login">Login</a></p>
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