/* http://foundation.zurb.com/forum/posts/743-accordions---how-do-you-animate-opening-and-closing-content */

$(".accordion dd").on("click", "a:eq(0)", function (event)
      {
        var dd_parent = $(this).parent();

        if(dd_parent.hasClass('active'))
          $(".accordion dd div.content:visible").slideToggle("normal");
        else
        {
          $(".accordion dd div.content:visible").slideToggle("normal");
          $(this).parent().find(".content").slideToggle("normal");
        }
      });

/* Exercises Page */
	$('.exercise').click(function(){

		$('.active-type-link').removeClass('active-type-link');
		$(this).addClass('active-type-link');
		link_index = $(this).data('index');

		$('.exercise_text').each(function(){
			var content_index = $(this).data('index');
			if(content_index == link_index) {
				$('.active_exercise').removeClass('active_exercise');
				$(this).addClass('active_exercise');
			}
		});
	});

$('.exercise-list').first().show();
$('.exercise-container > li > span').first().addClass('active');

$('.exercise-container > li > span').click(function() {
	$('.exercise-container > li > span').removeClass('active');
	$('.exercise-list').slideUp();
	$(this).toggleClass('active').parent().children('ul').slideDown().children('li').first().trigger('click');
});

/* Resources Page */

$('.button').click(function(){
	$('.active-button').removeClass('active-button');
	$(this).addClass('active-button');
	btn_index = $(this).data('index');
	
	if(btn_index==1){
		$('.active-list').removeClass('active-list');
		$('.class-list').addClass('active-list');
	}
	else{
		$('.active-list').removeClass('active-list');
		$('.general-list').addClass('active-list');
	}
});