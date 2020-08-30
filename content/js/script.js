const workDay = [
    {
        id: "8",
        hour: "0800",
        listItem: ""
    },
    {
        id: "9",
        hour: "0900",
        listItem: ""
    },
    {
        id: "10",
        hour: "1000",
        listItem: ""
    },
    {
        id: "11",
        hour: "1100",
        listItem: ""
    },
    {
        id: "12",
        hour: "1200",
        listItem: ""
    },
    {
        id: "13",
        hour: "1300",
        listItem: ""
    },
    {
        id: "14",
        hour: "1400",
        listItem: ""
    },
    {
        id: "15",
        hour: "1500",
        listItem: ""
    },
    {
        id: "16",
        hour: "1600",
        listItem: ""
    },
    {
        id: "17",
        hour: "1700",
        listItem: ""
    }
   
]

const containerEl = document.getElementById('#container');
const initRow = document.getElementsByClassName("row");

$(document).ready(function () {

    console.log("ready!");


//get the current date and place it in the header
    function getCurrentDay() {
        const currentDay = moment().format('dddd, MMMM Do, YYYY');
        $('#currentDay').text(currentDay);
    }
    console.log(currentDay);

    //set any existing data to the view if it exists in Local Storage


    //save data to local storage

    //create the visual, dynamic grid for the daily planner


    workDay.forEach(function (eachHour) {
            
        //These create the row and place the time and save buttons in the appropriate places for each row.
        const begInput = $("<div>").attr({ "class": "input-group" });
        $(initRow).append(begInput);
        
        const eachRow = $("<div>").attr({ "class": "input-group-prepend col-sm" });
        $(begInput).append(eachRow);

        const eachTime = $("<span>").attr({ "class": "input-group-text justify-content-left" }).text(eachHour.hour);
        $(eachRow).append(eachTime);

        const textArea = $('<textarea>').attr({ "class": "form-control" });
        $(eachTime).append(textArea);

        const saveBtn = $('<div>').attr({ "class": "input-group-append" });
        $(eachTime).append(saveBtn);

        const actButton = $('<button>').attr({ "class": "btn saveBtn" })
        $(saveBtn).append(actButton);

        const saveIcon = $('<i>').attr({ "class": "fas fa-save" });
        $(actButton).append(saveIcon);


        //tests the time and applies formatting to the cell based on the time

        if (eachHour.hour < moment().format("HHHH")) {
            textArea.attr({
                "class": "form-control past"
            })
        } else if (eachHour.hour === moment().format("HHHH")) {
            textArea.attr({
                "class": "form-control present"
            })
        } else if (eachHour.hour > moment().format("HHHH")) {
            textArea.attr({
                "class":"form-control future"
            })
        }
        
    
        
    });

    

    

    
    












//place the current day/date in the header field

    getCurrentDay();

});