
var task = [
    {hours: "",
    plann : ""
},

];
var timeEl = document.querySelector ("#currentDay");
timeEl.textContent= moment().format("MM/D/ YYYY  H:MM a");

var checkColor = function () {
var currentTime = parseInt(moment().format("H"));
 $(".time-block").each(function(){
    var blockTime = parseInt($(this).attr('id'));
    $(this).removeClass("past present future");
    if (blockTime < currentTime){
        $(this).addClass("past");
    }
    else if (blockTime > currentTime){
        $(this).addClass("future");
    }
    else {
        $(this).addClass("present");
    }
 });
};
checkColor();

// var saveItem = function(){
//         var itemId = $(this).attr("id");
//         debugger;
//         task.push($("#"+itemId+"textarea").val());
//         debugger;
//         console.log (task);
        
// };
    

$(document).on('click', '.saveBtn', function(event) {
        event.preventDefault();
        var itemId = $(this).parent().attr("id");
        var textinput = $("#"+itemId+"textarea").val();
        console.log(textinput);
        //task.push(itemId);
        task.push(textinput);

        console.log (task);
        
     } );
            








// var list = JSON.parse(localStorage.getItem('todolist')) || [];
// $(".description").each(function(){
//     for ( var i = 0; i < 16; i ++){
//     $(this).attr ("id", i);
//     //debugger;
//     var getText = $(this).val();
//      $(".saveBtn").addListener("click", function(event){
//         event.preventDevault ();
//         list.push (getText);
//     });
    
//     //debugger;
// }
// });

// $(".saveBtn").each(function(){
   
//     for (var i=9; i<17 i++ ){

// }
// });



