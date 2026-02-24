import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, AreaSeries } from '@syncfusion/ej2-react-charts';
import { groupingData } from './datasource';
function App() {
    const primaryyAxis = { title: 'Runs' };
    return <ChartComponent id='charts' primaryYAxis={primaryyAxis} title='England - Sales Rate' useGroupingSeparator={true}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, AreaSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={groupingData} xName='x' yName='y' name='England' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
