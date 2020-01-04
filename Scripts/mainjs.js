// Type.js
var typed = new Typed('.typed', {
    strings: 
    ["Witaj na stronie wizytówce Kamila Olszewskigo...", 
    "Programuje od "+ programmingTimeReturner() + " dni i nie mam zamiaru przestać...",
    "Życzę miłego pobytu na stronie :) ..."],
    typeSpeed: 60,
    backSpeed: 20,
    cursorChar: '_',
    smartBackspace: false,
    loop: true
});
  function programmingTimeReturner()
  {
     var dateNow = Date.now(); 
     var dateStart = new Date(2017, 01,01);

     var difference = (dateNow - dateStart) / (1000 * 3600 * 24);
     return Math.round(difference).toString();
  };

// shaking onHover
$(".appsLogo").hover(
    function() {
      $( this ).addClass('animated tada slow');
    }, function() {
      $( this ).removeClass('animated tada slow')
    }
  );

// slide up onHover
$(".btn").hover(
  function() {
    var element = $( this );
    if(!element.hasClass('animated'))
    {
      element.addClass('animated jello')
    }
  }, function() {
    $( this ).removeClass('animated jello')
  }
);

  