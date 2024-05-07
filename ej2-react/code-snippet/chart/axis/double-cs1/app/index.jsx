{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Tooltip, DataLabel, AreaSeries } from '@syncfusion/ej2-react-charts';
function App() {
    const data = [
        { x: 1900, y: 4, y1: 2.6, y2: 2.8 }, { x: 1920, y: 3.0, y1: 2.8, y2: 2.5 },
        { x: 1940, y: 3.8, y1: 2.6, y2: 2.8 }, { x: 1960, y: 3.4, y1: 3, y2: 3.2 },
        { x: 1980, y: 3.2, y1: 3.6, y2: 2.9 }, { x: 2000, y: 3.9, y1: 3, y2: 2 }
    ];
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
{% endraw %}