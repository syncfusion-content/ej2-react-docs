{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, SeriesCollectionDirective, MarkerSettingsModel, SeriesDirective, TooltipSettingsModel, Tooltip, LastValueLabel } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';

function App() {
    const primaryXAxis: Object = { title: 'Year', interval: 1 };
    const primaryYAxis: Object = { title: 'Efficiency', labelFormat: '{value}%' };
    const tooltip: TooltipSettingsModel = { enable: true };
    const title: string = 'Efficiency of oil-fired power production';
    const marker: MarkerSettingsModel = { visible: false, dataLabel: { visible: true }};

    return <ChartComponent id='charts' title={title} width='90%' primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LastValueLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Column' name='series1' animation={{ enable: true }} 
          lastValueLabel={{ enable: true }} marker={marker}/>
      </SeriesCollectionDirective>
    </ChartComponent>;
};

export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}