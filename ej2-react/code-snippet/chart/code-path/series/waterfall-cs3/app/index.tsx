{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ChartTheme,LegendSettingsModel,TooltipSettingsModel,
    Legend, Category, Tooltip, ColumnSeries, ILoadedEventArgs, DataLabel, HistogramSeries
} from '@syncfusion/ej2-react-charts';
import { points } from './datasource';

function App() {

    const chartData: Object[] = [];
    function chartLoad(): void {
      points.map((value: number) => {
        chartData.push({
            y: value
            });
        });
    }
    const primaryxAxis: AxisModel= {  majorGridLines: { width: 0 }, title: 'Score of Final Examination',  minimum: 0, maximum: 100 }  ;
    const primaryyAxis: AxisModel= {   title: 'Number of Students', minimum: 0, maximum: 50, interval: 10, majorTickLines: { width: 0 }, lineStyle: { width: 0 }}  ;
    const legendSettings: LegendSettingsModel= { visible: false };
    const tooltipsettings: TooltipSettingsModel={ enable: true };
    const marker={ dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } };

        chartLoad();
        return <ChartComponent id='charts'
                primaryXAxis={ primaryxAxis }
                primaryYAxis={ primaryyAxis }
                tooltip={ tooltipsettings }
                legendSettings={ legendSettings }
                title='Examination Results'>
                    <Inject services={[HistogramSeries, Legend, Tooltip, Category, DataLabel]} />
                    <SeriesCollectionDirective>
                    <SeriesDirective dataSource={chartData}  yName='y' name='Score' type='Histogram'
                        marker={ marker }
                        showNormalDistribution={true} columnWidth={0.99} binInterval={20}>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
              </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}