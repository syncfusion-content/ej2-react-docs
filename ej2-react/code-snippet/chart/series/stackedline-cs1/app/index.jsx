{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingLineSeries } from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';
function App() {
    const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };
    return <ChartComponent id='charts' primaryXAxis={{ interval: 1, valueType: 'Category' }} primaryYAxis={{ title: 'Expense', minimum: 0, maximum: 400, interval: 100, labelFormat: '${value}' }}>
         <Inject services={[StackingLineSeries, Legend, Tooltip, DataLabel, Category]}/>
              <SeriesCollectionDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y' name='John' width='2' type='StackingLine' fill='blue' marker={{ visible: true }} dashArray='5,1'>
                    </SeriesDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y1' name='Peter' width='2' type='StackingLine' fill='brown' marker={{ visible: true }} dashArray='5,1'>
                    </SeriesDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y2' name='Steve' width='2' type='StackingLine' fill='yellow' marker={{ visible: true }} dashArray='5,1'>
                    </SeriesDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y3' name='Charle' width='2' type='StackingLine' fill='grey' marker={{ visible: true }} dashArray='5,1'>
                    </SeriesDirective>
                    </SeriesCollectionDirective>
         </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}