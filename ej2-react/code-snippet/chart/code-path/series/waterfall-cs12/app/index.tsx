{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ChartTheme,LegendSettingsModel,TooltipSettingsModel,ParetoSeries,ColumnSeries,LineSeries,
    Legend, Category, Tooltip, ILoadedEventArgs, DataLabel
} from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';

function App() {
    const primaryxAxis: AxisModel= {  title: 'Defects', valueType: 'Category' }  ;
    const primaryyAxis: AxisModel= {   title: 'Frequency', minimum: 0, maximum: 150,interval: 30 }  ;
    const tooltipsettings: TooltipSettingsModel={ enable: true };
    const marker={ visible: true, width: 10, height: 10};
    const paretoOptions: object = {
        marker: { visible: true, width: 10, height: 10 }, showAxis: false
      };
      const emptyPoint: object = { mode: 'Gap' };
        return <ChartComponent id='charts'
                primaryXAxis={ primaryxAxis }
                primaryYAxis={ primaryyAxis }
                tooltip={ tooltipsettings }
                title='Defect vs Frequency'>
                    <Inject services={[ColumnSeries, LineSeries, ParetoSeries, Legend, Tooltip, Category, DataLabel]} />
                    <SeriesCollectionDirective>
                    <SeriesDirective dataSource={chartData}  xName='x' yName='y' name='Defect' type='Pareto'
                        marker={ marker } paretoOptions={paretoOptions} emptyPointSettings={emptyPoint}>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
              </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
