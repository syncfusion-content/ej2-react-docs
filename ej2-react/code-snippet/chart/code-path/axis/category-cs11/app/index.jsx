{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    return (<ChartComponent id='charts' primaryXAxis={{ valueType: 'Category', title: 'Countries' }} primaryYAxis={{ minimum: 0, maximum: 80, interval: 20, labelFormat: '${value}K',
            title: 'Medals', titleStyle: {
                size: '16px', color: 'grey',
                fontFamily: 'Segoe UI', fontWeight: 'bold'
            }, labelStyle: {
                size: '14px', color: 'blue',
                fontFamily: 'Segoe UI', fontWeight: 'bold'
            } }} title='Olympic Medals'>
    <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
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