{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingLineSeries } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {
    const marker = { visible: true, };
    const emptyPoint = { mode: 'Average', fill: 'red', border: { width: 2 , fill: 'green'}};
    const emptyPoint1 = { mode: 'Gap'};
    return <ChartComponent id='charts' primaryXAxis={{ interval: 1, valueType: 'Category' }} primaryYAxis={{ title: 'Expense', minimum: 0, maximum: 400, interval: 100, labelFormat: '${value}' }}>
         <Inject services={[StackingLineSeries, Legend, Tooltip, DataLabel, Category]}/>
              <SeriesCollectionDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y' name='John' type='StackingLine' marker={marker} emptyPointSettings={emptyPoint}>
                    </SeriesDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y1' name='Peter' type='StackingLine' marker={marker}>
                    </SeriesDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y2' name='Steve' type='StackingLine' marker={marker} emptyPointSettings={emptyPoint1}>
                    </SeriesDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y3' name='Charle' type='StackingLine' marker={marker}>
                    </SeriesDirective>
                    </SeriesCollectionDirective>
         </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}