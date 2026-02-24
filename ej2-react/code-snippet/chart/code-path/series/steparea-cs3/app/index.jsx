{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Tooltip, StepAreaSeries } from '@syncfusion/ej2-react-charts';
import { stepAreaData } from './datasource';

function App() {
  const primaryxAxis = { title: 'Overs' };
  const primaryyAxis = { title: 'Runs' };
  const tooltip = { enable: true };
  const border = { width: 2, color: '#FFA500', dashArray: '5,5' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={tooltip}
      title='England - Run Rate'>
      <Inject services={[StepAreaSeries, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stepAreaData} xName='x' yName='y' type='StepArea' border={border}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}