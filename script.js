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
        showHide($(this).val());
    });
    var defaultValue = $('#plotMode').val();
    showHide(defaultValue);
}
);

var hideSlider = function(id){
  var $slider = $(id).siblings('.slider');
  $slider.hide();
  $(id).hide();
};


var showHide = function(plotMode){
  $('.slider').show();
  $('.constraintTextInput').show();


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
