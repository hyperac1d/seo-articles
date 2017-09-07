(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();

    $('.scrollspy').scrollSpy();    
    
    
    $('#home,#history,#methods,#getting_indexed,#preventing_crawling,#increasing_prominence').hover(function(){
      $('li.active').removeClass('active');
      $('.active').removeClass('active'); 
       $('.nav-menu-button li').removeClass('active');
       $('#' + $(this).attr('id') + 'Li').addClass('active');
       if (["getting_indexed", "preventing_crawling", "increasing_prominence"].indexOf($(this).attr('id')) > -1) {
         $('#dropdown1 li').removeClass('active');
         if($('#' + $(this).attr('id') +  'Li').parent().parent().attr('id') === 'methodsLi') {
           $('.nav-menu-button li').removeClass('active');
           $('#methodsLi').addClass('active');    
           $('#' + $(this).attr('id') + 'Li').addClass('active');
         } else {
           $('.nav-menu-button li').removeClass('active');
         }
       }
       
       
    });
    
    
    $('li#homeLi').click(function() {
      location.href = location.protocol + "//" + location.host;
    });
    
  }); // end of document ready
})(jQuery); // end of jQuery name space



// $(function() {
// 	// Set this variable with the height of your sidebar + header
// 	var offsetPixels =  780;

// 	$(window).scroll(function() {
// 		if ($(window).scrollTop() > offsetPixels) {
// 			$( ".sidebarBox" ).css({
// 				"position": "fixed",
// 				"top": "15px"
// 			});
// 		} else {
// 			$( ".sidebarBox" ).css({
// 				"position": "static"
// 			});
// 		}
// 	});
// });
