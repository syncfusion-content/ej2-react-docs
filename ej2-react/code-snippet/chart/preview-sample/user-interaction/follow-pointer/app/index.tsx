{% raw %}

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend } from '@syncfusion/ej2-react-charts';
import { vietnamData, franceData, mexicoData } from './datasource';

function App() {
  return (
    <ChartComponent id="charts" primaryXAxis={{ valueType: 'Category' }} legendSettings={{ visible: true }} primaryYAxis={{ title: 'Value' }} tooltip={{ enable: true, followPointer: true }}>
      <Inject services={[ColumnSeries, Category, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={vietnamData} xName="x" yName="y" name="Vietnam" type="Column" marker={{ visible: true }} />
        <SeriesDirective dataSource={franceData} xName="x" yName="y" name="France" type="Column" marker={{ visible: true }} />
        <SeriesDirective dataSource={mexicoData} xName="x" yName="y" name="Mexico" type="Column" marker={{ visible: true }} />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
