{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Category, Tooltip, Legend } from '@syncfusion/ej2-react-charts';
import { vietnamData, indonesiaData, franceData, polandData, mexicoData } from './datasource';

function App() {
  return (
    <ChartComponent id="charts" primaryXAxis={{ valueType: 'Category' }} legendSettings={{ visible: true }} primaryYAxis={{ title: 'Value' }} tooltip={{ enable: true, split: true }}>
      <Inject services={[LineSeries, Category, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={vietnamData} xName="x" yName="y" name="Vietnam" type="Line" marker={{ visible: true }} />
        <SeriesDirective dataSource={indonesiaData} xName="x" yName="y" name="Indonesia" type="Line" marker={{ visible: true }} />
        <SeriesDirective dataSource={franceData} xName="x" yName="y" name="France" type="Line" marker={{ visible: true }} />
        <SeriesDirective dataSource={polandData} xName="x" yName="y" name="Poland" type="Line" marker={{ visible: true }} />
        <SeriesDirective dataSource={mexicoData} xName="x" yName="y" name="Mexico" type="Line" marker={{ visible: true }} />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
