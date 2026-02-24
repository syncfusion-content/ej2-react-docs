import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { data1 } from 'datasource.ts';
function App() {
    const legendSettings = { height: '150', width: '80' };
    const datalabel = { visible: true,
        name: 'text',
        position: 'Inside',
        font: {
            fontWeight: '600',
            color: '#ffffff'
        }
    };
    const tooltip = { enable: false };
    return <AccumulationChartComponent id='charts' legendSettings={legendSettings} tooltip={tooltip} title='Project Cost Breakdown'>
      <Inject services={[AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' legendShape='Circle' dataLabel={datalabel} startAngle='0' endAngle='360' explode={true} explodeOffset='10%' explodeIndex={3} name='Project' radius='70%' innerRadius='40%'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
