// Add your javascript here
$(function(){
 $("#binn").chained("#instrum");
});

$(function(){
 $("#filt").chained("#instrum");
});

$(function(){
 $("#spslit").chained("#spinstrum");
});

$(function(){
 $("#sparm").chained("#spinstrum");
});


$(function()
{

   $('#plotMode').change(function(){
      showHideTextSlider($(this).val());
   });
   var defaultValue = $('#plotMode').val();
   showHideTextSlider(defaultValue);
}
);

var hideSlider = function(id){
   var $slider = $(id).siblings('.slider');
   $slider.hide();
   $(id).hide();
};



var showHideTextSlider = function(plotMode){
   //Show all elements
   $('.slider').show();
   $('.constraintTextInput').show();
   //Then Hide the unrequired required inputs
   if (plotMode == 'snrMode') {
      hideSlider('#snrSlid');
      $('#seeText').hide();
      $('#skyText').hide();

  }
   if (plotMode == 'seeMode') {
      $('#snrText').hide();
      hideSlider('#seeSlid');
      $('#skyText').hide();
  }
   if (plotMode == 'skyMode') {
      $('#snrText').hide();
      $('#seeText').hide();
      hideSlider('#skySlid');
  }

};
