$(document).ready(function(){
    $("#work1").hover(function(){
        $(".work1").toggle();
    });
    $("#work2").hover(function(){
        $(".work2").toggle();
    });
    $("#work3").hover(function(){
        $(".work3").toggle();
    });
    $("#work4").hover(function(){
        $(".work4").toggle();
    });
    $("#work5").hover(function(){
        $(".work5").toggle();
    });
    $("#work6").hover(function(){
        $(".work6").toggle();
    });
    $("#work7").hover(function(){
        $(".work7").toggle();
    });
    $("#work8").hover(function(){
        $(".work8").toggle();
    });

    $("#design").click(function(){
        $("#design>p").toggle();
        $("#design>img").toggle();
    })
    $("#dev").click(function(){
        $("#dev>p").toggle();
        $("#dev>img").toggle();
    })
    $("#product").click(function(){
        $("#product>p").toggle();
        $("#product>img").toggle();
    })

    $(".button").click(function(){
        alert("Dear User we have recieved your message.Thank you for reaching out to us.");
    })
});