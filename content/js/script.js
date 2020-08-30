let workDay = [
    {
        id: "8",
        hour: "0800",
        taskItem: ""
    },
    {
        id: "9",
        hour: "0900",
        taskItem: ""
    },
    {
        id: "10",
        hour: "1000",
        taskItem: ""
    },
    {
        id: "11",
        hour: "1100",
        taskItem: ""
    },
    {
        id: "12",
        hour: "1200",
        taskItem: ""
    },
    {
        id: "13",
        hour: "1300",
        taskItem: ""
    },
    {
        id: "14",
        hour: "1400",
        taskItem: ""
    },
    {
        id: "15",
        hour: "1500",
        taskItem: ""
    },
    {
        id: "16",
        hour: "1600",
        taskItem: ""
    },
    {
        id: "17",
        hour: "1700",
        taskItem: ""
    }

]



const containerEl = document.getElementById('#container');
const initRow = document.getElementsByClassName("row");


$(document).ready(
    function () {

        console.log("ready!");



        //get the current date and place it in the header
        function getCurrentDay() {
            const currentDay = moment().format('dddd, MMMM Do, YYYY');
            $('#currentDay').text(currentDay);
        }
        console.log(currentDay);


        //place the current day/date in the header field

        getCurrentDay();


       

        //create the visual, dynamic grid for the daily planner

        workDay.forEach(
            function (eachHour) {

                //These create the row and place the time and save buttons in the appropriate places for each row.
                const begInput = $("<div>").attr({ "class": "input-group" });
                $(initRow).append(begInput);

                const eachRow = $("<div>").attr({ "class": "input-group-prepend col-sm" });
                $(begInput).append(eachRow);

                const eachTime = $("<span>").attr({ "class": "input-group-text justify-content-left" }).text(eachHour.hour);
                $(eachRow).append(eachTime);

                let textArea = $('<textarea>').attr({ "class": "form-control", "id": eachHour.taskItem });
                $(eachTime).append(textArea);

                const saveBtn = $('<div>').attr({ "class": "input-group-append", });
                $(eachTime).append(saveBtn);

                const actButton = $('<button>').attr({ "class": "btn saveBtn", "id": eachHour.id })
                $(saveBtn).append(actButton);

                const saveIcon = $('<i>').attr({ "class": "fas fa-save" });
                $(actButton).append(saveIcon);

                //displays any item aleady in local storage
                

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
                        "class": "form-control future"
                    })
                }

                //saves the text area to local storage

                $('.saveBtn').on('click', function (event) {
                    event.preventDefault();
                    let saveIndex = $(this).parent(".input-group-append").siblings(".form-control").val();
                    localStorage.setItem('my_taskList', JSON.stringify(saveIndex));
                });


               // console.log(storedItem);


                //testing code section:

                //console.log(saveIndex);
                // console.log(event.target);

                //console.log("where", $(this).parent(".input-group-append").siblings(".form-control").val());
            });

        //displays any items in Local storage

     /*   function displayItem() {
            let storedItem = JSON.parse(localStorage.getItem("my_taskList"));
            $("textArea").html(storedItem);

        }
        displayItem(mytaskList);*/

    });


//console.log($('.form-control').val());


























