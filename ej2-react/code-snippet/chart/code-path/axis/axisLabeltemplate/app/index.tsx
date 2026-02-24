{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel,ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category} from'@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {
  const axisLabeltemplate: string =
          '<table>'
            '<tr>'
                '<td align="center" style="background-color: #2E8B57; font-size: 14px; color: #FFD700; font-weight: bold; padding: 5px">Country :</td>'
                '<td align="center" style="background-color: #4682B4; font-size: 14px; color: #FFFFFF; font-weight: bold; padding: 5px">${label}</td>'
            '</tr>'
        '</table>';
  const primaryxAxis: AxisModel = { valueType: 'Category', labelTemplate: axisLabeltemplate };
  const primaryyAxis: AxisModel = { valueType: 'Double' };
  const marker = { visible: true };
  return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Olympic Medals' width='70%'>
      <Inject services={[ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} xName='country' yName='gold' type='Column' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
