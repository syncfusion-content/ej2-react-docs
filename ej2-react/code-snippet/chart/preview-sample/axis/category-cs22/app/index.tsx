


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,TooltipSettingsModel,
         Legend, Category, Tooltip, DataLabel, ColumnSeries, Selection}
from'@syncfusion/ej2-react-charts';
import { chartData1, chartData2, chartData3 } from './datasource';

function App() {

  const primaryxAxis: AxisModel = {valueType: 'Category', interval: 1, majorGridLines: { width: 0 } };
  const primaryyAxis: AxisModel = {majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent'}};
  const marker = { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } };
  const tooltip: TooltipSettingsModel = { enable: true };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Olympic Medal Counts - RIO'
      enableAnimation={true}
      tooltip={tooltip}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, Selection]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData1} xName='x' yName='y' name='Gold'
          marker={marker} type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={chartData2} xName='x' yName='y' name='Silver'
          marker={marker} type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={chartData3} xName='x' yName='y' name='Bronze'
          marker={marker} type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


