<?php
session_start();
require_once('config/dbConfig.php');
$db_handle = new DBController();

if(!isset($_SESSION['admin']))
    echo "<script>window.location.href = 'Login';</script>";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Unimax Gallery - Admin Profile</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon.png">
    <?php include ('include/css.php');?>

</head>

<body>

<!--*******************
    Preloader start
********************-->
<div id="preloader">
    <div class="spinner">
        <div class="spinner-a"></div>
        <div class="spinner-b"></div>
    </div>
</div>
<!--*******************
    Preloader end
********************-->


<!--**********************************
    Main wrapper start
***********************************-->
<div id="main-wrapper">

    <!--**********************************
        Nav header start
    ***********************************-->
    <?php include ('include/nav_header.php');?>
    <!--**********************************
        Nav header end
    ***********************************-->

    <!--**********************************
        Header start
    ***********************************-->
    <?php include ('include/header.php');?>
    <!--**********************************
        Header end ti-comment-alt
    ***********************************-->

    <!--**********************************
        Sidebar start
    ***********************************-->
    <?php include ('include/sidebar.php');?>
    <!--**********************************
        Sidebar end
    ***********************************-->

    <!--**********************************
        Content body start
    ***********************************-->
    <div class="content-body">

        <div class="row page-titles mx-0">
            <div class="col-sm p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Ceramic Gallery</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Profile Page</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->

        <div class="container-fluid">
            <div class="row justify-content-between mb-3">
                <div class="col-lg-auto">
                    <h2 class="page-heading">Change Password</h2>
                </div>
            </div>
            <div class="col-xl-6 col-xxl-12">
                <div class="card">
                    <div class="card-header pb-0">
                        <h3 class="card-title">Change your password</h3>
                    </div>
                    <div class="card-body">
                        <form action="Update" method="post">
                            <div class="form-group">
                                <input type="password" id="old_pass" name="old_pass" class="form-control" placeholder="Old Password" required>
                            </div>
                            <div class="form-group">
                                <input type="password" id="new_pass" name="new_pass" class="form-control" placeholder="New Password" required>
                            </div>
                            <div class="form-group">
                                <input type="password" id="confirm_new_pass" name="confirm_new_pass" class="form-control" placeholder="Confirm New Password" required>
                                <small id="error-message" style="color: red; display: none;">Passwords do not match</small>
                            </div>
                            <button class="btn btn-primary btn-lg floating-rounded waves-effect" type="submit" name="update_pass" id="submit-btn" disabled>
                                Update Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <!--enter page content here-->
            <div class="row justify-content-between mb-3 mt-5">
                <div class="col-lg-auto">
                    <h2 class="page-heading">Admin List</h2>
                </div>
                <div class="col-lg-auto text-lg-right">
                    <p class="mb-0"></p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table id="example" class="display" style="min-width: 845px">
                                    <thead>
                                    <tr>
                                        <th>Sl No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Signup Date</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <?php
                                    $fetch_admin = $db_handle->runQuery("select * from admin order by admin_id desc");
                                    $fetch_admin_no = $db_handle->numRows("select * from admin order by admin_id desc");
                                    for($i=0; $i<($fetch_admin_no); $i++){
                                        ?>
                                        <tr>
                                            <td><?php echo $i+1;?></td>
                                            <td><?php echo $fetch_admin[$i]['name'];?></td>
                                            <td><?php echo $fetch_admin[$i]['email'];?></td>
                                            <td><?php echo date("d M, Y", strtotime($fetch_admin[$i]['inserted_at']));?></td>
                                            <td>
                                                <?php
                                                if($fetch_admin[$i]['status'] == 1){
                                                    ?>
                                                    <a href="Update?id=<?php echo $fetch_admin[$i]['admin_id'];?>&status=0">
                                                        <span class="label label-success rounded-0">Active</span>
                                                    </a>
                                                    <?php
                                                } else {
                                                    ?>
                                                    <a href="Update?id=<?php echo $fetch_admin[$i]['admin_id'];?>&status=1">
                                                        <span class="label label-danger rounded-0">Deactive</span>
                                                    </a>
                                                    <?php
                                                }
                                                ?>

                                            </td>
                                        </tr>
                                        <?php
                                    }
                                    ?>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th>Sl No</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Signup Date</th>
                                        <th>Status</th>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!--**********************************
        Content body end
    ***********************************-->


    <!--**********************************
        Footer start
    ***********************************-->
    <?php include ('include/footer.php');?>
    <!--**********************************
        Footer end
    ***********************************-->

</div>
<!--**********************************
    Main wrapper end
***********************************-->

<!--**********************************
    Scripts
***********************************-->
<?php include ('include/js.php');?>

<script>
    // Getting references to input fields and the button
    const newPassword = document.getElementById('new_pass');
    const confirmNewPassword = document.getElementById('confirm_new_pass');
    const submitButton = document.getElementById('submit-btn');
    const errorMessage = document.getElementById('error-message');

    // Function to check if passwords match
    function checkPasswords() {
        if (newPassword.value === confirmNewPassword.value && newPassword.value !== '') {
            submitButton.disabled = false; // Enable the button
            errorMessage.style.display = 'none'; // Hide the error message
        } else {
            submitButton.disabled = true; // Disable the button
            errorMessage.style.display = 'block'; // Show the error message
        }
    }

    // Add event listeners to input fields
    newPassword.addEventListener('input', checkPasswords);
    confirmNewPassword.addEventListener('input', checkPasswords);
</script>
</body>
</html>