(function($){
  $(document).ready(function(){

    $('.js-UcHeader-nav .N').on('mouseenter', function(e){
      var self = $(this);
      $('.UcHeader-subNav').hide();
      self.find('.UcHeader-subNav').slideDown('fast');

    });

    $('.js-UcHeader-nav .N').on('mouseleave', function(e){
      var self = $(this);
      self.find('.UcHeader-subNav').slideUp('fast');
    });

  })
})(jQuery);