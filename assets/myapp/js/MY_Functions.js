function ValidateUserLogin(){

    var user = $("#Usuario").val();
    var pass = $("#Password").val();

    $('#PreloaderLogin').show();
    $("#BotonLogin").attr('disabled',true);
    $("#BotonReset").attr('disabled',true);

    if (user != ""  && pass != "") {

        $.ajax({
            url:myBase_url+"index.php/Session/validatelogin",
            type:'POST',
            data:{user:user,pass:pass},
            async: true,
            timeout: 15000,
            success:function(datos){

                var obj = JSON.parse(datos); 
                var sp = obj.split("-");

                if(sp[0] == "OK"){

                    $('#PreloaderLogin').hide();
                    $("#BotonLogin").attr('disabled',false);
                    $("#BotonReset").attr('disabled',false);
                    window.location.href = myBase_url+"index.php/"+sp[1];
    
                }else if(obj == "UWOA"){

                    $('#PreloaderLogin').hide();
                    $("#BotonLogin").attr('disabled',false);
                    $("#BotonReset").attr('disabled',false);
                    swal("Error","Usuario sin acceso a la aplicacion","error");

                }else if(obj == "IUOP"){

                    $('#PreloaderLogin').hide();
                    $("#BotonLogin").attr('disabled',false);
                    $("#BotonReset").attr('disabled',false);
                    swal("Error","Usuario o contraseña incorrecta" ,"error");

                } else if(obj == "UWAS"){

                    $('#PreloaderLogin').hide();
                    $("#BotonLogin").attr('disabled',false);
                    $("#BotonReset").attr('disabled',false);
                    swal("Error","Usuario con sesion activa","error");
                }


            },error:function(status){

                var CodigoError = status.status;
                var DescripcionError = status.statusText;
                var Origen = "Login"
                GuardaErrorSession(CodigoError,DescripcionError,Origen);
            
                if (status.statusText=="timeout") {

                    swal({   
                        title: "Error",
                        text: "Tu dispositivo no esta conectado a internet o la conexion es muy lenta.\n Porfavor intentalo de nuevo",   
                        type: "error",   
                        showCancelButton: false,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "OK",   
                        cancelButtonText: "Cancelar",   
                        closeOnConfirm: true,   
                        closeOnCancel: false 
                    }, function(isConfirm){ 
                        $('#PreloaderLogin').hide();
                        $('#BotonLogin').removeAttr('disabled');
                        $("#BotonReset").removeAttr('disabled');       
                    }); 
                        
                }else if(status.statusText=="Not Found"){
        
                    $('#PreloaderLogin').hide();
                    $('#BotonLogin').removeAttr('disabled');
                    $("#BotonReset").removeAttr('disabled');
                    swal('Error',"La pagina que busca no existe" ,'error' );
        
                }else if(status.statusText=="Internal Server Error"){
        
                    $('#PreloaderLogin').hide();
                    $('#BotonLogin').removeAttr('disabled');
                    $("#BotonReset").removeAttr('disabled');
                    swal('Error','Ha ocurrido un error interno del servidor, porfavor contacte al administrador del sitio', 'error');
        
                }else{
        
                    $('#PreloaderLogin').hide();
                    $('#BotonLogin').removeAttr('disabled');
                    $("#BotonReset").removeAttr('disabled');
                    swal('Error', 'Ha ocurrido un error desconocido, porfavor contacte al administrador del sitio','error');
                }
            }
        });
    
    }else{

        $('#PreloaderLogin').hide();
        $("#BotonLogin").attr('disabled',false);
        $("#BotonReset").attr('disabled',false);
        swal("Cuidado", "Aun quedan campos vacios", "warning")
    }

}

function ResetUserLogin(){

    var userreset = $("#Usuario").val();
    var passreset = $("#Password").val();

    $('#PreloaderLogin').show();
    $("#BotonLogin").attr('disabled',true);
    $("#BotonReset").attr('disabled',true);

    if (userreset != ""  && passreset != "") {

        $.ajax({
            url:myBase_url+"index.php/Session/ResetLogin",
            type:'POST',
            data:{userreset:userreset,passreset:passreset},
            async: true,
            timeout: 15000,
            success:function(datos){

                var response = JSON.parse(datos);

                if (response == "UWOA") {

                    $('#PreloaderLogin').hide();
                    $("#BotonLogin").attr('disabled',false);
                    $("#BotonReset").attr('disabled',false);
                    swal("Error","Usuario sin acceso a la aplicacion","error");
     
                }else if(response == "IUOP"){

                    $('#PreloaderLogin').hide();
                    $("#BotonLogin").attr('disabled',false);
                    $("#BotonReset").attr('disabled',false);
                    swal("Error","Usuario o contraseña incorrecta","error");
                    
                }else{

                    swal({   
                        title: "Exito",
                        text: "La sesion se ha reseteado exitosamente",   
                        type: "success",   
                        showCancelButton: false,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "OK",   
                        cancelButtonText: "No, Cancel",   
                        closeOnConfirm: true,   
                        closeOnCancel: false 
                    }, function(isConfirm){   
                         
                        $('#PreloaderLogin').hide();
                        $("#BotonLogin").attr('disabled',false);
                        $("#BotonReset").attr('disabled',false);

                    });
                 }

            },
            error:function(status){

                var CodigoError = status.status;
                var DescripcionError = status.statusText;
                var Origen = "ResetLogin"
                GuardaErrorSession(CodigoError,DescripcionError,Origen);
            
                if (status.statusText=="timeout") {

                    swal({   
                        title: "Error",
                        text: "Tu dispositivo no esta conectado a internet o la conexion es muy lenta.\n Porfavor intentalo de nuevo",   
                        type: "error",   
                        showCancelButton: false,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "OK",   
                        cancelButtonText: "Cancelar",   
                        closeOnConfirm: true,   
                        closeOnCancel: false 
                    }, function(isConfirm){ 
                        $('#PreloaderLogin').hide();
                        $('#BotonLogin').removeAttr('disabled');
                        $("#BotonReset").removeAttr('disabled');       
                    });
                        
                }else if(status.statusText=="Not Found"){
        
                    $('#PreloaderLogin').hide();
                    $('#BotonLogin').removeAttr('disabled');
                    $("#BotonReset").removeAttr('disabled');
                    swal('Error',"La pagina que busca no existe" ,'error' );
        
                }else if(status.statusText=="Internal Server Error"){
        
                    $('#PreloaderLogin').hide();
                    $('#BotonLogin').removeAttr('disabled');
                    $("#BotonReset").removeAttr('disabled');
                    swal('Error','Ha ocurrido un error interno del servidor, porfavor contacte al administrador del sitio', 'error');
        
                }else{
        
                    $('#PreloaderLogin').hide();
                    $('#BotonLogin').removeAttr('disabled');
                    $("#BotonReset").removeAttr('disabled');
                    swal('Error', 'Ha ocurrido un error desconocido, porfavor contacte al administrador del sitio','error');
                }
            }
        });
    
    }else{

        $('#PreloaderLogin').hide();
        $("#BotonLogin").attr('disabled',false);
        $("#BotonReset").attr('disabled',false);
        swal("Cuidado", "Aun hay campos vacios", "warning")
    }

}

function LogOut(){

    $.ajax({
        url:myBase_url+"index.php/Session/logout",
        type:'GET',
        async: true,
        success:function(datos){
            swal({   
                title: "Error",
                text: "La sesion expiro, porfavor ingrese de nuevo",   
                type: "error",   
                showCancelButton: false,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "OK",   
                cancelButtonText: "Cancelar",   
                closeOnConfirm: false,   
                closeOnCancel: false 
            }, function(isConfirm){ 
                    location.href = myBase_url+"index.php/Session";       
            });     
        }
    });   
}


function CheckUActivo(){

    $.ajax({
        url:myBase_url+"index.php/Session/EstadoU",
        type:'GET',
        async: true,
        success:function(datos){
            var obj = JSON.parse(datos);

            if(obj != ""){
                console.log("Cuenta Activa");
            }else{
                $.ajax({
                    url:myBase_url+"index.php/Session/logout",
                    type:'GET',
                    async: true,
                    success:function(datos){
                        swal({   
                            title: "Error",
                            text: "Tu cuenta ha sido eliminada, para mas informacion contacte al administrado del sitio",   
                            type: "error",   
                            showCancelButton: false,   
                            confirmButtonColor: "#DD6B55",   
                            confirmButtonText: "OK",   
                            cancelButtonText: "Cancelar",   
                            closeOnConfirm: false,   
                            closeOnCancel: false 
                        }, function(isConfirm){ 
                                location.href = myBase_url+"index.php/Session";       
                        }); 
                    }
                });
            }  
        }
    });

} 


/* END - CONTROLLER: Session */

/* =============================================================================================================================================================================================================================== */

/* START - CONTROLLER: Usuarios */

function RevisaTelefonoUsuario(){

    var Telefono = $("#TelefonoUsuario").val();
    var LargoTelefono = Telefono.length;

    if (LargoTelefono<10 || LargoTelefono>10) {

        swal("Error","El telefono proporcionado es mas largo o corto que 10 digitos, porfavor intentalo de nuevo","error");
        $("#TelefonoUsuario").val("");
    }
    
}

function RevisaCorreoUsuario(){

    var CadenaValida = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
    var Correo = $("#CorreoUsuario").val();

     if (!Correo.match(CadenaValida)) {

        swal("Error","El correo proporcionado no es un correo electrónico válido, proporcione un correo válido.","error");
        $("#CorreoUsuario").val("");

     }

}

function RevisaUsuarioExistenteS(){

    var NombreUsuario = $("#NUsuario").val();

    if(NombreUsuario!=""){

        $.ajax({
            url:myBase_url+"index.php/Usuarios/RevisaUsuarioExistenteC",
            type:"POST",
            data:{NombreUsuario:NombreUsuario},
            async:true,
            success:function(datos){

                var object = JSON.parse(datos);

                if(object!=""){

                    swal("Error","El nombre de usuario ya esta en uso, porfavor intente con uno nuevo","error");
                    $("#NUsuario").val("");
                }


            },error:function(){

                swal("Error","Ha ocurrido un error interno del servidor, porfavor intentelo de nuevo","error");
            }

        });
    }

}

function VerificaContenidoUsuario(){

    $("#PreloaderUsuario").show();
    $("#BotonGuardaUsuario").attr('disabled',true);

    var NombreUsuario = $("#NombreUsuario").val();
    var ApPaternoUsuario = $("#ApPaternoUsuario").val();
    var ApMaternoUsuario = $("#ApMaternoUsuario").val();
    var TelefonoUsuario = $("#TelefonoUsuario").val();
    var CorreoUsuario = $("#CorreoUsuario").val();
    var NUsuario = $("#NUsuario").val();
    var PasswordUsuario = $("#PasswordUsuario").val();
    var RolUsuario = $("#RolUsuario").val();

    if(NombreUsuario!="" && ApPaternoUsuario!="" && ApMaternoUsuario!="" && TelefonoUsuario!="" && CorreoUsuario!="" && NUsuario!="" && PasswordUsuario!="" && RolUsuario!=""){

        GuardaUsuarioS(); 
    }else{

        $('#PreloaderUsuario').hide();
        $("#BotonGuardaUsuario").attr('disabled',false);
        swal("Cuidado","Aun hay campos vacios","warning");
    }
}

function GuardaUsuarioS(){

    var NombreUsuario = $("#NombreUsuario").val();
    var ApPaternoUsuario = $("#ApPaternoUsuario").val();
    var ApMaternoUsuario = $("#ApMaternoUsuario").val();
    var TelefonoUsuario = $("#TelefonoUsuario").val();
    var CorreoUsuario = $("#CorreoUsuario").val();
    var NUsuario = $("#NUsuario").val();
    var PasswordUsuario = $("#PasswordUsuario").val();
    var RolUsuario = $("#RolUsuario").val();

    $.ajax({
        url:myBase_url+"index.php/Usuarios/GuardaUsuarioC",
        type:"POST",
        data:{NombreUsuario:NombreUsuario,ApPaternoUsuario:ApPaternoUsuario,ApMaternoUsuario:ApMaternoUsuario,TelefonoUsuario:TelefonoUsuario,CorreoUsuario:CorreoUsuario,NUsuario:NUsuario,PasswordUsuario:PasswordUsuario,RolUsuario:RolUsuario},
        async:true,
        timeout: 15000,
        success:function(datos){

            $('#PreloaderUsuario').hide();
            $("#BotonGuardaUsuario").attr('disabled',false);

            swal({   
                title: "Exito",
                text: "El usuario ha sido guardado exitosamente",   
                type: "success",   
                showCancelButton: false,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "OK",   
                cancelButtonText: "Cancelar",   
                closeOnConfirm: false,   
                closeOnCancel: false 
            }, function(isConfirm){ 
                    location.href = "";       
            }); 
 
        },error:function(status){

            var CodigoError = status.status;
            var DescripcionError = status.statusText;
            var Origen = "GuardaUsuario"
            GuardaErrorUsuario(CodigoError,DescripcionError,Origen);
        
            if (status.statusText=="timeout") {

                swal({   
                    title: "Error",
                    text: "Tu dispositivo no esta conectado a internet o la conexion es muy lenta.\n Porfavor intentalo de nuevo",   
                    type: "error",   
                    showCancelButton: false,   
                    confirmButtonColor: "#DD6B55",   
                    confirmButtonText: "OK",   
                    cancelButtonText: "Cancelar",   
                    closeOnConfirm: true,   
                    closeOnCancel: false 
                }, function(isConfirm){ 
                    $('#PreloaderUsuario').hide();
                    $('#BotonGuardaUsuario').removeAttr('disabled');      
                });
                    
            }else if(status.statusText=="Not Found"){
    
                $('#PreloaderUsuario').hide();
                $('#BotonGuardaUsuario').removeAttr('disabled');
                swal('Error',"La pagina que busca no existe" ,'error' );
    
            }else if(status.statusText=="Internal Server Error"){
    
                $('#PreloaderUsuario').hide();
                $('#BotonGuardaUsuario').removeAttr('disabled');
                swal('Error','Ha ocurrido un error interno del servidor, porfavor contacte al administrador del sitio', 'error');
    
            }else{
    
                $('#PreloaderUsuario').hide();
                $('#BotonGuardaUsuario').removeAttr('disabled');
                swal('Error', 'Ha ocurrido un error desconocido, porfavor contacte al administrador del sitio','error');
            }
        }

    });

}

function ConsultaDatosUsuarioS(IDUsuario){

    $("#PreloaderUsuario").show();
    $("#BotonGuardaUsuario").attr('disabled',true);

    var IDUsuario = IDUsuario;

    if(IDUsuario!=""){

        $.ajax({
            url:myBase_url+"index.php/Usuarios/ConsultaDatosUsuarioC",
            type:"POST",
            data:{IDUsuario:IDUsuario},
            async:true,
            success:function(datos){

                $('#PreloaderUsuario').hide();
                $("#BotonGuardaUsuario").attr('disabled',false);

                var Object = JSON.parse(datos);
                //alert(Object);

                var UsuarioID = Object[0].id_usuario;
                var NombreUsuario = Object[0].nombre;
                var ApPaternoUsuario = Object[0].amaterno;
                var ApMaternoUsuario = Object[0].apaterno;
                var TelefonoUsuario = Object[0].telefono;
                var CorreoUsuario = Object[0].email;
                var NUsuario = Object[0].username;
                var PasswordUsuario = Object[0].password;
                var RolUsuario = Object[0].rol;
                var EstadoUsuario = Object[0].estado;

                $("#IDOculto").val(UsuarioID);
                $("#NombreUsuario").val(NombreUsuario);
                $("#ApPaternoUsuario").val(ApPaternoUsuario);
                $("#ApMaternoUsuario").val(ApMaternoUsuario);
                $("#TelefonoUsuario").val(TelefonoUsuario);
                $("#CorreoUsuario").val(CorreoUsuario);
                $("#NUsuario").val(NUsuario);
                $("#PasswordUsuario").val(PasswordUsuario);
                $("#RolUsuario").val(RolUsuario);
                $("#EstadoUsuario").val(EstadoUsuario);

                $("#NUsuario").attr('disabled',true);
                $("#EstadoEscondido").show();
                $("#BotonGuardaUsuario").hide();
                $("#BotonEditaUsuario").show();

            },error:function(){

                $('#PreloaderUsuario').hide();
                $("#BotonGuardaUsuario").attr('disabled',false);
                swal("Error","Ha ocurrido un error interno del servidor, porfavor intentalo de nuevo","error");
            }

        });
    }
}

function EditaUsuarioS(){

    $('#PreloaderUsuario').show();
    $("#BotonEditaUsuario").attr('disabled',true);

    var IDUsuario = $("#IDOculto").val();
    var NombreUsuario = $("#NombreUsuario").val();
    var ApPaternoUsuario = $("#ApPaternoUsuario").val();
    var ApMaternoUsuario = $("#ApMaternoUsuario").val();
    var TelefonoUsuario = $("#TelefonoUsuario").val();
    var CorreoUsuario = $("#CorreoUsuario").val();
    var NUsuario = $("#NUsuario").val();
    var PasswordUsuario = $("#PasswordUsuario").val();
    var RolUsuario = $("#RolUsuario").val();
    var EstadoUsuario = $("#EstadoUsuario").val();

    if(IDUsuario != "" && NombreUsuario!="" && ApPaternoUsuario!="" && ApMaternoUsuario!="" && TelefonoUsuario!="" && CorreoUsuario!="" && NUsuario!="" && PasswordUsuario!=""  && RolUsuario!="" && EstadoUsuario != ""){

        $.ajax({
            url:myBase_url+"index.php/Usuarios/EditaUsuarioC",
            type:"POST",
            data:{IDUsuario:IDUsuario,NombreUsuario:NombreUsuario,ApPaternoUsuario:ApPaternoUsuario,ApMaternoUsuario:ApMaternoUsuario,TelefonoUsuario:TelefonoUsuario,CorreoUsuario:CorreoUsuario,NUsuario:NUsuario,PasswordUsuario:PasswordUsuario,RolUsuario:RolUsuario,EstadoUsuario:EstadoUsuario},
            async:true,
            timeout: 15000,
            success:function(datos){

                $('#PreloaderUsuario').hide();
                $("#BotonEditaUsuario").attr('disabled',false);

                swal({   
                    title: "Exito",
                    text: "El usuario ha sido actualizado exitosamente",   
                    type: "success",   
                    showCancelButton: false,   
                    confirmButtonColor: "#DD6B55",   
                    confirmButtonText: "OK",   
                    cancelButtonText: "Cancelar",   
                    closeOnConfirm: false,   
                    closeOnCancel: false 
                }, function(isConfirm){ 
                        location.href = "";       
                }); 

                
            },error:function(status){

                var CodigoError = status.status;
                var DescripcionError = status.statusText;
                var Origen = "EditaUsuario"
                GuardaErrorUsuario(CodigoError,DescripcionError,Origen);
            
                if (status.statusText=="timeout") {

                    swal({   
                        title: "Error",
                        text: "Tu dispositivo no esta conectado a internet o la conexion es muy lenta.\n Porfavor intentalo de nuevo",   
                        type: "error",   
                        showCancelButton: false,   
                        confirmButtonColor: "#DD6B55",   
                        confirmButtonText: "OK",   
                        cancelButtonText: "Cancelar",   
                        closeOnConfirm: true,   
                        closeOnCancel: false 
                    }, function(isConfirm){ 
                        ('#PreloaderUsuario').hide();
                        $('#BotonEditaUsuario').removeAttr('disabled');       
                    });

                }else if(status.statusText=="Not Found"){
        
                    $('#PreloaderUsuario').hide();
                    $('#BotonEditaUsuario').removeAttr('disabled');
                    swal('Error',"La pagina que busca no existe" ,'error' );
        
                }else if(status.statusText=="Internal Server Error"){
        
                    $('#PreloaderUsuario').hide();
                    $('#BotonEditaUsuario').removeAttr('disabled');
                    swal('Error','Ha ocurrido un error interno del servidor, porfavor contacte al administrador del sitio', 'error');
        
                }else{
        
                    $('#PreloaderUsuario').hide();
                    $('#BotonEditaUsuario').removeAttr('disabled');
                    swal('Error', 'Ha ocurrido un error desconocido, porfavor contacte al administrador del sitio','error');
                }
            }

        });

    }else{

        $('#PreloaderUsuario').hide();
        $("#BotonEditaUsuario").attr('disabled',false);
        swal("Cuidado","Aun hay campos vacios","warning");
    }
}

function BorraUsuarioS(IDUsuario){

    $('#PreloaderUsuario').show();

    var IDUsuario = IDUsuario;

    if(IDUsuario!=""){

        swal({   
            title: "Cuidado",
            text: "Esta seguro de borrar a este usuario??",   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "OK",   
            cancelButtonText: "Cancel",   
            closeOnConfirm: true,   
            closeOnCancel: true 
        }, function(isConfirm){ 

            if (isConfirm==true) {

                $.ajax({
                    url:myBase_url+"index.php/Usuarios/BorraUsuarioC",
                    type:"POST",
                    data:{IDUsuario:IDUsuario},
                    async:true,
                    timeout: 15000,
                    success:function(datos){

                        $('#PreloaderUsuario').hide();

                        swal({   
                            title: "Exito",
                            text: "El usuario ha sido borrado exitosamente",   
                            type: "success",   
                            showCancelButton: false,   
                            confirmButtonColor: "#DD6B55",   
                            confirmButtonText: "OK",   
                            cancelButtonText: "Cancel",   
                            closeOnConfirm: false,   
                            closeOnCancel: false 
                        }, function(isConfirm){ 
                                location.href = "";       
                        });
                        
                    },error:function(status){

                        var CodigoError = status.status;
                        var DescripcionError = status.statusText;
                        var Origen = "BorraUsuario"
                        GuardaErrorUsuario(CodigoError,DescripcionError,Origen);
                    
                        if (status.statusText=="timeout") {

                            swal({   
                                title: "Error",
                                text: "Tu dispositivo no esta conectado a internet o la conexion es muy lenta.\n Porfavor intentalo de nuevo",   
                                type: "error",   
                                showCancelButton: false,   
                                confirmButtonColor: "#DD6B55",   
                                confirmButtonText: "OK",   
                                cancelButtonText: "Cancelar",   
                                closeOnConfirm: true,   
                                closeOnCancel: false 
                            }, function(isConfirm){ 
                                $('#PreloaderUsuario').hide();      
                            }); 
         
                        }else if(status.statusText=="Not Found"){
                
                            $('#PreloaderUsuario').hide();
                            swal('Error',"La pagina que busca no existe" ,'error' );
                
                        }else if(status.statusText=="Internal Server Error"){
                
                            $('#PreloaderUsuario').hide();
                            swal('Error','Ha ocurrido un error interno del servidor, porfavor contacte al administrador del sitio', 'error');
                
                        }else{
                
                            $('#PreloaderUsuario').hide();
                            swal('Error', 'Ha ocurrido un error desconocido, porfavor contacte al administrador del sitio','error');
                        }
                    }

                });
            }
                      
        });
  
    }

}

/* END - CONTROLLER: Users */

/* =============================================================================================================================================================================================================================== */

/* START - CONTROLLER: Companies */

function CheckExistingCompany(){

    var CompanyName = $("#CompanyName").val();

    if(CompanyName!=""){

        $.ajax({
            url:myBase_url+"index.php/Company/CheckExistingCompanyPHP",
            type:"POST",
            data:{CompanyName:CompanyName},
            async:true,
            success:function(datos){

                var Object = JSON.parse(datos);

                if(Object!=""){

                    swal("Error","The company name is already registered","error");
                    $("#CompanyName").val("");
                }


            },error:function(){

                swal("Error","An internal server error has ocurred","error");
            }

        });
    }


}

function VerifyCompanyContent(){

    $("#PreloaderCompany").show();
    $("#ButtonSaveCompany").attr('disabled',true);

    var CompanyName = $("#CompanyName").val();
    var Category = $("#Category").val();
    var CompanyRegDate = $("#CompanyRegDate").val();

    if(CompanyName!="" && Category!="" && CompanyRegDate!="" ){

       SaveCompany(); 

    }else{

        $('#PreloaderCompany').hide();
        $("#ButtonSaveCompany").attr('disabled',false);
        swal("Warning","Form incomplete","warning");
    }
}

function SaveCompany(){

    var CompanyName = $("#CompanyName").val();
    var Category = $("#Category").val();
    var CompanyRegDate = $("#CompanyRegDate").val();

    $.ajax({
        url:myBase_url+"index.php/Company/SaveCompanyPHP",
        type:"POST",
        data:{CompanyName:CompanyName,Category:Category,CompanyRegDate:CompanyRegDate},
        async:true,
        success:function(datos){

            $('#PreloaderCompany').hide();
            $("#ButtonSaveCompany").attr('disabled',false);

            swal({   
                title: "Success",
                text: "User has been saved",   
                type: "success",   
                showCancelButton: false,   
                confirmButtonColor: "#DD6B55",   
                confirmButtonText: "OK",   
                cancelButtonText: "Cancelar",   
                closeOnConfirm: false,   
                closeOnCancel: false 
            }, function(isConfirm){ 
                    location.href = "";       
            }); 

            
        },error:function(){

            $('#PreloaderCompany').hide();
            $("#ButtonSaveCompany").attr('disabled',false);
            swal("Error","An internal server error has ocurred","error");
        }

    });

}

function GetCompanyData(CompanyID){

    $("#PreloaderCompany").show();
    $("#ButtonSaveCompany").attr('disabled',true);

    var CompanyID = CompanyID;

    if(CompanyID!=""){

        $.ajax({
            url:myBase_url+"index.php/Company/GetCompanyDataPHP",
            type:"POST",
            data:{CompanyID:CompanyID},
            async:true,
            success:function(datos){

                $('#PreloaderCompany').hide();
                $("#ButtonSaveCompany").attr('disabled',false);

                var Object = JSON.parse(datos);

                var CompanyID = Object[0].id_company;
                var CompanyName = Object[0].name;
                var Category = Object[0].category;
                var RegDate = Object[0].registration_date;
                var Status = Object[0].status;

                $("#HiddenID").val(CompanyID);
                $("#CompanyName").val(CompanyName);
                $("#Category").val(Category);
                $("#CompanyRegDate").val(RegDate);
                $("#CompanyStatus").val(Status);

                $("#CompanyRegDate").attr('disabled',true);

                $("#HiddenStatus").show();
                $("#ButtonSaveCompany").hide();
                $("#ButtonEditCompany").show();

            },error:function(){

                $('#PreloaderCompany').hide();
                $("#ButtonSaveCompany").attr('disabled',false);
                swal("Error","An internal server error has ocurred","error");
            }

        });
    }
}

function EditCompany(){

    $('#PreloaderCompany').show();
    $("#ButtonEditCompany").attr('disabled',true);

    var Id = $("#HiddenID").val();
    var CompanyName = $("#CompanyName").val();
    var Category = $("#Category").val();
    var CompanyRegDate = $("#CompanyRegDate").val();
    var Status = $("#CompanyStatus").val();

    if(Id != "" && CompanyName!="" && Category!="" && CompanyRegDate!="" && Status != ""){

        $.ajax({
            url:myBase_url+"index.php/Company/UpdateCompanyPHP",
            type:"POST",
            data:{Id:Id,CompanyName:CompanyName,Category:Category,CompanyRegDate:CompanyRegDate,Status:Status},
            async:true,
            success:function(datos){

                $('#PreloaderCompany').hide();
                $("#ButtonEditCompany").attr('disabled',false);

                swal({   
                    title: "Success",
                    text: "User has been updated",   
                    type: "success",   
                    showCancelButton: false,   
                    confirmButtonColor: "#DD6B55",   
                    confirmButtonText: "OK",   
                    cancelButtonText: "Cancelar",   
                    closeOnConfirm: false,   
                    closeOnCancel: false 
                }, function(isConfirm){ 
                        location.href = "";       
                }); 

                
            },error:function(){

                $('#PreloaderCompany').hide();
                $("#ButtonEditCompany").attr('disabled',false);
                swal("Error","An internal server error has ocurred","error");
            }

        });

    }else{

        $('#PreloaderCompany').hide();
        $("#ButtonEditCompany").attr('disabled',false);
        swal("Warning","Form incomplete","warning");
    }
}

function DeleteCompany(CompanyID){

    $('#PreloaderCompany').show();

    var CompanyID = CompanyID;

    if(CompanyID!=""){

        swal({   
            title: "Warning",
            text: "Are you sure of deleting this company??",   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "OK",   
            cancelButtonText: "Cancel",   
            closeOnConfirm: true,   
            closeOnCancel: true 
        }, function(isConfirm){ 

            if (isConfirm==true) {

                $.ajax({
                    url:myBase_url+"index.php/Company/DeleteCompanyPHP",
                    type:"POST",
                    data:{CompanyID:CompanyID},
                    async:true,
                    success:function(datos){

                        $('#PreloaderUser').hide();

                        swal({   
                            title: "Success",
                            text: "User deleted successfully",   
                            type: "success",   
                            showCancelButton: false,   
                            confirmButtonColor: "#DD6B55",   
                            confirmButtonText: "OK",   
                            cancelButtonText: "Cancel",   
                            closeOnConfirm: false,   
                            closeOnCancel: false 
                        }, function(isConfirm){ 
                                location.href = "";       
                        });
                        
                    },error:function(){

                        $('#PreloaderCompany').hide();
                        swal("Error","An internal server error has ocurred","error");
                    }

                });
            }
                      
        });

        
    }

}


/* END - CONTROLLER: Companies */

/* =============================================================================================================================================================================================================================== */

/* START - CONTROLLER: Reports */


function Report1(){

    $('#PreloaderReport1').hide();
    $("#ButtonReport1").attr('disabled',false);

    var FromDate = $("#FromDate").val();
    var ToDate = $("#ToDate").val();

    if(FromDate!="" && ToDate !=""){

        $.ajax({
            url:myBase_url+"index.php/Report/SelectCompaniesFromDate",
            type:"POST",
            data:{FromDate:FromDate,ToDate:ToDate},
            async:true,
            success:function(datos){

                $('#PreloaderReport1').hide();
                $("#ButtonReport1").attr('disabled',false);

                var Object = JSON.parse(datos);
                var ObjLenght = Object.length;

                if(Object!=""){

                    //Funcion para llenar la tabla con datos resultantes de un query
                    function buildTableCompanies(datos, columns) {

                        var body = [];

                        body.push(columns);

                        datos.forEach(function(row) {
                            var dataRow = [];

                            columns.forEach(function(column) {
                                dataRow.push(row[column].toString());
                            })

                            body.push(dataRow);
                        });

                        return body;

                    }

                    //Funcion para construir y estilar la tabla en el formato requerido por PDFmake
                    function tablecompanies(datos, columns) {
                        return {
                            style: 'tablescompanies',
                            table: {
                                widths: ['auto','auto','auto'],
                                headerRows: 1,
                                body: buildTableCompanies(datos, columns)
                            }
                        };
                    } 


                    //Funcion para cambiar los nombres de los valores del JSON para imprimirlos en la tabla
                    var renamedobj = Object.map( item => { 
                        return {Company_Name: item.name,Category: item.category, Date: item.registration_date}; 
                    });

                    var docDefinition = {

                        //Inicio del contenido del PDF
                        content: [
                            {
                                text: 'Companies from: ' +FromDate+" to: "+ToDate, style:'header',alignment:'left'
                            },
                            { 
                                text: '\t\t\t\t\t\t\t\t\t\t\t\t', style: 'black',alignment:'center' 
                            },

                            { 
                                text: '\t\t\t\tCompany list', style: 'titles' 
                            },

                            { 
                                text: '\t\t\t\t\t\t\t\t\t\t\t\t', style: 'black',alignment:'center' 
                            },

                            { 
                                text: '\t\t\t\t\t\t\t\t\t\t\t\t', style: 'black',alignment:'center' 
                            },

                            tablecompanies(renamedobj, ['Company_Name','Category','Date']),

                            { 
                                text: '\t\t\t\t\t\t\t\t\t\t\t\t', style: 'black',alignment:'center' 
                            },

                            { 
                                text: '\t\t\t\t\t\t\t\t\t\t\t\t', style: 'black',alignment:'center' 
                            },


                            { 
                                text: '\t\t\t\tTotal Companies: ' +ObjLenght, style: 'black',alignment:'right' 
                            },

                        ], //Termina contenido del PDF

                        //Inician estilos del PDF
                        styles: {
                            header: {
                                fontSize: 16,
                                bold: true
                            },

                            titles: {
                                fontSize: 14,
                                bold: true,
                                decoration: 'underline',
                                alignment: 'center'
                            },

                            black:{
                                bold:true,
                                fontSize: 12
                            },
                            tablecompanies: {
                                margin: [5, 5, 0, 15],
                                fontSize: 12
                            },

                        },
                        //Terminan los estilos del PDF

                    };//Termina docDefinition

                    pdfMake.createPdf(docDefinition).download("Total companies from: "+FromDate+" to: "+ToDate); //Crea y descarga el PDF con el numero dela visita
                    //pdfMake.createPdf(docDefinition).open(); //Abre el PDF en el navegador 

                }else{

                    swal("Error","There is no info for the dates selected","error");
                }

                
            },error:function(){

                $('#PreloaderReport1').hide();
                $("#ButtonReport1").attr('disabled',false);
                swal("Error","An internal server error has ocurred","error");
            }

        });

    }else{

        $('#PreloaderReport1').hide();
        $("#ButtonReport1").attr('disabled',false);
        swal("Warning","Form incomplete","warning");

    }

    
}

/* END - CONTROLLER: Reports */
/* =============================================================================================================================================================================================================================== */

/* START: ErrorHandling */

function GuardaErrorSession(CodigoError,DescripcionError,Origen){

    $.ajax({
        url:myBase_url+"index.php/Session/GuardaErrorSC",
        type:'POST',
        data:{CodigoError:CodigoError,DescripcionError:DescripcionError,Origen:Origen},
        async: true,
        success:function(datos){

        },error:function(datos){

        }

    });
}

function GuardaErrorUsuario(CodigoError,DescripcionError,Origen){

    $.ajax({
        url:myBase_url+"index.php/Usuarios/GuardaErrorUC",
        type:'POST',
        data:{CodigoError:CodigoError,DescripcionError:DescripcionError,Origen:Origen},
        async: true,
        success:function(datos){

        },error:function(datos){

        }

    });
}

/* END: ErrorHandling */
