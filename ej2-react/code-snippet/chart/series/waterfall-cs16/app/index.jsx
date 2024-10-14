import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ParetoSeries, ColumnSeries, LineSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource';
function App() {
    const primaryxAxis = { title: 'Defects', valueType: 'Category' };
    const primaryyAxis = { title: 'Frequency', minimum: 0, maximum: 150, interval: 30 };
    const tooltipsettings = { enable: true };
    const marker = { visible: true, width: 10, height: 10 };
    const paretoOptions = {
      marker: { visible: true, width: 10, height: 10 }, showAxis: false
      }
      const pointRender = (args) => {
        if (args.point.index % 2 !== 0) {
          args.fill = '#ff6347';
      }
      else {
          args.fill = '#009cb8';
      }
      };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} tooltip={tooltipsettings} title='Defect vs Frequency' pointRender={pointRender}>
                    <Inject services={[ColumnSeries, LineSeries, ParetoSeries, Legend, Tooltip, Category, DataLabel]}/>
                    <SeriesCollectionDirective>
                    <SeriesDirective dataSource={chartData} xName='x' yName='y' name='Defect' type='Pareto' marker={marker} paretoOptions={paretoOptions}>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
              </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
