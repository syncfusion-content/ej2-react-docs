{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingLineSeries } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {
    const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };
    const pointRender = (args) => {
        if (args.point.y < 70) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    };
    return <ChartComponent id='charts' primaryXAxis={{ interval: 1, valueType: 'Category' }} primaryYAxis={{ title: 'Expense', interval: 20 }} title='Family Expense for Month' pointRender={pointRender}>
          <Inject services={[StackingLineSeries, Legend, Tooltip, DataLabel, Category]}/>
          <SeriesCollectionDirective>
              <SeriesDirective dataSource={chartData} xName='x' yName='y' name='John' type='StackingLine100' marker={{ visible: true }}>
              </SeriesDirective>
              <SeriesDirective dataSource={chartData} xName='x' yName='y1' name='Peter' type='StackingLine100' marker={{ visible: true }}>
              </SeriesDirective>
              <SeriesDirective dataSource={chartData} xName='x' yName='y2' name='Steve' type='StackingLine100' marker={{ visible: true }}>
              </SeriesDirective>
              <SeriesDirective dataSource={chartData} xName='x' yName='y3' name='Charle' type='StackingLine100' marker={{ visible: true }}>
              </SeriesDirective>
              </SeriesCollectionDirective>
         </ChartComponent>
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}