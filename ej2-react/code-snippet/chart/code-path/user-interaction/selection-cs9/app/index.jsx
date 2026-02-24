{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries, Selection } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    return (<ChartComponent id='charts' primaryXAxis={{ valueType: 'Category', title: 'Countries' }} primaryYAxis={{ minimum: 0, maximum: 80, interval: 20, title: 'Medals' }} title='Olympic Medals' selectionMode='Series'>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Selection, Category]}/>
    <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='country' yName='gold' name='Gold' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='silver' name='Silver' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='bronze' name='Bronze' type='Column'>
        </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}