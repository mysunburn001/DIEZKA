<?php

class Query_Model extends CI_Model{

/* =============================================================================================================================================================================================================================== */

/* START - CONTROLLER: Dashboard */

        function InsertaError($DatosError){

                $this->db->insert("errores",$DatosError);
        }

/* END - CONTROLLER: Dashboard */

/* =============================================================================================================================================================================================================================== */

/* START - CONTROLLER: Users */

        function ListaUsuarios(){

                $this->db->select('*');
                $this->db->from('usuarios');
                $this->db->where("(rol= 'A' OR rol = 'E')",NULL,FALSE);
                $query = $this->db->get();
                return $query->result();  
        }

        function SeleccionaPorUsuario($NombreUsuario){

                $this->db->select('*');
                $this->db->from('usuarios');
                $this->db->where('username',$NombreUsuario);
                $query = $this->db->get();
                return $query->result();

        } 

        function InsertaUsuario($DatosUsuario){

                $this->db->insert("usuarios",$DatosUsuario);
        }

        function SeleccionaUsuarioPorID($IDUsuario){

                $this->db->select('*');
                $this->db->from('usuarios');
                $this->db->where('id_usuario',$IDUsuario);
                $query = $this->db->get();
                return $query->result();
        }

        function ActualizaUsuario($DatosUsuario,$IDUsuario){

                $this->db->where('id_usuario',$IDUsuario);
                $this->db->update("usuarios",$DatosUsuario);

        }

        function DeleteUserDB($UserID){

                $this->db->where('id_usuario',$UserID);
                $this->db->set("estado",'0');
                $this->db->update("usuarios");
        }

/* END - CONTROLLER: Users */

/* START - CONTROLLER: Companies */

        function ListaProductos(){

                $this->db->select('*');
                $this->db->from('productos');
                $query = $this->db->get();
                return $query->result();
        }

        function SeleccionaPorClave($ClaveProducto){

                $this->db->select('*');
                $this->db->from('productos');
                $this->db->where('clave',$ClaveProducto);
                $query = $this->db->get();
                return $query->result();
        }

        function InsertCompanyDB($CompanyData){

                $this->db->insert("companies",$CompanyData);      
        }

        function SelectByCompanyIDDB($CompanyID){

                $this->db->select('*');
                $this->db->from('companies');
                $this->db->where('id_company',$CompanyID);
                $query = $this->db->get();
                return $query->result();
        }

        public function UpdateCompanyDB($CompanyData,$Id){

                $this->db->where('id_company',$Id);
                $this->db->update("companies",$CompanyData);
        }

        public function DeleteCompanyPHP($CompanyID){

                $this->db->where('id_company',$CompanyID);
                $this->db->set("status",'0');
                $this->db->update("companies");
        }

/* END - CONTROLLER: Companies :) */

/* START - CONTROLLER: Reports :)*/
        
        public function SelectReport1FromDate($FromDate,$ToDate){

                $query = $this->db->query("SELECT * FROM companies WHERE registration_date BETWEEN '$FromDate' AND '$ToDate'");
                return $query->result();

        }


/* END - CONTROLLER: Reports :)*/

}