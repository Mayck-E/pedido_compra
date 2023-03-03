function winConfirm(){
    var x;

    if(confirm("Confirma sua pedido?") == true){
        x = "Você acabou de confirmar seu pedido! Aguarde nosso contato";
    }else{
        x = "Você não confirmou sua pedido!";
    }
    document.getElementById("status").innerHTML = x;
}

