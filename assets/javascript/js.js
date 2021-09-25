
var task = [];

var timeEl = document.querySelector ("#currentDay");
timeEl.textContent= moment().format("MM/D/ YYYY  H:MM a");

var showPlan = function (){
    var displayPlan= JSON.parse(localStorage.getItem ("plan")) || []
    console.log(displayPlan);
    for ( var i = 0; i <displayPlan.length; i ++) {
        console.log (displayPlan[i]);
        var hour = displayPlan[i].hours;
        $("#txt-" + hour).val(displayPlan[i].userTask);
        console.log (displayPlan[i].userTask); 
    }
};


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
showPlan();

$(document).on('click', '.saveBtn', function(event) {
        event.preventDefault();
        var itemId = $(this).parent("div.row").attr("id");
        console.log (itemId);
        var textinput = $("#txt-" + itemId).val();
        console.log(textinput);
       task = JSON.parse ( localStorage.getItem("plan")) || [];
        task.push ( {hours:itemId ,  userTask : textinput});
        console.log (task);
        localStorage.setItem ("plan",JSON.stringify(task));
     } );
            










