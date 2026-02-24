import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, PieSeries, AccumulationSeriesDirective, Inject, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
function App() {
    const datalabel = {
        visible: true, osition: 'Inside', maxWidth: 100, textWrap: 'Wrap',
        name: 'text', enableRotation: true
    };
    const data = [
        { x: 'Chrome', y: 100, text: 'Chrome (100M)<br>40%', tooltipMappingName: '40%' },
        { x: 'UC Browser', y: 40, text: 'UC Browser (40M)<br>16%', tooltipMappingName: '16%' },
        { x: 'Opera', y: 30, text: 'Opera (30M)<br>12%', tooltipMappingName: '12%' },
        { x: 'Safari', y: 30, text: 'Safari (30M)<br>12%', tooltipMappingName: '12%' },
        { x: 'Firefox', y: 25, text: 'Firefox (25M)<br>10%', tooltipMappingName: '10%' },
        { x: 'Others', y: 25, text: 'Others (25M)<br>10%', tooltipMappingName: '10%' }
    ];
    return <AccumulationChartComponent id='charts' enableSmartLabels='true'>
      <Inject services={[AccumulationDataLabel, PieSeries]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' startAngle={270} endAngle={90} dataLabel={datalabel} innerRadius='40%' radius='100%'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
