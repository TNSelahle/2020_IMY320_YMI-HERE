$(document).ready(function(){
    var figure = $(".video1").hover( hoverVideo, hideVideo );
    var figure = $(".video2").hover( hoverVideo, hideVideo );
    var figure = $(".video3").hover( hoverVideo, hideVideo );
    var figure = $(".video4").hover( hoverVideo, hideVideo );
    var figure = $(".video5").hover( hoverVideo, hideVideo );
    function hoverVideo(e) {  
        $('video', this).get(0).play(); 
    }
    
    function hideVideo(e) {
        $('video', this).get(0).pause(); 
    }
    
    });