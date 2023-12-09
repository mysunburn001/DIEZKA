<!-- ========== Left Sidebar Start ========== -->

            <?php $rol = ($this->session->userdata('tipo_user'));

            echo "<script languaje='JavaScript'>
                
                $( document ).ready(function() {
                var roles= '$rol';

                switch(roles) {

                    case 'SU':

                        break;
                        
                    case 'A':

                        
                    
                        break;

                    case 'E':


                    break;
                        
                }
                
            });
                             
            </script>";
            ?>
        
            <div class="left side-menu" id="master" >
                <div class="sidebar-inner slimscrollleft">
                    <!--- Divider -->
                    <div id="sidebar-menu" >
                        <ul id="todo">
                            <li class="text-muted menu-title" style="color:black;">Menu</li>

                            <li class="has_sub" id="home">
                                <a href="<?= base_url('index.php/Dashboard/');?>" class="waves-effect waves-light" style="color:black;"><i class="fa fa-bank "></i><span>Home</span> </a>
                            </li>

                            <li class="has_sub" id="companies">
                                <a href="<?= base_url('index.php/Productos/');?>" class="waves-effect waves-light" style="color:black;" id="clickcompany"><i class="fa fa-industry "></i><span>Productos</span> </a>
                            </li>

                            <!--<li class="has_sub" id="reports">
                                <a href="#" class="waves-effect waves-light" style="color:black;"><i class="glyphicon glyphicon-list-alt"></i><span class=" fa fa-unsorted pull-right"></span><span>Reportes </span></a>

                                 <ul class="list-unstyled">
                                    
                                    <li id="report1">
                                        <a href="<?= base_url('index.php/Reportes/Reporte1');?>" style="color:black;">
                                        <i class="md md-people"></i>
                                        Reporte 1</a>
                                    </li>  

                                </ul>
                            </li>-->

                            <li class="has_sub" id="users">
                                <a href="<?= base_url('index.php/Usuarios/');?>" class="waves-effect waves-light" style="color:black;"><i class="fa fa-user "></i><span>Usuarios</span> </a>
                            </li>

                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <!-- Left Sidebar End -->