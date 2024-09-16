{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Export, Legend, Category, DateTime, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationDataLabel, AccumulationLegend } from '@syncfusion/ej2-react-charts';
import { data1, data2, data3, data4 } from './datasource';

function App() {
  let chartInstance;
  let chartInstance1;
  let chartInstance2;
  function clickHandler() {
    chartInstance.exportModule.export('PDF', 'Chart', null, [chartInstance, chartInstance1, chartInstance2], null, null, true, undefined, undefined, true);
  }
  const primaryxAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 }
  };
  const primaryyAxis = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 }
  };
  const primaryxAxis1 = {
    title: 'Manager',
    valueType: 'Category',
    majorGridLines: { width: 0 }
  };
  const primaryyAxis1 = {
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
    </AccumulationChartComponent></div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));


{% endraw %}