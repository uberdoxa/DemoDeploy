$(document).ready(function() {
    console.log("sledgehammer...");

    var $work = $('.work');
    var $text = $('.text');
    $work.hover(
        function() {
            console.log($(this))
            $(this).find($text).toggle();
        }
    );


    //Thanks CSS tricks!
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });

    //end file
})
