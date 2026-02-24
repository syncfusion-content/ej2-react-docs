import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StepAreaSeries } from '@syncfusion/ej2-react-charts';
import { data, data1 } from './datasource';
function App() {
    const legendRender = (args) => {
        if (args.text === 'Renewable') {
            args.shape = 'Circle';
        }
        else if (args.text === 'Non-Renewable') {
            args.shape = 'Triangle';
        }
    };
    const primaryxAxis = { valueType: 'Double' };
    const primaryyAxis = { valueType: 'Double' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='FB Penetration of Internet Audience' legendRender={legendRender}>
      <Inject services={[StepAreaSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} type='StepArea' xName='x' yName='y' width={2} name='Renewable'>
        </SeriesDirective>
        <SeriesDirective dataSource={data1} type='StepArea' xName='x' yName='y' width={2} name='Non-Renewable'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
