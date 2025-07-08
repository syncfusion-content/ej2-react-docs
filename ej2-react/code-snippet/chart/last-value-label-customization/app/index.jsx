import * as React from "react";
import * as ReactDOM from "react-dom";
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LastValueLabel, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryXAxis = { title: 'Year', interval: 1 };
        const primaryYAxis = { title: 'Efficiency', labelFormat: '{value}%' };
        const lastValueLabel = { enable: true, background: "blue", lineColor: "red", lineWidth: 2, dashArray: "5,5", rx: 10, ry: 10, border: { width: 2, color: "red" }, font: { color: "white", size: "12px", fontWeight: "bold" } };
        const tooltip = { enable: true };
        const title = 'Efficiency of oil-fired power production';
        const marker = { visible: false, dataLabel: { visible: true }};
        return <ChartComponent id='charts' title={title} width='90%' primaryXAxis={primaryXAxis} primaryYAxis={primaryYAxis} tooltip={tooltip}>
          <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LastValueLabel, Category]}/>
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={data} xName='x' yName='y' type='Column' name='series1' animation={{ enable: true }} 
              lastValueLabel={lastValueLabel} marker={marker}/>
          </SeriesCollectionDirective>
        </ChartComponent>;
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
