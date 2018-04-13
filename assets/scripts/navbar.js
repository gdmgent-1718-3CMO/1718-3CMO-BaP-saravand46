$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('.startchange');
    var offset = startchange.offset();
     if (startchange.length){
    
        $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) { // bij het scrollen
           $(".navbar").css('background-color', '#fff');
           $(".navbar").css('box-shadow', '0 0px 50px 0 rgba(0, 0, 0, 0.2)');
           $(".navbar a").css('color', '#000');
           $("#download-pdf").css('background-color', 'rgba(255,153,0,1)');
           $("#download-pdf").css('color', '#fff');
           $(".navbar a:hover").css('color', 'rgba(255,153,0,1)'); // werkt niet ?
           $(".active > a").css('color', 'rgba(255,153,0,1)');

        } else { //helemaal bovenaan
           $(".navbar").css('background-color', 'transparent');
           $(".navbar").css('box-shadow', '0 0px 50px 0 rgba(0, 0, 0, 0.0)');
           $(".navbar a").css('color', '#fff');
           $("#download-pdf").css('background-color', '#fff');
           $("#download-pdf").css('color', 'rgba(255,153,0,1)');
           $(".navbar a:hover").css('color', '#000'); // werkt niet ? --> opgelost maar niet via hier.
           $(".active > a:active").css('color', '#000'); // nope
        }
    });
     }
 });
