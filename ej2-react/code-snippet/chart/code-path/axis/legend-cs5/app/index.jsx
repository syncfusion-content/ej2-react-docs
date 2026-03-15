{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
class App extends React.Component {
    primaryxAxis = { valueType: 'Category', title: 'Countries' };
    primaryyAxis = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
    legendSettings = { visible: true, textStyle: { color: "red" } };
    render() {
        return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} legendSettings={legendSettings}  title='Olympic Medals'>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName='country' yName='gold' name='Gold' type='Column'>
          </SeriesDirective>
          <SeriesDirective dataSource={data} xName='country' yName='silver' name='Silver' type='Column'>
          </SeriesDirective>
          <SeriesDirective dataSource={data} xName='country' yName='bronze' name='Bronze' type='Column'>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>;
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}