$(document).ready(function(){
    // Level 1 Responsive Menu
    $(".has_child").click(function(){
        var id = $(this).find("ul");
 if((id).css('display')=='none'){
 (id).css({'display':'block'});
 }else{
 (id).css({'display':'none'});
 } 
    });
});
 
// Add active class to active link
$(function(){
 var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
 $('document').each(function() {
    var url = $(this).attr('href');
    var url_new = url.split("#");
    var new_url = url_new[0]
if (new_url == pathname){
    $(this).addClass('active');
    }
 });
});