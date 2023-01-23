{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,TooltipSettingsModel,
         Legend, Category, Tooltip, DataLabel, ColumnSeries, Selection}
from'@syncfusion/ej2-react-charts';

function App() {

  const chartData1: any[] = [{ x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }];
  const chartData2: any[] = [{ x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }];
  const chartData3: any[] = [{ x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }];
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


{% endraw %}