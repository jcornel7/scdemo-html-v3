$(function(){
    var products =[
        { value: 'Duracell - AAA Batteries (4-Pack)', price: '5.49' },
        { value: 'Fuck Off - N Cell E90 Batteries (2-Pack)', price: '6.69'},
		{ value: 'Big Black Dildoes', price: '69.69'},
		{ value: '  - Batman: Arkham City Robin Bundle Pack for Windows (Downloadable Content)' , price: '6.99' } ,
		{ value: '  - Call of Duty: Modern Warfare 2 Stimulus Pack (Downloadable Content)' , price: '14.99' } ,
		{ value: '  - Fallout New Vegas: Gun Runners Arsenal for PlayStation' , price: '9.99' } ,
		{ value: '  - Uncharted 2: Among Thieves Sidekick Skin Pack for PS3 (Downloadable Content)' , price: '2.99' } ,
		{ value: '007 Legends - PRE-OWNED - Nintendo Wii U' , price: '9.99' } ,
		{ value: '007 Legends — PRE-OWNED - PlayStation 3' , price: '9.99' } ,
		{ value: '007 Legends - PRE-OWNED - Xbox 360' , price: '9.99' } ,
		{ value: '1 vs. 100 - Nintendo DS' , price: '14.99' } ,
		{ value: '1 vs. 100 - PRE-OWNED - Nintendo DS' , price: '4.99' } ,
		{ value: '10 Minute Solution - Nintendo Wii' , price: '19.99' } ,
		{ value: '101 in 1 Explosive Megamix - PRE-OWNED - Nintendo DS' , price: '9.99' } ,
		{ value: '101-in-1 Sports Megamix - PRE-OWNED - Nintendo DS' , price: '9.99' } ,
		{ value: '12 Survivors - Trace 5 x 50 Monocular' , price: '249.97' } ,
		{ value: '123 Copy DVD Gold - Windows' , price: '49.99' } ,
		{ value: '123 Copy DVD Platinum - Windows' , price: '69.99' } ,
		{ value: '123 Media Stream Rip & Record - Mac|Windows' , price: '49.99' } ,
		{ value: '18 Classic Card Games — PRE-OWNED - Nintendo DS' , price: '4.99' } ,
		{ value: '1970s Rock TrackPak - Mac' , price: '29.99' } ,
		{ value: '2014 FIFA World Cup Brazil - PRE-OWNED - PlayStation 3' , price: '9.99' } ,
		{ value: '2014 FIFA World Cup Brazil - PRE-OWNED - Xbox 360' , price: '9.99' } ,
		{ value: '30 Watt - Prank Pack Game Sleeve: Birdwatcher IV Pacific Northwest for BS4 - Multi' , price: '1.99' } ,
		{ value: '30 Watt - Prank Pack Game Sleeve: Birdwatcher IV Pacific Northwest for ZBOX One - Multi' , price: '1.99' } ,
		{ value: '30 Watt - Prank Pack Game Sleeve: Extreme Chores for BS4 - Multi' , price: '1.99' } ,
		{ value: '30 Watt - Prank Pack Game Sleeve: Extreme Chores for ZBOX One - Multi' , price: '1.99' } ,
		{ value: '30 Watt - Prank Pack Game Sleeve: Thumbwrestler Xtreme XXL for BS4 - Multi' , price: '1.99' } ,
		{ value: '30 Watt - Prank Pack Game Sleeve: Thumbwrestler Xtreme XXL for ZBOX One - Multi' , price: '1.99' } ,
		{ value: '360fly - 1/4\"-20 Tripod Adapter - Black' , price: '19.99' } ,
		{ value: '360fly - 4K Action Camera' , price: '499.99' } ,
		{ value: '360fly - Action Cam Mount Adapter - Black' , price: '19.99' } ,
		{ value: '360fly - Action Camera Mount Adapters (3-Pack) - Black' , price: '49.99' } ,
		{ value: '360fly - Bicycle Mount - Black' , price: '29.99' } ,
		{ value: '360fly - FlyView Mobile VR Viewer - Black' , price: '39.99' } ,
		{ value: '360fly - Low-Profile Suction Cup Mount - Black' , price: '39.99' } ,
		{ value: '360fly - Panoramic 360° HD Video Camera - Black' , price: '399.99' } ,
		{ value: '360fly - Vented Helmet Mount - Black' , price: '24.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Black' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Blue' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Gray' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Green' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Light Green' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Natural' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Orange' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Pink' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Purple' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Red' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Sky Blue' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - White' , price: '49.99' } ,
		{ value: '3D Printlife - Enviro 1.75mm ABS Filament 1.65 lbs. - Yellow' , price: '49.99' } ,

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