var sm_app = window.sm_app || {};

sm_app = {

	settings: {},

	init: function() {
    $('#sm_carouselProducts .carousel-item').each(function(){
          var itemToClone = $(this);

          for (var i=1;i<5;i++) {
            itemToClone = itemToClone.next();

            // wrap around if at end of item collection
            if (!itemToClone.length) {
              itemToClone = $(this).siblings(':first');
            }

            // grab item, clone, add marker class, add to collection
            itemToClone.children(':first-child').clone()
              .addClass("cloneditem-"+(i))
              .appendTo($(this));
          }
        });
  }
};

$(document).ready(function(){
	sm_app.init();

});
