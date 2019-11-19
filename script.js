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
      if ($(this).val() == 'snrMode') {
         console.log('Mode: SNR');
      }
      if ($(this).val() == 'seeMode') {
         console.log('Mode: Seeing');
         $('#seeing').replaceWith('<input type="text" data-slider-id="ex1Slider" name="seeing" id="seeing" value="2,3,4,5,6">');
         $('#sky').replaceWith('<select data-slider-id="ex1Slider" type="text" name="sky" id="sky"></select>');
      }
      if ($(this).val() == 'skyMode') {
         console.log('Mode: Sky');
         $('#seeing').replaceWith('<select type="text" name="seeing" id="seeing"></select>');
         $('#sky').replaceWith('<input type="text" name="sky" id="sky" value="2,3,4,5,6">');
      }


    });

}
);
