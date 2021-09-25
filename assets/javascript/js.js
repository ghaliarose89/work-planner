// arr to save tasks
var task = [];
// displaying the current time
var timeEl = document.querySelector ("#currentDay");
timeEl.textContent= moment().format("MM/D/ YYYY  H:MM a");

// function to get the tasks and hours frm local-storage
var showPlan = function (){
    var displayPlan= JSON.parse(localStorage.getItem ("plan")) || []

    for ( var i = 0; i <displayPlan.length; i ++) {
        var hour = displayPlan[i].hours;// giting hour to display it and git the corrisponding task for the same hour
        $("#txt-" + hour).val(displayPlan[i].userTask); 
    }
};


var checkColor = function () {
var currentTime = parseInt(moment().format("H"));
 $(".time-block").each(function(){
    var blockTime = parseInt($(this).attr('id'));// pars to get the value as number to commpare it with current time
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
        var itemId = $(this).parent("div.row").attr("id");//giting the div id to get the corrisponding text area 
        var textinput = $("#txt-" + itemId).val();
       task = JSON.parse ( localStorage.getItem("plan")) || [];
        task.push ( {hours:itemId ,  userTask : textinput});
        localStorage.setItem ("plan",JSON.stringify(task));
     } );
            










