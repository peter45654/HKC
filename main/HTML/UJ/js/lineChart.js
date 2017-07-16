/**
 * Created by p5030 on 2017/7/16.
 */
/**
 * Created by p5030 on 2017/7/16.
 *
 *
 *
 *
 *
 *
 *
 */


//console.log(data);

//
var data1 = [1,2,4,7,8,1,3,0,5,7,8,10];
var data2 = [1,4,2,6,8,10,3,5,6,7,14,20];
var data3 = [1,4,2,6,8,1,3,5,6,7,14,20];
function loadData(dataPath,id) {
       var place = [];
       var goodPresent = [];
       var year = [];
       for(var i=1;i<=12;i++){
           year.push(2016+"/"+i);
       }
        var fuck = {
            x:  year,
            y: data1,
            type: 'scatter'
        };
    var fuck2 = {
        x:  year,
        y: data2,
        type: 'scatter'
    };
    var fuck3= {
        x: year,
        y: data3,
        type: 'scatter'
    };
        var data = [fuck,fuck2,fuck3];
        var layout = {
            title:'Line and Scatter Plot'
        };

        Plotly.newPlot('myDiv', data, layout);
}

loadData("Data/air_status_Jan2.csv","myDiv");
console.log(yearData);