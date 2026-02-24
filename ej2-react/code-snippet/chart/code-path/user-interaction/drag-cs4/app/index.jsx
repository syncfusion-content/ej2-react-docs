{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, Selection, ScatterSeries } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
    return (<ChartComponent id='charts' primaryXAxis={{ title: 'Height (cm)', minimum: 130, maximum: 180,
            edgeLabelPlacement: 'Shift', labelFormat: '{value}cm' }} primaryYAxis={{ title: 'Weight (kg)', minimum: 30, maximum: 100,
            labelFormat: '{value}kg', rangePadding: 'None' }} selectionMode='DragXY' title='Height Vs Weight'>
    <Inject services={[ScatterSeries, Legend, Tooltip, Selection]}/>
    <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='height' yName='male' name='Male' type='Scatter' marker={{ width: 12, height: 12 }}></SeriesDirective>
        <SeriesDirective dataSource={data} xName='height' yName='female' name='Female' type='Scatter' marker={{ width: 12, height: 12 }}></SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}