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