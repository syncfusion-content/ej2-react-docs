{% raw %}



import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  let chartInstance: ChartComponent;
  function clickHandler() { 
    var svg = document.querySelector("#charts_svg");
        var svgData = new XMLSerializer().serializeToString(svg);
        var canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        var svgSize = svg.getBoundingClientRect();
        canvas.width = svgSize.width;
        canvas.height = svgSize.height;
        var ctx = canvas.getContext("2d");
        var img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));
        img.onload = function() {
          ctx.drawImage(img, 0, 0);
          var imagedata = canvas.toDataURL("image/png");
          console.log(imagedata); // printed base64 in console
          canvas.remove();
        };
   }
  return (<div> <ChartComponent id="charts" style={{ textAlign: 'center' }} primaryXAxis={{ 
    valueType: 'Category',
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 } 
}} primaryYAxis={{ 
   minimum: 0,
   maximum: 40,
   interval: 10,
   lineStyle: {width : 0},
   minorTickLines: {width: 0},
   majorTickLines: {width : 0},
}} chartArea={{ border: { width: 0 } }}>
   <Inject services={[ColumnSeries, Category]}/>
   <SeriesCollectionDirective>                        
       <SeriesDirective dataSource={data} xName="x" yName="y" type="Column"></SeriesDirective>
   </SeriesCollectionDirective>
</ChartComponent>

<button value='Export' onClick={clickHandler.bind(this)}>Export</button></div>)

};
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));



{% endraw %}