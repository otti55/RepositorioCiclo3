//FUNCIONES DISFRAZ
function leerAdmins(){
    $.ajax({
        url : 'http://localhost:8080/api/Admin/all',
        type : 'GET',
        dataType : 'json',

        success : function(disfraces){
            let items=disfraces.items;
            $("#TbodyAdmin").empty();
            for(disfraces of disfraces) {
                let tableDisfraz = document.createElement("tr")
                tableDisfraz.innerHTML += "<td><center>"+disfraces.name+"</center></td>";
                tableDisfraz.innerHTML += "<td><center>"+disfraces.email+"</center></td>";

                tableDisfraz.innerHTML += "<td><button onclick='borrarAdmin(" + disfraces.idAdmin + ")'>Borrar</button></tr>";

                $("#TbodyAdmin").append(tableDisfraz);
            }
        }

    });
}


function guardarAdmin(){
    let nombre=$('#nombre').val();
    let email=$('#email').val();


    let data={
        name:nombre,
        email:email,
    };

    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'http://localhost:8080/api/Admin/save',
        type : 'POST',
        dataType : 'JSON',
        data : dataToSend,
        contentType : 'application/json',

        success : function(disfraz){
            console.log(disfraz)
            $('#nombre').val("");
            $('#email').val("");
            $('#password').val("");
        },
        complete : function(){
            leerAdmins();
        }
    });
}


function borrarAdmin(idAdmin){
    let data={
        id:idAdmin
    };
    let dataToSend=JSON.stringify(data);

    $.ajax({
        url : 'http://localhost:8080/api/Admin/'+idAdmin,
        type : 'DELETE',
        dataType : 'JSON',
        data : dataToSend,
        contentType : 'application/JSON',

        success : function(borrando){
            $('#nombre').val("");
            $('#email').val("");
            $('#password').val("");
        },
        complete : function(){
            leerAdmins();
        }
    });
}