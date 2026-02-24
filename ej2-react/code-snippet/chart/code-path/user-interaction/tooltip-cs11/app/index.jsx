{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Tooltip, StepLineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const primaryxAxis = { valueType: 'DateTime' };
    const tooltip = { enable: true, location: { x: 120, y: 20 } };
    const marker = { visible: true, width: 10, height: 10 };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} tooltip={tooltip} title='Unemployment Rates 1975-2010'>
      <Inject services={[StepLineSeries, Tooltip, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='China' width={2} type='StepLine' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}