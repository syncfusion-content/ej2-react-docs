{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    return (<ChartComponent id='charts' primaryXAxis={{ valueType: 'Category', title: 'Countries',
            labelPlacement: 'OnTicks' }} primaryYAxis={{ minimum: 0, maximum: 80, interval: 20, title: 'Medals' }} title='Olympic Medals'>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]}/>
    <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='country' yName='gold' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='silver' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='bronze' type='Column'>
        </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}