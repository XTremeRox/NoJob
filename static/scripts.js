$(document).ready(function () {
    $tnc_block = $('#tncblock');
    //$tnc_block.hide(); //debugging
    $loading = $('#connecting');
    $tnc_button = $('#tncbutton');
    $tnc_accept = $('#tncaccept');
    $chat_block = $('#chatblock');    
    $tnc_button.on('click', function(){
        if($tnc_accept.prop('checked')){
            $tnc_block.slideUp("slow",function(){
                $loading.slideDown("slow",function(){
                    setTimeout(chaton, 3000);
                });
            });
        }else{
            $("#confwarn").html('<b style="color:red">Cant ignore this :P</b>');
        }
    });
    $('#chatwindow').css('height', ($(window).height()/1.3));
});

function chaton(){
    $loading.slideUp("slow", function(){
        $chat_block.slideDown("slow");
    });
}