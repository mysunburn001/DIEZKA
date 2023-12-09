<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuarios extends MY_Controller {
        
    public function __construct() {
        parent::__construct();
    }

    public function index(){
        $data['tabTitle'] = "Diezka - Usuarios";
        $data['pagecontent'] = "usuarios/usuarios";
        $data['usuarios'] = $this->Query_Model->ListaUsuarios();
        
        $this->loadpageintotemplate($data);
       
   }

   function GuardaErrorUC(){

        $CodigoError = $this->input->post("CodigoError");
        $DescripcionError = $this->input->post("DescripcionError");
        $Origen = $this->input->post("Origen");
        $Usuario = $this->session->userdata('user');
        date_default_timezone_set('America/Mexico_City');
        $FechaHoraActual = date('Y-m-d H:i:s');
    
        $DatosError = array(
            'codigo' => $CodigoError, 
            'descripcion' => $DescripcionError, 
            'origen' => $Origen, 
            'usuario' => $Usuario,
            'fecha_error' => $FechaHoraActual,
        );
    
        $this->Query_Model->InsertaError($DatosError);
   }

   public function RevisaUsuarioExistenteC(){

    $NombreUsuario = $this->input->post("NombreUsuario");
    $Resultado = $this->Query_Model->SeleccionaPorUsuario($NombreUsuario);
    echo json_encode($Resultado);
    
   }

   public function GuardaUsuarioC(){

        $NombreUsuario = $this->input->post("NombreUsuario");
        $ApPaternoUsuario = $this->input->post("ApPaternoUsuario");
        $ApMaternoUsuario = $this->input->post("ApMaternoUsuario");
        $TelefonoUsuario = $this->input->post("TelefonoUsuario");
        $CorreoUsuario = $this->input->post("CorreoUsuario");
        $NUsuario = $this->input->post("NUsuario");
        $PasswordUsuario = $this->input->post("PasswordUsuario");
        $RolUsuario = $this->input->post("RolUsuario");
        $TipoUsuario;

        if($RolUsuario=="A"){

            $TipoUsuario = "Administrador";
        }else{
            $TipoUsuario = "Empleado";
        }

        $DatosUsuario = array(
            'nombre' => $NombreUsuario, 
            'apaterno' => $ApPaternoUsuario, 
            'amaterno' => $ApMaternoUsuario, 
            'telefono' => $TelefonoUsuario, 
            'email' => $CorreoUsuario, 
            'username' => $NUsuario, 
            'password' => $PasswordUsuario, 
            'rol' => $RolUsuario, 
            'ocupacion' => $TipoUsuario, 
            'estado' => '1'
        );

        $this->Query_Model->InsertaUsuario($DatosUsuario);

   }


   public function ConsultaDatosUsuarioC(){

        $IDUsuario = $this->input->post("IDUsuario");
        $Resultado = $this->Query_Model->SeleccionaUsuarioPorID($IDUsuario);
        echo json_encode($Resultado);
   }

   public function EditaUsuarioC(){

        $IDUsuario = $this->input->post("IDUsuario");
        $NombreUsuario = $this->input->post("NombreUsuario");
        $ApPaternoUsuario = $this->input->post("ApPaternoUsuario");
        $ApMaternoUsuario = $this->input->post("ApMaternoUsuario");
        $TelefonoUsuario = $this->input->post("TelefonoUsuario");
        $CorreoUsuario = $this->input->post("CorreoUsuario");
        $NUsuario = $this->input->post("NUsuario");
        $PasswordUsuario = $this->input->post("PasswordUsuario");
        $RolUsuario = $this->input->post("RolUsuario");
        $EstadoUsuario = $this->input->post("EstadoUsuario");
        $TipoUsuario;

        if($RolUsuario=="A"){

            $TipoUsuario = "Administrador";
        }else{
            $TipoUsuario = "Empleado";
        }

        $DatosUsuario = array(
            'nombre' => $NombreUsuario, 
            'apaterno' => $ApPaternoUsuario, 
            'amaterno' => $ApMaternoUsuario, 
            'telefono' => $TelefonoUsuario, 
            'email' => $CorreoUsuario, 
            'username' => $NUsuario, 
            'password' => $PasswordUsuario, 
            'rol' => $RolUsuario, 
            'ocupacion' => $TipoUsuario, 
            'estado' => $EstadoUsuario
        );

        $this->Query_Model->ActualizaUsuario($DatosUsuario,$IDUsuario);

   }

   /*public function DeleteUserPHP(){

        $UserID = $this->input->post("UserID");
        $Result = $this->Query_Model->DeleteUserDB($UserID);
   }*/

}
