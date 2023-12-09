<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reportes extends MY_Controller {
        
    public function __construct() {
        parent::__construct();
    }

    public function Reporte1(){
        $data['tabTitle'] = "Diezka - Reporte 1";
        $data['pagecontent'] = "reportes/reporte1";
        
        $this->loadpageintotemplate($data);
       
   }

   /*public function SelectCompaniesFromDate(){


        $FromDate = $this->input->post("FromDate");
        $ToDate = $this->input->post("ToDate");
        $Result = $this->Query_Model->SelectReport1FromDate($FromDate,$ToDate);
        echo json_encode($Result);
   }*/

}
