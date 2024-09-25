

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,
         Legend, Category, Tooltip, DataLabel, Zoom, Crosshair, CandleSeries, Selection, ISeriesRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { EmitType } from '@syncfusion/ej2-base';
import { chartData } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { title: 'Date', valueType: 'Category', majorGridLines: { width: 0 } };
  const primaryyAxis: AxisModel = { title: 'Price in Dollar', minimum: 100, maximum: 200, interval: 20 };
  const style: any = { textAlign: "center" };
  const legendSettings: LegendSettingsModel = { visible: false };
  const seriesRender: EmitType<ISeriesRenderEventArgs> = (args: ISeriesRenderEventArgs): void => {
    args.series.bearFillColor = '#ff6347';
    args.series.bullFillColor = '#009cb8';
  };
  return <ChartComponent id='charts' style={style}
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={legendSettings}
      title='Shirpur Gold Refinery Share Price' seriesRender={seriesRender}>
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



