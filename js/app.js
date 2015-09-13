$(document)
    .foundation();

function equalizeDocument() {
    $(document)
        .foundation({
            equalizer: {
                equalize_on_stack: true
            }
        });
};
equalizeDocument();

function buildHandlebarHtml(articleId) {
    var handlebarScript = $(articleId)
        .find('script');
    var template = Handlebars.compile(handlebarScript.html());
    var templateHtml = template();
    handlebarScript.after(templateHtml);
}

function setActiveTab(activeTabSelector) {
    $('#ul-nav li')
        .removeClass('active');
    $(activeTabSelector)
        .addClass('active');
}

function displayContactPage() {
    var hideElements = $('body')
        .children()
        .not('#topbar', '#contact');
    hideElements.hide();
    $('body')
        .find('#contact')
        .show();
    setActiveTab('#contact-nav');
    equalizeDocument();
}

function displayAboutPage() {
    var hideElements = $('#contact');
    hideElements.hide();
    $('body')
        .children()
        .not('#contact')
        .show();
    setActiveTab('#about-nav');
    equalizeDocument();
}

function centerTextVerticallyWithImage() {
    $('.center-vertically').each(function() {
        var $closestImg = $(this).closest('.row').find('img');
        var margin = ($closestImg.height() - $(this).height()) / 2;
        $(this).css('margin', margin + 'px 0px');
    });
}

$(document)
    .ready(function() {
        Handlebars.registerPartial('article-header', $('#article-header')
            .html());
        var articleIds = ['#about-georgia-tech', '#about-union-pacific', '#about-global-travel', '#about-eagle-scout'];
        for (var i = 0; i < articleIds.length; i++) {
            var articleId = articleIds[i];
            buildHandlebarHtml(articleId);
            $(articleId + ' ul.small-block-grid-2').find('img:eq(' + i + ')')
                .css('opacity', '1');
        }
        centerTextVerticallyWithImage();
        $(window).resize(function() {
            centerTextVerticallyWithImage();
        });
    });