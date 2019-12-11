/*  ################### 
       ! Preloader
    ###################  */
    $(window).on('load',function () {
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut(500);
    });


   
/*  ################### 
         ! STICKY MENU
    ###################  */
   // $(document).ready(function (){
        

       //  $(".js-about-us").waypoint(function(direction){
     //       if (direction == "down"){
       //         $("nav").addClass("sticky");
     //       }
     //       else {
          //      $("nav").removeClass("sticky");
      //      }
  //       });
 //   });



    

    // ! mobile menu click option

    function openNav () {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav () {
        document.getElementById("myNav").style.width = "0%";
    }


    
/*  ############################### 
      ? ((...PORTFOLIO...))
  
    ###############################  */

   $(document).ready(function (){
    var mixer = mixitup('.portfolio-gallery');
   });
