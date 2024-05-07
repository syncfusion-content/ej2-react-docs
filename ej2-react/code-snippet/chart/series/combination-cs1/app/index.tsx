

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip, DataLabel, LineSeries, StackingColumnSeries}
from'@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
    { x: '2005', y: 1.2, y1: 0.5, y2: 0.7, y3: -0.8, y4: 1.5 },
    { x: '2006', y: 1, y1: 0.5, y2: 1.4, y3: 0, y4: 2.3 },
    { x: '2007', y: 1, y1: 0.5, y2: 1.5, y3: -1, y4: 2 },
    { x: '2008', y: 0.25, y1: 0.35, y2: 0.35, y3: -.35, y4: 0.1 },
    { x: '2009', y: 0.1, y1: 0.9, y2: -2.7, y3: -0.3, y4: -2.7 },
    { x: '2010', y: 1, y1: 0.5, y2: 0.5, y3: -0.5, y4: 1.8 },
    { x: '2011', y: 0.1, y1: 0.25, y2: 0.25, y3: 0, y4: 2 },
    { x: '2012', y: -0.25, y1: -0.5, y2: -0.1, y3: -0.4, y4: 0.4 },
    { x: '2013', y: 0.25, y1: 0.5, y2: -0.3, y3: 0, y4: 0.9 },
    { x: '2014', y: 0.6, y1: 0.6, y2: -0.6, y3: -0.6, y4: 0.4 },
    { x: '2015', y: 0.9, y1: 0.5, y2: 0, y3: -0.3, y4: 1.3 }
  ];
  const primaryxAxis: AxisModel = { title: 'Years', interval: 1, labelIntersectAction: 'Rotate45', valueType: 'Category' };
  const primaryyAxis: AxisModel = { title: 'Growth', minimum: -3, maximum: 3, interval: 1 };
  const marker = { visible: true, width: 10, opacity: 0.6, height: 10 };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Annual Growth GDP in France'>
      <Inject services={[StackingColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='Private Consumption'
          type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' name='Government Consumption'
          type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y2' name='Investment'
          type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y3' name='Net Foreign Trade'
          type='StackingColumn'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y4' name='GDP' type='Line' opacity={0.6}
          marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


