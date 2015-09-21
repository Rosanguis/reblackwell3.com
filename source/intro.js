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

var introSections = ['georgia-tech', 'union-pacific', 'global-travel', 'eagle-scout'],
  ms = {
    fadeIn: 600,
    delay: 1500,
    fadeOut: 700,
    blank: 500
  };
ms.combined = ms.fadeIn + ms.delay + ms.fadeOut + 2 * ms.blank;

function fadeInAndOutIntroSection(section, ms) {
  var introSection = '#intro-' + section,
    $sectionDivs = $(introSection + ' > div');

  $(introSection)
    .show();

  $sectionDivs.css('opacity', '0').show();
  $sectionDivs.has('h2')
    .delay(ms.blank)
    .animate({
        opacity: 1
      },
      ms.fadeIn)
    .delay(ms.delay + ms.blank) //match image fadeOut time
    .fadeOut(ms.fadeOut);
  $sectionDivs.has('img')
    .delay(2 * ms.blank) //delay start of img
    .animate({
        opacity: 1
      },
      ms.fadeIn)
    .delay(ms.delay)
    .fadeOut(ms.fadeOut);

}

var gridSections = ['georgia-tech', 'eagle-scout', 'union-pacific', 'global-travel'];

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
      setTimeout(
        function () {
          $('#grid-' + gridSections.shift() + ' img').fadeIn(ms.fadeIn);
        },
        ms.combined * introSections.length + (ms.fadeIn + ms.blank) * i)
    }
    centerTextVerticallyWithImage();
    $(window)
      .resize(function () {
        centerTextVerticallyWithImage();
      });
  });
