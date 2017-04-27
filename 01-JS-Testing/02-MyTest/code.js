console.log("Test 1");

// executes the Main Function.
function init(){
    // Storing the value of Input
var txt1 = document.getElementById("txt-1").value;

    // Execution.
console.log("Text: ", txt1);
getRequest(txt1);

    // Cleans the Input Area.
document.getElementById("txt-1").value = "";
}






// Executes Main Function init() when hit "ENTER".
var sr1 = document.getElementById("txt-1");
sr1.addEventListener("keydown", function(keyPress){

if ( keyPress.keyCode == 13) {
    console.log("inside 1");
    init();
 }

});




// Executes Main Function init() when "CLICK" in Picture.
var sr2 = document.getElementById("pic1");
sr2.addEventListener("click", function(){

console.log("La Foto");
init();
});



function getRequest(txt1){
    url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyDAKDaBy_JDwcScSHqDQimOOLjdPImLanc',
        q: txt1
    };



    $.getJSON(url, params, function (txt1) {
        showResults(txt1);
    });


    console.log("Excution in GetReq: ", txt1);

}

function showResults(results) {
    var html = "";
    var entries = results.items;

    console.log("Los Resultados: ", results);
    console.log("Entradas: ", entries);

    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        var thumbnail = value.snippet.thumbnails.default.url;

        var vdo = value;
        console.log("VDO: ", vdo);

        html += '<p>' + title + '</p>';
        html += '<img src="' + thumbnail + '">';
    });

    $('#search-results').html(html);
}
