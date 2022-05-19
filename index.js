$(document).ready(function(){

    $(".link-div").hover(function(){
        showLinkLabel(true, $(this));
    }, function(){
        showLinkLabel(false, $(this));    
    });

  });


function showLinkLabel(show, div){
    if(show){
        div.children('p').fadeIn(1000);
        div.children('img').fadeTo(1000, 1);
        // div.children('img').css('z-index', 10000);
    }else{
        div.children('p').fadeOut(1000);
        div.children('img').fadeTo(1000, .75);
    }
}





function copyEmail(){
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#email").html()).select();
    document.execCommand("copy");
    $temp.remove();

}