$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("header");
        $("header ul li").addClass("color_black");
        $(".globbtn_res").addClass("border_black");
        // $(".logo_fir").css("display","none");

    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("header");
       $("header ul li").removeClass("color_black");
       $(".globbtn_res").removeClass("border_black");
       // $(".logo_sec").css("display","block");


    }
});
