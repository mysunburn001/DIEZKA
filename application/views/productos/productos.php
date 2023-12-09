    <!-- Content Wrapper. Contains page content -->
     
     <?php
     /* Dependencias requeridas para el funcionamiento de la DataTable */
    /* ==============================================================
            <---  CSS TEMPLATE  --->
            ============================================================== */
    
            echo link_tag('assets/darktemplate/plugins/bootstrap-sweetalert/sweet-alert.css');
            echo link_tag('assets/darktemplate/plugins/bootstrap-datepicker/css/bootstrap-datepicker.min.css');
            
    /* ==============================================================
            <---  JS TEMPLATE  --->
            ============================================================== */

            echo script_tag("assets/darktemplate/plugins/bootstrap-sweetalert/sweet-alert.js");
            echo script_tag("assets/darktemplate/pages/jquery.sweet-alert.init.js");
            echo script_tag("assets/darktemplate/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js");
          
    /* ==============================================================
            <---  JS MYAPP  --->
            ============================================================== */
             echo script_tag("assets/myapp/js/MY_Functions.js");
            ?>


<html>
    <head>
        <meta charset="utf-8">
        
    </head>

    <script>
        var resizefunc = [];

        $(document).ready(function() {

            $("#HiddenStatus").hide();
            $("#ButtonEditCompany").hide();

            $('#CompanyRegDate').datepicker({
            firstDay: 1,
            autoclose: true,
            todayHighlight: true,
            format: 'yyyy/mm/dd'
          });

        });


    </script>



    <body class="fixed-left">

        <!-- Begin page -->
        <div id="wrapper">

            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->                      
            <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container">

                        <!-- Page-Title -->
                        <div class="row">
                            <div class="col-sm-12">
                                <h4 class="page-title"><?= $tabTitle; ?></h4>
                               
                            </div>
                        </div>

                        <br>

                        <!-- Content -->
                         <div class="col-lg-12">
                          <div class="panel panel-border panel-info">
                              <div class="panel-heading">
                                  <h3 class="panel-title">Companies</h3>
                              </div>
                              <div class="table-responsive">
                                <div class="panel-body">

                                  <div class="card-box">

                                      <div class="box-body">

                                        <!-- Panel beggins-->

                                        <div class="panel panel-border panel-info  col-lg-4">
                                          <div class="panel-heading">
                                            <h3 class="panel-title">Registration</h3>
                                          </div>
                                          <div class="panel-body">

                                            <div align="left">

                                            <!-- form beggins -->

                                            <div class="form-group">
                                                <label for="CompanyName">Name</label>
                                                <br>
                                                <input type="text" id="HiddenID" hidden>
                                                <input type="text" name="CompanyName" placeholder="Name" id="CompanyName" class="form-control" onblur="CheckExistingCompany()">
                                            </div>

                                            <div class="form-group">

                                                <label for="Category">Category</label>
                                                <br>
                                                <select id="Category" name="Category" class="form-control">
                                                  <option value="" >Choose Category</option>
                                                    
                                                    <option value="Textile">Textile</option>
                                                    <option value="Automotive"> Automotive</option>
                                                    <option value="Food">Food</option>
                                                    <option value="Chemical"> Chemical</option>
                                                    <option value="Technology"> Technology</option>
                                                  

                                                  </select>
                                            </div>

                                            <div class="form-group">
                                                <label for="CompanyRegDate">Registration Date</label>
                                                <br>
                                                <input type="text" class="form-control" id="CompanyRegDate" placeholder="yyyy/mm/dd " id="datepicker-autoclose" readonly="readonly">
                                              <span class="input-group-addon bg-custom b-0 text-white"><i class="icon-calender"></i></span>
                                            </div>

                                         <div class="form-group" id="HiddenStatus">
                                              <label for="CompanyStatus">Status</label>
                                              <select id="CompanyStatus" name="CompanyStatus" class="form-control">
                                              <option value="" >Choose Status</option>
                                                
                                                <option value="1"> Active </option>
                                                <option value="0"> Inactive </option>
                                              

                                              </select>
                                            </div>

                                            <div class="form-group">
                                                <div id="PreloaderCompany" hidden="true" align="center">
                                                    
                                                    <img src="<?php echo base_url('assets/myapp/img/preloader.gif'); ?>" alt="validando...">
                                                </div>
                                            </div>

                                            <button class="btn btn-primary btn-block text-uppercase waves-effect waves-light" onclick="VerifyCompanyContent()" id="ButtonSaveCompany">Save</button> 

                                            <button class="btn btn-primary btn-block text-uppercase waves-effect waves-light" onclick="EditCompany()" id="ButtonEditCompany">Edit</button> 
                                            
                                            <!-- form ends -->         
                                        </div>
                                    </div>
                                </div>
                                <!-- Panel ends-->

                                <!-- Panel beggins-->

                                <div class="col-lg-8">
                                  <div class="panel panel-border panel-info">
                                      <div class="panel-heading">
                                          <h3 class="panel-title">Company list</h3>
                                      </div>
                                      <div class="table-responsive">
                                        <div class="panel-body">
                                          <table id="datatable" class="table table-striped table-bordered table-responsive">
                                            <thead>
                                              <tr>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                             
                                              </tr>
                                            </thead>
                                            <tbody>                              
                                              
                                              <?php

                                              $values = count($companies);
                                              for ($i=0; $i < $values ; $i++) { 
                                                $res = $companies[$i];
                                                $id = $res -> id_company;
                                                $name = $res -> name;
                                                $category = $res -> category;
                                                $date = $res -> registration_date;
                                                $status = $res -> status;

                                                echo "
                                                <tr>
                                                  <td>$name</td>
                                                  <td>$category</td>
                                                  <td>$date</td>";

                                                  if ($status == 1) {
                                                    echo "<td><span class='label label-success'>Active</span></td>";
                                                  }else{
                                                    echo "<td><span class='label label-danger'>Inactive</span></td>";
                                                  }

                                                  echo "<td>";
                                                  echo "<a href='#' id='Edit' onclick='GetCompanyData($id)'><i class='fa fa-pencil'></i> </a>
                                                  </td>";

                                                  echo "<td>";
                                                  echo "<a href='#' id='Delete' onclick='DeleteCompany($id)'><i class='md md-close'></i> </a>
                                                  </td>";

                                              echo "</tr>";
                                              }
                                            ?>  

                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                              </div>

                              <!-- Panel ends-->


                                        

                              </div>
                        </div>
                    
                    </div>
                  </div>
                </div>
            </div>

            </div> <!-- container -->                               
                </div> <!-- content -->

                <footer class="footer">
                     <?= date('Y')?> &copy; 
                </footer>

            </div>
            <!-- ============================================================== -->
            <!-- End Right content here -->
            <!-- ============================================================== -->



        </div>
        <!-- END wrapper -->

    </body>
</html>