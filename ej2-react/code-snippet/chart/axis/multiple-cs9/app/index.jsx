import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { smartAxisData } from './datasource';
function App() {
    const primaryxAxis = { title: 'Countries', labelIntersectAction: 'Rotate90', valueType: 'Category' };
    const primaryyAxis = { title: 'People(in millions)', minimum: 0, maximum: 80, interval: 10 };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Internet Users'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={smartAxisData} xName='x' yName='y' name='Internet' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
