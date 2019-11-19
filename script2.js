
$(function()
{
    $('#plotMode').change(function(){
      if ($(this).val() == 'seeMode') {
         console.log('Seeing');
         $('#seeing').replaceWith('<input type="text" name="seeing" id="seeing" value="2,3,4,5,6">');
         $('#sky').replaceWith('<select type="text" name="sky" id="sky"></select>');
      }
      if ($(this).val() == 'skyMode') {
         console.log('Sky');
         $('#seeing').replaceWith('<select type="text" name="seeing" id="seeing"></select>');
         $('#sky').replaceWith('<input type="text" name="sky" id="sky" value="2,3,4,5,6">');
      }
    });

}
);
