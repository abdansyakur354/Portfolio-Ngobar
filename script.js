$('.page-scroll').on('click', function(e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutElastic');
//    'swing' and 'linear' bawaan dari jquery

    e.preventDefault();
   });

// Scroll 
// About Me
$(window).on('load', function() {
    $('.left').addClass('muncul');
    $('.right').addClass('muncul');
});

// Parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // Jumbotron
    $('.px-4 img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%) '
    }); 

    // $('.px-4 h1').css({
    //     'transform' : 'translate(0px, '+ wScroll/4 +'%) '
    // });

    // $('.px-4 p').css({
    //     'transform' : 'translate(0px, '+ wScroll/2 +'%) '
    // });

    // Portofolio
    if( wScroll > $('.portofolio').offset().top - 250 ) {
        $('.portofolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portofolio .thumbnail').eq(i).addClass('muncul');                
            }, 500 * (i+1));
        });

    }

    

    });