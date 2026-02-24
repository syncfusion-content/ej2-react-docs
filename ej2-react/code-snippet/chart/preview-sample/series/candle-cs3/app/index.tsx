

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, CandleSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { title: 'Date', valueType: 'Category', majorGridLines: { width: 0 } };
  const primaryyAxis: AxisModel = { title: 'Price in Dollar', minimum: 100, maximum: 200, interval: 20 };
  const style: any = { textAlign: "center" };
  const legendSettings: LegendSettingsModel = { visible: false };
  const emptyPoint: object = { mode: 'Average' }
  return <ChartComponent id='charts' style={style}
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={legendSettings}
      title='Shirpur Gold Refinery Share Price'>
      <Inject services={[CandleSeries, Tooltip, Category, Crosshair, Zoom]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' yName='low' name='SHIRPUR-G' type='Candle' low='low'
          high='high' open='open' close='close' emptyPointSettings={emptyPoint} bearFillColor='#e56590' bullFillColor='#f8b883'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



