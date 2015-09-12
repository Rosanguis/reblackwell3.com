$(document)
    .foundation();
$(document)
    .foundation({
        equalizer: {
            equalize_on_stack: true
        }
    });
$(document)
    .ready(function () {
        Handlebars.registerPartial('article-header', $('#article-header')
            .html());

        function buildHandlebarHtml(articleId) {
            var handlebarScript = $(articleId)
                .find('script');
            var template = Handlebars.compile(handlebarScript.html());
            var templateHtml = template();
            handlebarScript
                .after(templateHtml);
        }
        
        var articleIds = ['#about-georgia-tech', '#about-union-pacific', '#about-global-travel', '#about-eagle-scout'];
        for (var i = 0; i < articleIds.length; i++) {
            var articleId = articleIds[i];
            buildHandlebarHtml(articleId);
            $(articleId + ' ul.small-block-grid-2')
                .find('img:eq(' + i + ')')
                .css('opacity', '1');
        }
    });
