{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, Legend,  Category, Tooltip, DataLabel, StepAreaSeries , ILegendRenderEventArgs } from'@syncfusion/ej2-react-charts';
import { EmitType} from '@syncfusion/ej2-base';
import { data, data1 } from './datasource';
function App() {
  const legendRender: EmitType<ILegendRenderEventArgs> = (args: ILegendRenderEventArgs): void => {
    if (args.text === 'Renewable') {
      args.shape = 'Circle';
    } else if (args.text === 'Non-Renewable') {
      args.shape = 'Triangle';
    }
  };
  const primaryxAxis: AxisModel = { valueType: 'Double' };
  const primaryyAxis: AxisModel = { valueType: 'Double' };

  
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='FB Penetration of Internet Audience'
      legendRender={legendRender}>
      <Inject services={[StepAreaSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} type='StepArea' xName='x' yName='y' width={2} name='Renewable'>
        </SeriesDirective>
        <SeriesDirective dataSource={data1} type='StepArea' xName='x' yName='y' width={2} name='Non-Renewable' >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}

