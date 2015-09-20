$(document)
  .foundation();

function centerTextVerticallyWithImage() {
  $('.center-vertically')
    .each(function () {
      var $closestImg = $(this)
        .closest('.row')
        .find('img:visible');
      var margin = ($closestImg.height() - $(this)
        .height()) / 2;
      $(this)
        .css('margin', margin + 'px 0px');
    });
}

function fadeInAndOutIntroSection(section, ms) {
  console.log(section);
  $(section)
    .show();
  var $sectionDivs = $(section + ' > div');
  $sectionDivs.has('h2')
    .delay(ms.blank)
    .fadeIn(ms.fadeIn)
    .delay(ms.delay + ms.blank) //match image fadeOut time
    .fadeOut(ms.fadeOut);
  $sectionDivs.has('img')
    .delay(2 * ms.blank) //delay start of img
    .fadeIn(ms.fadeIn)
    .delay(ms.delay)
    .fadeOut(ms.fadeOut);
}

var introSections = ['#intro-georgia-tech', '#intro-union-pacific', '#intro-global-travel', '#intro-eagle-scout'];
var ms = {
  fadeIn: 400,
  delay: 1200,
  fadeOut: 700,
  blank: 500
};
ms.combined = ms.fadeIn + ms.delay + ms.fadeOut + 2 * ms.blank;

$(window)
  .load(function () {
    var i;
    for (i = 0; i < introSections.length; i++) {
      setTimeout(
        function () {
          fadeInAndOutIntroSection(introSections.shift(), ms);
        },
        ms.combined * i
      );
    }
    centerTextVerticallyWithImage();
    $(window)
      .resize(function () {
        centerTextVerticallyWithImage();
      });
  });
