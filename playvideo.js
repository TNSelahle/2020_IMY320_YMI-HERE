$(document).ready(function(){
    var figure = $(".video1").hover( hoverVideo, hideVideo );
    var figure = $(".video2").hover( hoverVideo, hideVideo );
    var figure = $(".video3").hover( hoverVideo, hideVideo );
    var figure = $(".video4").hover( hoverVideo, hideVideo );
    var figure = $(".video5").hover( hoverVideo, hideVideo );
    /* function hoverVideo(e) {  
        $('video', this).get(0).play(); 
    }
    
    function hideVideo(e) {
        $('video', this).get(0).pause(); 
    }
     */
    });

(function () {

    var bv = new Bideo();
    bv.init({
        // Video element
        videoEl: document.querySelector('#background_video'),

        // Container element
        container: document.querySelector('body'),

        // Resize
        resize: true,

        // autoplay: false,

        isMobile: window.matchMedia('(max-width: 768px)').matches,

        playButton: document.querySelector('#play'),
        pauseButton: document.querySelector('#pause'),

        // Array of objects containing the src and type
        // of different video formats to add
        src: [
            {
                src: 'vid.mp4',
                type: 'video/mp4'
            }
        ],

        // What to do once video loads (initial frame)
        onLoad: function () {
            document.querySelector('#video_cover').style.display = 'none';
        }
    });
}());