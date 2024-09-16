


import * as React from "react";
import * as ReactDOM from "react-dom";
import { Browser } from '@syncfusion/ej2-base';
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, TrendlineDirective, TrendlinesDirective, Inject,
    Tooltip, LineSeries, ScatterSeries, SplineSeries, Trendlines, Category, ChartTheme
    ,AxisModel,TooltipSettingsModel,ChartAreaModel
} from '@syncfusion/ej2-react-charts';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { SampleBase } from '../common/sample-base';
import { PropertyPane } from '../common/property-pane';
import { EmitType } from '@syncfusion/ej2-base';
import { powerData } from './datasource';

function App() {

  const primaryxAxis: AxisModel = { title: 'Months', majorGridLines: { width: 0 } };
  const primaryyAxis: AxisModel = {
    title: 'Rupees against Dollars', interval: 50,
    lineStyle: { width: 0 }, majorTickLines: { width: 0 }
  };
  const tooltip: TooltipSettingsModel = { enable: true };
  const chartarea: ChartAreaModel = { border: { width: 0 } };
  const marker = { visible: false };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={tooltip}
      chartArea={chartarea}
      title='Historical Indian Rupee Rate (INR USD)'>
      <Inject services={[Category, Tooltip, ScatterSeries, SplineSeries, LineSeries, Trendlines]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={powerData} xName='x' yName='y' name='Apple Inc' type='Scatter' fill='#0066FF'>
          <TrendlinesDirective>
            <TrendlineDirective type='Power' width={3} marker={marker}>
            </TrendlineDirective>
          </TrendlinesDirective>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



