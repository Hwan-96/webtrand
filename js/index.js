$(document).ready(function(){

  $(".top_btn").hide();
  $("#scroll_btn").hide();
  $("#pcheader .topMenu").hide();

  $(window).scroll(function(){
    
    let scrollpos = $(this).scrollTop();
    $("#txt1").text(scrollpos);

    if(scrollpos > 400){
      $("#pcheader .topMenu").fadeIn();
    }else{
      $("#pcheader .topMenu").fadeOut();
    };

    if(scrollpos >= 1800 && scrollpos < 2700){
      $("#pcheader .topMenu").addClass("active");
    }else{
      $("#pcheader .topMenu").removeClass("active");
    };

    if(scrollpos > 350){
      $(".top_btn").fadeIn();
      $("#scroll_btn").fadeIn();
    }else{
      $(".top_btn").fadeOut();
      $("#scroll_btn").fadeOut();
    };
    
    if(scrollpos>=780 && scrollpos<1700){
      $("#scroll_btn ul .scb1").addClass("active");
      $("#scroll_btn ul .scb1 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .scb1").removeClass("active");
      $("#scroll_btn ul .scb1 a .scroll_hover").removeClass("active");
    };

    if(scrollpos>=1701 && scrollpos<2750){
      $("#scroll_btn ul .scb2").addClass("active");
      $("#scroll_btn ul .scb2 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .scb2").removeClass("active");
      $("#scroll_btn ul .scb2 a .scroll_hover").removeClass("active");
    };

    if(scrollpos>=2750 && scrollpos<5000){
      $("#scroll_btn ul .scb3").addClass("active");
      $("#scroll_btn ul .scb3 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .scb3").removeClass("active");
      $("#scroll_btn ul .scb3 a .scroll_hover").removeClass("active");
    };
  });
  
  $("#scroll_btn ul .scb1").click(function(){
    $("body,html").animate({scrollTop:"880px"},700);
  });
  $("#scroll_btn ul .scb2").click(function(){
    $("body,html").animate({scrollTop:"1790px"},700);
  });
  $("#scroll_btn ul .scb3").click(function(){
    $("body,html").animate({scrollTop:"2791px"},700);
  });

  $(".top_btn").click(function(){
    $("body,html").animate({scrollTop:"0"});
  });


  $(".topMenu").click(function(){
    $("#moheader").toggleClass("active");
  });
  
  $(".btn-close, .modal-gnb .gnb").click(function(){
    $("#moheader").removeClass("active")
  })



});