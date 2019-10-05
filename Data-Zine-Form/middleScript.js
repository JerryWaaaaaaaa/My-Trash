const canvasWidth = 2400;
const canvasHeight = 800;

itemWidth = 30;
itemHeight = 30;

colorCombs = {};

const colors = [
'#F44336',
'#FFEBEE',
'#FFCDD2',
'#EF9A9A',
'#E57373',
'#EF5350',
'#E53935',
'#D32F2F',
'#C62828',
'#B71C1C',
'#FF8A80',
'#FF5252',
'#FF1744',
'#D50000',
'#FCE4EC',
'#F8BBD0',
'#F48FB1',
'#F06292',
'#EC407A',
'#E91E63',
'#D81B60',
'#C2185B',
'#AD1457',
'#880E4F',
'#FF80AB',
'#FF4081',
'#F50057',
'#C51162',
'#F3E5F5',
'#E1BEE7',
'#CE93D8',
'#BA68C8',
'#AB47BC',
'#9C27B0',
'#8E24AA',
'#7B1FA2',
'#6A1B9A',
'#4A148C',
'#EA80FC',
'#E040FB',
'#D500F9',
'#AA00FF',
'#EDE7F6',
'#D1C4E9',
'#B39DDB',
'#9575CD',
'#7E57C2',
'#673AB7',
'#5E35B1',
'#512DA8',
'#4527A0',
'#311B92',
'#B388FF',
'#7C4DFF',
'#651FFF',
'#6200EA',
'#E8EAF6',
'#C5CAE9',
'#9FA8DA',
'#7986CB',
'#5C6BC0',
'#3F51B5',
'#3949AB',
'#303F9F',
'#283593',
'#1A237E',
'#8C9EFF',
'#536DFE',
'#3D5AFE',
'#304FFE',
'#E3F2FD',
'#BBDEFB',
'#90CAF9',
'#64B5F6',
'#42A5F5',
'#2196F3',
'#1E88E5',
'#1976D2',
'#1565C0',
'#0D47A1',
'#82B1FF',
'#448AFF',
'#2979FF',
'#2962FF',
'#E1F5FE',
'#B3E5FC',
'#81D4FA',
'#4FC3F7',
'#29B6F6',
'#03A9F4',
'#039BE5',
'#0288D1',
'#0277BD',
'#01579B',
'#80D8FF',
'#40C4FF',
'#00B0FF',
'#0091EA',
'#E0F7FA',
'#B2EBF2',
'#80DEEA',
'#4DD0E1',
'#26C6DA',
'#00BCD4',
'#00ACC1',
'#0097A7',
'#00838F',
'#006064',
'#84FFFF',
'#18FFFF',
'#00E5FF',
'#00B8D4',
'#E0F2F1',
'#B2DFDB',
'#80CBC4',
'#4DB6AC',
'#26A69A',
'#009688',
'#00897B',
'#00796B',
'#00695C',
'#004D40',
'#A7FFEB',
'#64FFDA',
'#1DE9B6',
'#00BFA5',
'#E8F5E9',
'#C8E6C9',
'#A5D6A7',
'#81C784',
'#66BB6A',
'#4CAF50',
'#43A047',
'#388E3C',
'#2E7D32',
'#1B5E20',
'#B9F6CA',
'#69F0AE',
'#00E676',
'#00C853',
'#F1F8E9',
'#DCEDC8',
'#C5E1A5',
'#AED581',
'#9CCC65',
'#8BC34A',
'#7CB342',
'#689F38',
'#558B2F',
'#33691E',
'#CCFF90',
'#B2FF59',
'#76FF03',
'#64DD17',
'#F9FBE7',
'#F0F4C3',
'#E6EE9C',
'#DCE775',
'#D4E157',
'#CDDC39',
'#C0CA33',
'#AFB42B',
'#9E9D24',
'#827717',
'#F4FF81',
'#EEFF41',
'#C6FF00',
'#AEEA00',
'#FFFDE7',
'#FFF9C4',
'#FFF59D',
'#FFF176',
'#FFEE58',
'#FFEB3B',
'#FDD835',
'#FBC02D',
'#F9A825',
'#F57F17',
'#FFFF8D',
'#FFFF00',
'#FFEA00',
'#FFD600',
'#FFF8E1',
'#FFECB3',
'#FFE082',
'#FFD54F',
'#FFCA28',
'#FFC107',
'#FFB300',
'#FFA000',
'#FF8F00',
'#FF6F00',
'#FFE57F',
'#FFD740',
'#FFC400',
'#FFAB00',
'#FFF3E0',
'#FFE0B2',
'#FFCC80',
'#FFB74D',
'#FFA726',
'#FF9800',
'#FB8C00',
'#F57C00',
'#EF6C00',
'#E65100',
'#FFD180',
'#FFAB40',
'#FF9100',
'#FF6D00',
'#FBE9E7',
'#FFCCBC',
'#FFAB91',
'#FF8A65',
'#FF7043',
'#FF5722',
'#F4511E',
'#E64A19',
'#D84315',
'#BF360C',
'#FF9E80',
'#FF6E40',
'#FF3D00',
'#DD2C00',
'#EFEBE9',
'#D7CCC8',
'#BCAAA4',
'#A1887F',
'#8D6E63',
'#795548',
'#6D4C41',
'#5D4037',
'#4E342E',
'#3E2723',
'#FAFAFA',
'#F5F5F5',
'#EEEEEE',
'#E0E0E0',
'#BDBDBD',
'#9E9E9E',
'#757575',
'#616161',
'#424242',
'#212121',
'#ECEFF1',
'#CFD8DC',
'#B0BEC5',
'#90A4AE',
'#78909C',
'#607D8B',
'#546E7A',
'#455A64',
'#37474F',
'#263238',
'#000000',
];

const purposeColor = [];

// load the json file from local
d3.json("data/trash.json").then(gotData);

// calculate how many weeks we have

// create an array to divide data based on day
// let processedData = new Array(numOfWeeks);

// 7 days a week
let days = new Array(7);

// in each day, there are six locations, each location has several items
for (let i = 0; i < days.length; i ++ ){
  days[i] = new Array(6);
  for(let j = 0; j < days[i].length; j ++ ){
    days[i][j] = new Array();
  }
}

//console.log(days);

function gotData(myData){
  processData(myData);
  visualizeData(days);
}

// divide data and get color arrays
function processData(data){

    //console.log(data);
    // get the shared keys of the data
    let keys = Object.keys(data[0]);
    //console.log(keys);

    // loop through the data and
    // divide them into days -> locations
    // get item and give a color comb to it
    for (let i = 0; i < data.length; i ++ ){
        let datum = data[i];
        for (let j = 0; j < keys.length; j ++ ){
          let k = keys[j];
          let index = getLocation(datum);
          // to divide data
          if (k == "day") {
              switch(datum[k]){
                case "Monday":
                    days[0][index].push(datum);
                    break;
                case "Tuesday":
                    days[1][index].push(datum);
                    break;
                case "Wednesday":
                    days[2][index].push(datum);
                    break;
                case "Thursday":
                    days[3][index].push(datum);
                    break;
                case "Friday":
                    days[4][index].push(datum);
                    break;
                case "Saturday":
                    days[5][index].push(datum);
                    break;
                case "Sunday":
                    days[6][index].push(datum);
                    break;
              }
          }
          // to get item/material  - color combs
          if (k == "item" || k == "material" || k == "purpose"){
          // if (k == "item"){
            if (!(datum[k] in Object.keys(colorCombs))) {
              colorCombs[datum[k]] = colors[ i + j * 2 ];
              console.log(colorCombs);
            }
          }
        }

    }

    console.log(days);

}

function visualizeData(days){

      // create a chart
      let chart = d3.select("#container")
                                    .append("svg")
                                      .attr("id", "chart")
                                      .attr("width", 2400)
                                      .attr("height", 800)
                                      .style("background-color", "white")
      ;

      // create Day divs
      let dayGroups = chart.selectAll(".days").data(days).enter().append("g").attr("class", getDaysClass).attr("transform", getDaysPos);

      let locationGroups = dayGroups.selectAll(".locations").data(function(d,i,j) { return d; }).enter().append("g").attr("class", getLocationsClass).attr("transform", getLocationsPos);

      let items = locationGroups.selectAll(".items").data(function(d,i,j) { return d; }).enter().append("g").attr("class", getItemsClass).attr("transform", getItemsPos);


      // create purpose shape & color
      items.append("rect")
                      .attr("x", -5)
                      .attr("y", -5)
                      .attr("width", itemWidth)
                      .attr("height", itemHeight)
                      .attr("fill", getPurposeFill)
      ;

      // create type(throwaway) shape & color
      items.append("rect")
                      .attr("x", 5)
                      .attr("y", 5)
                      .attr("width", itemWidth)
                      .attr("height", itemHeight)
                      .attr("fill", getTypeFill)
      ;

      // create frame
      items.append("rect")
                .attr("x", -2)
                .attr("y", -2)
                .attr("width", itemWidth + 4)
                .attr("height", itemHeight + 4)
                // .attr("rx", 2)
                // .attr("ry", 2)
                .attr("fill", "white")
                // .attr("strokeWidth", "0.5px")
                // .attr("stroke", "#e8e8e8")
      ;

      // create material shape and color, and position them based on time
      items.append("rect")
                      .attr("x", 0)
                      .attr("y", getTimeLocation)
                      .attr("width", itemWidth)
                      .attr("height", itemHeight/3)
                      .attr("fill", getMaterialFill)
      ;

      // create item image
      items.append("image")
                      .attr("xlink:href", getItemImage)
                      .attr("x", 0)
                      .attr("y", 0)
                      .attr("width", itemWidth)
                      .attr("height", itemHeight)
      ;

}


// for group class and positioning

function getLocation(datum){
    let location = datum["location"];
    //console.log(datum, location);
    switch(location){
        case "home":
            return 0; // as an index
        case "cafe/restaurant":
            return 1; // as an index
        case "familyMart/store":
            return 2; // as an index
        case "school":
            return 3; // as an index
        case "office":
            return 4; // as an index
        default:
            return 5;
    }
}

function getDaysClass(data, i){
    return "days day" + i;
}

function getDaysPos(data, i){
    let x = 330 * i + 45;
    let y = 50;
    return "translate(" + x + "," + y + ")";
}

function getLocationsPos(data, i){
    let x = i * 46;
    let y = 25
    return "translate(" + x + "," + y + ")";
}

function getLocationsClass(data, i){
    return "locations location" + i
}

function getItemsClass(datum){
    return "items " + datum["item"];
}

function getItemsPos(datum, i){
    x = 0;
    y = i * 50;
    return "translate(" + x + "," + y + ")";
}

function getTimeLocation(datum, i){
  let time = parseInt(datum.time.split(":")[0]);
  let y;
  // console.log(time)
  if (time >= 0 && time <= 12) { y = 0; }
  else if (time > 12 && time < 19) { y = itemHeight / 3; }
  else { y = 2 * itemHeight / 3; }
  // return "translate(" + x + "," + y + ")"
  return y;
}

// for each item, each layer, coloring and positioning

function getItemsFill(datum, i){
    let item = datum.item;
    return colorCombs[item];
}

function getMaterialFill(datum){
    let material = datum.material;
    return colorCombs[material];
}

function getPurposeFill(datum){
    let purpose = datum.purpose;
    return colorCombs[purpose];
}

function getTypeFill(datum){
    let t = datum.type;
    if (t == "recyclable") {
        return "green";
    }
    else{
        return "red";
    }
}

function getItemImage(datum){
    item = datum.item;
    return "images/" + item + ".png"
}
