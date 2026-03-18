{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, Legend, DateTime, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'Category' };
    const tooltip = { enable: true, format: '${point.tooltip}' };
    const legendSettings = { visible: false };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} tooltip={tooltip} legendSettings={legendSettings} title='Internet Users in Million – 2016'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, DateTime, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='y' type='Column' tooltipMappingName='country'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}