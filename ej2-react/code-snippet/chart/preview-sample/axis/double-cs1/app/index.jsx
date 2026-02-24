
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Tooltip, DataLabel, AreaSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    return (<ChartComponent id='charts' primaryXAxis={{ edgeLabelPlacement: 'Shift', title: 'Years' }} primaryYAxis={{ labelFormat: 'c', title: 'Sales Amount in Millions' }} title='Average Sales Comparison'>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, AreaSeries]}/>
    <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='Product X' type='Area'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' name='Product Y' type='Area'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y2' name='Product Z' type='Area'>
        </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
