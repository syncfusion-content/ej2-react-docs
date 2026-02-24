{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, StripLine, ColumnSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { stripData } from './datasource';
function App() {
    const primaryxAxis = { title: 'Overs' };
    const primaryyAxis = {
        title: 'Runs',
        stripLines: [{ start: 15, end: 22, text: 'Good', color: '#ff512f', visible: true },
            { start: 8, end: 15, text: 'Medium', color: 'pink', opacity: 0.5, visible: true },
            { start: 0, end: 8, text: 'Not enough', color: 'skyblue', opacity: 0.5, visible: true }]
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='India Vs Australia 1st match'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, StripLine]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stripData} xName='x' yName='y' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}