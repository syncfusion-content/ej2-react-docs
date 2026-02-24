{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Category, DataLabel } from '@syncfusion/ej2-react-charts';
import { inverseData } from './datasource';
function App() {
    const primaryxAxis = { title: 'Years', opposedPosition: true };
    const primaryyAxis = { title: 'Exchange rate (INR per USD)' };
    const marker = { dataLabel: { visible: true } };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Exchange Rate'>
      <Inject services={[ColumnSeries, Category, Legend, DataLabel]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={inverseData} xName='x' yName='y' type='Column' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}