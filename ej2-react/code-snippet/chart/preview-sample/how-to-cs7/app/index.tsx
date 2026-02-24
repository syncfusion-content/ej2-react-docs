

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,IAccTooltipRenderEventArgs, Inject, AccumulationDataLabel, AccumulationTooltip, PieSeries,AccumulationDataLabelSettingsModel,TooltipSettingsModel } from '@syncfusion/ej2-react-charts';
import{ EmitType } from '@syncfusion/ej2-base';
import { data } from './datasource';
function App() {
  const datalabel: AccumulationDataLabelSettingsModel = { visible: true, position: 'Inside', name: 'text' };
  const tooltip: TooltipSettingsModel = { enable: true };
  const tooltipRender: EmitType<IAccTooltipRenderEventArgs> = (args: IAccTooltipRenderEventArgs): void => {
    let value: any = args.point.y / args.series.sumOfPoints * 100;
    args.text = args.point.x + '' + Math.ceil(value) + '' + '%';
  };

  return <AccumulationChartComponent id='charts' tooltip={tooltip} title='Mobile Browser Statistics'
      tooltipRender={tooltipRender}>
      <Inject services={[AccumulationTooltip, PieSeries, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' radius='70%' dataLabel={datalabel}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


