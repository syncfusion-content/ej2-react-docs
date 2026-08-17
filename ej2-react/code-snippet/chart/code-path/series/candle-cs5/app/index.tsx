{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import type { AxisModel, ISeriesRenderEventArgs } from "@syncfusion/ej2-react-charts";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, 
         Category, CandleSeries }
from '@syncfusion/ej2-react-charts';
import type { EmitType } from '@syncfusion/ej2-base';
import { chartData } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { title: 'Date', valueType: 'Category', majorGridLines: { width: 0 } };
  const primaryyAxis: AxisModel = { title: 'Price in Dollar', minimum: 100, maximum: 200, interval: 20 };
  const style: any = { textAlign: "center" };
  const seriesRender: EmitType<ISeriesRenderEventArgs> = (args: ISeriesRenderEventArgs): void => {
    args.series.bearFillColor = '#ff6347';
    args.series.bullFillColor = '#009cb8';
  };
  return <ChartComponent id='charts' style={style}
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Shirpur Gold Refinery Share Price' seriesRender={seriesRender}>
      <Inject services={[CandleSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='x' name='SHIRPUR-G' type='Candle' low='low'
          high='high' open='open' close='close' bearFillColor='#e56590' bullFillColor='#f8b883'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts') as HTMLElement);
root.render(<App />);

{% endraw %}

