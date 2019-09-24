$(document).ready(function () {
    $tnc_block = $('#tncblock');
    //$tnc_block.hide(); //debugging
    $tnc_button = $('#tncbutton');
    $tnc_accept = $('#tncaccept');
    $chat_block = $('#chatblock');    
    $tnc_button.on('click', function(){
        if($tnc_accept.prop('checked')){
            $tnc_block.slideUp("slow",function(){
                $chat_block.slideDown("slow");
            });
        }else{
            $("#confwarn").html('<b style="color:red">Cant ignore this :P</b>');
        }
    });
});