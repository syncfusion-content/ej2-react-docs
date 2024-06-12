{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category } from '@syncfusion/ej2-react-charts';

function App() {
  const primaryXAxis = { valueType: 'Category', majorGridLines: { width: 0 }, labelStyle: { size: '12px' }, labelIntersectAction: 'Rotate90' };
  const primaryYAxis = { title: 'Sales (in percentage)', labelFormat: '{value}%', lineStyle: { width: 0 }, majorTickLines: { width: 0 }, interval: 5, minimum: 0, maximum: 100 };
  const data = [
    { x: 'Jewellery', y: 75 },
    { x: 'Shoes', y: 45 },
    { x: 'Footwear', y: 73 },
    { x: 'Pet Services', y: 53 },
    { x: 'Business Clothing', y: 85 },
    { x: 'Office Supplies', y: 68 },
    { x: 'Food', y: 45 }
  ];
  let chartInstance;
  function clickHandler() {
    const newData = data.map((item) => {
      const value = getRandomInt(10, 90);
      return { x: item.x, y: value };
    });
    if (chartInstance.series.length > 0) {
      chartInstance.series[0].setData(newData, 500);
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let axisRangeCalculated = (args) => {
    if (args.axis.name === 'primaryYAxis') {
      args.maximum = args.maximum > 100 ? 100 : args.maximum;
      if (args.maximum > 80) {
        args.interval = 20;
      }
      else if (args.maximum > 40) {
        args.interval = 10;
      }
    }
  }
  return (<div>
    <button value='update' onClick={clickHandler.bind(this)}>Update Data</button>
    <ChartComponent id='charts' ref={chart => chartInstance = chart} primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} title='Sales by product' chartArea={{ border: { width: 0 } }} axisRangeCalculated={axisRangeCalculated.bind(this)}>
      <Inject services={[ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' cornerRadius={{ topLeft: 15, topRight: 15 }} columnWidth={0.5} type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent></div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}