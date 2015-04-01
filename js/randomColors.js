///////////////////////////////////////////////////////////////////////////////
// Welcome to Russell's dream world of random colors! /////////////////////////
// based on a bunch of template from peeps and mixed it to my dream :-D ///////
///////////////////////////////////////////////////////////////////////////////
// Only catch is that it wraps every element in a span, so be careful! ////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
////           classes that you have at your disposal:              ///////////
////                                                                ///////////
////    .random-colors, .bright-colors, .neon-colors, .dull-color,  ///////////
////    .dull-color-alt, .half-color, .gre-scale, .grey-scale-alt,  ///////////
////    .grey-scale-wide, .grey-scale-narrow, .black-scale,         ///////////
////    .black-scale-alt, black-scale-wide, black-scale-narrow,     ///////////
////    .white-scale, .white-scale-alt, .white-scale-wide,          ///////////
////    .white-scale-narrow, .black-and-white, .black-and-grey,     ///////////
////    .speckle-black, .black-speckle-color, .black-speckle-color-dull ///////
////    .black-maybe-color, .speckle-white, .white-speckle-color,   ///////////
////    .white-speckle-color-dull, .white-maybe-color               ///////////
////                                                                ///////////
////     ---Colors---                                               ///////////
////    .red, .orange, .yellow, .green, .blue, .purple, .cyan,      ///////////
////                                                                ///////////
////     ---Themes---                                               ///////////
////    .forest, more to come.....                                  ///////////
////                                                                ///////////
///////////////////////////////////////////////////////////////////////////////
///////////////// Enjoy! //////////////////////////////////////////////////////
/////////////////////////////////// RussellSnyder.io //////////////////////////
///////////////////////////////////////////////////////////////////////////////


$('.color').each(function(){
  $(this).html($(this).text().replace(/(\w)/g, "<span>$&</span>"));
});


$('.random-color').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var color= '#'+ (Math.random() * 0xffffff).toString(16).substr(-6);
    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.bright-color').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var color= '#'+ (((Math.random() * 0.1) + 0.75) * 0xffffff).toString(16).substr(-6);
    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.neon-color').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

    for(var i=0; i<len; i++){
    var hex= '#';
    var base = 0;
    var red = (15 - (Math.round(Math.random())) * 15).toString(16) +
              (15 - (Math.round(Math.random())) * 15).toString(16);
    var green = (15 - (Math.round(Math.random())) * 15).toString(16) +
              (15 - (Math.round(Math.random())) * 15).toString(16);
    var blue = (15 - (Math.round(Math.random())) * 15).toString(16) +
              (15 - (Math.round(Math.random())) * 15).toString(16);
    var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.dull-color').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var base = 0;
    var red = (Math.floor(Math.random() * 4) + 6).toString(16) +
                (Math.floor(Math.random() * 0) + 0).toString(16);
    var green = (Math.floor(Math.random() * 4) + 6).toString(16) +
                (Math.floor(Math.random() * 0) + 0).toString(16);
    var blue = (Math.floor(Math.random() * 4) + 6).toString(16) +
                (Math.floor(Math.random() * 0) + 0).toString(16);
    var color = hex + red + green + blue;
    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.dull-color-alt').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = ((Math.round(Math.random())) * 8).toString(16) +
            ((Math.round(Math.random())) * 15).toString(16);
  var green = ((Math.round(Math.random())) * 8).toString(16) +
            ((Math.round(Math.random())) * 15).toString(16);
  var blue = ((Math.round(Math.random())) * 8).toString(16) +
            ((Math.round(Math.random())) * 15).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});



$('.half-color').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = ((Math.round(Math.random()) * 10)).toString(16) +
            ((Math.round(Math.random())) * 0).toString(16);
  var green = ((Math.round(Math.random())) * 10).toString(16) +
            ((Math.round(Math.random())) * 0).toString(16);
  var blue = ((Math.round(Math.random())) * 10).toString(16) +
            ((Math.round(Math.random())) * 0).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.grey-scale').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var white = ((Math.floor(Math.random() * 1.5) + 5)).toString(16) +
                (Math.floor(Math.random() * 0.5) + 0).toString(16);
    var color = hex + white + white + white;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.grey-scale-alt').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var white = ((Math.floor(Math.random() * 1.8) + 7)).toString(16) +
                (Math.floor(Math.random() * 5) - 4).toString(16);
    var color = hex + white + white + white;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.grey-scale-wide').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var base = 0;
    var red = (Math.floor(Math.random() * 4) + 4).toString(16) +
                (Math.floor(Math.random() * 0) + 0).toString(16);
    var green = (Math.floor(Math.random() * 4) + 4).toString(16) +
                (Math.floor(Math.random() * 0) + 0).toString(16);
    var blue = (Math.floor(Math.random() * 4) + 4).toString(16) +
                (Math.floor(Math.random() * 0) + 0).toString(16);
    var color = hex + red + green + blue;
    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.grey-scale-narrow').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var white = ((Math.floor(Math.random() * 1.01) + 5)).toString(16) +
                (Math.floor(Math.random() * 0.1) + 0).toString(16);
    var color = hex + white + white + white;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.black-scale').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var base = 0;
    var red,green,blue = (base + (Math.floor(Math.random() * 1) + 15)).toString(16) +
                (Math.floor(Math.random() * 13) + 3).toString(16);
    var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.black-scale-alt').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var base = 0;
    var red = (base + (Math.floor(Math.random() * 4) + 0)).toString(16) +
                (Math.floor(Math.random() * 2) + 3).toString(16);
    var green = (base + (Math.floor(Math.random() * 4) + 0)).toString(16) +
                (Math.floor(Math.random() * 2) + 3).toString(16);
    var blue = (base + (Math.floor(Math.random() * 4) + 0)).toString(16) +
                (Math.floor(Math.random() * 2) + 3).toString(16);

    var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.black-scale-wide').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var base = 0;
    var red = (base + (Math.floor(Math.random() * 6) + 0)).toString(16) +
                (Math.floor(Math.random() * 2) + 3).toString(16);
    var green = (base + (Math.floor(Math.random() * 2) + 1)).toString(16) +
                (Math.floor(Math.random() * 2) + 6).toString(16);
    var blue = (base + (Math.floor(Math.random() * 2) + 0)).toString(16) +
                (Math.floor(Math.random() * 2) + 6).toString(16);

    var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.black-scale-narrow').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var base = 0;
    var red,green,blue = (base + (Math.floor(Math.random() * 7) - 5)).toString(16) +
                (Math.floor(Math.random() * 15) - 10).toString(16);
    var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.white-scale').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var red = ((Math.floor(Math.random() * 2) + 13)).toString(16) +
                (Math.floor(Math.random() * 2) + 13).toString(16);
    var green = ((Math.floor(Math.random() * 2) + 13)).toString(16) +
                (Math.floor(Math.random() * 2) + 13).toString(16);
    var blue = ((Math.floor(Math.random() * 2) + 13)).toString(16) +
                (Math.floor(Math.random() * 2) + 13).toString(16);
    var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.white-scale-alt').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var red = ((Math.floor(Math.random() * 1) + 13)).toString(16) +
                (Math.floor(Math.random() * 2) + 14).toString(16);
    var green = ((Math.floor(Math.random() * 1) + 13)).toString(16) +
                (Math.floor(Math.random() * 2) + 14).toString(16);
    var blue = ((Math.floor(Math.random() * 1) + 13)).toString(16) +
                (Math.floor(Math.random() * 2) + 14).toString(16);
    var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.white-scale-wide').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var white = ((Math.floor(Math.random() * 5) + 10)).toString(16) +
                (Math.floor(Math.random() * 15) + 0).toString(16);
    var color = hex + white + white + white;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.white-scale-narrow').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var white = ((Math.floor(Math.random() * 2) + 13)).toString(16) +
                (Math.floor(Math.random() * 2) + 13).toString(16);
    var color = hex + white + white + white;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.black-and-white').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
    var hex= '#';
    var white = ((Math.round(Math.random())) * 15).toString(16) +
                ((Math.round(Math.random())) * 15).toString(16);
    var color = hex + white + white + white;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.black-and-grey').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = ((Math.round(Math.random())) * 15 - 7).toString(16) +
            ((Math.round(Math.random())) * 5).toString(16);
  var green = ((Math.round(Math.random())) * 15 - 7).toString(16) +
            ((Math.round(Math.random())) * 5).toString(16);
  var blue = ((Math.round(Math.random())) * 15 - 7).toString(16) +
            ((Math.round(Math.random())) * 5).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.speckle-black').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = (Math.round(Math.random() * 15) + 2).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (Math.round(Math.random() * 15) + 2).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (Math.round(Math.random() * 15) + 2).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.black-speckle-color').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = (Math.round(Math.random() * 15) - 5).toString(16) +
            (Math.round(Math.random() * 1)).toString(16);
  var green = (Math.round(Math.random() * 15) - 5).toString(16) +
            (Math.round(Math.random() * 1)).toString(16);
  var blue = (Math.round(Math.random() * 15) - 5).toString(16) +
            (Math.round(Math.random() * 1)).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.black-speckle-color-dull').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = (Math.round(Math.random() * 10) - 4).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var green = (Math.round(Math.random() * 10 ) - 4).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var blue = (Math.round(Math.random() * 10) - 4).toString(16) +
            (Math.round(Math.random() * 15)).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.black-maybe-color').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = (Math.round(Math.random() * 15) - 6).toString(16) +
            (Math.round(Math.random() * 15) - 7).toString(16);
  var green = (Math.round(Math.random() * 15) - 6).toString(16) +
            (Math.round(Math.random() * 15) - 7).toString(16);
  var blue = (Math.round(Math.random() * 15) - 6).toString(16) +
            (Math.round(Math.random() * 15) - 7).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.speckle-white').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = (15 - (Math.round(Math.random())) * 10).toString(16) +
            (15 - (Math.round(Math.random())) * 2).toString(16);
  var green = (15 - (Math.round(Math.random())) * 10).toString(16) +
            (15 - (Math.round(Math.random())) * 2).toString(16);
  var blue = (15 - (Math.round(Math.random())) * 10).toString(16) +
            (15 - (Math.round(Math.random())) * 2).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.white-speckle-color').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = (15 - (Math.round(Math.random() * 0.55) * 15)).toString(16) +
            (15 - (Math.round(Math.random() * 0.61) * 15)).toString(16);
  var green = (15 - (Math.round(Math.random() * 0.55) * 15)).toString(16) +
            (15 - (Math.round(Math.random() * 0.61) * 15)).toString(16);
  var blue = (15 - (Math.round(Math.random() * 0.55) * 15)).toString(16) +
            (15 - (Math.round(Math.random() * 0.61) * 15)).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.white-speckle-color-dull').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = (15 - (Math.round(Math.random() * 0.55) * 4)).toString(16) +
            (15 - (Math.round(Math.random() * 0.61) * 4)).toString(16);
  var green = (15 - (Math.round(Math.random() * 0.55) * 4)).toString(16) +
            (15 - (Math.round(Math.random() * 0.61) * 4)).toString(16);
  var blue = (15 - (Math.round(Math.random() * 0.55) * 4)).toString(16) +
            (15 - (Math.round(Math.random() * 0.61) * 4)).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.white-maybe-color').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = (15 - (Math.round(Math.random() * 0.501) * 8)).toString(16) +
            (15 - (Math.round(Math.random() * 0.51) * 15)).toString(16);
  var green = (15 - (Math.round(Math.random() * 0.501) * 8)).toString(16) +
            (15 - (Math.round(Math.random() * 0.51) * 15)).toString(16);
  var blue = (15 - (Math.round(Math.random() * 0.501) * 8)).toString(16) +
            (15 - (Math.round(Math.random() * 0.51) * 15)).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.red').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
                      // red green blue
  var color= '#'+ (
  //red
  0xff0000 +
  //random
  Math.floor((Math.random() * 127))
  //random amount
  // (Math.random() * 1000)
  // green
  // 0x00ff00 +
  // // blue
  // 0x0000ff +
  // black
  ).toString(16).substr(-6);
    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.orange').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
  var hex= '#';
  var base = 0;
  var red = (Math.floor(Math.random() * 3) + 12).toString(16) +
              (Math.floor(Math.random() * 15) + 0).toString(16);
  var green = (Math.floor(Math.random() * 3) + 4).toString(16)  +
                (0).toString(16);
  var blue = (0).toString(16) + (0).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.yellow').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
                      // red green blue
  var hex= '#';
  var base = 0;
  var red = (Math.floor(Math.random() * 2) + 13).toString(16) +
              (Math.floor(Math.random() * 1) + 14).toString(16);
  var green = (Math.floor(Math.random() * 2) + 13).toString(16) +
              (Math.floor(Math.random() * 1) + 14).toString(16);
  var blue = (0).toString(16) + (0).toString(16);
  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.green').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
                      // red green blue
  var hex= '#';
  var base = 0;
  var red = (0).toString(16) + (0).toString(16);
  var green = (Math.floor(Math.random() * 6) + 9).toString(16) +
              (Math.floor(Math.random() * 6) + 9).toString(16);
  var blue = (0).toString(16) + (0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.forest').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
                      // red green blue
  var color= '#'+ (
    // hex
    '0x' +
  //red
    '00' +
  // green
  Math.floor((Math.random() * (255*255))) +
  // // blue
    '00'
  // black
  ).toString(16).substr(-6);
    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.blue').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
                      // red green blue
  var hex= '#';
  var base = 0;
  var red = (0).toString(16) + (0).toString(16);
  var green = (0).toString(16) + (0).toString(16);
  var blue = (Math.floor(Math.random() * 6) + 9).toString(16) +
              (Math.floor(Math.random() * 6) + 9).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});


$('.purple').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
                      // red green blue
  var hex= '#';
  var base = 0;
  var red = (Math.floor(Math.random() * 6) + 6).toString(16) +
              (Math.floor(Math.random() * 15) + 0).toString(16);
;
  var green = (0).toString(16) + (0).toString(16);
  var blue = (Math.floor(Math.random() * 6) + 9).toString(16) +
              (Math.floor(Math.random() * 15) + 0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});

$('.cyan').find('span').each(function(){

  var $el = $(this),
    text = $el.text(),
    len = text.length,
    newCont = '';

  for(var i=0; i<len; i++){
                      // red green blue
  var hex= '#';
  var base = 0;
  var red = (0).toString(16) + (0).toString(16);
  var green = (Math.floor(Math.random() * 6) + 6).toString(16) +
              (Math.floor(Math.random() * 15) + 0).toString(16);
  var blue = (Math.floor(Math.random() * 6) + 9).toString(16) +
              (Math.floor(Math.random() * 15) + 0).toString(16);

  var color = hex + red + green + blue;

    newCont += '<span style="color:'+color+'">'+ text.charAt(i) +'</span>';
  }

  $el.html(newCont);

});
