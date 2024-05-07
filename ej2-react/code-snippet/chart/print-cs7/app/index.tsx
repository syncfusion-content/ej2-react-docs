{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, AxisModel, DateTime,
  ColumnSeries, Export, Legend, Category, Tooltip, DataLabel, LineSeries,
}
  from '@syncfusion/ej2-react-charts';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationDataLabel, AccumulationLegend } from '@syncfusion/ej2-react-charts';

function App() {

  const data1: any[] = [
    { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 }
  ];
  const data2: any[] = [
    { x: new Date(2005, 0, 1), y: 28 }, { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 }, { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 }, { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 }
  ];
  const data3: any[] = [
    { x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
    { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }
  ];
  const data4: any[] = [
    { x: 'Labour', y: 18, text: '18%' }, { x: 'Legal', y: 8, text: '8%' },
    { x: 'Production', y: 15, text: '15%' }, { x: 'License', y: 11, text: '11%' },
    { x: 'Facilities', y: 18, text: '18%' }, { x: 'Taxes', y: 14, text: '14%' },
    { x: 'Insurance', y: 16, text: '16%' }
  ];
  let chartInstance: ChartComponent;
  let chartInstance1: ChartComponent;
  let chartInstance2: ChartComponent;
  function clickHandler() {
    chartInstance.exportModule.export('PDF', 'Chart', null, [chartInstance, chartInstance1, chartInstance2], null, null, true, undefined, undefined, true);
  }
  const primaryxAxis: AxisModel = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
  };
  const primaryyAxis: AxisModel = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 }
  };
  const primaryxAxis1: AxisModel = {
    title: 'Manager',
    valueType: 'Category',
    majorGridLines: { width: 0 }
  };
  const primaryyAxis1: AxisModel = {
    title: 'Sales',
    minimum: 0,
    maximum: 20000,
    majorGridLines: { width: 0 }
  };
  const marker = { visible: true, width: 10, height: 10 };
  const datalabel = {
    visible: true,
    name: 'text',
    position: 'Inside',
    font: {
      fontWeight: '600',
      color: '#ffffff'
    }
  };
  const legendSettings = { visible: true };

  return (<div><button value='print' onClick={clickHandler.bind(this)}>Export</button>
    <ChartComponent id='charts1' ref={chart => chartInstance = chart} primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Medal Count'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Export, LineSeries, Category, DateTime]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data1} xName='x' yName='y' type='Line' width='2' name='Germany' marker={marker}>
        </SeriesDirective>
        <SeriesDirective dataSource={data2} xName='x' yName='y' type='Line' width='2' name='England' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
    <ChartComponent id='charts2' ref={chart => chartInstance1 = chart} primaryXAxis={primaryxAxis1} primaryYAxis={primaryyAxis1} title='Sales Comparision'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Export, LineSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data3} xName='x' yName='y' type='Column' width='2'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
    <AccumulationChartComponent id='charts' ref={chart => chartInstance2 = chart} title='Project Cost Breakdown' enableSmartLabels='true' legendSettings={legendSettings}>
      <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data4} xName='x' yName='y' type='Pie' dataLabel={datalabel} radius='70%'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent></div>)

};
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


{% endraw %}
