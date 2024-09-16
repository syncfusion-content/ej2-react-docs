import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, AreaSeries } from '@syncfusion/ej2-react-charts';
import { numericData } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'Double', title: 'Overs', minimum: 1, maximum: 20, interval: 5 };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} title='England - Run Rate'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, AreaSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={numericData} xName='x' yName='y' name='England' type='Area'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
