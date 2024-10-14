


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ChartTheme,LegendSettingsModel,TooltipSettingsModel,ParetoSeries,ColumnSeries,LineSeries,
    Legend, Category, Tooltip, ILoadedEventArgs, DataLabel, ISeriesRenderEventArgs
} from '@syncfusion/ej2-react-charts';
import { EmitType } from '@syncfusion/ej2-base';
import { chartData } from './datasource';

function App() {
    const primaryxAxis: AxisModel= {  title: 'Defects', valueType: 'Category' }  ;
    const primaryyAxis: AxisModel= {   title: 'Frequency', minimum: 0, maximum: 150,interval: 30 }  ;
    const tooltipsettings: TooltipSettingsModel={ enable: true };
    const marker={ visible: true, width: 10, height: 10};
    const paretoOptions: object = {
        marker: { visible: true, width: 10, height: 10 }, showAxis: false
      };
      const seriesRender: EmitType<ISeriesRenderEventArgs> = (args: ISeriesRenderEventArgs): void => {
        args.fill = '#ff6347';
      };
        return <ChartComponent id='charts'
                primaryXAxis={ primaryxAxis }
                primaryYAxis={ primaryyAxis }
                tooltip={ tooltipsettings }
                title='Defect vs Frequency' seriesRender={seriesRender}>
                    <Inject services={[ColumnSeries, LineSeries, ParetoSeries, Legend, Tooltip, Category, DataLabel]} />
                    <SeriesCollectionDirective>
                    <SeriesDirective dataSource={chartData}  xName='x' yName='y' name='Defect' type='Pareto'
                        marker={ marker } paretoOptions={paretoOptions}>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
              </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


