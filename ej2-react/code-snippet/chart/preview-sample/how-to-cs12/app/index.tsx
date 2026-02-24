

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, LineSeries, ITextRenderEventArgs, ITooltipRenderEventArgs,AxisModel,TooltipSettingsModel }from'@syncfusion/ej2-react-charts';
import { Internationalization } from '@syncfusion/ej2-base';
import { data } from './datasource';
function App() {
  const primaryxAxis: AxisModel = { valueType: 'DateTime' };
  const marker = { visible: true, height: 10, width: 10, dataLabel: { visible: true } };
  const tooltip: TooltipSettingsModel = { enable: true };
  const tooltipRender = (args: ITooltipRenderEventArgs) => {
    let intl: Internationalization = new Internationalization();
    let formattedString: string = intl.formatDate(new Date(args.point.x), { skeleton: 'yMd' });
    args.text = formattedString;
  };

    return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      title='Inflation - Consumer Price'
      tooltipRender={tooltipRender}
      tooltip={tooltip}>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' width={2} name='Germany'
          type='Line' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


