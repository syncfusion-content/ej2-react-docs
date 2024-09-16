{% raw %}



import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, ColumnSeries, LineSeries, DataEditing, TooltipSettingsModel}
from'@syncfusion/ej2-react-charts';
import { columnData, lineData } from './datasource';

function App() {
    const primaryxAxis: AxisModel = {  valueType: 'Category', minimum: -0.5, maximum: 6.5,labelPlacement: 'OnTicks', majorGridLines: { width: 0 } };
    const primaryyAxis: AxisModel = { rangePadding: 'None', minimum: 0, title : 'Sales', labelFormat: '{value}%', maximum: 100, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 },minorTickLines: { width: 0 } };
    const border = { border: { width: 0} };
    const tooltip: TooltipSettingsModel = {enable: true};
    return <ChartComponent id='charts' primaryXAxis={ primaryxAxis } primaryYAxis={ primaryyAxis }chartArea={border} title='Sales Prediction of Products' tooltip={tooltip}>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, LineSeries, DataEditing ]}/>
    <SeriesCollectionDirective>
        <SeriesDirective dataSource ={columnData}  xName='x' yName='y' name='Product A' type='Column' dragSettings={{enable: true}} marker={{visible: true, width: 10, height: 10}}>  
        </SeriesDirective>
        <SeriesDirective dataSource ={lineData}  xName='x' yName='y' name='Product B' type='Line' marker={{visible: true, width: 10, height: 10}} dragSettings={{enable: true}}></SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



{% endraw %}