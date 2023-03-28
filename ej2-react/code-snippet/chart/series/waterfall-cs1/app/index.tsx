

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,TooltipSettingsModel,LegendSettingsModel,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, WaterfallSeries, Selection}
from'@syncfusion/ej2-react-charts';

function App() {

  const data: object[] = [
    { x: 'Income', y: 4711 }, { x: 'Sales', y: -1015 },
    { x: 'Development', y: -688 },
    { x: 'Revenue', y: 1030 }, { x: 'Balance' },
    { x: 'Expense', y: -361 }, { x: 'Tax', y: -695 },
    { x: 'Net Profit' }
  ];
  const primaryxAxis: AxisModel = { valueType: 'Category', majorGridLines: { width: 0 }, plotOffset: 20 };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 5000, interval: 1000, majorGridLines: { width: 0 }, title: 'Expenditure' };
  const marker = { dataLabel: { visible: true, font: { color: '#ffffff' } } };
  const connector = { color: '#5F6A6A', width: 2 };
  const tooltip: TooltipSettingsModel = { enable: true, shared: false };
  const legendSettings: LegendSettingsModel = { visible: false };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={tooltip}
      legendSettings={legendSettings}
      title='Company Revenue and Profit'>
      <Inject services={[WaterfallSeries, Category, Tooltip, Zoom, Crosshair, Legend, DataLabel]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='USA' type='Waterfall' intermediateSumIndexes={[4]}
          sumIndexes={[7]} marker={marker} connector={connector} columnWidth={0.9}
          negativeFillColor='#e56590'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


