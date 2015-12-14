
/*********************check the online status***********************/

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var networkState = navigator.network.connection.type;

    if(networkState == Connection.NONE) {
         navigator.notification.alert(
            ("No Internet connection!"),
            alertDismissed,
            'Network Error!',
            'OK'
            );
    }
}

   
/******body content and header scorll stop in panel in open status************/

$(document).on("pageinit", "body", function (event) {
    
    $("#settings").on("panelopen", function (event, ui) {
        $('#ev_panel').css("display","none");
        $.mobile.loading( 'hide');
    });

    function stopScroll() {
        return false;
    }
});


/****************TIME OUT FUNCTION FOR LOADER********************************/

setTimeout( function() {
    if ($('.ui-loader').is(':visible')){
        // alert('this');
        navigator.notification.alert(
            'please check your network connection or try again later!', 
            alertDismissed,
            'Network Error!',
            'OK'
            );
    }
    $.mobile.loading( 'hide');
}, 25000);

function alertDismissed() {
// do something
}
 

/***********Listener for device back to the panel**********/

document.addEventListener("deviceready", onDevice, false);
    
function onDevice() {
    document.addEventListener("backbutton", onBackKeyDown, false);
//document.addEventListener("resume", onResume, false);
}
function onBackKeyDown() {
    if ($('.ui-panel').hasClass( 'ui-panel-open') == true )
    {
        $('#settings').panel( "close" );
        
    }
    else if($('#ev_panel').css("display") == "block")
    {
        $('#ev_panel').css("display","none");
    }
     else if ( $('.ui-page-active').attr('id') == 'index' ) {
            navigator.notification.confirm(
                'Press back again to exit'
                , function(button) {
                    if (button == 2 || button == 0) {
                        navigator.app.exitApp();
                    }
                  }
                , 'Exit App?'
                , ['No', 'Exit']
            );
        
     }else{
        navigator.app.backHistory(); 
    }
}


/****************event panel close when scroll starts****************/

$(document).bind("scrollstart", function() {
    $( "#settings" ).panel( "close" );
    $('#ev_panel').css("display","none");
});

$(document).delegate("#settings", "scrollstart", false);
       






