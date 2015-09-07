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
    var header = article.sections.header,
        $header = $('header');

    function populateHeader(text, selector) {
        $header.find(selector)
            .html(text);
    }
    populateHeader(header.title, ':header:eq(0)');
    populateHeader(header.subtitle, ':header:eq(1)');
    populateHeader(header.text, 'p');
    //
    var sections = article.sections.section;
    populateSection(sections, 1);
    populateSection(sections, 2);
    //
    $('aside')
        .find('p')
        .html(article.sections.aside.data);
}
populateArticle(articles.unionPacific);
