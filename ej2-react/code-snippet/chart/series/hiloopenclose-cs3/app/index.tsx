

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, HiloOpenCloseSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { title: 'Date', valueType: 'Category' };
  const primaryyAxis: AxisModel = { title: 'Price in Dollar', minimum: 100, maximum: 200, interval: 20 };
  const style: any = { textAlign: "center" };
  const legendSettings: LegendSettingsModel = { visible: false };
  const emptyPoint: object = { mode: 'Average' };
  return <ChartComponent id='charts' style={style}
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={legendSettings}
      title='Financial Analysis'>
      <Inject services={[HiloOpenCloseSeries, Tooltip, Category, Crosshair, Zoom]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='low' name='SHIRPUR-G' type='HiloOpenClose' low='low'
          high='high' open='open' close='close' bearFillColor='#e56590' bullFillColor='#f8b883' emptyPointSettings={emptyPoint}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


