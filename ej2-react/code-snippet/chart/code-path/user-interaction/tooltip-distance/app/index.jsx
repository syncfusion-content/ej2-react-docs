{% raw %}

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend } from '@syncfusion/ej2-react-charts';
import { vietnamData, polandData } from './datasource';

function App() {
  return (
    <ChartComponent id="charts" primaryXAxis={{ valueType: 'Category' }} legendSettings={{ visible: true }} primaryYAxis={{ title: 'Value' }} tooltip={{ enable: true, distance: 20 }}>
      <Inject services={[ColumnSeries, Category, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={vietnamData} xName="x" yName="y" name="Vietnam" type="Column" marker={{ visible: true }} />
        <SeriesDirective dataSource={polandData} xName="x" yName="y" name="Poland" type="Column" marker={{ visible: true }} />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
