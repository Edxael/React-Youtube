console.log("Test 1");



    // executes the Main Function.
function init(){
        // Storing the value of Input
    var txt1 = document.getElementById("txt-1").value;

        // Execution.
    console.log("Text: ", txt1);

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
