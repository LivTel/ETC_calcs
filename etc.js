
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


$(function()
{
   $('#spplotMode').change(function(){
      showHideSpTextSlider($(this).val());
   });
   var defaultValue = $('#spplotMode').val();
   showHideSpTextSlider(defaultValue);
}
);


var hideSlider = function(id){
   var $slider = $(id).siblings('.slider');
   $slider.hide();
   $(id).hide();
};



var showHideTextSlider = function(plotMode){
   //Show all elements
   $('.slider#imSlider').show();
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


var showHideSpTextSlider = function(plotMode){
   //Show all elements
   $('.slider#spSlider').show();
   $('.spconstraintTextInput').show();
   //Then Hide the unrequired required inputs
   if (plotMode == 'spsnrMode') {
      hideSlider('#spsnrSlid');
      $('#spseeText').hide();
      $('#spskyText').hide();

  }
   if (plotMode == 'spseeMode') {
      $('#spsnrText').hide();
      hideSlider('#spseeSlid');
      $('#spskyText').hide();
  }
   if (plotMode == 'spskyMode') {
      $('#spsnrText').hide();
      $('#spseeText').hide();
      hideSlider('#spskySlid');
  }

};
