$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('.startchange');
    var offset = startchange.offset();
     if (startchange.length){
    
        $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) { // bij het scrollen
           $(".navbar").css('background-color', '#fff');
           $(".navbar").css('box-shadow', '0 0 50px 0 rgba(0, 0, 0, 0.2)');
           $(".navbar a").css('color', '#000');
           $("#download-pdf").css('background-color', 'rgba(255,153,0,1)'); // oranje

           $("#download-pdf").mouseenter(function(){
                $("#download-pdf").css("background-color", "rgba(0,153,255,1)"); });
            $("#download-pdf").mouseleave(function(){
                 $("#download-pdf").css("background-color", "rgba(255,153,0,1)"); });

           $("#download-pdf").css('color', '#fff');
           $(".active > a").css('color', 'rgba(255,153,0,1)');
           $('.navbar .navbar-brand img').attr('src','/1718-3CMO-BaP-saravand46/assets/images/logo-woordmerk.png')


           
        } else { //helemaal bovenaan
           $(".navbar").css('background-color', 'transparent');
           $(".navbar").css('box-shadow', '0 0 0 0 rgba(0, 0, 0, 0.0)');
           $(".navbar a").css('color', '#fff');
           $("#download-pdf").css('background-color', 'rgba(0,153,255,1)'); // blauw
           $("#download-pdf").css('color', '#fff');
           $('.navbar .navbar-brand img').attr('src','/1718-3CMO-BaP-saravand46/assets/images/logo-mono-wit-woordmerk.png')
        }
    });
     }
 });

 $(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});
