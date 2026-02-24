{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, FunnelSeries, AccumulationTooltip, IAccLoadedEventArgs,
  AccumulationDataLabel, IAccResizeEventArgs, AccumulationTheme
} from '@syncfusion/ej2-react-charts';
import { data1 } from 'datasource.ts';

function App() {

    return <AccumulationChartComponent id='charts'>
      <Inject services={[AccumulationLegend, FunnelSeries, AccumulationTooltip, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' type='Funnel' width='60%' height='80%'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}

