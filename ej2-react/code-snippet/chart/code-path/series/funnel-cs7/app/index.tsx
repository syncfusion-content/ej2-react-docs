{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, FunnelSeries, AccumulationTooltip, IAccLoadedEventArgs,
  AccumulationDataLabel, IAccResizeEventArgs, AccumulationTheme, IAccPointRenderEventArgs
} from '@syncfusion/ej2-react-charts';
import { data1 } from 'datasource.ts';

function App() {

  const onPointRender: EmitType<IAccPointRenderEventArgs> = (args: IAccPointRenderEventArgs): void => {
    if ((args.point.x as string).indexOf('Downloaded') > -1) {
      args.fill = '#f4bc42';
    }
    else {
      args.fill = '#597cf9';
    }
  };

  return <AccumulationChartComponent id='charts' pointRender={onPointRender}>
      <Inject services={[AccumulationLegend, FunnelSeries, AccumulationTooltip, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' type='Funnel'
          gapRatio={0.08}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
