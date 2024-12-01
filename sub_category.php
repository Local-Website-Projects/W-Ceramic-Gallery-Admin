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
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Sub Category</a></li>
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
                                <form action="Insert" method="post">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalCenterTitle">Add Sub-Category</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group form-control-shadow">
                                            <label>Sub-Category Name</label>
                                            <input type="text" class="form-control" placeholder="Sub Category Name"
                                                   name="sub_cat" autocomplete="off" required>
                                        </div>
                                        <div class="form-group form-control-shadow">
                                            <label>Select Category</label>
                                            <select style="display: inline-block; width: 100%; padding: 15px; border: none !important;"
                                                    name="cat_id" required>
                                                <option value="none" selected disabled>Select Category</option>
                                                <?php
                                                $fetch_cat = $db_handle->runQuery("select * from category where cat_status=1 order by cat_id desc");
                                                $fetch_cat_no = $db_handle->numRows("select * from category where cat_status=1 order by cat_id desc");
                                                for ($i = 0; $i < $fetch_cat_no; $i++) {
                                                    ?>
                                                    <option value="<?php echo $fetch_cat[$i]['cat_id']; ?>"><?php echo $fetch_cat[$i]['cat_name']; ?></option>
                                                    <?php
                                                }
                                                ?>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger rounded-0" data-dismiss="modal">
                                            Close
                                        </button>
                                        <button type="submit" name="add_cat" class="btn btn-primary rounded-0">Save
                                            changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="bootstrap-modal-wrapper">
                        <button class="btn btn-primary btn-lg px-4 rounded-0" data-toggle="modal"
                                data-target="#primaryModal">Add Sub-Category
                        </button>
                    </div>
                </div>
            </div>

            <div class="row justify-content-between mb-3 mt-5">
                <div class="col-lg-auto">
                    <h2 class="page-heading">Sub-Categories</h2>
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
                                if (isset($_GET['sub_cat_id'])) {
                                    $fetch_sub_cat = $db_handle->runQuery("SELECT * FROM `sub_category`,category WHERE sub_category.sub_cat_id = {$_GET['sub_cat_id']} and sub_category.cat_id = category.cat_id;");
                                    ?>
                                    <div class="card-header pb-0">
                                        <h3 class="card-title">Update Sub-Category</h3>
                                    </div>
                                    <div class="card-body">
                                        <form action="Update" method="post">
                                            <input type="hidden" name="sub_cat" value="<?php echo $fetch_sub_cat[0]['sub_cat_id'];?>">
                                            <div class="form-group">
                                                <input type="text" name="sub_cat_name" required class="form-control" placeholder="Sub Category Name" value="<?php echo $fetch_sub_cat[0]['sub_cat_name'];?>">
                                            </div>
                                            <div class="form-group">
                                                <select style="display: inline-block; width: 100%; padding: 15px; border: none !important;background: #F7FAFC;" name="cat_id" required>
                                                    <option value="<?php echo $fetch_sub_cat[0]['cat_id'];?>" selected><?php echo $fetch_sub_cat[0]['cat_name'];?></option>
                                                    <?php
                                                    $fetch_cat = $db_handle->runQuery("select * from category where cat_status=1 order by cat_id desc");
                                                    $fetch_cat_no = $db_handle->numRows("select * from category where cat_status=1 order by cat_id desc");
                                                    for ($i = 0; $i < $fetch_cat_no; $i++) {
                                                        ?>
                                                        <option value="<?php echo $fetch_cat[$i]['cat_id']; ?>"><?php echo $fetch_cat[$i]['cat_name']; ?></option>
                                                        <?php
                                                    }
                                                    ?>
                                                </select>
                                            </div>
                                            <button type="submit" name="update_subCat" class="btn btn-primary rounded-0">Save
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
                                            <th>Sub Category Name</th>
                                            <th>Category Name</th>
                                            <th>Status</th>
                                            <th>Edit</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <?php
                                        $fetch_subcat = $db_handle->runQuery("select * from category,sub_category where category.cat_id = sub_category.cat_id ORDER BY sub_category.sub_cat_id DESC");
                                        $fetch_subcat_no = $db_handle->numRows("select * from category,sub_category where category.cat_id = sub_category.cat_id ORDER BY sub_category.sub_cat_id DESC");
                                        for ($i = 0; $i < ($fetch_subcat_no); $i++) {
                                            ?>
                                            <tr>
                                                <td><?php echo $i + 1; ?></td>
                                                <td><?php echo $fetch_subcat[$i]['sub_cat_name']; ?></td>
                                                <td><?php echo $fetch_subcat[$i]['cat_name']; ?></td>
                                                <td>
                                                    <?php
                                                    if ($fetch_subcat[$i]['subcat_status'] == 1) {
                                                        ?>
                                                        <a href="Update?sub_cat_id=<?php echo $fetch_subcat[$i]['sub_cat_id']; ?>&status=0">
                                                            <span class="label label-success rounded-0">Active</span>
                                                        </a>
                                                        <?php
                                                    } else {
                                                        ?>
                                                        <a href="Update?sub_cat_id=<?php echo $fetch_subcat[$i]['sub_cat_id']; ?>&status=1">
                                                            <span class="label label-danger rounded-0">Deactive</span>
                                                        </a>
                                                        <?php
                                                    }
                                                    ?>
                                                </td>
                                                <td>
                                                    <a href="Sub-Category?sub_cat_id=<?php echo $fetch_subcat[$i]['sub_cat_id']; ?>">
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
                                            <th>Sub Category Name</th>
                                            <th>Category Name</th>
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