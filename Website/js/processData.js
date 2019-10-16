// create virables for future use
var byDays = []; // catogerize the trash items based on month-week-day-location-time
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var locations = [];
// grab data using d3
d3.json("data/trash.json").then(gotData);

function gotData(jsonData){
    // loop through all items in json file
    // catogerize them based on month->week->day->location->time
    for ( let i = 0; i < jsonData.length; i ++ ) {
        let item = jsonData[i];
        // get month index
        let monthIndex = getMonthIndex(item);
        if ( typeof(byDays[monthIndex]) == "undefined" ) fillTheArrayTo(byDays, monthIndex);
        // get day index
        let dayIndex = getDayIndex(item);
        if ( typeof(byDays[monthIndex][dayIndex]) == "undefined" ) fillTheArrayTo(byDays[monthIndex], dayIndex);
        // get location index
        let locIndex = getLocIndex(item);
        if ( typeof(byDays[monthIndex][dayIndex][locIndex]) == "undefined" ) fillTheArrayTo(byDays[monthIndex][dayIndex], locIndex);
        // push the item to the according Array
        byDays[monthIndex][dayIndex][locIndex].push(item);
    }

    // in each location array, arrange the elements from morning (0:00) to night (24:00)
    for ( let i = 0; i < byDays.length; i ++ ) {
        for ( let j = 0; j < byDays[i].length; j ++ ) {
            for ( let k = 0; k < byDays[i][j].length; k ++ ) {
                if ( ! byDays[i][j][k].length == 0 ) {
                    arrangeItemsByTime(byDays[i][j][k], byDays[i][j][k].length - 1);
                }
            }
        }
    }

    console.log(byDays);

}

function getMonthIndex(item){
    let month = item["date"].split("-")[1];
    return months.indexOf(month);
}

function getDayIndex(item){
    let day = item["day"];
    return days.indexOf(day);
}

function getLocIndex(item){
    let loc = item["location"]
    // if there is no such element in locations array, then add it to the array
    if ( !locations.includes(loc) ) locations.push(loc);
    return locations.indexOf(loc);
}

function arrangeItemsByTime(itemList, endIndex){
    if (endIndex <= 1) {
        return
    }
    else {
        for (let i = 0; i < endIndex; i ++ ) {
            t = parseInt( itemList[i]["time"].split(":")[0] );
            nextT = parseInt( itemList[i+1]["time"].split(":")[0] );
            if ( t >= nextT ){
                let temp = itemList[i+1];
                itemList[i+1] = itemList[i];
                itemList[i] = temp;
            }
        }
        arrangeItemsByTime(itemList, endIndex - 1);
    }
}

// function to fill an array till the given index
function fillTheArrayTo(array, endIndex){
    while (array.length <= endIndex) {
        array.push([]);
    }
}
