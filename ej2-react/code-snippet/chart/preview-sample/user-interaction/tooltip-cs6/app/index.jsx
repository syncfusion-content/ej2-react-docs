import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, Tooltip, DataLabel, StepLineSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    const primaryxAxis = { valueType: 'DateTime' };
    const tooltip = {
        enable: true, format: '${series.name} ${point.x} : ${point.y}',
        fill: '#7bb4eb', border: {
            width: 2,
            color: 'grey'
        }
    };
    const marker = { visible: true, width: 10, height: 10 };
    const titlestyle = {
        fontFamily: "Arial", fontStyle: 'italic', fontWeight: 'regular',
        color: "#E27F2D", size: '23px'
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} tooltip={tooltip} title='Unemployment Rates 1975-2010' highlightColor='red' titleStyle={titlestyle}>
      <Inject services={[StepLineSeries, Legend, Tooltip, DataLabel, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' name='China' width={2} type='StepLine' marker={marker}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
