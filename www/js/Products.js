$(function(){
    var products =[
        { value: 'Duracell - AAA Batteries (4-Pack)', price: '5.49' },
        { value: 'Fuck Off - N Cell E90 Batteries (2-Pack)', price: '6.03'}, 
		{ value: 'Dildoes', price: '69.69'},
    ];
  // setup autocomplete function pulling from Names[] array
  $('#autocomplete').autocomplete({
    lookup: products,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Product Name:</strong> ' + suggestion.value + ' <br> <strong>Price:</strong> ' + suggestion.price;
      $('#outputcontent').html(thehtml);
    }
  });
  

});