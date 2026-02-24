

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, Chart, SeriesCollectionDirective, SeriesDirective, Inject,LegendSettingsModel,
         Legend, Category, Tooltip, DataLabel, ColumnSeries, ILoadedEventArgs}
from'@syncfusion/ej2-react-charts';
import { data } from './datasource';

// declare the series colors
let colors: string[] = ['#00BDAE', '#404041', '#357CD2'];

function App() {

  const primaryxAxis: AxisModel = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis: AxisModel = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
  const legendSettings: LegendSettingsModel = { visible: true, position: 'Top' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={legendSettings}
      loaded={onChartLoaded.bind(this)}
      title='Olympic Medals'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='country' yName='gold' name='Gold' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='silver' name='Silver' type='Column'>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='country' yName='bronze' name='Bronze' type='Column'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

  function onChartLoaded(args: ILoadedEventArgs) {
    let chart: Chart = document.getElementById('charts');
    let legendTextCol: HTMLElement = chart.querySelectorAll('[id*="chart_legend_text_"]');
    for (let i = 0; i < legendTextCol.length; i++) {
        //set the color to legend label
        legendTextCol[i].setAttribute('fill', colors[i]);
    }
  }

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


