$(document)
    .foundation();
$(document)
    .foundation({
        equalizer: {
            equalize_on_stack: true
        }
    });

var articleIds = ['#about-georgia-tech', '#about-union-pacific', '#about-global-travel', '#about-eagle-scout'];
for (var i = 0; i < articleIds.length; i++) {
    $(articleIds[i] + ' ul.small-block-grid-2')
        .find('img:eq(' + i + ')')
        .css('opacity', '1');
}
