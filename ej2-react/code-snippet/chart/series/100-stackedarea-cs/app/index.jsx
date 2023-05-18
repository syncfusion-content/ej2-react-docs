{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, StackingAreaSeries } from '@syncfusion/ej2-react-charts';
import { percentData } from 'datasource.ts';
function App() {
    const primaryxAxis = {
        title: 'Years', valueType: 'DateTime', intervalType: 'Years',
        edgeLabelPlacement: 'Shift', labelFormat: 'y'
    };
    const primaryyAxis = { title: 'Temperature (%)', labelFormat: '{value}%', rangePadding: 'None' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Annual Temperature Comparison'>
      <Inject services={[StackingAreaSeries, Legend, Tooltip, DataLabel, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={percentData} xName='x' yName='y' name='USA' type='StackingArea100' fill='red' border={{width: 2.5, color:'white'}} dashArray='5'>
        </SeriesDirective>
        <SeriesDirective dataSource={percentData} xName='x' yName='y1' name='UK' type='StackingArea100'fill='green' border={{width: 2.5, color:'white'}} dashArray='5'>
        </SeriesDirective>
        <SeriesDirective dataSource={percentData} xName='x' yName='y2' name='Canada Alternatives' type='StackingArea100'fill='orange' border={{width: 2.5, color:'white'}} dashArray='5'>
        </SeriesDirective>
        <SeriesDirective dataSource={percentData} xName='x' yName='y3' name='China' type='StackingArea100'fill='blue' border={{width: 2.5, color:'white'}} dashArray='5'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}