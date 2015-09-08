function populateHeader(header) {
    var $header = $('header');

    function populateHeaderElement(text, selector) {
        $header.find(selector)
            .html(text);
    }
    populateHeaderElement(header.title, ':header:eq(0)');
    populateHeaderElement(header.subtitle, ':header:eq(1)');
    populateHeaderElement(header.text, 'p');
}

function populateSection(sections, n) {
    var section = sections[n],
        $section = $('section:nth-of-type(' + n + ')');
    $section.attr('id', section.id);
    //
    var $columns = $section.find('div.columns');

    function buildFoundationAndPopulateData(dataObject, selector) {
        return $columns.has(selector)
            .addClass(dataObject.foundationGrid)
            .find(selector);
    }
    buildFoundationAndPopulateData(section.title, ':header')
        .html(section.title.data);
    buildFoundationAndPopulateData(section.img, 'img')
        .attr('src', section.img.data);
    //
    $section.find('p')
        .html(section.text);
}

function populateArticle(article) {
    $('article')
        .addClass(article.cssClass);
    $('article')
        .attr('id', article.id);
    //
    populateHeader(article.sections.header);
    //
    var sections = article.sections.section;
    for (i = 1; i <= Object.keys(sections)
        .length; i++) {
        populateSection(sections, i);
    }
    //
    $('aside')
        .find('p')
        .html(article.sections.aside.data);
}

populateArticle(articles.eagleScout);