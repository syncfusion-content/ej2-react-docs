import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, AreaSeries } from '@syncfusion/ej2-react-charts';
import { areaData } from 'datasource.ts';
function App() {
    const primaryxAxis = {
        title: 'Year', minimum: 1900, maximum: 2000, interval: 10,
        edgeLabelPlacement: 'Shift'
    };
    primaryyAxis: AxisModel = { minimum: 2, maximum: 5, interval: 0.5, title: 'Sales Amount in Millions' };
    border = { width: 2 };
    render();
    {
        return <ChartComponent id='charts' primaryXAxis={this.primaryxAxis} primaryYAxis={this.primaryyAxis} title='Average Sales Comparison'>
      <Inject services={[AreaSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={areaData} xName='x' yName='y' name='Product A' width={2} border={this.border} opacity={0.5} type='Area'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
