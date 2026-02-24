{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, IAccLoadedEventArgs,
  AccumulationDataLabel, IAccResizeEventArgs, AccumulationTheme, IAccPointRenderEventArgs
} from '@syncfusion/ej2-react-charts';
import { pyramidData } from 'datasource.ts';

function App() {

  const onPointRender: EmitType<IAccPointRenderEventArgs> = (args: IAccPointRenderEventArgs): void => {
    if ((args.point.x as string).indexOf('India') > -1) {
      args.fill = '#f4bc42';
    }
    else {
      args.fill = '#597cf9';
    }
  };

  return <AccumulationChartComponent id='charts' pointRender={onPointRender}>
      <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pyramidData} xName='x' yName='y' type='Pyramid'
          gapRatio={0.2}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
