var showed=false;
$(".mob-menu-button").on( "click", function() {
    showed=!showed;
    if(showed) {
        $(".mob-menu").addClass( "show" );
    }
    else{
        $(".mob-menu").removeClass( "show" );
    }
  });