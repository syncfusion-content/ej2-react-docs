


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         BoxAndWhiskerSeries, Category, ISeriesRenderEventArgs}
from'@syncfusion/ej2-react-charts';
import { EmitType } from '@syncfusion/ej2-base';
import { data } from './datasource';

function App() {
  const primaryxAxis: AxisModel = { valueType: 'Category', majorGridLines: { width: 0 }, };
  const primaryyAxis: AxisModel = { minimum: 10, maximum: 60, interval: 10, majorGridLines: { width: 0 }, majorTickLines: { width: 0 } };
  const marker = { visible: true };
  const seriesRender: EmitType<ISeriesRenderEventArgs> = (args: ISeriesRenderEventArgs): void => {
    args.fill = '#ff6347';
  };
  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryxAxis}
      title='Employee Age Group in Various Department' seriesRender={seriesRender}>
      <Inject services={[Category, BoxAndWhiskerSeries]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='BoxAndWhisker' name='Department'
          marker={marker} >
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



