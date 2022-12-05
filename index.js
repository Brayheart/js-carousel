$('.item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
      next=next.next();
      if (!next.length) {
          next = $(this).siblings(':first');
        }
      
      next.children(':first-child').clone().appendTo($(this));
    }
  });
  
  $(".carousel").swipe({
  
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
  
    },
    allowPageScroll:"vertical"
  
  });