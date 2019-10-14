let canvasWidth = 1200;
let canvasHeight = 800;

let paddingX = 30;
let paddingY = 30;

let purposeColors = {
breakfast: "#c77ac2",
coffee: "#aae0e8",
lunch: "#ebaf25",
tea: "#b82e66",
dinner: "#0c4e6b",
beverage: "#afafa0",
"bottled water": "#be5c3e",
breakfast: "#c77ac2",
brunch: "#d79890",
cleaning: "#7bb160",
coffee: "#aae0e8",
dinner: "#0c4e6b",
grocery: "#7cc6bd",
lunch: "#ebaf25",
milk: "#c79ab4",
shopping: "#e3c4a0",
sketch: "#507ac3",
snack: "#81cde9",
tea: "#b82e66",
water: "#998f92"
}

// process the color Array
let keys = Object.keys(purposeColors);
let colors = [];
console.log(keys);

keys.forEach(function(d, i){ colors[i] = purposeColors[d]; });
console.log(colors);

// create a chart
let chart = d3.select("#container")
                              .append("svg")
                                .attr("id", "chart")
                                .attr("width", 2400)
                                .attr("height", 800)
                                .style("background-color", "white")
;
