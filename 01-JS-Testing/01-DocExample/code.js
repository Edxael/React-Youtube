console.log("Hola Infer 3");


$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });
});



function getRequest(searchTerm) {
    url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyDAKDaBy_JDwcScSHqDQimOOLjdPImLanc',
        q: searchTerm
    };

    console.log("Params: ", params);

    $.getJSON(url, params, function (searchTerm) {
        showResults(searchTerm);
    });

    console.log("Params: ", params);
}



function showResults(results) {
    var html = "";
    var entries = results.items;

    console.log("Las Entradas: ", entries);

    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        var thumbnail = value.snippet.thumbnails.default.url;
        html += '<p>' + title + '</p>';
        html += '<img src="' + thumbnail + '">';
    });

    $('#search-results').html(html);
}
