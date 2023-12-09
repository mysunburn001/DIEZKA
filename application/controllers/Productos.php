<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Productos extends MY_Controller {
        
    public function __construct() {
        parent::__construct();
    }

    public function index(){
        $data['tabTitle'] = "DIEZKA - Productos";
        $data['pagecontent'] = "productos/productos";
        $data['productos'] = $this->Query_Model->ListaProductos();
        
        $this->loadpageintotemplate($data);
       
   }

   public function RevisaClaveExistenteC(){

    $ClaveProducto = $this->input->post("ClaveProducto");
    $Resultado = $this->Query_Model->SeleccionaPorClave($ClaveProducto);
    echo json_encode($Resultado);

   }

   /*public function SaveCompanyPHP(){

        $CompanyName = $this->input->post("CompanyName");
        $Category = $this->input->post("Category");
        $CompanyRegDate = $this->input->post("CompanyRegDate");

        $CompanyData = array(
            'name' => $CompanyName, 
            'category' => $Category, 
            'registration_date' => $CompanyRegDate, 
            'status' => '1'
        );

        $this->Query_Model->InsertCompanyDB($CompanyData);

   }

   public function GetCompanyDataPHP(){

        $CompanyID = $this->input->post("CompanyID");
        $Result = $this->Query_Model->SelectByCompanyIDDB($CompanyID);
        echo json_encode($Result);
   }

   public function UpdateCompanyPHP(){

        $Id = $this->input->post("Id");
        $CompanyName = $this->input->post("CompanyName");
        $Category = $this->input->post("Category");
        $CompanyRegDate = $this->input->post("CompanyRegDate");
        $Status = $this->input->post("Status");

        $CompanyData = array(
            'name' => $CompanyName, 
            'category' => $Category, 
            'registration_date' => $CompanyRegDate, 
            'status' => $Status
        );

        $this->Query_Model->UpdateCompanyDB($CompanyData,$Id);

   }

   public function DeleteCompanyPHP(){

        $CompanyID = $this->input->post("CompanyID");
        $Result = $this->Query_Model->DeleteCompanyPHP($CompanyID);
   }*/

}
