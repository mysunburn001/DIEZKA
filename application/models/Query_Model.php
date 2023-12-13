<?php

class Query_Model extends CI_Model{

/* =============================================================================================================================================================================================================================== */

/* START - CONTROLLER: Dashboard */

/* END - CONTROLLER: Dashboard */

/* =============================================================================================================================================================================================================================== */

/* START - CONTROLLER: Usuarios */

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

        function BorraUsuarioBD($IDUsuario){

                $this->db->where('id_usuario',$IDUsuario);
                $this->db->set("estado",'0');
                $this->db->update("usuarios");
        }

/* END - CONTROLLER: Usuarios */

/* START - CONTROLLER: Productos */

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

        function InsertaProducto($DatosProducto){

                $this->db->insert("productos",$DatosProducto);      
        }

        function SeleccionaProductoPorID($IDProducto){

                $this->db->select('*');
                $this->db->from('productos');
                $this->db->where('id_producto',$IDProducto);
                $query = $this->db->get();
                return $query->result();
        }

        public function ActualizaProducto($DatosProducto,$IDProducto){

                $this->db->where('id_producto',$IDProducto);
                $this->db->update("productos",$DatosProducto);
        }

        public function BorraProductoBD($IDProducto){

                $this->db->where('id_producto',$IDProducto);
                $this->db->set("estado",'0');
                $this->db->update("productos");
        }

/* END - CONTROLLER: Productos */

/* START - CONTROLLER: Reportes */
        
        public function SelectReport1FromDate($FromDate,$ToDate){

                $query = $this->db->query("SELECT * FROM companies WHERE registration_date BETWEEN '$FromDate' AND '$ToDate'");
                return $query->result();

        }


/* END - CONTROLLER: Reportes */

/* START - CONTROLLER: ErrorLog/ChangeLog */

        function InsertaCambio($DatosCambio){

                $this->db->insert("historial",$DatosCambio);
        }

        function InsertaError($DatosError){

                $this->db->insert("errores",$DatosError);
        }

/* END - CONTROLLER: ErrorLog/ChangeLog */

}