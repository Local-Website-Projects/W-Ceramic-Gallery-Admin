<?php
session_start();
require_once('config/dbConfig.php');
$db_handle = new DBController();

if (!isset($_SESSION['admin']))
    echo "<script>window.location.href = 'Login';</script>";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Unimax Gallery - Admin Panel</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon.png">
    <?php include('include/css.php'); ?>

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
    <?php include('include/nav_header.php'); ?>
    <!--**********************************
        Nav header end
    ***********************************-->

    <!--**********************************
        Header start
    ***********************************-->
    <?php include('include/header.php'); ?>
    <!--**********************************
        Header end ti-comment-alt
    ***********************************-->

    <!--**********************************
        Sidebar start
    ***********************************-->
    <?php include('include/sidebar.php'); ?>
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
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Brands</a></li>
                </ol>
            </div>
        </div>
        <!-- row -->

        <div class="container-fluid">
            <!--enter page content here-->
            <div class="row">
                <div class="col-xl-6">
                    <!-- Primary Modal -->
                    <div class="modal fade" id="primaryModal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <form action="Insert" method="post" enctype="multipart/form-data">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalCenterTitle">Add Brands</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group form-control-shadow">
                                            <label>Certificate Image</label>
                                            <input type="file" class="form-control" name="brand_image" accept=".jpg, .jpeg, .png, .svg" required style="padding: 0 !important">
                                        </div>
                                        <div class="form-group form-control-shadow">
                                            <label>Certificate Image</label>
                                            <input type="file" class="form-control" name="brand_image_color" accept=".jpg, .jpeg, .png, .svg" required style="padding: 0 !important">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger rounded-0" data-dismiss="modal">
                                            Close
                                        </button>
                                        <button type="submit" name="add_brand" class="btn btn-primary rounded-0">Save
                                            changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="bootstrap-modal-wrapper">
                        <button class="btn btn-primary btn-lg px-4 rounded-0" data-toggle="modal"
                                data-target="#primaryModal">Add Brands
                        </button>
                    </div>
                </div>
            </div>

            <div class="row justify-content-between mb-3 mt-5">
                <div class="col-lg-auto">
                    <h2 class="page-heading">Brands</h2>
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
                                <?php
                                if (isset($_GET['brand_id'])) {
                                    $fetch_brand = $db_handle->runQuery("SELECT * FROM `brands` WHERE `brand_id`={$_GET['brand_id']}");
                                    ?>
                                    <div class="card-header pb-0">
                                        <h3 class="card-title">Update Brand</h3>
                                    </div>
                                    <div class="card-body">
                                        <form action="Update" method="post" enctype="multipart/form-data">
                                            <input type="hidden" name="brand_id" value="<?php echo $fetch_brand[0]['brand_id'];?>">
                                            <div class="form-group form-control-shadow">
                                                <label>Brand Image</label>
                                                <input type="file" class="form-control" name="brand_image" accept=".jpg, .jpeg, .png, .svg" style="padding: 0 !important">
                                            </div>
                                            <img src="<?php echo $fetch_brand[0]['main_image'];?>" width="200px"><br>
                                            <div class="form-group form-control-shadow">
                                                <label>Hover Image</label>
                                                <input type="file" class="form-control" name="brand_image_color" accept=".jpg, .jpeg, .png, .svg" style="padding: 0 !important">
                                            </div>
                                            <img src="<?php echo $fetch_brand[0]['hover_image'];?>" width="200px"><br>
                                            <button type="submit" name="update_brand" class="btn btn-primary rounded-0 mt-3">Save
                                                changes
                                            </button>
                                        </form>
                                    </div>
                                    <?php
                                } else {
                                    ?>
                                    <table id="example" class="display" style="min-width: 845px">
                                        <thead>
                                        <tr>
                                            <th>Sl No</th>
                                            <th>Brand Image</th>
                                            <th>Hover Image</th>
                                            <th>Status</th>
                                            <th>Edit</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <?php
                                        $fetch_brand = $db_handle->runQuery("SELECT * FROM `brands` ORDER BY `brand_id` DESC;");
                                        $fetch_brand_no = $db_handle->numRows("SELECT * FROM `brands` ORDER BY `brand_id` DESC;");
                                        for ($i = 0; $i < ($fetch_brand_no); $i++) {
                                            ?>
                                            <tr>
                                                <td><?php echo $i + 1; ?></td>
                                                <td><img src="<?php echo $fetch_brand[$i]['main_image'];?>" width="100px;"></td>
                                                <td><img src="<?php echo $fetch_brand[$i]['hover_image'];?>" width="100px;"></td>
                                                <td>
                                                    <?php
                                                    if ($fetch_brand[$i]['status'] == 1) {
                                                        ?>
                                                        <a href="Update?brand_id=<?php echo $fetch_brand[$i]['brand_id']; ?>&status=0">
                                                            <span class="label label-success rounded-0">Active</span>
                                                        </a>
                                                        <?php
                                                    } else {
                                                        ?>
                                                        <a href="Update?brand_id=<?php echo $fetch_brand[$i]['brand_id']; ?>&status=1">
                                                            <span class="label label-danger rounded-0">Deactive</span>
                                                        </a>
                                                        <?php
                                                    }
                                                    ?>
                                                </td>
                                                <td>
                                                    <a href="Brands?brand_id=<?php echo $fetch_brand[$i]['brand_id']; ?>">
                                                        <span class="label label-warning rounded-0">Edit</span>
                                                    </a>
                                                </td>
                                            </tr>
                                            <?php
                                        }
                                        ?>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th>Sl No</th>
                                            <th>Brand Image</th>
                                            <th>Hover Image</th>
                                            <th>Status</th>
                                            <th>Edit</th>
                                        </tr>
                                        </tfoot>
                                    </table>
                                    <?php
                                }
                                ?>
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
    <?php include('include/footer.php'); ?>
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
<?php include('include/js.php'); ?>
</body>
</html>